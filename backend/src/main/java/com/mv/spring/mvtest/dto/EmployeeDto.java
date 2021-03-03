package com.mv.spring.mvtest.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.model.Employee;

public class EmployeeDto {
	
	@NotBlank
	private Long id;
	
	@JsonProperty(required = true)
	@NotBlank
	private String name;
	
	@JsonProperty(required = true)
	@NotBlank
	private String address;
	
	@JsonProperty(required = true)
	@NotBlank
	private String phoneNumber;
	
	@JsonProperty(required = true)
	@NotBlank
	private String cellNumber;
	
	@JsonProperty(required = true)
	@NotBlank
	private String role;
	
	private List<Company> company;
	
	// Usado no controller	(save, update)
	public Employee serializeToEmployeeObject() {
		return new Employee(id, name, address, phoneNumber, cellNumber, role, company);
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getCellNumber() {
		return cellNumber;
	}

	public void setCellNumber(String cellNumber) {
		this.cellNumber = cellNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Company> getCompany() {
		return company;
	}

	public void setCompany(List<Company> company) {
		this.company = company;
	}
}
