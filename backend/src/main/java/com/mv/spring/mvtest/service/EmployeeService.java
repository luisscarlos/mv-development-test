package com.mv.spring.mvtest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.model.Employee;
import com.mv.spring.mvtest.repository.EmployeeRepository;


@Service
public class EmployeeService {

	private final EmployeeRepository employeeRepository;
	
	@Autowired
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}
	
	public Optional<Employee> findById(Long id) {
		return employeeRepository.findById(id);
	}
	
	public Employee getOne(Long id) {
		return employeeRepository.getOne(id);
	}
	
	public void deleteById(Long id) {
		employeeRepository.deleteById(id);
	}
	
	public Employee save(Employee employee) {
		return employeeRepository.save(employee);
	}
	
//	public Company linkCompany(Company company) {
//		return employeeRepository.save(company);
//	}
}
