"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import LargeCard from "@/components/LargeCard";
import Pagination from "@/components/Pagination";
import axios from "axios";

const Product = ()=>{
    const [pages,setPages] = useState([]);
    function setPageFunction(data){
        setPages(data)
    }
    const Products = [
        {img:"/mobile.jpg",name:"iphone 15 pro max",desc:"4GB/65GB",price:"150000"},
        {img:"/DSLR2.jpg",name:"Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",desc:"18 megapixel APS-C sensor",price:"50000"},
        {img:"/bike.jpg",name:"Yamaha R15 V4",desc:"150cc Sports Bike,2021",price:"530000"},
        {img:"/mobile.jpg",name:"iphone 15 pro max",desc:"4GB/65GB",price:"150000"},
        {img:"/DSLR2.jpg",name:"Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",desc:"18 megapixel APS-C sensor",price:"50000"},
        {img:"/bike.jpg",name:"Yamaha R15 V4",desc:"150cc Sports Bike,2021",price:"530000"},
    ]


    // useEffect(()=>{
    //     const fetchProduct = async ()=> {
    //         try {
    //             const response = await axios.get("http://localhost:8080/api/v1/products")
    //             console.log(response);
    //         }catch (e){
    //             console.log("Not found")
    //         }
    //     }
    //     fetchProduct();
    // },[])


    const records = Products.slice(pages[0],pages[1]);
    return (
        <>
            <div className="w-11/12 mx-auto ">
                <div className={"w-full h-96 my-3 relative"}>
                    <div className="w-full h-full absolute">
                        <Image src={"/banner.jpg"} alt={"Product"} fill sizes={"100vw"} />
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
                                >
                                    <option value="Sort">Sort</option>
                                    <option value="High_to_low">Price(High to Low)</option>
                                    <option value="Low_to_high">Price(Low to High)</option>
                                    <option value="Old_to_new">Date(Oldest to Newest)</option>
                                    <option value="Net_to_old">Date(Newest to Oldest)</option>

                                </select>
                            </div>
                        </div>
                        <div className={"w-4/5 mx-auto box-border"}>
                            {records.map((product,index)=>(<LargeCard key={index} img={product.img} name={product.name} desc={product.desc} price={product.price} />))}
                        </div>
                        <Pagination data={setPageFunction} length={Products.length} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default Product;