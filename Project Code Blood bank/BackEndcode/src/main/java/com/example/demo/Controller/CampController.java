package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UService.CampService;
import com.example.demo.entity.BloodBank_Inv;
import com.example.demo.entity.Camps;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
public class CampController {
	@Autowired
	CampService campservice;
	
	@GetMapping("/camp")
	public List<Camps> getAddress(@RequestParam("address") String add){
		System.out.println("add"+add);
		List<Camps> lc= campservice.findCamp(add);
		
    	if(lc!=null) {
    		return lc;
    	}
    	else {
    		return null;
    	}
	}
	

}
