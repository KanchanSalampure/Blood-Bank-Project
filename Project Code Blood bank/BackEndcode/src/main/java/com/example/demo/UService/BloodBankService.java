package com.example.demo.UService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BloodBank;
import com.example.demo.uRepo.BloodBankRepository;
import com.example.demo.uRepo.UserRepositroy;

@Service
public class BloodBankService {

	@Autowired
	BloodBankRepository repo;
	public Optional<BloodBank> getById(int Id) {
		return repo.findById(Id);
		
	}
	public Object brequst(String type) {
		return repo.bloodrequ(type);
	}
}
