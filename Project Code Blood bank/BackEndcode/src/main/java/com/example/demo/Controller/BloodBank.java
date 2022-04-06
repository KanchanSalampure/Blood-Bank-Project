package com.example.demo.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodbank")
public class BloodBank {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int BloodBank_ID;
	@Column
	private String Name;
	@Column
	private String Address;
	@Column
	private String Contact_No;
	@Column
	private String Email;
	public BloodBank() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BloodBank(String name, String address, String contact_No, String email) {
		super();

		Name = name;
		Address = address;
		Contact_No = contact_No;
		Email = email;
	}
	public int getBloodBank_ID() {
		return BloodBank_ID;
	}
	public void setBloodBank_ID(int bloodBank_ID) {
		BloodBank_ID = bloodBank_ID;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getContact_No() {
		return Contact_No;
	}
	public void setContact_No(String contact_No) {
		Contact_No = contact_No;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	@Override
	public String toString() {
		return "BloodBank [BloodBank_ID=" + BloodBank_ID + ", Name=" + Name + ", Address=" + Address + ", Contact_No="
				+ Contact_No + ", Email=" + Email + "]";
	}
	
	
}
