"use client"

import SellerSelectModal from "@/components/SellerSelectModal";
import {useState} from "react";

const TestPage = () => {
    const biddingActive = true;
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <>
            <SellerSelectModal setModalOpen={setModalIsOpen} maxBid={65000} isBidActive={biddingActive}/>
        </>
    )
}

export default TestPage;