package com.example.demo.model;



import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Login {
    @Id
    private int userId;
    private String userName;
    private String password;

    @OneToOne(mappedBy = "login", cascade = CascadeType.ALL)
    @JsonManagedReference 
    private Product booking;

    public Login(int userId, String userName, String password,Product booking) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.booking=booking;
        
    }
    public Product getBooking() {
        return booking;
    }
    public void setBooking(Product booking) {
        this.booking = booking;
    }
    public int getuserId() {
        return userId;
    }
    public void setuserId(int userId) {
        this.userId = userId;
    }
    public String getuserName() {
        return userName;
    }
    public void setuserName(String userName) {
        this.userName = userName;
    }
    public String getpassword() {
        return password;
    }
    public void setpassword(String password) {
        this.password = password;
    }
    public Login() {
    }
    
}

