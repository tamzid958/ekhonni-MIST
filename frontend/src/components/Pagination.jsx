"use client"
import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchProduct} from "@/Actions/fetchProduct";
const Pagination = ()=>{
    const [currentPage,setCurrentPage] = useState(0);
    const dispatch = useDispatch();
    const {error,isLoading,products} = useSelector(state => state.product);
    const filteredItem = useSelector(state => state.filter);
    const totalPage = products.totalPages;
    useEffect(() => {
        dispatch(fetchProduct({id: currentPage,filter:filteredItem}))
    }, [currentPage]);
    const NextPage = ()=>{
        (currentPage === totalPage-1 ? setCurrentPage(0):setCurrentPage(currentPage+1))
    }
    const PrevPage = ()=>{
        (currentPage === 0 ? setCurrentPage(currentPage):setCurrentPage(currentPage-1))
    }


    // const recordsPerPage = 5;
    // const lastIndex = currentPage * recordsPerPage;
    // const firstIndex = lastIndex - recordsPerPage;
    // const numOfPage = Math.ceil(length/recordsPerPage);
    // useEffect(() => {
    //     data([firstIndex,lastIndex]);
    // }, [currentPage]);



    useEffect(() => {
        setCurrentPage(products.pageable.pageNumber)
    }, [products]);
    return (
        <>
            <div className="w-full h-10  my-4 mx-auto flex justify-center items-center">
                <button className="text-xl" onClick={PrevPage}>◀</button>
                <p className="mx-4 text-xl font-medium">{currentPage+1} of {totalPage}</p>
                <button className="text-xl" onClick={NextPage}>▶</button>
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