package com.example.demo.UService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.uRepo.Inventry_Repo;

@Service
public class Blood_inventeryService {
	@Autowired
	Inventry_Repo repo;
	
	
	public Object brequest(String type){
		return repo.bloodreq(type);
		
	}

}
