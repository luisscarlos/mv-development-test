package com.mv.spring.mvtest.dto;

import java.util.List;

import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.model.Employee;

public class EmployeeResponseDto {

	private Long id;
	private String name;
	private String address;
	private String phoneNumber;
	private String cellNumber;
	private String role;
	private List<Company> company;
	

	public EmployeeResponseDto(Long id, String name, String address, String phoneNumber, String cellNumber,
			String role, List<Company> company) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.cellNumber = cellNumber;
		this.role = role;
		this.company = company;
	}


	public static EmployeeResponseDto serializeToGetEntity(Employee employee) {
		return new EmployeeResponseDto(employee.getId(), employee.getName(), employee.getAddress(),
				employee.getPhoneNumber(), employee.getCellNumber(), employee.getRole(), employee.getCompany());
	}


	public Long getId() {
		return id;
	}


	public String getName() {
		return name;
	}


	public String getAddress() {
		return address;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public String getCellNumber() {
		return cellNumber;
	}


	public String getRole() {
		return role;
	}


	public List<Company> getCompany() {
		return company;
	}


	public void setCompany(List<Company> company) {
		this.company = company;
	}
	
}
