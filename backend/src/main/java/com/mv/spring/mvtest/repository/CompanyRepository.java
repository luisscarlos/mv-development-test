package com.mv.spring.mvtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mv.spring.mvtest.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
