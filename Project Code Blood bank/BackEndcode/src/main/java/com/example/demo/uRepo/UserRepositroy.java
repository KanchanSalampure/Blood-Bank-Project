package com.example.demo.uRepo;

import java.util.List;

import javax.persistence.Column;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;
@Transactional
@Repository
public interface UserRepositroy extends JpaRepository<User, Integer> {
	
	@Query( "select c from User c where user_name=:name and password=:pwd")
	public User getByName(String name, String pwd);
	


}
