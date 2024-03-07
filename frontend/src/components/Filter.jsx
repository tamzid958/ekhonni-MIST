"use client"
import CrossButton from "@/components/CrossButton";
import Range from "@/components/Range";
import { useState} from "react";



const Filter = ({ChangeHandle,FilterData,HandleCategory,HandleSubCategory,ResetFilter, RemoveOneProduct}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    let allFilter = [];

    const {categories, division} = FilterData;

    categories.map((category, index) => {
        allFilter.push(category.name);
        category.subCategories.forEach((subCategories) => {
            allFilter.push(subCategories);
        })
    })
    allFilter = [...allFilter, ...division];



    const handleCategoryClick = (index) => {
        if (selectedCategory === index) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(index);
        }
    };

    const divisions = [
        {name: "Dhaka"},
        {name: "Chattogram"},
        {name: "Rajshahi"},
        {name: "Khulna"},
        {name: "Barishal"},
        {name: "Sylhet"},
        {name: "Rangpur"},
        {name: "Mymensingh"},
    ]

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
                "Actionss Figures & Playsets",
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
        <>
            <div className="w-1/5 h-full border-2 p-5">
                <div className={"w-full"}>
                    <div className="flex justify-between border-b-2 pb-2">
                        <h1 className="font-bold font-lg">Filter</h1>
                        <p className="text-blue-500 cursor-pointer" onClick={ResetFilter} >CLEAR ALL</p>
                    </div>
                    <div className="my-1 flex flex-wrap flex-shrink-0">
                        {
                            allFilter && allFilter.map((data, index) => (
                                <CrossButton key={index} text={data} RemoveOneProduct={RemoveOneProduct}  />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className=" pb-2">
                        <h1 className="text-md font-bold">Location</h1>
                    </div>
                    <div className={" py-3"}>
                        <select
                            name="division"
                            className="border-2 w-full"
                            onChange={ChangeHandle}
                        >
                            <option value="">Select Division</option>
                            {divisions.map((division) => (
                                <option key={division.name} value={division.name}>
                                    {division.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <div className="pb-3">
                        <h1 className="text-md font-bold">Categories</h1>
                    </div>
                    <div>
                        <ul>
                            {Categories.map((data, index) => (
                                <li key={index} className={"ml-2"} value={data.category} onClick={() => {
                                    handleCategoryClick(index)
                                    HandleCategory(Categories[index].category)
                                }}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 font-bold text-xl"}>
                                            {selectedCategory === index ? '⇩' : '⇨'}
                                        </p>
                                        <p className={`cursor-pointer ${selectedCategory === index ? 'text-black font-bold' : 'text-gray-500'}`}>{data.category}</p>
                                    </div>
                                    {selectedCategory === index && (
                                        <ul className="">
                                            {data.SubCategories.map((subcategory, subIndex) => (
                                                <li key={subIndex} className="ml-10 text-gray-500 cursor-pointer"
                                                    onClick={() => {
                                                        HandleSubCategory(Categories[index].category, Categories[index].SubCategories[subIndex])
                                                    }}>{subcategory}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="pb-3">
                        <h1 className="text-lg font-bold my-3">Price Range</h1>
                        <h2 className="text-blue-600">৳ {FilterData.startPrice} - ৳ {FilterData.endPrice}</h2>
                        <h3 className="my-1 text-gray-400">Current Range: ৳ {FilterData.endPrice - FilterData.startPrice}</h3>
                    </div>
                    <div className={"pb-5"}>
                        <Range max={1000000} min={0} ChangeHandle={ChangeHandle} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter;