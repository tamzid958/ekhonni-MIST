"use client"

const AdminModal = () => {
    const handleModalCloseOnBgClick = (e) => {
        if (e.target.id === "") {
            onClose();
        }
    };
        return (

            <>
                <div className="fixed inset-0 flex justify-start items-center">
                    <div
                        className="w-[300px] h-full mt-48 shadow-lg shadow-black left-0 border-neutral-400 bg-slate-100 ">


                        <div
                            className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1"> &nbsp;&nbsp;Profile
                        </div>
                        <div
                            className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1"> &nbsp; &nbsp;
                            <span className="font-semibold">+&nbsp;</span>Add Admin
                        </div>
                        <div
                            className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                            <span className="font-semibold">-&nbsp;</span>Remove Admin
                        </div>
                        <div
                            className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                            <span className="font-semibold">+&nbsp;</span>Add Category
                        </div>
                        <div
                            className="w-[90%] h-12 pt-3 text-xl bg-white my-5 border-neutral-400 mx-4  rounded shadow-md shadow-slate-400 transition ease-in-out duration-500 hover:scale-105 hover:-translate-y-1">&nbsp;&nbsp;
                            <span className="font-semibold">-&nbsp;</span>Remove Category
                        </div>

                    </div>

                </div>

            </>

        );
};
export default AdminModal