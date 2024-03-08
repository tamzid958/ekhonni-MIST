"use client"

import {jwtDecode} from "jwt-decode";
import {useSession} from "next-auth/react";

const AdminModal = ({
                        setAddAdminModalIsOpen,
                        setRemoveAdminModalIsOpen,
                        setAddCategoryModalIsOpen,
                        pendingPostCount
                    }) => {

    const {data: session} = useSession();
    const token = session?.user.token
    const decoded = jwtDecode(token);

    return (
        <>
            <div className=" mt-[101px] absolute inset-0 flex justify-start items-center ">
                <div className="w-[300px] h-full  shadow-lg shadow-black left-0 border-neutral-400 bg-slate-100  ">

                    <div
                        className="w-[90%] h-32 pt-3 text-xl bg-white my-5 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">
                        <div
                            className="w-full h-2/3 flex justify-start items-center overflow-hidden transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">
                            <p className="w-full pl-2  mx-4  rounded shadow-md shadow-slate-400 text-wrap break-all text-base ">{decoded.sub}</p>
                        </div>
                        <p className="w-full pl-4 text-xl">Pending posts:&nbsp;<span
                            className="rounded-lg px-3  border border-slate-300 bg-slate-200 shadow-slate-400 shadow-sm ">{pendingPostCount}</span>
                        </p>
                    </div>

                    <div
                        className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                        onClick={() => {
                            setAddAdminModalIsOpen(true)
                        }}> &nbsp; &nbsp;<span className="font-semibold">+&nbsp;</span>Add
                        Admin
                    </div>
                    <div
                        className="cursor-pointer w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4 rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1"
                        onClick={() => {
                            setRemoveAdminModalIsOpen(true)
                        }}>

                        &nbsp;&nbsp;
                        <span className="font-semibold">-&nbsp;</span>Remove Admin
                    </div>

                    <div onClick={() => {
                        setAddCategoryModalIsOpen(true)
                    }}
                         className="w-[90%] h-12 pt-3 text-xl bg-white cursor-pointer my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                        <span className="font-semibold">+&nbsp;</span>Add Category
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminModal;