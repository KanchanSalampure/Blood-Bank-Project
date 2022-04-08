package com.example.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int user_ID;
	@Column
	 private String user_name;
	@Column
	 private String password;
	@Column 
	private String user_type;
	@Column 
	private String first_name;
	@Column 
	private String last_name;
	@Column 
	private String gender;
	@Column 
	private String dob;
	@Column
	private String blood_type;
	@Column 
	private String email_ID;
	@Column
	private String address;
	@Column
	private String contact_no;
	
	@JsonIgnoreProperties("user")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="BBankid")
	
	private BloodBank bbank_id;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String user_name, String password, String user_type, String first_name, String last_name, String gender,
			String dob, String blood_type, String email_ID, String address, String contact_no, BloodBank bbank_id) {
		super();
		this.user_name = user_name;
		this.password = password;
		this.user_type = user_type;
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.dob = dob;
		this.blood_type = blood_type;
		this.email_ID = email_ID;
		this.address = address;
		this.contact_no = contact_no;
		this.bbank_id = bbank_id;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}


	public BloodBank getBbank_id() {
		return bbank_id;
	}

	public void setBbank_id(BloodBank bbank_id) {
		this.bbank_id = bbank_id;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getUser_ID() {
		return user_ID;
	}
	public void setUser_ID(int user_ID) {
		this.user_ID = user_ID;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getBlood_type() {
		return blood_type;
	}
	public void setBlood_type(String blood_type) {
		this.blood_type = blood_type;
	}
	public String getEmail_ID() {
		return email_ID;
	}
	public void setEmail_ID(String email_ID) {
		this.email_ID = email_ID;
	}
	
	
	
	 
}
