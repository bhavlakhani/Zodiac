package com.ntl.movieapp.login.movies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.service.CredentialsService;




@RestController
public class CredentialsController {
	
	@Autowired
	CredentialsService credService;
	
	
	public CredentialsController() {
		super();
	}

	public CredentialsController(CredentialsService credService) {
		this.credService=credService;
	}
	

	@PostMapping("/login/userid")
	public CredentialsBean loginUserid(@RequestBody CredentialsBean credentialsBean) {
		
			return credService.loginUserid(credentialsBean);
		
	}
	
	@PostMapping("/login/email")
	public CredentialsBean loginEmail(@RequestBody CredentialsBean credentialsBean) {
		    System.out.println(credentialsBean.getEmailID() + " " + credentialsBean.getPassword());
			return credService.loginEmail(credentialsBean);
		
	}
	
	
	@PostMapping("/login/phone")
	public CredentialsBean loginPhone(@RequestBody CredentialsBean credentialsBean) {
		
			return credService.loginPhone(credentialsBean);
		
	}
	
	@GetMapping("/{userId}")
	public boolean logout(@PathVariable String userId) {
		return credService.logout(userId);
	}
	
	@PostMapping("/forgotPassword")
	public CredentialsBean forgotPassword(@RequestBody CredentialsBean credentialsBean) {
		
		return credService.forgotPassword(credentialsBean);
		
	
		}
	
	
	

}
