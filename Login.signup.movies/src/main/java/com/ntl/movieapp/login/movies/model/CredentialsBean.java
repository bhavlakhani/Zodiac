/**
 * 
 * 
 * 
 * 
 */

package com.ntl.movieapp.login.movies.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="user_credentials")
public class CredentialsBean {
	
	@Id
	@Column(name="userid")
	private String userID;
	@Column(name="password")
	private String password;
	@Column(name="loginstatus")
	private int loginStatus;
	@Column(name="authQuestion")
	private String authQuestion;
	@Column(name="authAnswer")
	private String authAnswer;
	@Column(name="userType")
	private String userType;
	@Column(name="EmailID")
	private String emailID; 
	@Column(name="MobileNo")
	private String mobileNo;
	
	
	public String getEmailID() {
		return emailID;
	}



	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}



	public String getMobileNo() {
		return mobileNo;
	}



	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}



	public CredentialsBean() {
		super();
	}



	/**
	 * @param userID
	 * @param password
	 * @param loginStatus
	 */
	public CredentialsBean(String userID, String password, int loginStatus) {
		super();
		this.userID = userID;
		this.password = password;
		this.loginStatus = loginStatus;
	}

	
	public CredentialsBean(String userID, String password, int loginStatus, String emailID, String mobileNo) {
		super();
		this.userID = userID;
		this.password = password;
		this.loginStatus = loginStatus;
		this.emailID = emailID;
		this.mobileNo = mobileNo;
	}



	public String getAuthQuestion() {
		return authQuestion;
	}



	public void setAuthQuestion(String authQuestion) {
		this.authQuestion = authQuestion;
	}



	public String getAuthAnswer() {
		return authAnswer;
	}



	public void setAuthAnswer(String authAnswer) {
		this.authAnswer = authAnswer;
	}



	

	public String getUserType() {
		return userType;
	}



	public void setUserType(String userType) {
		this.userType = userType;
	}



	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public int getLoginStatus() {
		return loginStatus;
	}


	public void setLoginStatus(int loginStatus) {
		this.loginStatus = loginStatus;
	}
	
	
}
