"use client"

import PostApprovalbox from "@/components/PostApprovalbox";
import AdminModal from "@/components/AdminModal";
import React, {useEffect, useState} from 'react';
import {Toaster} from "sonner";
import AdminNav from "@/components/AdminNav";
import AddAdminModal from "@/components/AddAdminModal";
import axios from "axios";
import RemoveAdminModal from "@/components/RemoveAdminModal";
import AddCategoryModal from "@/components/AddCategoryModal";
import RemoveCategoryModal from "@/components/RemoveCategoryModal";

export default function AdminPage() {
    const [adminModalIsOpen , setAdminModalIsOpen] = useState(false);
    const [addAdminModalIsOpen, setAddAdminModalIsOpen] = useState(false)
    const [removeAdminModalIsOpen, setRemoveAdminModalIsOpen] = useState(false)
    const [addCategoryModalIsOpen, setAddCategoryModalIsOpen] = useState(false)
    const [removeCategoryModalIsOpen, setRemoveCategoryModalIsOpen] = useState(false)
    const data1 = [
        {
            id: '1',
            name: 'Product1',
            location: 'Dhaka',
            time: '12.00',
            description: 'This is good',
            category: 'phone',
            price: '122222',
        }
    ]
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/admin/products/review');
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return (
        <>
            <AdminNav setAdminModalIsOpen={setAdminModalIsOpen} adminModalIsOpen={adminModalIsOpen}/>

            {adminModalIsOpen && <AdminModal setAddAdminModalIsOpen={setAddAdminModalIsOpen} setRemoveAdminModalIsOpen={setRemoveAdminModalIsOpen} setAddCategoryModalIsOpen={setAddCategoryModalIsOpen} setRemoveCategoryModalIsOpen={setRemoveCategoryModalIsOpen}/>}
            {addAdminModalIsOpen && <AddAdminModal setAddAdminModalIsOpen={setAddAdminModalIsOpen}/>}
            {removeAdminModalIsOpen && <RemoveAdminModal setRemoveAdminModalIsOpen={setRemoveAdminModalIsOpen}/>}
            {addCategoryModalIsOpen && <AddCategoryModal setAddCategoryModalIsOpen={setAddCategoryModalIsOpen}/>}
            {removeCategoryModalIsOpen && <RemoveCategoryModal setRemoveCategoryModalIsOpen={setRemoveCategoryModalIsOpen}/>}
            <Toaster richColors position={"top-right"}/>

            <div>
                <p className="font-bold text-3xl ml-[340px] my-4 ">Posts to Approve</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-center ">


                {data.map((item) => (
                    <PostApprovalbox key={item.id} id={item.id} name={item.name} username={item.seller.name}
                                     description={item.description} price={item.startingPrice}
                                     category={item.category.category} subCategory={item.category.subCategory}
                                     location={item.seller.division}
                                     time={new Date(item.productTime).toLocaleDateString('en-GB')}/>
                ))}
            </div>
       </>
    )
}