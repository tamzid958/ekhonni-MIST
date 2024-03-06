"use client"
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {requestApi} from "@/utils/axios.settings";

const RemoveAdminModal = ({setRemoveAdminModalIsOpen}) => {

    let email = "";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = {
            "content-type": "application/json"
        }
        console.log(email)
        const res = await requestApi({
            req,
            url: "/admin/delete-admin",
            method: "POST",
            params: {
                email: email
            }
        })
        setRemoveAdminModalIsOpen(false)
    }

    const handleInputChange = (e) => {
        email = e.target.value;
    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div
                    className=" z-10 mt-[101px] absolute inset-0 flex justify-center items-center  bg-opacity-20 backdrop-blur-[2px] flex-col">
                    <div className="w-[450px] h-[2px] left-0 bg-transparent z-10 flex justify-end items-center">
                        <button onClick={() => {
                            setRemoveAdminModalIsOpen(false)
                        }}><p className="text-black mb-4 mr-7">X</p></button>
                    </div>
                    <div
                        className="w-[400px] h-[250px]  left-0 border-neutral-400 bg-slate-100 rounded-lg  flex  flex-col justify-center  items-center mb-4">

                        <div
                            className="w-full h-full   flex flex-col justify-center items-center rounded-lg   shadow-md shadow-slate-500 mb-4 ">
                            <div className="w-10/12 h-1/5  flex flex-col justify-center items-center mt-8 ">
                                <p className="text-3xl font-medium my-3 mt-4">Remove Admin</p>
                                <p className="text-lg mb-4"> Enter Email Address</p>
                            </div>


                            <div className=" w-10/12 h-[30%] flex  flex-col justify-center items-center mb-4 mt-4 ">
                                <TextField placeholder={"Email"} type={"text"}
                                           name={"email"}
                                           onChange={(e) => handleInputChange(e)}
                                />

                            </div>
                            <div className=" w-10/12  h-1/5 flex flex-col justify-start items-end -mr-4">
                                <Button value={"Remove"} option={1} type={"submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    );
}

export default RemoveAdminModal;