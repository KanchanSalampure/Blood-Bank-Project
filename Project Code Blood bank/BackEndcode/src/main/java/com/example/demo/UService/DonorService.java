package com.example.demo.UService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Donor;
import com.example.demo.uRepo.DonorRepo;

@Service
public class DonorService {
	
	@Autowired
	DonorRepo drepo;
	  
	
	public Donor saveD(Donor d) {
		return drepo.save(d);
	}

}
