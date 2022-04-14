package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="BloodInventry")
public class BloodBank_Inv {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	 private int inventry_id;
	
	@Column
	private int quantity_bag;
	
	@JsonIgnoreProperties("inventry")
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="bank_id")
	private BloodBank bank;
	
    @Column 
	private String date;
	
    @JsonIgnoreProperties("inv")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="camp_id")
	 private Camps campid;
	
	 @Column
	 private String type;
	 
	
	public BloodBank_Inv() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BloodBank_Inv(int quantity_bag, BloodBank bank, String date, Camps campid, String type) {
		super();
		this.quantity_bag = quantity_bag;
		this.bank = bank;
		this.date = date;
		this.campid = campid;
		this.type = type;
	
	}

	public int getInventry_id() {
		return inventry_id;
	}

	public void setInventry_id(int inventry_id) {
		this.inventry_id = inventry_id;
	}

	public int getQuantity_bag() {
		return quantity_bag;
	}

	public void setQuantity_bag(int quantity_bag) {
		this.quantity_bag = quantity_bag;
	}

	public BloodBank getBank() {
		return bank;
	}

	public void setBank(BloodBank bank) {
		this.bank = bank;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Camps getCampid() {
		return campid;
	}

	public void setCampid(Camps campid) {
		this.campid = campid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	

	

}
