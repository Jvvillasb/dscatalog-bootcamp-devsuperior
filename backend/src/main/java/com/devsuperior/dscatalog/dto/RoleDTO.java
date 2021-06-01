package com.devsuperior.dscatalog.dto;

import java.io.Serializable;

import com.devsuperior.dscatalog.entities.Role;

public class RoleDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String authoriry;
	
	public RoleDTO() {
	}
	
	public RoleDTO(Long id, String authoriry) {
		super();
		this.id = id;
		this.authoriry = authoriry;
	}

	public RoleDTO(Role role) {
		super();
		id = role.getId();
		authoriry = role.getAuthority();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthoriry() {
		return authoriry;
	}

	public void setAuthoriry(String authoriry) {
		this.authoriry = authoriry;
	}
	
	

}
