package soulradio.soulradio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import soulradio.soulradio.Client.LoginClient;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpotifyController {
    
    @Autowired
    LoginClient loginClient;
     
    @GetMapping("/login")
    public RedirectView login() {
        return loginClient.userLogin();
    }
}