// package com.example.demo.model;

// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonManagedReference;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;

// @Entity
// public class Admin {

//     @Id
//     private int admin_id;
//     private String name;

//    //admin to agent
//     @OneToMany(mappedBy = "admin",cascade = CascadeType.ALL)
//     @JsonManagedReference
//     private List<Agent> agent;
    
    
//     public Admin() {
//     }
//     public Admin(int admin_id, String name) {
//         this.admin_id = admin_id;
//         this.name = name;
//     }
//     public int getAdmin_id() {
//         return admin_id;
//     }
//     public void setAdmin_id(int admin_id) {
//         this.admin_id = admin_id;
//     }
//     public String getName() {
//         return name;
//     }
//     public void setName(String name) {
//         this.name = name;
//     }

    
    
// }
package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class OrderDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id") // This is optional, for specifying the column name explicitly
    private Long order_id;
    private String name;
    private String email;
    private String city;
    private String zipcode;
    private String address;
    private String phone;

    // private String senderEmail;
    // private String senderPhone;
    // private String senderOrigin;
    // private String senderAddress;
    // private String receiverName;
    // private String receiverLastName;
    // private String receiverEmail;
    // private String receiverPhone;
    // private String receiverDestination;
    // private String receiverAddress;
    // private String expectedDeliveryDate;
    // private String freight;

    // @ManyToOne
    // @JoinColumn(name = "user_uid")
    // @JsonBackReference
    // private User user;



    @OneToOne(mappedBy = "orderDetails", cascade = CascadeType.ALL, orphanRemoval = true)
    private Payment payment;
    
    // Getters and Setters
    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    // public Payment getPayment() {
    //     return payment;
    // }

    // public void setPayment(Payment payment) {
    //     this.payment = payment;
    // }

    // public String getSenderEmail() {
    //     return senderEmail;
    // }

    // public void setSenderEmail(String senderEmail) {
    //     this.senderEmail = senderEmail;
    // }

    // public String getSenderPhone() {
    //     return senderPhone;
    // }

    // public void setSenderPhone(String senderPhone) {
    //     this.senderPhone = senderPhone;
    // }

    // public String getSenderOrigin() {
    //     return senderOrigin;
    // }

    // public void setSenderOrigin(String senderOrigin) {
    //     this.senderOrigin = senderOrigin;
    // }

    // public String getSenderAddress() {
    //     return senderAddress;
    // }

    // public void setSenderAddress(String senderAddress) {
    //     this.senderAddress = senderAddress;
    // }

    // public String getReceiverName() {
    //     return receiverName;
    // }

    // public void setReceiverName(String receiverName) {
    //     this.receiverName = receiverName;
    // }

    // public String getReceiverLastName() {
    //     return receiverLastName;
    // }

    // public void setReceiverLastName(String receiverLastName) {
    //     this.receiverLastName = receiverLastName;
    // }

    // public String getReceiverEmail() {
    //     return receiverEmail;
    // }

    // public void setReceiverEmail(String receiverEmail) {
    //     this.receiverEmail = receiverEmail;
    // }

    // public String getReceiverPhone() {
    //     return receiverPhone;
    // }

    // public void setReceiverPhone(String receiverPhone) {
    //     this.receiverPhone = receiverPhone;
    // }

    // public String getReceiverDestination() {
    //     return receiverDestination;
    // }

    // public void setReceiverDestination(String receiverDestination) {
    //     this.receiverDestination = receiverDestination;
    // }

    // public String getReceiverAddress() {
    //     return receiverAddress;
    // }

    // public void setReceiverAddress(String receiverAddress) {
    //     this.receiverAddress = receiverAddress;
    // }

    // public String getExpectedDeliveryDate() {
    //     return expectedDeliveryDate;
    // }

    // public void setExpectedDeliveryDate(String expectedDeliveryDate) {
    //     this.expectedDeliveryDate = expectedDeliveryDate;
    // }

    // public String getFreight() {
    //     return freight;
    // }

    // public void setFreight(String freight) {
    //     this.freight = freight;
    // }

    // public User getUser() {
    //     return user;
    // }

    // public void setUser(User user) {
    //     this.user = user;
    // }
    
}
