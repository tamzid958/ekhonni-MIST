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
import ForgetPass from "@/app/forget-password/page";


const LoginPage = () => {
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
                console.log(token);
                toast.success("Logged in Successfully")
                router.push('/');

            })
            .catch((err)=>{
                console.error("Err :"+err);
                toast.error("UnAuthorized")
            })
    }
    return (
        <>
            <Header />
            <Toaster richColors position={"top-right"}/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[750px] h-[450px] border-2 border-black flex flex-row justify-center items-center rounded-lg">
                        {/*Login Div*/}
                        <div className="w-3/5 h-full rounded-l-lg">
                            <div className=" w-full h-2/5 flex flex-col justify-end items-center">
                                <h1 className="font-bold text-4xl mb-8 ">Login</h1>
                                <p className="font-light text-lg mb-4">Please enter your Username and Password</p>
                            </div>
                            <div className=" w-full h-2/5 flex flex-col justify-center items-center">
                                <TextField placeholder={"Email"} type={"text"} name={"email"} value={email}
                                           onChange={(e) => {
                                               setEmail(e.target.value)
                                           }}/>
                                <TextField placeholder={"Password"} type={"password"} name={"password"} value={password}
                                           onChange={(e) => {
                                               setPassword(e.target.value)
                                           }}/>
                            </div>
                            <div className="pl-36">
                                <Link  href="/forget-password" >
                                    <p className="text-cyan-950">Forgot your password?</p>
                                </Link>
                            </div>
                            <div className=" w-full h-1/5 mt-2 flex flex-col justify-start items-center">
                                <Button value={"Login"} option={1} type={"submit"}/>
                            </div>
                        </div>
                        {/*{New Here Div}*/}
                        <div
                            className="w-2/5 h-full flex items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-r-md">
                            <div className="w-full h-3/5 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-3xl text-white "> New Here? </h1>
                                <p className="text-center text-white text-lg my-7">Create an account using your personal
                                    information </p>
                                <Link href="/register">
                                    <Button value={"Sign Up"} option={0} type={"button"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPage;

