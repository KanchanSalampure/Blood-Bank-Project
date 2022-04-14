package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class BlooodRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bloodRequset;
	public int getBloodRequset() {
		return bloodRequset;
	}
	public void setBloodRequset(int bloodRequset) {
		this.bloodRequset = bloodRequset;
	}
	@Column
	private String type;
	@Column
	private String name;
	@Column
	private String address;
	@Column
	private String contact_no;
	@Column
	private String email;
	@Column
	private int quantity_bag;
	public BlooodRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BlooodRequest(String type, String name, String address, String contact_no, String email, int quantity_bag) {
		super();
		this.type = type;
		this.name = name;
		this.address = address;
		this.contact_no = contact_no;
		this.email = email;
		this.quantity_bag = quantity_bag;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public int getQuantity_bag() {
		return quantity_bag;
	}
	public void setQuantity_bag(int quantity_bag) {
		this.quantity_bag = quantity_bag;
	}

	
	
	

}
