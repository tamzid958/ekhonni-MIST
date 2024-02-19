"use client"

import axios from "axios";
import {FormEvent, useState} from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

const LoginPage = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        const formDataObject = {
            email : email,
            password : password
        };
        const formData = JSON.stringify(formDataObject);
        console.log(formData);
        const response = await axios.post(`http://localhost:8080/api/v1/user/login?email=${email}&password=${password}`);
        console.log(response);

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-screen h-[700px] flex justify-center items-center">
                <div className="w-[650px] h-[400px] border-2 border-black flex flex-row justify-start items-center rounded-lg">
                    {/*Login Div*/}
                    <div className="w-3/5 h-full rounded-l-lg">
                        <div className=" w-full h-2/5 flex flex-col justify-end items-center">
                            <h1 className="font-bold text-3xl mb-5 ">Login</h1>
                            <p className="font-light ">Please enter your Username and Password</p>
                        </div>
                        <div className=" w-full h-2/5 flex flex-col justify-center items-center">
                            <TextField placeholder={"Email"} type={"text"} name={"email"} value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            <TextField placeholder={"Password"} type={"password"} name={"password"} value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                        </div>
                        <div className=" w-full h-1/5 flex flex-col justify-start items-center">
                            <Button value={"Login"} option={1} type={"submit"}/>
                        </div>
                    </div>
                    {/*{New Here Div}*/}
                    <div className="w-2/5 h-full flex items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-r-md">
                        <div className="w-full h-3/5 flex flex-col items-center justify-center">
                            <h1 className="font-bold text-3xl text-white "> New Here? </h1>
                            <p className="text-center text-white my-7">Create an account using your personal information </p>
                            <Button value={"Sign Up"} option={0} type={"button"}/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default LoginPage