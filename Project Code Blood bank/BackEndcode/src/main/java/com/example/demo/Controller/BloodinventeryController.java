package com.example.demo.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UService.Blood_inventeryService;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
public class BloodinventeryController {
    @Autowired
	Blood_inventeryService invetserv;
	
    @GetMapping("/bloodreq")
    public Object bloodrequest(@RequestBody String type){
    	String t=type.toString();
        String str=t.substring(11,13);
    			System.out.println(str);
    	return invetserv.brequest(str);
    	
    }
    
}
