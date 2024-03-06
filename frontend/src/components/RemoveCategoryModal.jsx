"use client"
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {requestApi} from "@/utils/axios.settings";

const RemoveCategoryModal = ({setRemoveCategoryModalIsOpen}) => {
    let formData = {
        category: "",
        subCategory: ""
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = {
            "content-type": "application/json"
        }
        console.log(formData)
        const res = await requestApi({
            req,
            url: "/admin/delete-category",
            method: "POST",
            data: formData
        })
        setRemoveCategoryModalIsOpen(false)
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
                        <button onClick={() => {
                            setRemoveCategoryModalIsOpen(false)
                        }}><p className="text-black mb-4 mr-1">X</p></button>
                    </div>
                    <div
                        className="w-[450px] h-[375px]  left-0 border-neutral-400 bg-slate-100 rounded-lg  flex  flex-col justify-center  items-center">

                        <div
                            className="w-full h-full   flex flex-col justify-center items-center rounded-lg   shadow-md shadow-slate-500 ">
                            <div className="w-10/12 h-1/5  flex flex-col justify-center items-center mb-4 ">
                                <p className="text-3xl font-medium my-3">Remove Category</p>
                                <p className="text-lg"> Enter Category and Subcategory</p>
                            </div>


                            <div className=" w-10/12 h-2/5 flex  flex-col justify-center items-center ">
                                <TextField placeholder={"Category"} type={"text"}
                                           name={"category"}
                                           onChange={(e) => handleInputChange(e, 'category')}
                                />
                                <TextField placeholder={"Subcategory"} type={"text"} name={"subcategory"}
                                           onChange={(e) => handleInputChange(e, 'subCategory')}
                                />
                            </div>
                            <div className=" w-10/12  h-1/5 flex flex-col justify-center items-end mr-6">
                                <Button value={"Remove"} option={1} type={"submit"}/>
                            </div>

                        </div>

                    </div>

                </div>
            </form>

        </>

    );
}
export default RemoveCategoryModal