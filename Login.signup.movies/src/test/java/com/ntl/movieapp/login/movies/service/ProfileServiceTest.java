package com.ntl.movieapp.login.movies.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ntl.movieapp.login.movies.controller.ProfileController;
import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.dao.ProfileDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.model.ProfileBean;

@RunWith(MockitoJUnitRunner.class)
public class ProfileServiceTest {
	@Mock
	ProfileDao profileDao;
	@Mock
	CredentialsDao credDao;
	
	CredentialsBean credentialsBean=new CredentialsBean("n223","yougal@1",0,"div@gmail.com", "6753567834");
	ProfileBean profile=new ProfileBean("rutyu",LocalDate.parse("1998-03-12"),20,"rsh23@gmail.com","6753567834");
	//ProfileService  profileController=new ProfileService(profileDao);
	ProfileService  profileController1=new ProfileService(profileDao,credDao);

	@Test
	public void testRegister() {
		
		profile.setAuthAnswer("");
		profile.setAuthQuestion("");
		profile.setPassword("");
		Mockito.lenient().when(credDao.save(credentialsBean)).thenReturn(credentialsBean);
		Mockito.lenient().when(profileDao.save(profile)).thenReturn(profile);
		ProfileService serve=new ProfileService(profileDao,credDao);
		ProfileBean prof = serve.register(profile);

		assertEquals(prof,profile);
		
	}
	
	@Test
	public void testFindAge() {
		when(profileDao.findById(credentialsBean.getUserID())).thenReturn(Optional.of(profile));
		ProfileService serve=new ProfileService(profileDao);
		ProfileBean bean=serve.findAge(credentialsBean.getUserID());
		assertEquals(profile.getFirstName(), bean.getFirstName());
	}

}
