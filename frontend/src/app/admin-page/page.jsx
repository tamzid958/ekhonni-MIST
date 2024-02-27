"use client"
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostApprovalbox from "@/components/PostApprovalbox";
import React, { useState } from 'react';
import BuyerBids from "@/components/BuyerBids";
export default function AdminPage(){

    return(
        <>

            <div>
                <p className="font-bold text-3xl ml-[300px] mt-4 ">Posts to Approve</p>
            </div>
            <div className="w-screen h-[700px] flex flex-col justify-start items-center ">


                <PostApprovalbox/>
            </div>


        </>
    )
}
// export default AccountCreationPage