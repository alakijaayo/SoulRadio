package soulradio.soulradio.Controller;

import java.io.IOException;

import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.AuthorizationCodeCredentials;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.hc.core5.http.ParseException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import soulradio.soulradio.Client.LoginClient;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpotifyController {
    String appVersion;
    
    @Autowired
    LoginClient loginClient;
     
    @GetMapping("/login")
    public RedirectView login(@RequestParam String version) {
        appVersion = version;
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
            System.out.println("AccessToken received: " + accessToken);
            System.out.println("Expires in: " + credentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        String page = appVersion == "production" ? "https://soulradio.herokuapp.com/?userLoggedIn=true" : "http://localhost:3000/userLoggedIn=true";
       return new RedirectView(page);
    }

}