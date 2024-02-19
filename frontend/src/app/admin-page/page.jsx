"use client"
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostApprovalbox from "@/components/PostApprovalbox";
import React, { useState } from 'react';
export default function AdminPage(){

    return(
        <>
            <Header/>
            <div className="w-screen h-[700px] justify-center items-center ml-80  ">

                <p className="font-bold text-3xl ml-0 mt-4 ">Posts to approve</p>
                <PostApprovalbox className="absolute"/>
                <PostApprovalbox className="absolute"/>
                <PostApprovalbox className="absolute"/>
            </div>

            <Footer/>

        </>
    )
}
// export default AccountCreationPage