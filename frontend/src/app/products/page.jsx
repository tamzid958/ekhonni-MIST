"use client"
import React from "react";

import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import Filter from "@/components/Filter";
import LargeCard from "@/components/LargeCard";
import Pagination from "@/components/Pagination";

import Header from "@/components/Header";
import {addSort} from "@/Actions/filter";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import {requestApi} from "@/utils/axios.settings";



const Product = () => {
    const dispatch = useDispatch()
    // const {error, isLoading, products} = useSelector(state => state.product)
    // const filterItem = useSelector(state => state.filter);

    // const {data,error,isLoading} = useSWR('/products/filter',fetcher)
    // console.log(data)

    const req = {
        'Content-Type': 'application/json'
    }
    const url= '/products/filter'
    const method="POST"
    const body = {
        pageNumber: 0,
        categories: [],
        startPrice: null,
        endPrice: null,
        search: null,
        division: [],
        sort: null

    };


    // const {data} =  requestApi({req,url,method,body})
    // console.log("Page: "+data);

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
                    <Filter/>
                    <div className="w-4/5 border-2 ml-3">
                        <div className="w-full p-3 flex justify-between border-b-2">
                            <div>
                                <h1 className="font-semibold text-lg">Sort Result By</h1>
                            </div>
                            <div>
                                <select
                                    name="Sort"
                                    className="border-2 w-44"
                                    onChange={(e) => dispatch(addSort(e.target.value))}
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
                            {/*{*/}
                            {/*    (isLoading && products.content) ? <>*/}
                            {/*        <p>Loading.................</p></> : products.content.map((product, index) => (*/}
                            {/*        <LargeCard key={index} img="/bike.jpg" name={product.name}*/}
                            {/*                   desc={product.description} price={product.startingPrice}/>))*/}
                            {/*}*/}
                        </div>
                        <Pagination/>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Product;