"use client"

import {useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";

const CategoryDropdown = ({name, updateProduct}) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const {data:Categories,error,isLoading} = useSWR('/products/category/all',fetcher);


    return (
        <div>
            <select
                className="w-[350px] h-12 border-2 my-3 border-neutral-900 rounded-lg pl-2 shadow-md shadow-slate-300"
                required name={name}
                onChange={(e) => {
                    setSelectedCategory(e.target.value);
                }}>
                <option disabled selected>Select Category</option>
                {!isLoading && !error && Categories && Categories.map((item) => (
                    <option key={item.name} value={item.name}> {item.name} </option>
                ))}
            </select>
            <div>
                <select
                    className="w-[350px] h-12 border-2  my-3 border-neutral-900 rounded-lg pl-2 shadow-md shadow-slate-300"
                    required
                    name="subcategory"
                    onChange={(e) => {
                        updateProduct(name, {"category":selectedCategory, "subCategory": e.target.value})
                    }}
                >
                    <option value="" disabled selected>Select Subcategory</option>
                    {!isLoading && !error && Categories && Categories.find((categoryObj) => categoryObj.name === selectedCategory)?.subcategories.map(
                        (subcategory) => (
                            <option key={subcategory} value={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                </select>
            </div>

        </div>

    )
}

export default CategoryDropdown;