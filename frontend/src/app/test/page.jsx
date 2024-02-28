"use client"
import BuyerBidModal from "@/components/BuyerBidModal";
import SellerSelectModal from "@/components/SellerSelectModal";
import AdminModal from "@/components/AdminModal";
import {useState} from "react";
import Header from "@/components/Header";



const TestPage =() =>
{
    const [showModal,setShowModal]=useState(false)


    return (
        <>
         <Header/>
         <AdminModal isVisible={showModal}/>


        </>
    )
}

export default TestPage;