package soulradio.soulradio.Client;

import java.net.URI;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import com.wrapper.spotify.SpotifyHttpManager;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.RedirectView;


@Component
public class LoginClient {

    private final URI redirectUri = SpotifyHttpManager.makeUri("http://localhost:8080/callback");

    private final SpotifyApi spotifyAPI = new SpotifyApi.Builder()
        .setClientId("c87dfb42b9b643ee9dfb14cc00d2d0aa")
        .setClientSecret("f5b7b68cdd304dae8a1344c2bee487c9")
        .setRedirectUri(redirectUri)
        .build();
    
    private final AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyAPI.authorizationCodeUri()
        .state("gho4rfjl34brfhtlgerbj")
        .scope("user-read-private user-read-email user-read-playback-state streaming")
        .show_dialog(true)
        .build();

    public RedirectView userLogin() {
        return new RedirectView(authorizationCodeUriRequest.execute().toString());
    }

}