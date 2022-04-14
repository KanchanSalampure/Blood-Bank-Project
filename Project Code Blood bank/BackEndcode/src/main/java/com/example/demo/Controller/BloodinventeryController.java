package com.example.demo.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UService.Blood_inventeryService;
import com.example.demo.entity.BloodBank_Inv;
import com.example.demo.entity.BlooodRequest;


@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
public class BloodinventeryController {
    @Autowired
	Blood_inventeryService invetserv;
	
    @PostMapping("/bloodreq")
    public List<BloodBank_Inv> bloodrequest(@RequestBody BloodBank_Inv b){
    	System.out.println(b.getType());
    	
    	return invetserv.brequest(b.getType());
    	
    }
    @GetMapping("/blood")
    public BloodBank_Inv getblood(@RequestParam ("type")  String type)
    {
    	System.out.println(type);
    	BloodBank_Inv i= invetserv.getinv(type);
    	if(i!=null) {
    		return i;
    	}
    	else {
    		return null;
    	}
        
    }
}
