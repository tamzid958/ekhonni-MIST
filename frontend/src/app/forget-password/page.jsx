"use client"

import axios from "axios";
import {FormEvent, useState} from "react";
import { useRouter } from 'next/navigation'
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Link from "next/link";
import {toast, Toaster} from "sonner";
import {Router} from "next/router";
import {Toast} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";
import Header from "@/components/Header";


const ForgetPass = () => {
    const router = useRouter();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        const formDataObject = {
            email : email,
            password : password
        };


        axios.post(`http://localhost:8080/api/v1/user/login`, formDataObject)
            .then((res)=>{
                const { token } = res.data;
                localStorage.setItem("token" , token);
                localStorage.setItem("currentUserEmail" , email);
                console.log(token);
                toast.success("We have sent you an email please check it")
                router.push('/');

            })
            .catch((err)=>{
                console.error("Err :"+err);
                toast.error("Invalid Username")
            })



    }
    return (
        <>
            <Header />
            <Toaster richColors position={"top-right"}/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[450px] h-[450px] border-2 border-black flex flex-row justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-lg">
                        {/*Forgot Password Div*/}
                        <div className="w-full h-full rounded-l-lg">
                            <div className=" w-full h-2/5 flex flex-col justify-center items-center">
                                <h1 className=" w-full  h-full font-bold text-3xl mt-7 flex justify-center items-center text-amber-50">Forgot Password</h1>
                                <p className="text-white text-2xl mb-4">Please enter your Username</p>
                            </div>
                            <div className=" w-full h-2/5 flex flex-col justify-start items-center mt-7">
                                <TextField placeholder={"Email"} type={"text"} name={"email"} value={email}
                                           onChange={(e) => {
                                               setEmail(e.target.value)
                                           }}/>

                            </div>
                            <div className=" w-full h-1/5 flex flex-col justify-start items-center -mt-7">
                                <Button  value={"Submit"} option={0} type={"submit"}/>
                            </div>
                        </div>
                        {/*{Reset Password Div}*/}
                        {/*<div*/}
                        {/*    className="w-1/2 h-full flex items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-r-md">*/}
                        {/*    <div className="w-full h-3/5 flex flex-col items-center justify-center">*/}
                        {/*        <h1 className="font-bold text-4xl text-white mb-8 "> Reset Password </h1>*/}
                        {/*        <p className="text-center text-white text-lg mb-4">Enter new password and reset it </p>*/}
                        {/*        <div className="pl-3">*/}
                        {/*            <TextField placeholder={"Password"} type={"password"} name={"password"}*/}
                        {/*                       value={password}*/}
                        {/*                       onChange={(e) => {*/}
                        {/*                           setPassword(e.target.value)*/}
                        {/*                       }}/>*/}


                        {/*            <TextField placeholder={"Confirm Password"} type={"password"} name={"password"}*/}
                        {/*                       value={password}*/}
                        {/*                       onChange={(e) => {*/}
                        {/*                           setPassword(e.target.value)*/}
                        {/*                       }}/>*/}
                        {/*        </div>*/}
                        {/*        <div className="mt-8">*/}
                        {/*            <Link href="/">*/}
                        {/*                <Button value={"Reset Password"} option={0} type={"button"}/>*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForgetPass;

