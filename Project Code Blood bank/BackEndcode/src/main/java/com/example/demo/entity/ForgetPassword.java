package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ForgetPassword {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qid;
	@Column
	private String question;
	@Column
	private String  ans;
    @Column
    private String email;
    @Column
    private String password;
	public ForgetPassword() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ForgetPassword(int qid, String question, String ans, String email, String password) {
		super();
		this.qid = qid;
		this.question = question;
		this.ans = ans;
		this.email = email;
		this.password = password;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
}
