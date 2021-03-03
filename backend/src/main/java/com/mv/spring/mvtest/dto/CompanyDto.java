package com.mv.spring.mvtest.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mv.spring.mvtest.model.Company;
import com.mv.spring.mvtest.model.Employee;

public class CompanyDto {
	
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
	
	private Employee employee;
	
	// Usado no controller	(save, update)
		public Company serializeToCompanyObject() {
			return new Company(id, name, address, phoneNumber, employee);
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
