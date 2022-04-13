package com.example.demo.uRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Donor;
@Repository
public interface DonorRepo extends JpaRepository<Donor,Integer> {

}
