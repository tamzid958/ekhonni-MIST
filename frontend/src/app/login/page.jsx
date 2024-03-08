"use client"

import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Link from "next/link";
import {Toaster} from "sonner";
import Header from "@/components/Header";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";


const LoginPage = () => {
    let formData = {
        email: "",
        password: ""
    }
    const requestParams = useSearchParams()
    const handleInputChange = (e, field) => {
        formData[field] = e.target.value;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        const response = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: true,
            callbackUrl: "/redirect"
        })
    }

    return (
        <>
            <Header/>
            <Toaster richColors position={"top-right"}/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[750px] h-[450px] border-2 border-black flex flex-row justify-center items-center rounded-lg">
                        {/*Login Div*/}
                        <div className="w-3/5 h-full rounded-l-lg">
                            <div className=" w-full h-2/5 flex flex-col justify-end items-center">
                                <h1 className="font-bold text-4xl mb-8 ">Login</h1>
                                <p className="font-light text-lg ">Please enter your Username and Password</p>
                            </div>
                            <div className=" w-full h-2/5 flex flex-col justify-center items-center">
                                <TextField placeholder={"Email"} type={"text"} name={"email"}
                                           onChange={(e) => {
                                               handleInputChange(e, "email")
                                           }}/>
                                <TextField placeholder={"Password"} type={"password"} name={"password"}
                                           onChange={(e) => {
                                               handleInputChange(e, "password")
                                           }}/>
                                <div className="flex justify-center">
                                    <Link href="/forget-password">
                                        <p className="text-cyan-700 text-sm">Forgot your password?</p>
                                    </Link>
                                </div>
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

