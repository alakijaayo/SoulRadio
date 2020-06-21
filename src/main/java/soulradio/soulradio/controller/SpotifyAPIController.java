package soulradio.soulradio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpotifyAPIController {

    @GetMapping("/api/greeting")
    public String test() {
        return "hello";
    }
}