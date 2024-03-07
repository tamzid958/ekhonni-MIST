"use client"

import axios from "axios";
import {useState} from "react";
import {useRouter} from 'next/navigation'
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {toast, Toaster} from "sonner";
import Header from "@/components/Header";
import {requestApi} from "@/utils/axios.settings";


const ForgetPass = () => {
    const router = useRouter();
    let email = "";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = {
            "content-type": "application/json"
        }
        const res = await requestApi({
            req,
            url: "/forgot-password",
            method: "POST",
            params: {
                email: email
            }
        })
        toast.info("Email has been sent successfully");
        setTimeout(() => {
            router.push("/");
        }, 2000)
    }

    const handleInputChange = (e) => {
        email = e.target.value;
    }


    return (
        <>
            <Header/>
            <Toaster richColors position={"top-center"}/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[450px] h-[450px] border-2 border-black flex flex-row justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-lg">
                        {/*Forgot Password Div*/}
                        <div className="w-full h-full rounded-l-lg">
                            <div className=" w-full h-2/5 flex flex-col justify-center items-center">
                                <h1 className=" w-full  h-full font-bold text-3xl mt-7 flex justify-center items-center text-amber-50">Forgot
                                    Password</h1>
                                <p className="text-white text-2xl mb-4">Please enter your Username</p>
                            </div>
                            <div className=" w-full h-2/5 flex flex-col justify-start items-center mt-7">
                                <TextField placeholder={"Email"} type={"text"} name={"email"}
                                           onChange={(e) => handleInputChange(e)}/>

                            </div>
                            <div className=" w-full h-1/5 flex flex-col justify-start items-center -mt-7">
                                <Button value={"Submit"} option={0} type={"submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForgetPass;

