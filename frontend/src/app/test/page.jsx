"use client"
import BuyerBidModal from "@/components/BuyerBidModal";
import SellerSelectModal from "@/components/SellerSelectModal";
import AdminModal from "@/components/AdminModal";
import {useState} from "react";
import Header from "@/components/Header";
import AddAdminModal from "@/components/AddAdminModal";
import RemoveAdminModal from "@/components/RemoveAdminModal";



const TestPage =() =>
{
    const [showModal,setShowModal]=useState(false)


    return (
        <>
         <Header/>
         <RemoveAdminModal isVisible={showModal}/>


        </>
    )
}

export default TestPage;