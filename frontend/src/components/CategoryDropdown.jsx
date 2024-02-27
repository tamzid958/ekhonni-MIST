"use client"

import {useState} from "react";

const CategoryDropdown = ({name , setCategory , setSubCategory}) => {

    const [selectedCategory , setSelectedCategory] = useState("");
    const Categories = [
        {
            category: "Furniture",
            SubCategories: [
                "Seating Furniture",
                "Tables",
                "Storage Furniture",
                "Beds and Bedroom Furniture",
                "Outdoor Furniture",
                "Office Furniture",
                "Entertainment Furniture"
            ]
        },
        {
            category: "Electronics",
            SubCategories: [
                "Televisions",
                "Computers & Laptops",
                "Smartphones & Tablets",
                "Audio Equipment",
                "Cameras & Photography",
                "Home Appliances",
                "Gaming Consoles & Accessories",
                "Wearable Technology",
                "Networking & Internet Devices",
                "Electronic Accessories"
            ]
        },
        {
            category: "Vehicle",
            SubCategories: [
                "Cars & Trucks",
                "Motorcycles & Scooters",
                "RVs & Campers",
                "Boats & Watercraft",
                "Commercial Vehicles",
                "Trailers & Hauling",
                "Powersports Vehicles",
                "Aircraft",
                "Bicycles & Cycling",
                "Vehicle Parts & Accessories"
            ]
        },
        {
            category: "Clothing",
            SubCategories: [
                "Men's Clothing",
                "Women's Clothing",
                "Kids' Clothing",
                "Shoes",
                "Accessories",
                "Jewelry",
                "Bags & Luggage",
                "Watches",
                "Uniforms & Workwear",
                "Costumes & Cosplay"
            ]
        },
        {
            category: "Sports Item",
            SubCategories: [
                "Exercise & Fitness Equipment",
                "Team Sports Equipment",
                "Outdoor Recreation Gear",
                "Athletic Apparel & Shoes",
                "Sports Accessories",
                "Cycling Equipment",
                "Water Sports Equipment",
                "Winter Sports Gear",
                "Hunting & Fishing Gear",
                "Golf Equipment"
            ]
        },
        {
            category: "Properties",
            SubCategories: [
                "Residential Properties",
                "Commercial Properties",
                "Land & Plots",
                "Vacation Rentals & Timeshares",
                "Parking Spaces & Garages",
                "Real Estate Services",
                "Shared Accommodations",
                "Agricultural Properties",
                "Industrial Properties",
                "Real Estate Investments"
            ]
        },
        {
            category: "Toy",
            SubCategories: [
                "Action Figures & Playsets",
                "Dolls & Accessories",
                "Educational Toys",
                "Building Blocks & Construction Sets",
                "Remote Control & Vehicles",
                "Pretend Play & Dress-Up",
                "Games & Puzzles",
                "Outdoor Play Equipment",
                "Stuffed Animals & Plush",
                "Arts & Crafts"
            ]
        }
    ];
    return (
        <div>
            <select className="w-[350px] h-12 border-2 my-3 border-neutral-900 rounded-lg pl-2 shadow-md shadow-slate-300" required name={name}
                    onChange={(e) =>
                    {setCategory(e.target.value);
                        setSelectedCategory(e.target.value);
                        setSubCategory("");
                    }}>
                <option disabled selected>Select Category</option>
                {Categories.map((item) => (
                    <option key={item.category} value={item.category}> {item.category} </option>
                ))}
            </select>
            <div>
                <select className="w-[350px] h-12 border-2  my-3 border-neutral-900 rounded-lg pl-2 shadow-md shadow-slate-300" required
                        name="subcategory"
                        onChange={(e) => {setSubCategory(e.target.value)}}
                >
                    <option value="" disabled selected>Select Subcategory</option>
                        {Categories.find((categoryObj) => categoryObj.category === selectedCategory)?.SubCategories.map(
                            (subcategory) => (
                                <option key={subcategory} value={subcategory}>
                                    {subcategory}
                                </option>
                            ))}
                </select>
            </div>

        </div>

    )
}

export default CategoryDropdown;