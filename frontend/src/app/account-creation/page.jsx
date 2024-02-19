"use client"


import TextField from "@/components/TextField";
import Button from "@/components/Button";
import DivisionDropdown from "@/components/DivisionDropdown";
import React, { useState } from 'react';
import {toast, Toaster} from "sonner";
const AccountCreationPage = () =>
{
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
    const [division , setDivision] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        if(password === confirmPassword) {
            const formDataObject = {
                name : name,
                contact : contact,
                email : email,
                address : address,
                division : division,
                password : password
            };
            const formData = JSON.stringify(formDataObject);
            console.log(formData);
            // const response = await axios.post('localhost:8000/api/submit' , formData);
        }
        else {
            toast.error("Passwords must match");
        }
    }
    return(
        <>
            <Toaster expand={false} position={"top-right"} richColors />
            <form onSubmit={handleSubmit}>
                <div className="w-screen h-[700px] flex justify-center items-center">
                    <div className="w-[850px] h-[650px] border-2 border-black flex flex-row justify-start items-center rounded-lg">
                        {/*If already have an account / Log in section*/}
                        <div className="w-2/5 h-full flex justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-l-md">
                            <div className="w-4/5 h-3/5 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-3xl text-white "> Welcome Back!</h1>
                                <p className="text-center text-white my-7">If you already have an account, please log in</p>
                                <Button value={"Log in"}/>
                            </div>
                        </div>
                        {/*For creating account /Sign Up Div*/}
                        <div className="w-3/5 h-full rounded-l-lg">
                            <div className="w-full h-1/8 mt-5 flex flex-col justify-center items-center">
                                <h1 className="font-bold text-3xl my-3 ">Sign Up</h1>
                                <p className="font-light ">Please enter your Username and Password</p>
                            </div>
                            <div className="w-full h-6/8 flex flex-col justify-center items-center">
                                <TextField placeholder={"Name"} type={"text"} name={"name"} value={name} onChange={(e)=> {setName(e.target.value)}}/>
                                <TextField placeholder={"Email"} type={"text"} name={"email"} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                <TextField placeholder={"Contact Number"} type={"text"} name={"contact"} value={contact} onChange={(e) => {setContact(e.target.value)}}/>
                                <TextField placeholder={"Address"} type={"text"} name={"address"} value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                                <DivisionDropdown name={"Division"} setDivision={(setDivision)}/>
                                <TextField placeholder={"Password"} type={"password"} name={"password"} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                                <TextField placeholder={"Confirm Password"} type={"password"} name={"confirmPassword"} value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                            </div>
                            <div className="w-full h-1/6 mt-0 flex justify-center items-start">
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