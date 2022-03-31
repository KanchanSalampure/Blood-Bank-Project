package com.example.demo.UService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.User;
import com.example.demo.uRepo.UserRepositroy;

@Service
public class UserService {
	@Autowired
	UserRepositroy repo;

	public User getbyname(String nm,String pwd) {
		return repo.getByName(nm,pwd);
	}
	public User Saveu(User u) {
		return repo.save(u);
	}
	public List<User> getall () {
		return repo.findAll();
	}
	public User getid(int id1) {
		return repo.getById(id1);
		
	}

	
}
