"use client"

import React, {useState} from 'react';
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";
import PostApprovalbox from "@/components/PostApprovalbox";
import AdminNav from "@/components/AdminNav";
import AdminModal from "@/components/AdminModal";
import AddAdminModal from "@/components/AddAdminModal";
import {Toaster} from "sonner";

export default function AdminPage() {
    const [SideBarModalIsOpen, setSideBarModalIsOpen] = useState(false);
    const [addAdminModalIsOpen, setAddAdminModalIsOpen] = useState(false);

    const SideBar = (data) => {
        setSideBarModalIsOpen(data);
    }
    const AddAdminModelData = (data) => {
        setAddAdminModalIsOpen(data)
    }

    const {data, error, isLoading} = useSWR("/admin/products/review", fetcher);
    console.log(data)

    return (
        <>
            <AdminNav Sidebar={SideBar}/>

            {SideBarModalIsOpen && <AdminModal value={data} setAddAdminModal={AddAdminModelData}/>}
            {addAdminModalIsOpen && <AddAdminModal CloseModel={AddAdminModelData}/>}
            <Toaster richColors position={"top-right"}/>

            <div>
                <p className="font-bold text-3xl ml-[340px] my-4 ">Posts to Approve</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-center ">


                {!error && !isLoading && data.products && data.products.map((item) => (
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