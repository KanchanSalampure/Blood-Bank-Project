package com.example.demo.uRepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Camps;
import com.example.demo.entity.User;
@Repository
public interface CampRepo extends JpaRepository<Camps,Integer> {

	
	@Query("select c from Camps c where address=:address")
	public List<Camps> getbyaddress(String address);
	
}
