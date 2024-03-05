"use client"
import {useContext, useState} from "react";
import {requestApi} from "@/utils/axios.settings";
import useSWR from 'swr'
import {fetcher} from "@/utils/fetcher";

const InputBox = ({Name, value, type}) => {
    const [edit, setEdit] = useState(false);
    const [UserNewData, setUserNewData] = useState(value);
    const { data, error,isLoading,mutate } = useSWR('/user/profile', fetcher)

    const req = {
        'Content-Type': 'application/json'
    }
    const url= '/user/profile/update'
    const method="PUT"

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleSave = async  () => {
        setEdit(false);
        if (UserNewData) {
            const name = Name.toLowerCase();
            const data = {
                [name]: UserNewData
            }

            const {data:value} =await requestApi({req,url,method,data})
            mutate({...data,[name]:UserNewData});
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
                            value={UserNewData}
                            placeholder={value}
                            onChange={(e) => setUserNewData(e.target.value)}
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
