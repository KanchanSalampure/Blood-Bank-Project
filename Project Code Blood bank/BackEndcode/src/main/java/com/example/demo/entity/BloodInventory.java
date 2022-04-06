package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="blood_inventory")
public class BloodInventory {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int BloodInv_ID;
	@Column
	private String Type;
	@Column
	private int Quantity;
	@Column
	private int BloodBank_ID;
	@Column
	private String Date;
	@Column
	private int Camp_ID;
	
	
	
	

}
