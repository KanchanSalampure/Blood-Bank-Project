package com.example.demo.uRepo;

import java.util.List;

import javax.persistence.Column;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BloodBank_Inv;
@Transactional
@Repository
public interface Inventry_Repo extends JpaRepository<BloodBank_Inv,Integer> {
	
@Query(value="SELECT b.name,b.address,b.contact_no,b.email,i.type,i.quantity_bag  FROM  blood_inventry i  INNER JOIN blood_bank b ON i.bank_id= b.bloodbank_id  where i.type=?1", nativeQuery = true)
public List<Object> bloodreq(String type);
	
	

 
}
