"use client"
import React, {useEffect, useState} from "react";


import Image from "next/image";
import Filter from "@/components/Filter";
import LargeCard from "@/components/LargeCard";
import Pagination from "@/components/Pagination";

import Header from "@/components/Header";
import useSWR from "swr";
import { reqFetcher} from "@/utils/fetcher";




const Product = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    const url= '/products/filter'
    const method="POST"
    const [data,setData] = useState({
        pageNumber: 0,
        categories: [],
        startPrice: 250000,
        endPrice: 750000,
        search: null,
        division: [],
        sort: null
    })
    const {data:value,error,isLoading,mutate} = useSWR([url,method,data],reqFetcher)




    useEffect(() => {
        const value = "search";
        setData((prevData) => ({ ...prevData, [value]: search }));
    }, [search]);





    const ChangeHandle = (e) => {
        const { name, value } = e.target;

        if(name === "division" ){
            if(!(data.division.includes(value))){
                setData((prevData)=> ({ ...prevData,[name]:[...prevData.division,value]}))
            }
            else {
                setData((prevData)=> ({ ...prevData}))
            }

        }
        else if(name === "startPrice" ){
            const p = (500000 - value);
            setData((prevData) => ({ ...prevData, [name]: p }));
        }
        else if(name === "endPrice" ){
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
        else if(name === "sort" || name === "pageNumber"){
            setData((prevData) => ({ ...prevData, [name]: value }));
        }

    };

    const HandleCategory = (categoryName)=>{
        const cat = "categories";

        if(data.categories.some(category => category.name === categoryName)){
            setData((prevData)=> ({ ...prevData}))
        }
        else {
            setData((prevState)=>({
                ...prevState,
                [cat]:[...prevState.categories,{name:categoryName,subCategories:[]}]
            }))
        }
    }
    const HandleSubCategory = (categoryName, subCategoryName) => {
        const cat = "categories";
        const subCat = "subCategories";
        setData((prevState) => ({
            ...prevState,
            [cat]: prevState.categories.map(category => {
                if (categoryName === category.name && !category.subCategories.includes(subCategoryName)) {
                    return {
                        ...category,
                        [subCat]: [...category.subCategories, subCategoryName]
                    };
                }
                return category;
            })
        }));
    };






    return (
        <>
            <Header/>
            <div className="w-11/12 mx-auto ">
                <div className={"w-full h-96 my-3 relative"}>
                    <div className="w-full h-full absolute">
                        <Image src={"/banner.jpg"} alt={"Product"} fill sizes={"100vw"}/>
                    </div>
                    <div className="absolute top-1/2 left-[40%]">
                        <h1 className="text-2xl text-white font-bold sm:text-md">Products in Category</h1>
                    </div>
                </div>
                <div className="w-full h-auto flex box-border">
                    <Filter ChangeHandle={ChangeHandle} HandleCategory={HandleCategory} HandleSubCategory={HandleSubCategory} FilterData={data} />
                    <div className="w-4/5 border-2 ml-3">
                        <div className="w-full p-3 flex justify-between border-b-2">
                            <div>
                                <h1 className="font-semibold text-lg">Sort Result By</h1>
                            </div>
                            <div>
                                <select
                                    name="sort"
                                    className="border-2 w-44"
                                    onChange={ChangeHandle}
                                >
                                    <option value="">Sort</option>
                                    <option value="High_to_low">Price(High to Low)</option>
                                    <option value="Low_to_high">Price(Low to High)</option>
                                    <option value="Old_to_new">Date(Oldest to Newest)</option>
                                    <option value="New_to_old">Date(Newest to Oldest)</option>

                                </select>
                            </div>
                        </div>
                        <div className={"w-4/5 mx-auto box-border"}>
                            {
                                !isLoading && !error && value.content.map((product, index) => (
                                    <LargeCard key={index} img="/bike.jpg" name={product.name}
                                               desc={product.description} price={product.startingPrice}/> ))
                            }
                        </div>
                        <Pagination/>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Product;