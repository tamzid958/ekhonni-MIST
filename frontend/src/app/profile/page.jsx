"use client"

import React from "react";
import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import InputBox from "@/components/InputBox";
import Header from "@/components/Header";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";

const Profile = () => {
    const { data, error,isLoading } = useSWR('/user/profile', fetcher)

    return (
        <>
            <Header/>
            <div className="w-11/12 mx-auto">
                <div className={'w-full h-[70px] flex justify-center items-center border-b-2 border-black mt-2'}>
                    <h1 className="text-2xl font-bold tracking-wider">Your Profile</h1>
                </div>
                <div className="w-full  my-3 box-border flex justify-around ">
                    <ProfileCard/>
                    <div className="w-3/5  mt-3 rounded-xl ">
                        <div className="w-full pl-10 py-5">
                            <InputBox Name={"Name"} value={(!isLoading && !error) ? data.name : ''} type={"text"}/>
                            <InputBox Name={"Email"} value={(!isLoading && !error)  ? data.email : ''} type={"email"}/>
                            <InputBox Name={"Contact"} value={(!isLoading && !error)  ? data.contact : ''} type={"number"}/>
                            <InputBox Name={"Address"} value={(!isLoading && !error)  ? data.address : ''} type={"text"}/>
                            <InputBox Name={"Division"} value={(!isLoading && !error)  ? data.division : ''} type={"text"}/>
                        </div>
                        <div className="w-full  flex justify-end">
                            <div className="w-1/2  flex justify-center mr-10">
                                <Button value={"Change password"} type={"text"} option={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;