package com.dsi.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Category extends BaseEntity<Long>{

    @Column
    private String category;
    private String subCategory;
}

//const Categories = [
//        {
//category: "Furniture",
//SubCategories: [
//        "Seating Furniture",
//        "Tables",
//        "Storage Furniture",
//        "Beds and Bedroom Furniture",
//        "Outdoor Furniture",
//        "Office Furniture",
//        "Entertainment Furniture"
//        ]
//        },
//        {
//category: "Electronics",
//SubCategories: [
//        "Televisions",
//        "Computers & Laptops",
//        "Smartphones & Tablets",
//        "Audio Equipment",
//        "Cameras & Photography",
//        "Home Appliances",
//        "Gaming Consoles & Accessories",
//        "Wearable Technology",
//        "Networking & Internet Devices",
//        "Electronic Accessories"
//        ]
//        },
//        {
//category: "Vehicle",
//SubCategories: [
//        "Cars & Trucks",
//        "Motorcycles & Scooters",
//        "RVs & Campers",
//        "Boats & Watercraft",
//        "Commercial Vehicles",
//        "Trailers & Hauling",
//        "Powersports Vehicles",
//        "Aircraft",
//        "Bicycles & Cycling",
//        "Vehicle Parts & Accessories"
//        ]
//        },
//        {
//category: "Clothing",
//SubCategories: [
//        "Men's Clothing",
//        "Women's Clothing",
//        "Kids' Clothing",
//        "Shoes",
//        "Accessories",
//        "Jewelry",
//        "Bags & Luggage",
//        "Watches",
//        "Uniforms & Workwear",
//        "Costumes & Cosplay"
//        ]
//        },
//        {
//category: "Sports Item",
//SubCategories: [
//        "Exercise & Fitness Equipment",
//        "Team Sports Equipment",
//        "Outdoor Recreation Gear",
//        "Athletic Apparel & Shoes",
//        "Sports Accessories",
//        "Cycling Equipment",
//        "Water Sports Equipment",
//        "Winter Sports Gear",
//        "Hunting & Fishing Gear",
//        "Golf Equipment"
//        ]
//        },
//        {
//category: "Properties",
//SubCategories: [
//        "Residential Properties",
//        "Commercial Properties",
//        "Land & Plots",
//        "Vacation Rentals & Timeshares",
//        "Parking Spaces & Garages",
//        "Real Estate Services",
//        "Shared Accommodations",
//        "Agricultural Properties",
//        "Industrial Properties",
//        "Real Estate Investments"
//        ]
//        },
//        {
//category: "Toy",
//SubCategories: [
//        "Action Figures & Playsets",
//        "Dolls & Accessories",
//        "Educational Toys",
//        "Building Blocks & Construction Sets",
//        "Remote Control & Vehicles",
//        "Pretend Play & Dress-Up",
//        "Games & Puzzles",
//        "Outdoor Play Equipment",
//        "Stuffed Animals & Plush",
//        "Arts & Crafts"
//        ]
//        }
//        ];