"use client"

import React from "react";

import useSWR from "swr";
import {reqFetcher} from "@/utils/fetcher";

const Pagination = ({data,pagination}) => {
    const url= '/products/filter'
    const method="POST"

    const {data:value,error,isLoading} = useSWR([url,method,data],reqFetcher)


    return (
        <>
            <div className="w-full h-10  my-4 mx-auto flex justify-center items-center">
                <button className="text-xl" onClick={()=>{pagination(0)}} >◀</button>
                <p className="mx-4 text-xl font-medium">{!isLoading && !error && value.totalPages > 0 ? value.pageable.pageNumber+1:0} of {!isLoading && !error && value.totalPages}</p>
                <button className="text-xl"  onClick={()=>{pagination(!isLoading && !error && value.totalPages)}}>▶</button>
            </div>
        </>
    )
}
export default Pagination;
