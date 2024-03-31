package com.employeemanagementsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//JSON Attributes in Postman need to be in the SAME name AS THESE VARIABLES(firstName,lastName,..)
public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
