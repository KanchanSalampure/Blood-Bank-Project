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
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "donor_id")
	private User donor_id;
	@Column
	private String date;
	@Column
	private int quantity_bag;
	
	@ManyToMany(cascade = CascadeType.ALL)
    private List<BloodBank_Inv> Inv_id;
    
    
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Camps> camp_id;
	public Donor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Donor(User donor_id, String date, int quantity_bag, List<BloodBank_Inv> inventry, List<Camps> camp_id) {
		super();
		this.donor_id = donor_id;
		this.date = date;
		this.quantity_bag = quantity_bag;
		this.Inv_id = inventry;
		this.camp_id = camp_id;
	}
	public int getDonation_id() {
		return donation_id;
	}
	public void setDonation_id(int donation_id) {
		this.donation_id = donation_id;
	}
	public User getDonor_id() {
		return donor_id;
	}
	public void setDonor_id(User donor_id) {
		this.donor_id = donor_id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getQuantity_bag() {
		return quantity_bag;
	}
	public void setQuantity_bag(int quantity_bag) {
		this.quantity_bag = quantity_bag;
	}
	
	public List<BloodBank_Inv> getInv_id() {
		return Inv_id;
	}
	public void setInv_id(List<BloodBank_Inv> inv_id) {
		Inv_id = inv_id;
	}
	public List<Camps> getCamp_id() {
		return camp_id;
	}
	public void setCamp_id(List<Camps> camp_id) {
		this.camp_id = camp_id;
	}
	

}

