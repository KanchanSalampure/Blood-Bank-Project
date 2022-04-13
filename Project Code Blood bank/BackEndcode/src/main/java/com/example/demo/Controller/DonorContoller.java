package com.example.demo.Controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.UService.DonorService;
import com.example.demo.entity.Donor;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})

public class DonorContoller {
	 
	 @Autowired
      DonorService dserv;
	
	@PostMapping("/saveandUpload") 
	public Donor saveAndUploda(@RequestPart("data") Donor d,@RequestPart("file") MultipartFile file ) {
		 
		Donor savDonor=dserv.saveD(d);
		boolean flag=true;
		try {
		byte [] data=file.getBytes();
		Path path=Paths.get("img//"+savDonor.getDonor_id()+".jpg");
		Files.write(path, data);
		}catch(Exception e){
			flag=false;
	    }
		 if(flag){
			 return savDonor;
		 }
		 else {
			 return null;
		 }
			 
		 
	}

}
