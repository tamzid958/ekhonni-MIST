"use client"

import TextField from "@/components/TextField";
import Button from "@/components/Button";
import DivisionDropdown from "@/components/DivisionDropdown";
import React from 'react';
import {toast, Toaster} from "sonner";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Header from "@/components/Header";
import {requestApi} from "@/utils/axios.settings";

const AccountCreationPage = () => {
    const router = useRouter();
    let formData = {
        name: "",
        contact: "",
        email: "",
        address: "",
        division: "",
        password: "",
        confirm_password: ""
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.confirm_password) {
            try {
                const req = {
                    "content-type": "application/json"
                }
                const res = await requestApi({
                    req,
                    url: "/register",
                    method: "POST",
                    data: formData
                });

                if (res.error) {
                    toast.error("Failed to register. Please try again.");
                } else {
                    toast.success("Account created successfully");
                    setTimeout(() => {
                        router.push("/login");
                    }, 1000)
                }
            } catch (error) {
                toast.error("An unexpected error occurred. Please try again later.");
            }
        } else {
            toast.error("Passwords must match.");
        }
    };
    const handleInputChange = (e, field) => {
        formData[field] = e.target.value;
    }

    return (
        <>
            <Header/>
            <Toaster expand={false} position={"top-right"} richColors/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[850px] h-[650px] border-2 border-black flex flex-row justify-start items-center rounded-lg">
                        {/*If already have an account / Log in section*/}
                        <div
                            className="w-2/5 h-full flex justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-l-md">
                            <div className="w-4/5 h-3/5 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-3xl text-white "> Welcome Back!</h1>
                                <p className="text-center text-white my-7">If you already have an account, please log
                                    in</p>
                                <Link href="/login">
                                    <Button value={"Log in"}/>
                                </Link>
                            </div>
                        </div>
                        <div className="w-3/5 h-full rounded-l-lg">
                            <div className="w-full h-1/8 flex flex-col justify-center items-center">
                                <h1 className="font-bold mt-4 text-3xl my-3 ">Sign Up</h1>
                                <p className="font-light ">Please enter your Personal Information</p>
                            </div>
                            <div className="w-full h-6/8 flex flex-col justify-center items-center">
                                <TextField placeholder={"Name"} type={"text"} name={"name"}
                                           onChange={(e) => handleInputChange(e, 'name')}/>
                                <TextField placeholder={"Email"} type={"text"} name={"email"}
                                           onChange={(e) => handleInputChange(e, 'email')}/>
                                <TextField placeholder={"Contact Number"} type={"text"} name={"contact"}
                                           onChange={(e) => handleInputChange(e, 'contact')}/>
                                <TextField placeholder={"Address"} type={"text"} name={"address"}
                                           onChange={(e) => handleInputChange(e, 'address')}/>
                                <DivisionDropdown name={"Division"} onChange={(e) => handleInputChange(e, 'division')}/>
                                <TextField placeholder={"Password"} type={"password"} name={"password"}
                                           onChange={(e) => handleInputChange(e, 'password')}/>
                                <TextField placeholder={"Confirm Password"} type={"password"} name={"confirmPassword"}
                                           onChange={(e) => handleInputChange(e, 'confirm_password')}/>
                            </div>
                            <div className="w-full h-1/8  flex justify-center items-start">
                                <Button value={"Sign Up"} option={"0"} type={"submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default AccountCreationPage;