package com.ntl.movieapp.login.movies.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;


@Service
public class CredentialsService {
	
	@Autowired
	CredentialsDao credDao;
	
	CredentialsBean credentialsBean=new CredentialsBean();
	
	
	public CredentialsService() {
		super();
		
	}


	public CredentialsService(CredentialsDao credDao) {
		this.credDao=credDao;
	}
	
	
	
	
	public boolean authenticateUserId(CredentialsBean credential) {
		Optional<CredentialsBean> cb = credDao.findById(credential.getUserID());
		if(cb.isPresent()) {
			credentialsBean = cb.get();
			if(credentialsBean.getPassword().equals(credential.getPassword()))
				return true;
		}
		return false;
 }
	
	public boolean authenticateEmail(CredentialsBean credential) {
		credentialsBean = credDao.findByEmailID(credential.getEmailID());
		if(credentialsBean.getPassword().equals(credential.getPassword())) {
			return true;
		}
		else 
			return false;
		
	}
	
	public boolean authenticatePhone(CredentialsBean credential) {
		credentialsBean = credDao.findByMobileNo(credential.getMobileNo());
		if (credentialsBean.getPassword().equals(credential.getPassword()))
			return true;
		else 
			return false;
	}


	public boolean changeLoginStatus(CredentialsBean credential, int loginStatus) {
		CredentialsBean credentials=new CredentialsBean();
		credentials=credDao.getOne(credential.getUserID());
		if(credentials.getLoginStatus()==credential.getLoginStatus()) {
			credentials.setLoginStatus(loginStatus);
			credDao.deleteById(credential.getUserID());
			credDao.save(credentials);
			return true;
		}
		else
			return false;

	}


	public CredentialsBean loginUserid(CredentialsBean credential) {
		
		boolean result=	authenticateUserId(credential);
		if(result) {
			changeLoginStatus(credential, 1);
			return credentialsBean;
		}else {
			return new CredentialsBean();
		}
	}
	
	
	public CredentialsBean loginEmail(CredentialsBean credential) {
		boolean result=	authenticateEmail(credential);
		if(result) {
			CredentialsBean cb = credDao.findByEmailID(credential.getEmailID());
			changeLoginStatus(cb, 1);
			cb.setPassword(null);
			return cb;
		  }
		else {
			return new CredentialsBean();
		}
					
	}
	
	
	public CredentialsBean loginPhone(CredentialsBean credential) {
		boolean result=	authenticatePhone(credential);
		if(result) {
		  CredentialsBean cb = credDao.findByMobileNo(credential.getMobileNo());
		  changeLoginStatus(cb, 1);
		  cb.setPassword(null);
		  return cb;
		}
		else {
			return new CredentialsBean();
		}
	}
	
	
	
	public CredentialsBean forgotPassword(CredentialsBean credentials) {
		credentialsBean = credDao.getOne(credentials.getUserID());
		if(credentialsBean.getAuthQuestion().equals(credentials.getAuthQuestion()) && credentialsBean.getAuthAnswer().equals(credentials.getAuthAnswer())) {
			credentialsBean.setPassword(credentials.getPassword());
			credDao.saveAndFlush(credentialsBean);
			credentialsBean.setPassword(null);
			credentialsBean.setAuthQuestion(null);
			credentialsBean.setAuthAnswer(null);
			return credentialsBean;
		}
		else
			return null;
		
		}


	public boolean logout(String userId) {
		CredentialsBean credentials =credDao.getOne(userId);
		boolean stat=changeLoginStatus(credentials, 0);
			if(stat) 
				return true;
			else
				return false;
		}
	}
