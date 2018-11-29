/**
 * 
 * 
 * 
 * 
 */

package com.ntl.movieapp.login.movies.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="user_Profile")
public class ProfileBean {
	
	
	
	@Id
	@Column(name="USERID")
	private String userId;
	@Column(name="FIRSTNAME")
	private String firstName;
	@Column(name="LASTNAME")
	private String lastName;
	@Column(name="DateofBirth")
	private LocalDate dateOfBirth;
	@Column(name="GENDER")
	private String gender;
	@Column(name="Age")
	private int age;
	@Column(name="STATE")
	private String state;
	@Column(name="PINCODE")
	private String pincode;
	@Transient
	private String mobileNo;
	@Transient
	private String emailID;
	@Transient
	private String password;
	@Transient
	private String authQuestion;
	@Transient
	private String authAnswer;
	
	
	public ProfileBean(String firstName, LocalDate dateOfBirth, int age, String emailID, String password) {
		super();
		this.firstName = firstName;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.emailID = emailID;
		this.password = password;
	}


	/**
	 * 
	 */
	public ProfileBean() {
		super();
		
	}
	
	
	/**
	 * @param userId
	 * @param firstName
	 * @param lastName
	 * @param mobileNo
	 * @param emailID
	 * @param password
	 */
	public ProfileBean(String userId, String firstName, String lastName,  String mobileNo, String emailID, String password) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.emailID = emailID;
		this.password = password;
	}


	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getEmailID() {
		return emailID;
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

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}
