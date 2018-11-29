package com.ntl.movieapp.login.movies.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import static org.mockito.Mockito.when;

import java.util.Optional;

import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;
@RunWith(MockitoJUnitRunner.class)
public class CredentialsServiceTest {
	@Mock
	CredentialsDao credDao;
	CredentialsBean credentials=new CredentialsBean("","",0,"","");
	CredentialsBean credentialsBean=new CredentialsBean("Ra3456","Rashi@123",1, "rasi16@gmail.com","73645726456");
	
	
	CredentialsService creialsSer=new CredentialsService();
	CredentialsService creialsservice=new CredentialsService(credDao);

	@Test
	public void testAuthenticateUserId() {
		when(credDao.findById("Ra3456")).thenReturn(Optional.of(credentialsBean));
		CredentialsService serve=new CredentialsService(credDao);
		boolean result = serve.authenticateUserId(credentialsBean);
		assertEquals(true,result);
		
		CredentialsBean credentialsBean2=new CredentialsBean("Rashi","Rashi@123",1, "rasi161@gmail.com","7364577845");
		boolean result2 =serve.authenticateUserId(credentialsBean2);
		assertEquals(false,result2);
		
		//fail("Not yet implemented");
	}
	
	@Test
	public void testAuthenticatePhone() {
		when(credDao.findByMobileNo("7364572645")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		boolean result = serve.authenticatePhone(credentialsBean);
		assertEquals(true,result);
		
		CredentialsBean credentialsBean2=new CredentialsBean("Rashi","Rashi@123",1, "rasi16@gmail.com","7364572645");
		boolean result2 =serve.authenticatePhone(credentialsBean2);
		assertEquals(false,result2);
		
		//fail("Not yet implemented");
	}
	
	
	@Test
	public void testAuthenticateEmail() {
		when(credDao.findByEmailID("rasi16@gmail.com")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		boolean result = serve.authenticateEmail(credentialsBean);
		assertEquals(true,result);
		
		CredentialsBean credentialsBean2=new CredentialsBean("Rashi","Rashi@123",1, "rasi16@gmail.com","73645726456");
		boolean result2 =serve.authenticateEmail(credentialsBean2);
		assertEquals(true,result2);
		
		//fail("Not yet implemented");
	}

	@Test
	public void testChangeLoginStatus() {
		when(credDao.getOne("Ra3456")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		boolean result = serve.changeLoginStatus(credentialsBean,0);
		assertEquals(true,result);
		
		CredentialsBean credentialsBean2=new CredentialsBean("Rashi","Rashi@123",1, "rasi16@gmail.com","73645726456");
		boolean result2 = serve.changeLoginStatus(credentialsBean2,1);
		assertEquals(false,result2);
		//fail("Not yet implemented");
	}

	@Test
	public void testLoginUserId() {
		CredentialsBean cred=new CredentialsBean();
		when(credDao.getOne("Ra3456")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		 cred = serve.loginUserid(credentialsBean);
		assertEquals(cred.getUserID(),credentialsBean.getUserID());
	}
	
	@Test
	public void testLoginEmail() {
		when(credDao.findByEmailID("rasi16@gmail.com")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		CredentialsBean cred = serve.loginEmail(credentialsBean);
		assertEquals(cred,credentialsBean);
	}
	
	
	@Test
	public void testLoginPhone() {
		when(credDao.findByMobileNo("7364572645")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		CredentialsBean cred = serve.loginPhone(credentialsBean);
		assertEquals(cred,credentialsBean);
	}
	
	
	@Test
	public void testForgotPassword() {
		credentialsBean.setAuthAnswer("");
		credentialsBean.setAuthQuestion("");
		when(credDao.getOne("Ra3456")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		CredentialsBean cred = serve.forgotPassword(credentialsBean);
		assertEquals(cred,credentialsBean);
		
//		CredentialsBean credentialsBean2=new CredentialsBean("bhuvan22","Nangal@1",0);
//		credentialsBean2.setAuthAnswer("Who is this");
//		credentialsBean2.setAuthQuestion("What is this");
//
//	CredentialsBean cred2 = serve.forgotPassword(credentialsBean2);
//	assertNull(cred2);
		//fail("Not yet implemented");
	}

	@Test
	public void testLogout() {
		when(credDao.getOne("Ra3456")).thenReturn(credentialsBean);
		CredentialsService serve=new CredentialsService(credDao);
		boolean result=serve.logout("Ra3456");
		assertEquals(true,result);
		
	}
	
	

}
