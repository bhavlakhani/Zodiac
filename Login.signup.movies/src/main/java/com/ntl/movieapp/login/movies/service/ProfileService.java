package com.ntl.movieapp.login.movies.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.dao.ProfileDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.model.ProfileBean;




@Service
public class ProfileService {


	@Autowired
	ProfileDao profileDao;
	
	@Autowired
	CredentialsDao credDao;
	
	public ProfileService(ProfileDao profileDao, CredentialsDao credDao) {
		super();
		this.profileDao=profileDao;
		this.credDao=credDao;
	}
	
	
	public ProfileService(ProfileDao profileDao) {
		super();
		this.profileDao = profileDao;
	}


	public ProfileBean register(ProfileBean profileBean) {
		CredentialsBean credentialsBean=new CredentialsBean();

		String charf = profileBean.getFirstName().substring(0,2);
		Double ranNum = Math.random()*10000;
		int id= (int) Math.round(ranNum);
		String uniqueId=charf+id;
		profileBean.setUserId(uniqueId);
		LocalDate today=LocalDate.now();
		Period period=Period.between(profileBean.getDateOfBirth(), today);
		int age = period.getYears();
		profileBean.setAge(age);
		credentialsBean.setEmailID(profileBean.getEmailID());
		credentialsBean.setMobileNo(profileBean.getMobileNo());
		credentialsBean.setUserID(profileBean.getUserId());
		credentialsBean.setLoginStatus(0);
		credentialsBean.setPassword(profileBean.getPassword());
		credentialsBean.setAuthQuestion(profileBean.getAuthQuestion());
		credentialsBean.setAuthAnswer(profileBean.getAuthAnswer());
		credentialsBean.setUserType("User");
		credDao.save(credentialsBean);
		profileDao.save(profileBean);
		return profileBean;
	}
	
	public ProfileBean findAge(String userId) {
	
		 Optional<ProfileBean> pb = profileDao.findById(userId);
		 if(pb.isPresent()) {
			 return pb.get();
		 }
		 return null;
	}
	

}
