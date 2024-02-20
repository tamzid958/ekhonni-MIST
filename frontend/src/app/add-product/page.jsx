"use client"
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import {useState} from "react";
import CategoryDropdown from "@/components/CategoryDropdown";

const AddProductPage = () => {
    const [category , setCategory] = useState("");
    const [subCategory , setSubCategory] = useState("")
    const [name , setName] = useState("");
    const [size , setSize] = useState("");
    const [description , setDescription] = useState("");
    const [startingPrice , setStartingPrice] = useState("");
    const [used , setUsed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataObject = {
            category : category,
            subCategory: subCategory,
            name : name,
            size: size,
            description : description,
            startingPrice : startingPrice,
            used : used
        }
        const formData = JSON.stringify(formDataObject);
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-screen h-[750px] flex justify-center items-start">
                <div className="w-4/6 h-full">
                    <div className="w-full h-[5%] my-3 flex justify-center items-center">
                        <h1 className="text-3xl font-semibold ">Product Details</h1>
                    </div>
                    <div className="w-full h-[85%] bg-gray-600 border-2 border-black drop-shadow-lg flex justify-center items-center rounded-lg">
                        <div className="w-[97%] h-[92%]  flex flex-row">
                            <div className="w-1/2 h-full border-2 border-blue-500 rounded-l-lg">

                            </div>
                            <div className="w-1/2 h-full bg-neutral-900 rounded-r-lg flex flex-col items-center">
                                <div className="w-5/6 h-[10%] flex justify-center items-center">
                                    <p className="text-lg mt-4 text-white font-light">Enter Your Product Information Below</p>
                                </div>
                                <div className="w-5/6 h-[77.5%] border-2 border-pink-600 flex flex-col justify-start items-center">
                                    <CategoryDropdown name={"category"} setCategory={(setCategory)} setSubCategory={setSubCategory}/>
                                    <TextField placeholder={"Product Name"} type={"text"} name={"name"} value={name} onChange={(e) => {setName(e.target.value)}}/>
                                    <TextField placeholder={"Product Size"} type={"text"} name={"size"} value={size} onChange={(e) => {setSize(e.target.value)}}/>
                                    <TextField placeholder={"Description"} type={"text"} name={"description"} value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                                    <TextField placeholder={"Starting Price"} type={"text"} name={"startingPrice"} value={startingPrice} onChange={(e) => {setStartingPrice(e.target.value)}}/>
                                </div>
                                <div className="w-5/6 h-[15%] flex flex-col justify-center items-start">
                                    <div className="w-full h-1/2 flex justify-center items-start">
                                        <p className="text-white text-lg font-light text-left">Condition</p>
                                    </div>
                                    <div className="w-full h-1/2 flex flex-row justify-center items-start">
                                        <input className="w-7 h-7 mr-2 cursor-pointer" type="radio" required name="used" value={used} onChange={(e) => {setUsed(true)}} id="used"/>
                                        <label className="text-white font-light mr-32 cursor-pointer" htmlFor="used">Used</label>
                                        <input className="w-7 h-7 mr-2 cursor-pointer" type="radio" required name="used" value={used} onChange={(e) => {setUsed(false)}} id="new"/>
                                        <label className="text-white font-light cursor-pointer" htmlFor="new">New</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[10%]  flex justify-end items-center">
                        <div className="w-fit h-fit mr-2">
                            <Button value={"Post Ad"} option={"0"} type={"submit"}/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddProductPage;