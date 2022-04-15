package com.example.demo.UService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Camps;
import com.example.demo.uRepo.CampRepo;

@Service
public class CampService {
	
	@Autowired 
	CampRepo rep;

	public List<Camps> findCamp(String add){
		return rep.getbyaddress(add);
	}
}
