package com.example.demo.entity;

import java.sql.Blob;
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

@Entity
public class Donor {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int donation_id;
    @Column
	private int donor_id;
	@Column
	private String date;
	@Column
	private int quantity_bag;
	
	 
	public Donor(int donor_id, String date, int quantity_bag) {
		super();
		this.donor_id = donor_id;
		this.date = date;
		this.quantity_bag = quantity_bag;
		
	}
	public int getDonation_id() {
		return donation_id;
	}
	public void setDonation_id(int donation_id) {
		this.donation_id = donation_id;
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getDonor_id() {
		return donor_id;
	}
	public void setDonor_id(int donor_id) {
		this.donor_id = donor_id;
	}
	public int getQuantity_bag() {
		return quantity_bag;
	}
	public void setQuantity_bag(int quantity_bag) {
		this.quantity_bag = quantity_bag;
	}
	public Donor() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}

