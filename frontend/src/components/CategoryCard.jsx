"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";


const CategoryCard = ({img, categories, item}) => {


    return (
        <>
            <Link href={`/products?category=${categories}`}>
                <div
                    className=" w-[230px] h-[200px] my-3 mx-8 border-2 border-black flex flex-col justify-center items-center bg-gray-300 rounded-2xl flex-shrink-0 cursor-pointer">
                    <Image src={img} alt={"computer"} width={100} height={100}/>
                    <h1 className="text-2xl font-bold">{categories}</h1>
                    <p>{item} Products</p>
                </div>
            </Link>
        </>
    )
}
export default CategoryCard;