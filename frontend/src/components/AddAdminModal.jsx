"use client"
import {useState} from 'react';
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {requestApi} from "@/utils/axios.settings";
import {useSession} from "next-auth/react";

const AddAdminModal = ({CloseModel}) => {
    const [closeModel, setCloseModel] = useState(false)
    const {data: session} = useSession();
    let formData = {
        email: "",
        password: ""
    };
    const CloseButton = () => {
        setCloseModel(false);
        CloseModel(false);
    }

    const handleSubmit = async () => {

        const req = {
            token: session?.user.token,
            "content-type": "application/json"
        }
        console.log(formData)
        CloseButton();
        const res = await requestApi({
            req,
            url: "/admin/add-admin",
            method: "POST",
            data: formData
        })
    }

    const handleInputChange = (e, field) => {
        formData[field] = e.target.value;
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <div
                    className=" z-20  absolute inset-0 flex justify-center items-center  bg-opacity-20 backdrop-blur-[1px] flex-col">
                    <div className="w-[450px] h-[2px] left-0 bg-transparent z-10 flex justify-end items-center">
                        <button onClick={CloseButton}><p className="text-amber-50 mb-4 mr-1 text-black">X</p>
                        </button>
                    </div>
                    <div
                        className="w-[450px] h-[375px]  left-0 border-neutral-400 bg-slate-100 rounded-lg  flex  flex-col justify-center  items-center">

                        <div
                            className="w-full h-full   flex flex-col justify-center items-center rounded-lg   shadow-md shadow-slate-500 ">
                            <div className="w-10/12 h-1/5  flex flex-col justify-center items-center mb-4 ">
                                <p className="text-3xl font-medium my-3">New Admin Info</p>
                                <p className="text-lg"> Enter Email and Password</p>
                            </div>


                            <div className=" w-10/12 h-2/5 flex  flex-col justify-center items-center ">
                                <TextField placeholder={"Email"} type={"text"}
                                           name={"email"}
                                    // value={email}
                                    // onChange={(e) => {
                                    //     setEmail(e.target.value)
                                    // }}
                                           onChange={(e) => handleInputChange(e, 'email')}
                                />
                                <TextField placeholder={"Password"} type={"password"} name={"password"}
                                    // value={password}
                                    // onChange={(e) => {
                                    //     setPassword(e.target.value)
                                    // }}
                                           onChange={(e) => handleInputChange(e, 'password')}
                                />
                            </div>
                            <div className=" w-10/12  h-1/5 flex flex-col justify-center items-end mr-6">
                                <Button value={"Add Admin"} option={1} type={"submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>

    );
}
export default AddAdminModal