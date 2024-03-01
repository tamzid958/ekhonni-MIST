"use client"

import {useState} from "react";
import {useRouter} from "next/navigation"
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import axios from "axios";

import {toast, Toaster} from "sonner";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault();
        const formDataObject = {
            email: email,
            password: password
        };

        axios.post('http://localhost:8080/api/v1/admin/login', formDataObject)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("currentUserEmail", email);

                    console.log(response);
                    toast.success("Logged in Successfully")
                    router.push("/admin-page");
                }
            })
            .catch((err) => {
                console.error("Err :" + err);
                toast.error("Incorrect Credential.")
            })

    }

    return (


        <>
            <Toaster richColors position={"top-right"}/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">

                    <div
                        className="w-[690px] h-[400px] border-2 border-black flex flex-row justify-start items-center rounded-lg">
                        {/*Login Div*/}
                        <div className="w-3/5 h-full rounded-l-lg">
                            <div className=" w-full h-2/5 flex flex-col justify-end items-center">
                                <h1 className="font-bold text-3xl mb-5 ">Admin Login</h1>
                                <p className="font-light ">Please enter your Username and Password</p>
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
                            <div className=" w-full h-1/5 flex flex-col justify-start items-center">
                                <Button value={"Login"} option={1} type={"submit"}/>
                            </div>
                        </div>
                        <div
                            className="w-2/5 h-full flex justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-r-lg">
                            <div className="w-full h-3/5 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-2xl text-center text-white "> Can&apos;t Gain
                                    Access? </h1>
                                <p className="text-center text-white my-7">An admin must add you as an admin first</p>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default AdminLogin