package com.example.demo.entity;


import java.util.List;

import javax.persistence.CascadeType;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class BloodBank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bloodbank_id;
	@Column
    private String name;
	@Column
    private String address;
     @Column
	private String contact_no;
    @Column
     private String email;
    
   
    @JsonIgnoreProperties("bank")
    @OneToMany(mappedBy = "bank",cascade = CascadeType.ALL)
    private List<BloodBank_Inv> inventry;


public BloodBank() {
	super();
	// TODO Auto-generated constructor stub
}





public List<BloodBank_Inv> getInventry() {
	return inventry;
}





public void setInventry(List<BloodBank_Inv> inventry) {
	this.inventry = inventry;
}





public BloodBank(String name, String address, String contact_no, String email,List<BloodBank_Inv> inventry) {
	super();
	this.name = name;
	this.address = address;
	this.contact_no = contact_no;
	this.email = email;
	
	this.inventry = inventry;
}





public int getBloodbank_id() {
	return bloodbank_id;
}


public void setBloodbank_id(int bloodbank_id) {
	this.bloodbank_id = bloodbank_id;
}


public String getName() {
	return name;
}


public void setName(String name) {
	this.name = name;
}


public String getAddress() {
	return address;
}


public void setAddress(String address) {
	this.address = address;
}


public String getContact_no() {
	return contact_no;
}


public void setContact_no(String contact_no) {
	this.contact_no = contact_no;
}


public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}





	

}