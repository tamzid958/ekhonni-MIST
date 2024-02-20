"use client"
import React,{useState,useEffect} from "react";
const Pagination = ({data,length})=>{
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const numOfPage = Math.ceil(length/recordsPerPage);
    useEffect(() => {
        data([firstIndex,lastIndex]);
    }, [currentPage]);
    return (
        <>
            <div className="w-full h-10 border-y-2 my-4 mx-auto flex justify-center items-center">
                <button className="text-xl" onClick={()=>(currentPage === 1 ? setCurrentPage(currentPage):setCurrentPage(currentPage-1))}>◀</button>
                <p className="mx-4 text-xl font-medium">{currentPage} of {numOfPage}</p>
                <button className="text-xl" onClick={()=>(currentPage === numOfPage ? setCurrentPage(1):setCurrentPage(currentPage+1))}>▶</button>
            </div>
        </>
    )
}
export default Pagination;