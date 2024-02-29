"use client"

import BidderList from "@/components/BidderList";
import {useState} from "react";
import {toast, Toaster} from "sonner";
import ButtonFull from "@/components/ButtonFull";

const BuyerBidModal = ({setModalOpen , visibility , maxBid , productID}) => {

    const [bid , setBid] = useState(null);
    const [hasBid , setHasBid] = useState(true);
    const bidders = [
        {id: "1",
         name: "Shadman Shafeen Khan",
         bid: 10,
         isSelected: false},
        {id: "2",
         name: "Syed Nafees Kaiser",
         bid: 300,
         isSelected: false},
        {id: "3",
         name: "Sadia Bintay Mostafiz",
         bid: 25000,
         isSelected: false},
        {id: "4",
         name: "Tahsina Rahman",
         bid: 5000,
         isSelected: false},
        {id: "5",
         name: "Sheikh Rafsan Provee",
         bid: 280000,
         isSelected: false},
        {id: "6",
         name: "Buyer 6",
         bid: 27000,
        isSelected: false}
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
    const handleModalCloseOnBgClick = (e) => {
        if (e.target.id === "backgroundBlur")
            setModalOpen(false);
    }
    return (
        <>
            <Toaster richColors position={"top-right"}/>
            <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-[1px] flex justify-center items-center" id="backgroundBlur" onClick={(e)=> {handleModalCloseOnBgClick(e)}}>
                <div className="w-[775px] h-[575px] flex flex-col">
                    <button className="text-white text-lg font-semibold ml-3 place-self-end transition ease-in-out duration-500 hover:scale-110 active:scale-90" onClick={() => {setModalOpen(false)}}>X</button>
                    <div className="w-full h-full border border-neutral-700 bg-white shadow-lg shadow-slate-500 flex justify-center items-center rounded-lg">
                        <div className="w-[90%] h-[90%] flex flex-col justify-start items-center">
                            <div className="w-full h-[25%] border border-neutral-300 overflow-hidden flex flex-row justify-start items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg cursor-default">
                                <div className="w-[75%] h-full flex justify-start items-center">
                                    <p className="p-3 text-2xl font-semibold text-black text-wrap text-ellipsis "> Product Name</p>
                                </div>
                                <div className="w-[25%] h-full flex flex-col justify-center items-center">
                                    <p className="text-lg font-medium mb-1.5">Max Bid</p>
                                    <p className="min-w-32 text-center font-medium p-1 px-2 bg-slate-200 border border-slate-300 shadow-inner shadow-slate-400 rounded-md"> Tk {maxBid}</p>
                                </div>

                            </div>
                            <div className="w-full h-[75%] flex flex-row justify-center items-center">
                                <div className="w-1/3 h-full flex flex-col justify-start items-start">
                                    <form onSubmit={handleEnterBid} className="w-[95%] h-[50%]  mt-[4%] border border-neutral-300 flex flex-col justify-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg">
                                        <label htmlFor="bidAmount" className="text-left font-medium ml-5 mb-2.5 cursor-pointer">Enter Bid Amount</label>
                                        <input id="bidAmount" className="w-[86%] h-[22%] ml-4 mb-4 pl-2  bg-slate-50 shadow-lg shadow-slate-300 focus:outline-none rounded-lg transition ease-in-out duration-500 focus:scale-[103%]" placeholder={maxBid + 1} type={"number"} value={bid} onChange={(e) => {setBid(e.target.value)}}/>
                                        <div className="flex justify-end mr-3">
                                            <ButtonFull value={"Place Bid"} option={1} type={"submit"}/>
                                        </div>
                                    </form>
                                    {hasBid && (
                                        <div className="w-[95%] h-[25%] mt-[4%] flex flex-col justify-center items-start bg-slate-100 border border-neutral-300 shadow-lg shadow-slate-300 rounded-lg">
                                            <p className="text-lg font-medium mb-1 ml-5">Your Bid</p>
                                            <p className="w-[86%] ml-4 p-1 px-2  bg-slate-200 border border-slate-300 text-center font-medium shadow-inner shadow-slate-400 rounded-md "> Tk {bidders[0].bid}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="w-2/3 h-full flex justify-end items-start">
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