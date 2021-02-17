package soulradio.soulradio.Controller;

import com.wrapper.spotify.model_objects.specification.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import soulradio.soulradio.Classes.Version;
import soulradio.soulradio.Client.SpotifyClient;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpotifyController {
    Version choice = new Version("production");
    User user;

    @Autowired
    SpotifyClient spotifyClient;

    @GetMapping("/login")
    public RedirectView login(@RequestParam String version) {
        choice.setAppVersion(version);
        System.out.println(choice.getAppVersion());
        return new RedirectView(spotifyClient.userLogin());
    }

    @GetMapping("/callback")
    @ResponseBody
    public RedirectView getCode(@RequestParam String code) {
       return new RedirectView(spotifyClient.setAuthorizationCode(code, choice.getAppVersion()));
    }

}