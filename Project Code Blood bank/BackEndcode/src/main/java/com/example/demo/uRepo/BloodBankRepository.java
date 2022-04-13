package com.example.demo.uRepo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BloodBank;
@Transactional
@Repository
public interface BloodBankRepository extends JpaRepository<BloodBank, Integer> {
	
@Query(value="SELECT b.name ,email,contact_no,type,quantity_bag FROM blood_bank b INNER JOIN blood_inventry i ON b.bloodbank_id = i.bank_id where b.name=?1", nativeQuery = true)
public Object bloodrequ(String str);




	

}