package com.ntl.movieapp.login.movies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ntl.movieapp.login.movies.model.ProfileBean;
import com.ntl.movieapp.login.movies.service.ProfileService;


@RestController
public class ProfileController {
	
	@Autowired
	ProfileService profileService;

	public ProfileController() {
		super();
	}
	
	public ProfileController(ProfileService profileService) {
		this.profileService=profileService;
	}
	
	
	@PostMapping("/register")
	public ProfileBean register(@RequestBody ProfileBean profileBean) {
		return profileService.register(profileBean);
	}
	
	@GetMapping("/user/age/{userid}")
	public ProfileBean findAge(@PathVariable("userid") String userid) {
	
		return profileService.findAge(userid);
	}
	

}
