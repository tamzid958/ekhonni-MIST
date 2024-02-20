"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
const Categories =()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === category.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change slide every 1 seconds

        return () => clearInterval(interval);
    }, []);

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? category.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === category.length - 1 ? 0 : prevIndex + 1
        );
    };


    const category = [
        {img:"/computer.svg",category:"Electronics",item:"110"},
        {img:"/vehicle.svg",category:"Vehicle",item:"260"},
        {img:"/clothing.svg",category:"Clothing",item:"190"},
        {img:"/decor.svg",category:"Home Decor",item:"100"},
        {img:"/furniture.svg",category:"Furniture",item:"10"},
        {img:"/sports_item.svg",category:"Sports item",item:"210"},
        {img:"/properties.svg",category:"Properties",item:"51"},
        {img:"/toy.svg",category:"Toy",item:"340"},
        {img:"/computer.svg",category:"Electronics",item:"110"},
        {img:"/vehicle.svg",category:"Vehicle",item:"260"},
        {img:"/clothing.svg",category:"Clothing",item:"190"},
        {img:"/decor.svg",category:"Home Decor",item:"100"},
        {img:"/furniture.svg",category:"Furniture",item:"10"},
        {img:"/sports_item.svg",category:"Sports item",item:"210"},
        {img:"/properties.svg",category:"Properties",item:"51"},
        {img:"/toy.svg",category:"Toy",item:"340"},
        {img:"/computer.svg",category:"Electronics",item:"110"},
        {img:"/vehicle.svg",category:"Vehicle",item:"260"},
        {img:"/clothing.svg",category:"Clothing",item:"190"},
        {img:"/decor.svg",category:"Home Decor",item:"100"},
        {img:"/furniture.svg",category:"Furniture",item:"10"},
        {img:"/sports_item.svg",category:"Sports item",item:"210"},
        {img:"/properties.svg",category:"Properties",item:"51"},
        {img:"/toy.svg",category:"Toy",item:"340"},
        {img:"/computer.svg",category:"Electronics",item:"110"},
        {img:"/vehicle.svg",category:"Vehicle",item:"260"},
        {img:"/clothing.svg",category:"Clothing",item:"190"},
        {img:"/decor.svg",category:"Home Decor",item:"100"},
        {img:"/furniture.svg",category:"Furniture",item:"10"},
        {img:"/sports_item.svg",category:"Sports item",item:"210"},
        {img:"/properties.svg",category:"Properties",item:"51"},
        {img:"/toy.svg",category:"Toy",item:"340"},
    ]
    return (
        <>
            <div className="w-11/12 mx-auto border-black my-2 flex flex-col flex-nowrap">
                <div className="flex">
                    <h1 className="font-bold mr-2">View Items By Categories</h1>
                    <div className=" w-[190px] h-7 flex border-2 border-black rounded-2xl justify-center items-center">
                        <Image src={"/location.svg"} alt={"location"} width={15} height={15}/>
                        <h2 className="ml-2 text-sm font-bold">All over Bangladesh</h2>
                    </div>
                </div>
                <div className={" relative overflow-hidden"}>
                    <div className="mx-8 flex  transition ease-out duration-500" style={{transform: `translateX(-${currentIndex * 20}%)`}}>
                        {category.map((data, index) => <CategoryCard key={index} img={data.img} categories={data.category}
                                                                     item={data.item}/>)}
                    </div>
                    <div>
                        <button
                            className="absolute top-1/2 -left-2 transform -translate-y-1/2 p-2 "
                            onClick={prevImage}
                        >
                            <img src="/prevlogo.svg" alt="previous" className=" w-7 h-7 "/>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 "
                            onClick={nextImage}
                        >
                            <img src="/nextlogo.svg" alt="previous" className=" w-7 h-7"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Categories;