"use client"

import BidderList from "@/components/BidderList";
import {useState} from "react";
import Button from "@/components/Button";

const BuyerBidModal = ({visibility , maxBid}) => {

    const [bid , setBid] = useState(null);
    const bidders = [
        {name: "Buyer 1",
         bid: 10000},
        {name: "Buyer 2",
         bid: 10000},
        {name: "Buyer 3",
         bid: 10000}
    ];
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-[1px] flex  justify-center items-center">
                <div className="w-[40%] h-[60%] flex flex-col">
                    <button className="text-white text-lg font-semibold ml-3 place-self-end transition ease-in-out duration-500 hover:scale-110 active:scale-90">X</button>
                    <div className="w-full h-full bg-gray-50 flex justify-center items-center rounded-lg">
                        <div className="w-[80%] h-[80%] border-2 border-black flex flex-col justify-start items-center">
                            <div className="w-full h-[25%] border-2 border-black overflow-hidden flex justify-start items-center  bg-slate-100 shadow-md shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                <p className="text-2xl font-semibold text-black text-wrap text-ellipsis "> Product Name</p>
                            </div>
                            <div className="w-full h-[75%] border-2 border-black flex flex-row justify-center items-center">
                                <div className="w-1/2 h-full border-2 border-black flex flex-col justify-center items-start ">
                                    <div className="w-5/6 h-1/4 my-[5%] border-2 border-black flex justify-center items-center bg-slate-100 shadow-md shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <p className="text-md font-medium text-black text-nowrap truncate">Max Bid = Tk {maxBid}</p>
                                    </div>
                                    <div className="w-5/6 h-3/4 border-2 border-black flex flex-col justify-center items-center  bg-slate-100 shadow-md shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <label htmlFor="bidAmount" >Enter Bid Amount</label>
                                        <input className="w-[90%] h-[25%] my-2 bg-slate-50 border-2 border-black shadow-lg rounded-lg pl-2 transition ease-in-out duration-500 focus:scale-105" placeholder={maxBid + 1} type={"number"} value={bid} onChange={setBid}/>
                                        <Button value={" Bid"} option={1} type={"button"} />
                                    </div>
                                </div>
                                <div className="w-1/2 h-full border-2 border-black flex justify-end items-center">
                                    <BidderList visibility={true} bidders={bidders}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    )
}

export default BuyerBidModal;