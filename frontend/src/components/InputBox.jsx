"use client"
import { useEffect, useState, useContext } from "react";
import { UserContext } from "@/Context/UserContext";
import axios from "axios";

const InputBox = ({ Name, value, type }) => {
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState(value);
    const user = useContext(UserContext);
    const email = localStorage.getItem("currentUserEmail");
    const token = localStorage.getItem("token");
    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleSave = () => {
        setEdit(false);
        if(data){
            const name = Name.toLowerCase();
            const UpdateValue = {
                [name]: data
            }
            console.log(JSON.stringify(UpdateValue));
            axios.put(`http://localhost:8080/api/v1/user/profile/update/${email}`,UpdateValue,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json' // Specify content type if required
                }
            })
                .then((res) => {
                    window.location.reload();
                    // console.log(res)
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                });
        }

    }


    return (
        <div className="w-full mt-3">
            <h1 className="text-xl pb-2">{Name}</h1>
            <div className="flex gap-x-5 items-center">
                {edit ? (
                    <>
                        <input
                            type={type}
                            name={Name}
                            value={data}
                            placeholder={value}
                            onChange={(e) => setData(e.target.value)}
                            className="w-[500px] h-10 tracking-wider"
                        />
                        <p onClick={handleSave} className="cursor-pointer">Save</p>
                    </>
                ) : (
                    <>
                        <p className="w-[500px] h-10 tracking-wider">{value}</p>
                        <p onClick={handleEdit} className="cursor-pointer">Edit</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default InputBox;
