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
            <div className="w-full h-10  my-4 mx-auto flex justify-center items-center">
                <button className="text-xl" onClick={()=>(currentPage === 1 ? setCurrentPage(currentPage):setCurrentPage(currentPage-1))}>◀</button>
                <p className="mx-4 text-xl font-medium">{currentPage} of {numOfPage}</p>
                <button className="text-xl" onClick={()=>(currentPage === numOfPage ? setCurrentPage(1):setCurrentPage(currentPage+1))}>▶</button>
            </div>
        </>
    )
}
export default Pagination;





//
// "use client"
// import React,{useState,useEffect} from "react";
// import {useSelector,useDispatch} from "react-redux";
//
// const Pagination = ()=>{
//     const [currentPage,setCurrentPage] = useState(1);
//     const dispatch = useDispatch();
//     const {error,isLoading,products} = useSelector(state => state.product);
//     useEffect(()=>{
//
//     },[products])
//     // const recordsPerPage = 5;
//     // const lastIndex = currentPage * recordsPerPage;
//     // const firstIndex = lastIndex - recordsPerPage;
//     // const numOfPage = Math.ceil(length/recordsPerPage);
//     // useEffect(() => {
//     //     data([firstIndex,lastIndex]);
//     // }, [currentPage]);
//     return (
//         <>
//             <div className="w-full h-10  my-4 mx-auto flex justify-center items-center">
//                 <button className="text-xl" onClick={()=>(currentPage === 1 ? setCurrentPage(currentPage):setCurrentPage(currentPage-1))}>◀</button>
//                 <p className="mx-4 text-xl font-medium">{products.pageable.pageNumber} of {products.totalPages}</p>
//                 <button className="text-xl" onClick={()=>(currentPage === numOfPage ? setCurrentPage(1):setCurrentPage(currentPage+1))}>▶</button>
//             </div>
//         </>
//     )
// }
// export default Pagination;