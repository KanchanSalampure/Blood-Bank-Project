package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UService.UserService;
import com.example.demo.entity.User;
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
public class UserController {

	@Autowired
	UserService serv;

@PostMapping("/login")
	public String getbyname(@RequestParam String  name,@RequestParam String pwd) {
		 User u= serv.getbyname(name,pwd);
		  boolean flag=false;
		//  System.out.println(name+pwd);
		 // System.out.println(u.getUser_name()+u.getPassword());
		    
			 if(u.getUser_name().equals(name) && u.getPassword().equals(pwd)) { 
				//System.out.println("flag is ="+flag);
				flag=true;}
			   else
			 flag=false;
			 
		   
		 
		 if(flag==true)
			 return "Login successfull";
		 else
			 return "Login Fialed";
			 
		 
		 
		 
	}
}
