package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UService.BloodBankService;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
public class BloodBankController {
     @Autowired
	 BloodBankService servic;
     
     @GetMapping("/bloodrequset")
     public String brequset(@RequestBody String type) {
    	Object obj= servic.brequst(type);
    return obj.toString();
    		
        		
    		
     }
}
