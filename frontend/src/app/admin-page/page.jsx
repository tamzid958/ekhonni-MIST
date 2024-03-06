"use client"

import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import AdminModal from "@/components/AdminModal";
import React, {useState} from 'react';
import {Toaster} from "sonner";
import AdminNav from "@/components/AdminNav";
import AddAdminModal from "@/components/AddAdminModal";
import RemoveAdminModal from "@/components/RemoveAdminModal";
import AddCategoryModal from "@/components/AddCategoryModal";
import PostApprovalbox from "@/components/PostApprovalbox";


export default function AdminPage() {

    const AdminModelData = (data) => {
        setAdminModalIsOpen(data)
    }

    const [adminModalIsOpen, setAdminModalIsOpen] = useState(false);
    const [addAdminModalIsOpen, setAddAdminModalIsOpen] = useState(false)
    const [removeAdminModalIsOpen, setRemoveAdminModalIsOpen] = useState(false)
    const [addCategoryModalIsOpen, setAddCategoryModalIsOpen] = useState(false)

    const {data, error, isLoading} = useSWR("/admin/products/review", fetcher);
    console.log(data)


    return (
        <>
            <AdminNav setAdminModalIsOpen={setAdminModalIsOpen} adminModalIsOpen={adminModalIsOpen}/>

            {adminModalIsOpen && <AdminModal setAddAdminModalIsOpen={setAddAdminModalIsOpen}
                                             setRemoveAdminModalIsOpen={setRemoveAdminModalIsOpen}
                                             setAddCategoryModalIsOpen={setAddCategoryModalIsOpen}
                                             pendingPostCount={data.size}/>}
            {addAdminModalIsOpen && <AddAdminModal setAddAdminModalIsOpen={setAddAdminModalIsOpen}/>}
            {removeAdminModalIsOpen && <RemoveAdminModal setRemoveAdminModalIsOpen={setRemoveAdminModalIsOpen}/>}
            {addCategoryModalIsOpen && <AddCategoryModal setAddCategoryModalIsOpen={setAddCategoryModalIsOpen}/>}

            <Toaster richColors position={"top-right"}/>

            <div>
                <p className="font-bold text-3xl ml-[340px] my-4 ">Posts to Approve</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-center ">


                {!error && !isLoading && data && data.products && data.products.map((item) => (
                    <PostApprovalbox key={item.id} id={item.id} name={item.name} username={item.seller.name}
                                     description={item.description} price={item.startingPrice}
                                     category={item.category.category} subCategory={item.category.subCategory}
                                     location={item.seller.division}
                                     time={new Date(item.productTime).toLocaleDateString('en-GB')}
                    />
                ))}
            </div>
        </>
    )
}