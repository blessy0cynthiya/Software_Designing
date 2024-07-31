/*package com.example.demo1.model;

public class Product {
    
} */
package com.example.demo1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    private int productId;
    //private String productPlace;
    private String productName;
    //private String productColour;
    private String productBrand;
    private String productmanufatureId;
    private double productmanufacturePrice;
    private String productDiscount;
    public int getProductId() {
        return productId;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }
    /*public String getProductPlace() {
        return productPlace;
    }
    public void setProductPlace(String productPlace) {
        this.productPlace = productPlace;
    }*/
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    /*public String getProductColour() {
        return productColour;
    }
    public void setProductColour(String productColour) {
        this.productColour = productColour;
    }*/
    public String getProductBrand() {
        return productBrand;
    }
    public void setProductBrand(String productBrand) {
        this.productBrand = productBrand;
    }
    public String getProductmanufatureId() {
        return productmanufatureId;
    }
    public void setProductmanufatureId(String productmanufatureId) {
        this.productmanufatureId = productmanufatureId;
    }
    public double getProductmanufacturePrice() {
        return productmanufacturePrice;
    }
    public void setProductmanufacturePrice(double productmanufacturePrice) {
        this.productmanufacturePrice = productmanufacturePrice;
    }
    public String getProductDiscount() {
        return productDiscount;
    }
    public void setProductDiscount(String productDiscount) {
        this.productDiscount = productDiscount;
    }
    public Product(int productId, String productName, String productBrand,
            String productmanufatureId, double productmanufacturePrice, String productDiscount) {
        this.productId = productId;
        //this.productPlace = productPlace;
        this.productName = productName;
        //this.productColour = productColour;
        this.productBrand = productBrand;
        this.productmanufatureId = productmanufatureId;
        this.productmanufacturePrice = productmanufacturePrice;
        this.productDiscount = productDiscount;
    }
    public Product() {
    }

}
