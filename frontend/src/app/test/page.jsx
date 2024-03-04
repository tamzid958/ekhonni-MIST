"use client"
import {useState} from "react";
import Header from "@/components/Header";
import RemoveAdminModal from "@/components/RemoveAdminModal";
import RemoveCategoryModal from "@/components/RemoveCategoryModal";

const TestPage = () => {
    const biddingActive = true;

    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
        <>
            <Header/>
            <RemoveAdminModal/>
        </>
    )
}
export default TestPage;