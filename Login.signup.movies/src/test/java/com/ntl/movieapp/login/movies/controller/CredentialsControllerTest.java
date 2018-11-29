package com.ntl.movieapp.login.movies.controller;

import static org.junit.Assert.*;

import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.service.CredentialsService;

@RunWith(MockitoJUnitRunner.class)
public class CredentialsControllerTest {

	CredentialsBean cred=new CredentialsBean();
CredentialsBean credentials=new CredentialsBean("Rashi","Rashi@123",1, "rasi16@gmail.com","73645726456");
//CredentialsBean cren=new CredentialsBean(null,null,null);

String userId="";
@Mock
CredentialsService serve;

CredentialsController credentialsController=new  CredentialsController();
//CredentialsController credentialsController1=new  CredentialsController();

	@Test
	public void testLoginUserId() {
		when(serve.loginUserid(credentials)).thenReturn(credentials);
		CredentialsController creden=new CredentialsController(serve);
		cred=creden.loginUserid(credentials);
		assertEquals(credentials,cred);
		
		
	}
	
	@Test
	public void testLoginEmail() {
		when(serve.loginEmail(credentials)).thenReturn(credentials);
		CredentialsController creden=new CredentialsController(serve);
		cred=creden.loginEmail(credentials);
		assertEquals(credentials,cred);
		
	}
	
	@Test
	public void testLoginPhone() {
		when(serve.loginPhone(credentials)).thenReturn(credentials);
		CredentialsController creden=new CredentialsController(serve);
		cred=creden.loginPhone(credentials);
		assertEquals(credentials,cred);
		
	}

	@Test
	public void testLogout() {
		when(serve.logout(userId)).thenReturn(true);
		CredentialsController creden=new CredentialsController(serve);
		boolean result=creden.logout(userId);
		boolean result2=creden.logout("121");
		assertEquals(result,true);	
		assertEquals(false,result2);
		//fail("Not yet implemented");
	}

	@Test
	public void testForgotPassword() {
		when(serve.forgotPassword(credentials)).thenReturn(credentials);
		CredentialsController creden=new CredentialsController(serve);
		cred=creden.forgotPassword(credentials);
		assertEquals(credentials,cred);
		//fail("Not yet implemented");
	}

}
