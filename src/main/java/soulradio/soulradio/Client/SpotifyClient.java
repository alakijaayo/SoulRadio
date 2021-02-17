package soulradio.soulradio.Client;

import java.io.IOException;
import java.net.URI;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import com.wrapper.spotify.SpotifyHttpManager;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import com.wrapper.spotify.model_objects.specification.User;
import java.util.Base64;

import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Component;

@Component
public class SpotifyClient {
    User user;
    
    private final URI redirectUri = SpotifyHttpManager.makeUri("https://soulradio.herokuapp.com/callback");

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

    public String userLogin() {
        return authorizationCodeUriRequest.execute().toString();
    }

    public String setAuthorizationCode (String code, String appVersion) {
        try {
            AuthorizationCodeCredentials credentials = spotifyAPI.authorizationCode(code).build().execute();
            String accessToken = credentials.getAccessToken();
            spotifyAPI.setAccessToken(accessToken);
            spotifyAPI.setRefreshToken(credentials.getRefreshToken());
            user = spotifyAPI.getCurrentUsersProfile().build().execute();
            System.out.println("AccessToken received: " + accessToken);
            System.out.println("Expires in: " + credentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        String encode = "userLoggedIn=true/" + user.getDisplayName();
        String encodedString = Base64.getEncoder().encodeToString(encode.getBytes()); 
        String host = appVersion.equals("production") ? "https://soulradio.herokuapp.com/?" + encodedString : "http://localhost:3000/?" + encodedString;
        return host;
    }

}
