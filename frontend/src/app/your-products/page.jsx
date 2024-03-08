"use client"
import SingleProduct from "@/components/SingleProduct"
import Header from "@/components/Header";


export default function YourProducts() {
        


    return (
        <>
            <Header/>
            <div>
                <p className="font-bold text-3xl ml-[300px] my-4 ">Your Products</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-center ">
                {data.map((item) => (
                    <SingleProduct key={item.id} id={item.id} name={item.name} description={item.description}
                                   totalbid={item.totalbid} price={item.price} time={item.time} maxbid={item.maxbid}/>
                ))}

            </div>
        </>
    )
}
