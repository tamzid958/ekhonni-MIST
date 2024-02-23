"use client"
import {useState,useEffect} from "react";

const InputBox = ({Name,value,type})=>{
    const [edit,setEdit] = useState(false);
    const Edit = ()=>{
        edit? setEdit(false):setEdit(true);
    }
    return (
        <>
        <div className="w-full mt-3">
            <h1 className="text-xl pb-2">{Name}</h1>
            <div className={"flex gap-x-5 items-center"}>
                {edit ? (<>

                    <input type={type} value={value} className={`w-[500px] h-10 tracking-wider`}/>
                    <p onClick={Edit} className={"cursor-pointer"}>Save </p>
                </>) : (<>
                    <p className={`w-[500px] h-10 tracking-wider`}>{value}</p>
                    <p className={"cursor-pointer"} onClick={Edit}>Edit</p>
                </>)}
            </div>
        </div>
        </>
    )
}
export default InputBox;