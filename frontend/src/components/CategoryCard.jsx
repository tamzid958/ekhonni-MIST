"use client"

import Image from "next/image";
import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addCategory} from "@/Actions/product";
import Link from "next/link";


const CategoryCard = ({img,categories,item})=>{
    const dispatch = useDispatch();


    return (
        <>
            <Link href={'/products'}>
                <div className=" w-[230px] h-[200px] my-3 mx-8 border-2 border-black flex flex-col justify-center items-center bg-gray-300 rounded-2xl flex-shrink-0 cursor-pointer" onClick={()=> dispatch(addCategory(categories)) }>
                <Image src={img} alt={"computer"} width={100} height={100} />
                <h1 className="text-2xl font-bold">{categories}</h1>
                <p>{item} Products</p>
            </div>
            </Link>
        </>
    )
}
export default CategoryCard;