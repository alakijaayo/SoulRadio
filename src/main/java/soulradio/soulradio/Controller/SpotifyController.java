package soulradio.soulradio.Controller;

import java.io.IOException;
import java.util.Base64;

import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import com.wrapper.spotify.model_objects.specification.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.hc.core5.http.ParseException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import soulradio.soulradio.Classes.Version;
import soulradio.soulradio.Client.LoginClient;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpotifyController {
    Version choice = new Version("production");
    User user;

    @Autowired
    LoginClient loginClient;

    @GetMapping("/login")
    public RedirectView login(@RequestParam String version) {
        choice.setAppVersion(version);
        return new RedirectView(loginClient.userLogin());
    }

    @GetMapping("/callback")
    @ResponseBody
    public RedirectView getCode(@RequestParam String code) {
        try {
            AuthorizationCodeCredentials credentials = loginClient.api().authorizationCode(code).build().execute();
            String accessToken = credentials.getAccessToken();
            loginClient.api().setAccessToken(accessToken);
            loginClient.api().setRefreshToken(credentials.getRefreshToken());
            user = loginClient.api().getCurrentUsersProfile().build().execute();
            System.out.println("AccessToken received: " + accessToken);
            System.out.println("Expires in: " + credentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        String application = choice.getAppVersion();
        String encode = "userLoggedIn=true/" + user.getDisplayName();
        String encodedString = Base64.getEncoder().encodeToString(encode.getBytes());
        String host = application.equals("production") ? "https://soulradio.herokuapp.com/" + encodedString : "http://localhost:3000/" + encodedString;
       return new RedirectView(host);
    }

}