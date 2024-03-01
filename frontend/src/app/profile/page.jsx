"use client"

import React, {useEffect, useState} from "react";
import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import InputBox from "@/components/InputBox";
import Header from "@/components/Header";
import axios from "axios";
import {UserContext} from "@/Context/UserContext.jsx";

const Profile = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem("token");
    useEffect(() => {


        axios.get(`http://localhost:8080/api/v1/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' // Specify content type if required
            }
        })
            .then((res) => {

                setData(res.data)

            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);
    return (
        <UserContext.Provider value={data}>
            <Header/>
            <div className="w-11/12 mx-auto">
                <div className={'w-full h-[70px] flex justify-center items-center border-b-2 border-black mt-2'}>
                    <h1 className="text-2xl font-bold tracking-wider">Your Profile</h1>
                </div>
                <div className="w-full  my-3 box-border flex justify-around ">
                    <ProfileCard/>
                    <div className="w-3/5  mt-3 rounded-xl ">
                        <div className="w-full pl-10 py-5">
                            <InputBox Name={"Name"} value={data ? data.name : ''} type={"text"}/>
                            <InputBox Name={"Email"} value={data ? data.email : ''} type={"email"}/>
                            <InputBox Name={"Contact"} value={data ? data.contact : ''} type={"number"}/>
                            <InputBox Name={"Address"} value={data ? data.address : ''} type={"text"}/>
                            <InputBox Name={"Division"} value={data ? data.division : ''} type={"text"}/>
                        </div>
                        <div className="w-full  flex justify-end">
                            <div className="w-1/2  flex justify-center mr-10">
                                <Button value={"Change password"} type={"text"} option={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    )
}
export default Profile;