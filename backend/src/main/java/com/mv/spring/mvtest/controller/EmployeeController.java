package com.mv.spring.mvtest.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.mv.spring.mvtest.dto.EmployeeDto;
import com.mv.spring.mvtest.dto.EmployeeResponseDto;
import com.mv.spring.mvtest.exception.NotFoundException;
import com.mv.spring.mvtest.model.Employee;
import com.mv.spring.mvtest.service.CompanyService;
import com.mv.spring.mvtest.service.EmployeeService;

@RequestMapping("/api/employees")
@RestController
public class EmployeeController {
	
	@Autowired
	private final EmployeeService employeeService;
	
	@Autowired
	private final CompanyService companyService;
	
	public EmployeeController(EmployeeService employeeService, CompanyService companyService) {
		this.employeeService = employeeService;
		this.companyService = companyService;
	}
	
	@GetMapping
	@Transactional
	public List<Employee> retrieveAllEmployees() {
		return employeeService.findAll();
	}
	
	@GetMapping("/{id}")
	@Transactional
	public Employee retrieveEmployee(@PathVariable long id) throws NotFoundException {
		// Optional evita erros NullPointerException
		Optional<Employee> employee = employeeService.findById(id);
		
		if (!employee.isPresent()) {
			throw new NotFoundException("Funcionário não encontrado!");
		}
		
		return employee.get();
	}
	
	@DeleteMapping("/{id}")
	@Transactional
	public void deleteEmployee(@PathVariable long id) throws NotFoundException{
		Optional<Employee> employee = employeeService.findById(id);
		
		if(!employee.isPresent()) {
			throw new NotFoundException("Funcionário não encontrado!");
		} 
		
		employeeService.deleteById(id);
	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<EmployeeResponseDto> createEmployee(@RequestBody @Valid EmployeeDto employee) {

		Employee saveEmployee = employeeService.save(employee.serializeToEmployeeObject());
		

		return new ResponseEntity<>(EmployeeResponseDto.serializeToGetEntity(saveEmployee), HttpStatus.CREATED);
		

	}	
	@PutMapping("/{id}")
	public ResponseEntity<EmployeeResponseDto> updateEmployee(@RequestBody EmployeeDto employee, @PathVariable Long id) {
		Optional<Employee> employeeOptional = employeeService.findById(id);
		
		if (!employeeOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		employee.setId(id);
		
		employeeService.save(employee.serializeToEmployeeObject());
		
		return new ResponseEntity<>(EmployeeResponseDto.serializeToGetEntity(employee.serializeToEmployeeObject()), HttpStatus.CREATED);
		
	}
}
