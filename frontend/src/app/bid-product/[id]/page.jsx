"use client"

import Image from "next/image";
import axios from "axios";
import {useEffect} from "react";


const ProductBidPage = ({ params }) => {

    const product_id = params.id;
    const  fetchProductDetails = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/products/${product_id}`);
        console.log(response);
    }
    useEffect(() => {
        fetchProductDetails().then(r => {
            console.log(r);
        });
    }, []);
    return (
        <div className="w-screen h-[700px] flex justify-center items-center">
            <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-start items-center rounded-lg">
                <div className="w-1/2 h-full border-2 border-red-600 flex justify-center items-center">
                    <div className="w-[95%] h-[90%] border-2 border-green-500 relative">
                        <Image src={"/dslr.jpg"} alt={"dslr"} priority fill style={{borderRadius:"3%"}}/>
                    </div>
                </div>
                <div className="w-1/2 h-full border-2 border-blue-500 flex justify-center items-center">
                    <div className="w-3/4 h-full border-2 border-amber-300 flex flex-col justify-center items-center">
                        <div className="w-full h-1/5 flex justify-start items-center  border-2 border-black">
                            <h1 className="text-3xl text-black font-medium text-left">
                                Product Name
                            </h1>
                        </div>
                        <div className="w-full h-1/5 flex flex-row border-2 border-black">
                            <div className="w-full h-1/3 flex">
                                <p className="text-lg">Category , </p>
                                <p className="text-lg ml-2">Subcategory</p>
                            </div>
                            <div className="w-full h-1/3 flex">
                                <p className="text-lg"></p>
                            </div>
                            <div className="w-full h-1/3 flex">
                                <p className="text-lg"></p>
                            </div>
                        </div>
                        <div className="w-full h-1/5 border-2 border-black">

                        </div>
                        <div className="w-full h-1/5 border-2 border-black">

                        </div>
                        <div className="w-full h-1/5 border-2 border-black">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductBidPage;