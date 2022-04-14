package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Camps {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int camp_id;
	@Column
	private String name;
	@Column
	private String organization;
	@Column
	private String date;
	@Column
	private String time;
	@Column
	private String desciprtion;
	@Column
	private String address;
	@JsonIgnoreProperties("campid")
	@OneToMany(mappedBy = "campid",cascade = CascadeType.ALL)
	private List<BloodBank_Inv> inv;
	
	
	
	public Camps() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	




	public Camps(String name, String organization, String date, String time, String desciprtion, String address,
			List<BloodBank_Inv> inv) {
		super();
		this.name = name;
		this.organization = organization;
		this.date = date;
		this.time = time;
		this.desciprtion = desciprtion;
		this.address = address;
		this.inv = inv;
		
	}






	public int getCamp_id() {
		return camp_id;
	}
	public void setCamp_id(int camp_id) {
		this.camp_id = camp_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOrganization() {
		return organization;
	}
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDesciprtion() {
		return desciprtion;
	}
	public void setDesciprtion(String desciprtion) {
		this.desciprtion = desciprtion;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public List<BloodBank_Inv> getInv() {
		return inv;
	}
    public void setInv(List<BloodBank_Inv> inv) {
		this.inv = inv;
	}






	

}
