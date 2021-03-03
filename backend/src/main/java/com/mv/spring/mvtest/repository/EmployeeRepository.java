package com.mv.spring.mvtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mv.spring.mvtest.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
