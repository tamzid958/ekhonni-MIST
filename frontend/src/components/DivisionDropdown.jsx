"use client"
import React, { useState } from 'react';
const DivisionDropdown = ({name , setDivision}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const divisions = [
        {"name" : "Dhaka"},
        {"name" : "Chittagong"},
        {"name" : "Khulna"},
        {"name" : "Barishal"},
        {"name" : "Rajshahi"},
        {"name" : "Sylhet"},
        {"name" : "Rangpur"},
        {"name" : "Mymensingh"}
    ]
    return (
            <div className="w-56 rounded-md focus:outline-none">
                <select className="w-[275px] h-10 border-2 mx-[-11%] my-3 border-neutral-900 rounded-lg pl-2" required name={name} onChange={(e)=> {setDivision(e.target.value)}}>
                    <option value="" disabled selected>Select Division</option>
                        {divisions.map((division) => (
                            <option key={division.name} value={division.name} >
                                {division.name}
                            </option>
                    ))}
                </select>
            </div>
    )
};
export default DivisionDropdown;
