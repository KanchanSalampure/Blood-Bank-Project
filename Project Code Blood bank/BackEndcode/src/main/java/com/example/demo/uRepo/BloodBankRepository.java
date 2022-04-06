package com.example.demo.uRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BloodBank;

@Repository
public interface BloodBankRepository extends JpaRepository<BloodBank, Integer> {
	
	
	

}