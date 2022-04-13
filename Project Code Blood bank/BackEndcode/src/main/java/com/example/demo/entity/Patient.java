package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="patient_rerquest")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int patient_request_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Patien_id")
	private User patientuser;
	@Column
	private String date;
	@Column
	private int quntity;
	@Column
	private String status;
	@Column
	private String paymentmode;
    @Column
	private String transactionmode;
    @Column
	private String paymentstatus;
    
    
	
	public Patient(User patientuser, String date, int quntity, String status, String paymentmode,
			String transactionmode, String paymentstatus) {
		super();
		this.patientuser = patientuser;
		this.date = date;
		this.quntity = quntity;
		this.status = status;
		this.paymentmode = paymentmode;
		this.transactionmode = transactionmode;
		this.paymentstatus = paymentstatus;
	}
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPatient_request_id() {
		return patient_request_id;
	}
	public void setPatient_request_id(int patient_request_id) {
		this.patient_request_id = patient_request_id;
	}
	
	public User getPatientuser() {
		return patientuser;
	}
	public void setPatientuser(User patientuser) {
		this.patientuser = patientuser;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getQuntity() {
		return quntity;
	}
	public void setQuntity(int quntity) {
		this.quntity = quntity;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaymentmode() {
		return paymentmode;
	}
	public void setPaymentmode(String paymentmode) {
		this.paymentmode = paymentmode;
	}
	public String getTransactionmode() {
		return transactionmode;
	}
	public void setTransactionmode(String transactionmode) {
		this.transactionmode = transactionmode;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}


}
