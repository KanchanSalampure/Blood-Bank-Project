package com.example.demo.UService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.uRepo.UserRepositroy;

@Service
public class UserService {
	@Autowired
	UserRepositroy repo;

	public User getbyname(String nm,String pwd) {
		return repo.getByName(nm,pwd);
	}
}
