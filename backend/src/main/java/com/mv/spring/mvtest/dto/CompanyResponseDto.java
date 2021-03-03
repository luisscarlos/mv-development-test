package com.mv.spring.mvtest.dto;

import java.util.List;

import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.model.Employee;

public class CompanyResponseDto {

	private Long id;
	private String name;
	private String address;
	private String phoneNumber;
	
	private Employee employee;
	
	public CompanyResponseDto(Long id, String name, String address, String phoneNumber, Employee employee) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.employee = employee;
	}
	
	public static CompanyResponseDto serializeToGetEntity(Company company) {
		return new CompanyResponseDto(company.getId(), company.getName(), company.getAddress(), company.getPhoneNumber(),
				company.getEmployee());
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

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
}
