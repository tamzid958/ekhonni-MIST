"use client"

import BidderList from "@/components/BidderList";
import {useState} from "react";
import Button from "@/components/Button";
import {toast, Toaster} from "sonner";
import SmallButton from "@/components/SmallButton";

const BuyerBidModal = ({visibility , maxBid , productID}) => {

    const [bid , setBid] = useState(null);
    const bidders = [
        {id: "1",
         name: "Buyer 1",
         bid: 10000},
        {id: "2",
         name: "Buyer 2",
         bid: 30000},
        {id: "3",
         name: "Buyer 3",
         bid: 25000},
        {id: "4",
         name: "Buyer 4",
         bid: 25000},
        {id: "5",
         name: "Buyer 5",
         bid: 25000},
        {id: "6",
         name: "Buyer 6",
         bid: 25000},
    ];
    const handleEnterBid = (e) => {
        e.preventDefault();

        if(bid <= maxBid) {
            toast.error("Please enter a bid higher than the current Max Bid")
        }

        else {
            localStorage.getItem("currentUserEmail");
        }

    }
    return (
        <>
            <Toaster richColors position={"top-right"}/>
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-[1px] flex justify-center items-center">
                <div className="w-[40%] h-[60%] flex flex-col">
                    <button className="text-white text-lg font-semibold ml-3 place-self-end transition ease-in-out duration-500 hover:scale-110 active:scale-90">X</button>
                    <div className="w-full h-full border border-neutral-700 bg-white shadow-lg shadow-slate-500 flex justify-center items-center rounded-lg">
                        <div className="w-[90%] h-[90%] flex flex-col justify-start items-center">
                            <div className="w-full h-[25%] border border-neutral-300 overflow-hidden flex justify-start items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                <p className="p-3 text-2xl font-semibold text-black text-wrap text-ellipsis "> Product Name</p>
                            </div>
                            <div className="w-full h-[75%] flex flex-row justify-center items-center">
                                <div className="w-1/2 h-full  flex flex-col justify-center items-start ">
                                    <div className="w-5/6 h-1/4 border border-neutral-300 my-[5%] flex justify-center items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <p className="text-md font-medium text-black text-nowrap truncate">Max Bid = Tk {maxBid}</p>
                                    </div>
                                    <form onSubmit={handleEnterBid} className="w-5/6 h-2/3 border border-neutral-300 flex flex-col justify-center items-center  bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <label htmlFor="bidAmount" >Enter Bid Amount</label>
                                        <input className="w-[90%] h-[25%] my-2 mb-3 pl-2  bg-slate-50 shadow-lg shadow-slate-300 focus:outline-none rounded-lg transition ease-in-out duration-500 focus:scale-105" placeholder={maxBid + 1} type={"number"} value={bid} onChange={(e) => {setBid(e.target.value)}}/>
                                        <SmallButton value={"Place Bid"} option={1} type={"submit"} />
                                    </form>
                                </div>
                                <div className="w-1/2 h-full flex justify-end items-start">
                                    <BidderList visibility={visibility} bidders={bidders} view={"buyerView"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyerBidModal;