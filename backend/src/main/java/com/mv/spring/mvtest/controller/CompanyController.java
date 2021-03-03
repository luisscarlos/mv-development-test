package com.mv.spring.mvtest.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mv.spring.mvtest.dto.CompanyDto;
import com.mv.spring.mvtest.dto.CompanyResponseDto;
import com.mv.spring.mvtest.exception.NotFoundException;
import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.service.CompanyService;

@RequestMapping("/api/companies")
@RestController
public class CompanyController {
	
	private final CompanyService companyService;
	
	public CompanyController(CompanyService companyService) {
		this.companyService = companyService;
	}
	
	@GetMapping
	@Transactional
	public List<Company> retrieveAllCompanies() {
		return companyService.findAll();
	}
	
	@GetMapping("/{id}")
	@Transactional
	public Company retrieveCompany(@PathVariable long id) throws NotFoundException {
		// Optional evita erros NullPointerException
		Optional<Company> company = companyService.findById(id);
		
		if (!company.isPresent()) {
			throw new NotFoundException("Empresa não encontrada!");
		}
		
		return company.get();
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public void deleteCOmpany(@PathVariable long id) throws NotFoundException{
		Optional<Company> company = companyService.findById(id);
		
		if(!company.isPresent()) {
			throw new NotFoundException("Empresa não encontrada!");
		} 
		
		companyService.deleteById(id);
	}

	@PostMapping
	@Transactional
	public ResponseEntity<CompanyResponseDto> createCompany(@RequestBody @Valid CompanyDto company) {

		Company saveCompany = companyService.save(company.serializeToCompanyObject());
		
		return new ResponseEntity<>(CompanyResponseDto.serializeToGetEntity(saveCompany), HttpStatus.CREATED);

	}
	
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<CompanyResponseDto> updateCompany(@RequestBody CompanyDto company, @PathVariable Long id) {
		Optional<Company> companyOptional = companyService.findById(id);
		
		if (!companyOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		company.setId(id);
		
		companyService.save(company.serializeToCompanyObject());
		
		return new ResponseEntity<>(CompanyResponseDto.serializeToGetEntity(company.serializeToCompanyObject()), HttpStatus.CREATED);
		
	}
}
