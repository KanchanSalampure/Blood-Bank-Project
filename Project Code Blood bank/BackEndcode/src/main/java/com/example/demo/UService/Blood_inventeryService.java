package com.example.demo.UService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BloodBank_Inv;
import com.example.demo.entity.BlooodRequest;
import com.example.demo.uRepo.Inventry_Repo;

@Service
public class Blood_inventeryService {
	@Autowired
	Inventry_Repo repo;
	
	
	public List<BloodBank_Inv> brequest(String type){
		
		return repo.bloodreq(type);
		
	}
	public Optional<BloodBank_Inv> bloodInverty(int i){
		return repo.findById(i);
	}

	public BloodBank_Inv getinv(String type) {
		return repo.gettype(type);
	}
	
	public int update(int q,String s) {
		return repo.updateQuantityByType(q, s);
	}
}
