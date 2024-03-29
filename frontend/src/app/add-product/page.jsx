"use client"
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import {useRef, useState} from "react";
import CategoryDropdown from "@/components/CategoryDropdown";
import Image from "next/image";
import Header from "@/components/Header";
import TwoRadioButtons from "@/components/TwoRadioButtons";
import {baseUrl} from "@/utils/baseUrl";
import {addProductFetcher, postCallFetcher} from "@/utils/fetcher";
import useSWRMutation from "swr/mutation";
import {toast, Toaster} from "sonner";
import {useRouter} from "next/navigation";


const AddProductPage = () => {

    const router = useRouter();
    const [image, setImage] = useState('');
    const [product, setProduct] = useState({
        "category": {
            "category": "",
            "subCategory": ""
        },
        "name": "",
        "size": "",
        "description": "",
        "startingPrice": null,
        "usedCondition": false,
        "isVisible": false
    });

    const updateProduct = (name, value) => {
        setProduct((prevData) => ({...prevData, [name]: value}));

    }

    const inputRef = useRef(null);
    const imageClick = () => {
        inputRef.current.click();
    }
    const handleImageInput = async (e) => {
        const file = e.target.files[0];
        setImage(file);
    }


    const url = '/user/products/save';
    const method = 'POST';
    const headers = {
        'Content-Type': 'multipart/form-data'

    }
    const { trigger} = useSWRMutation([baseUrl, url, method, headers], postCallFetcher);

    const formData = new FormData();
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.append("product", new Blob([JSON.stringify(product)], {type: 'application/json'}));
        formData.append("imageFile", image);

        try {
            const result = await trigger(formData)
            // console.log(result)
            if (result?.data) {
                toast.success("Product added successfully");
                setTimeout(() => {
                    router.push("/");
                }, 2000)
            }
            // if(result)
        } catch (e) {
            // console.log(e)
            toast.error(e.message)
        }
    }

    return (

        <>
            <Toaster richColors position={"top-right"}/>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-full flex justify-center items-start">
                    <div className="w-[1100px] h-[750px]">
                        <div className="w-full h-[5%] my-3 flex justify-center items-center">
                            <h1 className="text-3xl font-semibold ">Enter Product Details</h1>
                        </div>
                        <div
                            className="w-full h-[80%] bg-gray-600 border-2 border-black drop-shadow-lg flex justify-center items-center rounded-lg">
                            <div className="w-[97%] h-[92%]  flex flex-row">
                                <div className="w-1/2 h-full border-2 border-black bg-white rounded-l-lg">
                                    <div
                                        className="rounded-lg cursor-pointer w-full h-full flex flex-col justify-center items-center text-lg"
                                        onClick={imageClick}>
                                        <input className="hidden" name="img" type="file" ref={inputRef}
                                               onChange={handleImageInput}/>
                                        {image ?
                                            <img className="w-full h-full rounded-l-md" src={URL.createObjectURL(image)}
                                                 alt=''/> :
                                            <>
                                                <Image src={"/upload_image.svg"} alt={"upload"} width={40} height={40}/>
                                                <p className="text-neutral-900 mt-5 rounded-l-md">Enter Product
                                                    Image</p>
                                            </>}
                                        {/*<p className="mt-5 text-white text-lg">Enter Product Image</p>*/}
                                    </div>
                                </div>
                                <div className="w-1/2 h-full bg-neutral-900 rounded-r-lg flex flex-col items-center">
                                    <div className="w-5/6 h-[10%] flex justify-center items-center">
                                        <p className="text-lg mt-4 text-white font-light">Enter Your Product Information
                                            Below</p>
                                    </div>
                                    <div className="w-5/6 h-[75%] flex flex-col justify-start items-center">
                                        <CategoryDropdown name={"category"}
                                                          updateProduct={(name, value) => updateProduct(name, value)}/>
                                        <TextField placeholder={"Product Name"} type={"text"} name={"name"}
                                                   value={product.name}
                                                   onChange={(e) => {
                                                       // setName(e.target.value)
                                                       updateProduct(e.target.name, e.target.value)
                                                   }}/>
                                        <TextField placeholder={"Product Size"} type={"text"} name={"size"}
                                                   value={product.size}
                                                   onChange={(e) => {
                                                       // setSize(e.target.value)
                                                       updateProduct(e.target.name, e.target.value)
                                                   }}/>
                                        <TextField placeholder={"Description"} type={"text"} name={"description"}
                                                   value={product.description} onChange={(e) => {
                                            // setDescription(e.target.value)
                                            updateProduct(e.target.name, e.target.value)
                                        }}/>
                                        <TextField placeholder={"Starting Price"} type={"number"} name={"startingPrice"}
                                                   value={product.startingPrice} onChange={(e) => {
                                            // setStartingPrice(e.target.value)
                                            updateProduct(e.target.name, e.target.value)
                                        }}/>
                                    </div>
                                    <div className="w-5/6 h-[15%] flex justify-start items-center">
                                        <TwoRadioButtons label={"Condition"} inputLabel1={"Used"} inputLabel2={"New"}
                                                         name={"usedCondition"}
                                                         value={product.usedCondition}
                                                         setValue={(name, value) => updateProduct(name, value)}/>
                                        <TwoRadioButtons label={"Bidding"} inputLabel1={"Public"}
                                                         inputLabel2={"Private"}
                                                         name={"isVisible"}
                                                         value={product.isVisible}
                                                         setValue={(name, value) => updateProduct(name, value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[15%] flex justify-end items-center">
                            <div className="w-fit h-fit mr-2 mb-10">
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