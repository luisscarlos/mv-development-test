package com.mv.spring.mvtest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.repository.CompanyRepository;


@Service
public class CompanyService {

	private final CompanyRepository companyRepository;
	
	@Autowired
	public CompanyService(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	public List<Company> findAll() {
		return companyRepository.findAll();
	}
	
	public Optional<Company> findById(Long id) {
		return companyRepository.findById(id);
	}
	
	public Company getOne(Long id) {
		return companyRepository.getOne(id);
	}
	
	public void deleteById(Long id) {
		companyRepository.deleteById(id);
	}
	
	public Company save(Company company) {
		return companyRepository.save(company);
	}
}
