"use client"
import React, {useState} from 'react';

const DivisionDropdown = ({name, setDivision}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const divisions = [
        {"name": "Dhaka"},
        {"name": "Chittagong"},
        {"name": "Khulna"},
        {"name": "Barishal"},
        {"name": "Rajshahi"},
        {"name": "Sylhet"},
        {"name": "Rangpur"},
        {"name": "Mymensingh"}
    ]
    return (
        <select className="w-[350px] h-12 border-2 my-3 border-neutral-900 rounded-lg pl-2" required name={name}
                onChange={(e) => {
                    setDivision(e.target.value)
                }}>
            <option value="" disabled selected>Select Division</option>
            {divisions.map((division) => (
                <option key={division.name} value={division.name}>
                    {division.name}
                </option>
            ))}
        </select>

    )
};
export default DivisionDropdown;
