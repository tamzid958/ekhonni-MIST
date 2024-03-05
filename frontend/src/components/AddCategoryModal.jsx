"use client"
import {useState,useEffect} from 'react';
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import axios from "axios";
const AddCategoryModal = ({CloseModel}) => {
    const [closeModel, setCloseModel] = useState(false);
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const CloseButton = () => {
        setCloseModel(false);
        CloseModel(false);
    }
    // const router = useRouter();
    // const [route, setRoute] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        const formDataObject = {

            category: category,
            subcategory:subcategory
        };
    }
    return (

        <>
            <form onSubmit={handleSubmit}>


            <div
                className=" z-20  absolute inset-0 flex justify-center items-center  bg-opacity-20 backdrop-blur-[1px] flex-col">
                <div className="w-[450px] h-[2px] left-0 bg-transparent z-10 flex justify-end items-center">
                    <button onClick={CloseButton}><p className="text-amber-50 mb-4 mr-1">X</p></button>
                </div>
                <div className="w-[450px] h-[375px]  left-0 border-neutral-400 bg-slate-100 rounded-lg  flex  flex-col justify-center  items-center">

                    <div className="w-full h-full   flex flex-col justify-center items-center rounded-lg   shadow-md shadow-slate-500 ">
                        <div className="w-10/12 h-1/5  flex flex-col justify-center items-center mb-4 ">
                            <p className="text-3xl font-medium my-3">Add New Category</p>
                            <p className="text-lg"> Enter Category and Subcategory</p>
                        </div>


                        <div className=" w-10/12 h-2/5 flex  flex-col justify-center items-center ">
                            <TextField placeholder={"Category"} type={"text"}
                                       name={"category"} value={category}
                                       onChange={(e) => {
                                           setCategory(e.target.value)
                                       }}
                            />
                            <TextField placeholder={"Subcategory"} type={"text"} name={"subcategory"}
                                       value={subcategory}
                                       onChange={(e) => {
                                           setSubcategory(e.target.value)
                                       }}
                            />
                        </div>
                        <div className=" w-10/12  h-1/5 flex flex-col justify-center items-end mr-6">
                            <Button onClick={CloseButton} value={"Add Category"} option={1} type={"submit"}/>
                        </div>

                    </div>

                </div>

            </div>
            </form>

        </>

    );
}
export default AddCategoryModal