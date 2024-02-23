"use client"
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import {useEffect, useRef, useState} from "react";
import CategoryDropdown from "@/components/CategoryDropdown";
import Image from "next/image";
import axios from "axios";
import Header from "@/components/Header";
import TwoRadioButtons from "@/components/TwoRadioButtons";


const AddProductPage = () => {

    //const sellerEmail = localStorage.getItem("currentUserEmail");
    const sellerEmail = "demoEmail";
    const seller = {
        email : sellerEmail
    }
    const [category , setCategory] = useState("");
    const [subCategory , setSubCategory] = useState("")
    const [name , setName] = useState("");
    const [size , setSize] = useState("");
    const [description , setDescription] = useState("");
    const [startingPrice , setStartingPrice] = useState(null);
    const [usedCondition , setUsedCondition] = useState(false);
    const [isVisible , setIsVisible] = useState(false);
    const [image , setImage] = useState('');

    // const formData = new FormData();
    const inputRef = useRef(null);
    const imageClick = () => {
        inputRef.current.click();
    }
    const handleImageInput = async (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    const formData =new FormData();
    useEffect(() => {
        formData.append("category" , category);
        formData.append("subCategory" , subCategory);
        formData.append("name" , name);
        formData.append("size" , size);
        formData.append("description" , description);
        formData.append("startingPrice" , startingPrice);
        formData.append("email" , seller);
        formData.append("usedCondition" , usedCondition);
        formData.append("isVisible" , isVisible);
        formData.append("image", image);

        for (const [key, value] of formData.entries()) {
            console.log(key + ": " + value);
        }
    }, [image]);
    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append("category" , category);
        formData.append("subCategory" , subCategory);
        formData.append("name" , name);
        formData.append("size" , size);
        formData.append("description" , description);
        formData.append("startingPrice" , startingPrice);
        formData.append("email" , seller);
        formData.append("usedCondition" , usedCondition);
        formData.append("isVisible" , isVisible);
        formData.append("image", image);
        // const formData = JSON.stringify(formDataObject);
        for (const [key, value] of formData.entries()) {
            console.log(key + ": " + value);
        }
        // const response = await axios.post("/api/v1/user/products/save" , formData);
    }

    // const api = axios.create({
    //     baseURL : "/api"
    // });
    //
    // api.interceptors.request.use(
    //     (config) => {
    //         const token = localStorage.getItem("token");
    //         if(token) {
    //             config.headers.Authorization = `Bearer ${token}`
    //         }
    //         return config;
    //     },
    //     (error) => Promise.reject(error)
    // );
    // api.interceptors.response.use(
    //     (response) => response,
    //     async (error) => {
    //         const originalRequest = error.config;
    //         if (error.response.status === 401 && !originalRequest._retry) {
    //             originalRequest._retry = true;
    //             try {
    //                 const refreshToken = localStorage.getItem("refreshToken");
    //                 const response = await axios.post("/api/refresh-token" , { refreshToken });
    //                 const {token} = response.data;
    //
    //                 localStorage.setItem("token" , token);
    //
    //                 originalRequest.headers.Authorization = `Bearer ${token}`;
    //                 return axios(originalRequest);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         return Promise.reject(error);
    //     }
    // )
    // export default api;
    return (

        <>
        <Header />
        <form onSubmit={handleSubmit}>
            <div className="w-screen h-[700px] flex justify-center items-start">
                <div className="w-4/6 h-full">
                    <div className="w-full h-[5%] my-3 flex justify-center items-center">
                        <h1 className="text-3xl font-semibold ">Product Details</h1>
                    </div>
                    <div className="w-full h-[85%] bg-gray-600 border-2 border-black drop-shadow-lg flex justify-center items-center rounded-lg">
                        <div className="w-[97%] h-[92%]  flex flex-row">
                            <div className="w-1/2 h-full border-2 border-black bg-white rounded-l-lg">
                                <div className="rounded-lg cursor-pointer w-full h-full flex flex-col justify-center items-center text-lg" onClick={imageClick}>
                                    <input className="hidden" name="img" type="file" required ref={inputRef} onChange={handleImageInput}/>
                                    {image? <img className="w-full h-full" src={URL.createObjectURL(image)} alt='' /> :
                                    <>
                                        <Image src={"/upload_image.svg"} alt={"upload"} width={40} height={40}/>
                                        <p className="text-neutral-900 mt-5">Enter Product Image</p>
                                    </>}
                                    {/*<p className="mt-5 text-white text-lg">Enter Product Image</p>*/}
                                </div>
                            </div>
                            <div className="w-1/2 h-full bg-neutral-900 rounded-r-lg flex flex-col items-center">
                                <div className="w-5/6 h-[10%] flex justify-center items-center">
                                    <p className="text-lg mt-4 text-white font-light">Enter Your Product Information Below</p>
                                </div>
                                <div className="w-5/6 h-[75%] flex flex-col justify-start items-center">
                                    <CategoryDropdown name={"category"} setCategory={(setCategory)} setSubCategory={setSubCategory}/>
                                    <TextField placeholder={"Product Name"} type={"text"} name={"name"} value={name} onChange={(e) => {setName(e.target.value)}}/>
                                    <TextField placeholder={"Product Size"} type={"text"} name={"size"} value={size} onChange={(e) => {setSize(e.target.value)}}/>
                                    <TextField placeholder={"Description"} type={"text"} name={"description"} value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                                    <TextField placeholder={"Starting Price"} type={"number"} name={"startingPrice"} value={startingPrice} onChange={(e) => {setStartingPrice(e.target.value)}}/>
                                </div>
                                <div className="w-5/6 h-[15%] flex justify-start items-center">
                                    <TwoRadioButtons label={"Condition"} inputLabel1={"Used"} inputLabel2={"New"} value={usedCondition} setValue={setUsedCondition} />
                                    <TwoRadioButtons label={"Bidding"} inputLabel1={"Public"} inputLabel2={"Private"} value={isVisible} setValue={setIsVisible}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[10%]  flex justify-end items-center">
                            <div className="w-fit h-fit mr-2 mb-3">
                                <Button value={"Post Ad"} option={1} type={"submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddProductPage;