"use client"
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostApprovalbox from "@/components/PostApprovalbox";
import React, { useState } from 'react';
export default function AdminPage(){

    return(
        <>

            <div className="w-screen h-[700px] justify-center items-center ">

                <p className="font-bold text-3xl mx-[300px] mt-4 ">Posts to approve</p>
                <PostApprovalbox className="absolute"/>

            </div>


        </>
    )
}
// export default AccountCreationPage