"use client"
import React, {useEffect, useState} from "react";


import Image from "next/image";
import Filter from "@/components/Filter";
import LargeCard from "@/components/LargeCard";
import Pagination from "@/components/Pagination";

import Header from "@/components/Header";
import useSWR from "swr";
import { reqFetcher} from "@/utils/fetcher";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";




const Product = () => {
    const searchParams = useSearchParams()
    const searchValue = searchParams.get('search')
    const categoryValue = searchParams.get('category')

    const url= '/products/filter'
    const method="POST"
    const [data,setData] = useState({
        pageNumber: 0,
        categories: [],
        startPrice: 0,
        endPrice: 1000000,
        search: null,
        division: [],
        sort: null
    })
    const {data:value,error,isLoading} = useSWR([url,method,data],reqFetcher)




    useEffect(() => {
        const search = "search";
        const categories = "categories";
        if(searchValue){
            setData((prevData) => ({ ...prevData, [search]: searchValue }));
        }
        if(categoryValue && !data.categories.some(category => category.name === categoryValue)){
            setData((prevState)=>({
                ...prevState,
                [categories]:[...prevState.categories,{name:categoryValue,subCategories:[]}]
            }))
        }

    }, [searchValue,categoryValue]);


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

    const ResetFilter = ()=>{
        // console.log("Value: "+value);
        const pageNumber = "pageNumber"
        const categories = "categories"
        const startPrice = "startPrice"
        const endPrice = "endPrice"
        const search = "search"
        const division = "division"
        const sort = "sort"
        setData((prevState)=> ({
            ...prevState,
            [pageNumber]:0,
            [categories]:[],
            [startPrice]:0,
            [endPrice]:1000000,
            [search]:null,
            [division]:[],
            [sort]:null

        }))

    }

    const RemoveOneProduct = (value)=>{
        setData((prevState) => {
            const updatedState = { ...prevState };

            for (const key in updatedState) {
                if (Array.isArray(updatedState[key])) {
                    if (key === 'categories') {
                        updatedState[key] = updatedState[key].map((category) => {
                            const updatedCategory = {...category};
                            if (updatedCategory.name === value) {
                                return null;
                            } else {
                                updatedCategory.subCategories = updatedCategory.subCategories.filter(subCategory => subCategory !== value);
                                return updatedCategory;
                            }
                        }).filter((category) => category !== null);
                    } else {
                        updatedState[key] = updatedState[key].filter(
                            (item) => item !== value
                        );
                    }
                }
            }

            return { ...updatedState };
        });

    }
    const pagination = (value)=>{
        const pageNumber = "pageNumber"

        if(value){
            setData((prevState)=>({
                ...prevState,
                [pageNumber]: (prevState.pageNumber+1 === value)? 0: prevState.pageNumber+1
            }))
        }
        else {
            setData((prevState)=>({
                ...prevState,
                [pageNumber]: (prevState.pageNumber === 0)? 0: prevState.pageNumber-1
            }))
        }


    }



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
                    <Filter ChangeHandle={ChangeHandle} HandleCategory={HandleCategory} RemoveOneProduct={RemoveOneProduct} HandleSubCategory={HandleSubCategory} ResetFilter={ResetFilter} FilterData={data} />
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
                                !isLoading && !error && value && value.content.map((product, index) => (
                                    <Link href={`/product/${product.id}`} key={index}>
                                        <LargeCard key={index} img="/bike.jpg" name={product.name}
                                                   desc={product.description} price={product.startingPrice}/>
                                    </Link>))
                            }
                        </div>
                        <Pagination data={data} pagination={pagination} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default Product;