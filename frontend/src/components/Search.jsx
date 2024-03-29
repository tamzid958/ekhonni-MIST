"use client"

import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";


const Search = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <div className="w-full h-[50px] bg-slate-100 border-black flex justify-center overflow-hidden">
                <div className=" flex relative">
                    <input type="text" placeholder="What are you searching for?" value={value}
                           onChange={(e) => setValue(e.target.value)}
                           className="border-2 border-black p-4 w-[500px] h-10 rounded-3xl"/>
                    <Link href={`/products?search=${value}`}><Image src={"/search.svg"} alt={"image"} width={25} height={25}
                                 className="absolute right-2 top-1.5 cursor-pointer" /></Link>

                </div>
            </div>
        </>
    )
}
export default Search;