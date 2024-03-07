"use client"
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "@/Actionss/fetchProduct";


import {updatePage} from "@/Actionss/filter";

import useSWR from "swr";
import {reqFetcher} from "@/utils/fetcher";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // const dispatch = useDispatch();
    // const {error, isLoading, products} = useSelector(state => state.product);
    // const filteredItem = useSelector(state => state.filter);
    // const totalPage = products.totalPages;
    // useEffect(() => {
    //     dispatch(updatePage(currentPage));
    //     dispatch(fetchProduct({filter: filteredItem}))
    //     console.log(filteredItem)
    //
    // }, [currentPage]);
    // const NextPage = () => {
    //     (currentPage === totalPage - 1 ? setCurrentPage(0) : setCurrentPage(currentPage + 1))
    // }
    // const PrevPage = () => {
    //     (currentPage === 0 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1))
    // }

    // useEffect(() => {
    //     setCurrentPage(products.pageable.pageNumber)
    // }, [products]);

    return (
        <>
            <div className="w-full h-10  my-4 mx-auto flex justify-center items-center">
                <button className="text-xl" >◀</button>
                <p className="mx-4 text-xl font-medium"></p>
                <button className="text-xl" >▶</button>
            </div>
        </>
    )
}
export default Pagination;
