"use client"


import {useEffect, useState} from 'react';

const AdminModal = ({setAddAdminModal}) => {
    const [addAdminModal, setModalIsOpen] = useState(false);

    const setAddAdminModalIsOpen = () => {
        setModalIsOpen((prevState) => !prevState);
    }
    useEffect(() => {
        setAddAdminModal(addAdminModal)
    }, [addAdminModal]);


    // if (!isVisible) return null;
    return (
        <>
            <div className=" mt-[101px] absolute inset-0 flex justify-start items-center ">
                <div className="w-[300px] h-full  shadow-lg shadow-black left-0 border-neutral-400 bg-slate-100  ">
                    <div className="w-[90%] h-32 pt-3 text-xl bg-white my-5 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">
                        <div className="w-full h-2/3 flex justify-start items-center overflow-hidden transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">
                            <p className="w-full pl-2  mx-4  rounded shadow-md shadow-slate-400 text-wrap break-all text-base ">shadmanskystar@gmail.com</p>
                        </div>
                        <p className="w-full pl-4 text-xl">Pending posts:</p>
                    </div>
                    <div className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                        onClick={setAddAdminModalIsOpen}> &nbsp; &nbsp;<span className="font-semibold">+&nbsp;</span>Add
                        Admin
                    </div>
                    <div className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">
                        &nbsp;&nbsp;
                       <span className="font-semibold">-&nbsp;</span>Remove Admin
                    </div>
                    <div className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                        <span className="font-semibold">+&nbsp;</span>Add Category
                    </div>
                    <div className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                        <span className="font-semibold">-&nbsp;</span>Remove Category
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminModal;