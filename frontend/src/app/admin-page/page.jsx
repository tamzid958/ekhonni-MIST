"use client"

import PostApprovalbox from "@/components/PostApprovalbox";
import AdminModal from "@/components/AdminModal";

import SmallButton from "@/components/SmallButton";
import button from "@/components/Button";
import React, {useEffect, useState} from 'react';
import {Toaster} from "sonner";
import AdminNav from "@/components/AdminNav";
import AddAdminModal from "@/components/AddAdminModal";
import axios from "axios";

export default function AdminPage() {
    const [SideBarModalIsOpen, setSideBarModalIsOpen] = useState(false);
    const [addAdminModalIsOpen, setAddAdminModalIsOpen] = useState(false);

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

    // const setAddModalOpen = (data)=>{
    //     setAddAdminModalIsOpen(data);
    //     console.log("Data: "+data);
    // }
    useEffect(() => {
        fetchData();
    }, []);

    const SideBar = (data) => {
        setSideBarModalIsOpen(data);
    }
    const AddAdminModelData = (data) => {
        setAddAdminModalIsOpen(data)
    }


    // const data =[
    //     {
    //         id : '1',
    //         name : 'Product1',
    //         location: 'Dhaka',
    //         time: '12.00',
    //         description: 'This is good',
    //         category: 'phone',
    //         price: '122222',
    //         username:'Shadman'
    //
    //     },
    //     {
    //         id : '2',
    //         name : 'Product2',
    //         location: 'Chittagong',
    //         time: '12.10',
    //         description: 'This is good',
    //         category: 'phone',
    //         price: '122222',
    //         username:'Shafeen'
    //     },
    //     {   id : '3',
    //         name : 'Product3',
    //         location: 'Khulna',
    //         time: '12.40',
    //         description: 'This is good',
    //         category: 'phone',
    //         price: '122222',
    //         username:'Khan'
    //     },
    //     {   id : '4',
    //         name : 'Product4',
    //         location: 'Khulna',
    //         time: '12.44',
    //         description: 'This is not good',
    //         category: 'phone',
    //         price: '122222',
    //         username:'Sadia'
    //     },
    //     {   id : '5',
    //         name : 'Product5',
    //         location: 'Khulna',
    //         time: '12.45',
    //         description: 'This is good',
    //         category: 'phone',
    //         price: '122222',
    //         username:'Shitol'
    //     }
    // ]


    return (
        <>
            <AdminNav Sidebar={SideBar}/>

            {SideBarModalIsOpen && <AdminModal setAddAdminModal={AddAdminModelData}/>}
            {addAdminModalIsOpen && <AddAdminModal CloseModel={AddAdminModelData}/>}
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