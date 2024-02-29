"use client"

import BuyerBidModal from "@/components/BuyerBidModal";
import SellerSelectModal from "@/components/SellerSelectModal";
import {useState} from "react";
import Header from "@/components/Header";
import AddAdminModal from "@/components/AddAdminModal";
import RemoveAdminModal from "@/components/RemoveAdminModal";





const TestPage = () => {
    const biddingActive = true;
    const [modalIsOpen , setModalIsOpen] = useState(true);

    return (
        <>

         <Header/>
         <RemoveAdminModal/>



        </>
    )
}

export default TestPage;