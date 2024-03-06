"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {fetchProduct} from "@/Actions/fetchProduct";
import useSWR from "swr";
import {bidFetcher} from "@/utils/bidFetcher";


const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Categories, setCategories] = useState([])
    const dispatch = useDispatch();

    const { data, error,isLoading } = useSWR('/products/count', bidFetcher)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 110 ? 0 : prevIndex + 1
            );

        }, 200);

        return () => clearInterval(interval);
    }, []);
    const filterItem = useSelector(state => state.filter);
    const product = useSelector(state => state.product);
    useEffect(() => {
        console.log(filterItem)
        dispatch(fetchProduct({filter: filterItem}))

    }, [filterItem]);


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
        {img: "/computer.svg", category: "Electronics"},
        {img: "/vehicle.svg", category: "Vehicle"},
        {img: "/clothing.svg", category: "Clothing"},
        {img: "/furniture.svg", category: "Furniture"},
        {img: "/sports_item.svg", category: "Sports Item"},
        {img: "/properties.svg", category: "Properties"},
        {img: "/toy.svg", category: "Toy"}
    ];


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
                    <div className="mx-8 flex  transition ease-out duration-1000"
                         style={{transform: `translateX(-${currentIndex * 0.5}%)`}}>
                        {!isLoading && category.map((value, index) => <CategoryCard key={index} img={value.img}
                                                                            categories={value.category}
                                                                            item={data[value.category]}/>)}
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