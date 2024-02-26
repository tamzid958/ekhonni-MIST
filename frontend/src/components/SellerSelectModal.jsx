"use client"

import {toast , Toaster} from "sonner";
import BidderList from "@/components/BidderList";
import SmallButton from "@/components/SmallButton";
import {useState} from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const SellerSelectModal = ({setModalOpen , maxBid , isBidActive}) => {


    const [bidIsActive , setBidIsActive] = useState(isBidActive)

    const handleBiddingStatusChange = (e) => {
        setBidIsActive(!bidIsActive);
    }

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
         bid: 25000}
    ];
    const finalBuyerID = "2";

    const handleModalCloseOnBgClick = (e) => {
        if (e.target.id === "backgroundBlur")
            setModalOpen(false);
    }
    return (
        <>
            <Toaster richColors position={"top-right"}/>
            <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-[1px] flex justify-center items-center" id="backgroundBlur" onClick={(e) => {handleModalCloseOnBgClick(e)}}>
                <div className="w-[40%] h-[60%] flex flex-col">
                    <button className="text-white text-lg font-semibold ml-3 place-self-end transition ease-in-out duration-500 hover:scale-110 active:scale-90" onClick={() => {setModalOpen(false)}}>X</button>
                    <div className="w-full h-full border border-neutral-700 bg-white shadow-lg shadow-slate-500 flex justify-center items-center rounded-lg">
                        <div className="w-[90%] h-[90%] flex flex-col justify-start items-center">
                            <div className="w-full h-[25%] border border-neutral-300 overflow-hidden flex justify-start items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                <p className="p-3 text-2xl font-semibold text-black text-wrap text-ellipsis "> Product Name</p>
                            </div>
                            <div className="w-full h-[75%] flex flex-row justify-center items-center">
                                <div className="w-1/2 h-full  flex flex-col justify-center items-start ">
                                    <div className="w-5/6 h-1/4 border border-neutral-300 my-[5%] flex justify-center items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <p className="text-lg font-medium text-black text-nowrap truncate">Max Bid = Tk {maxBid}</p>
                                    </div>
                                    <div  className="w-5/6 h-2/3 border border-neutral-300 flex flex-col justify-center items-center  bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-105">
                                        <p className="h-1/3 flex items-center font-medium text-xl">Bidding Control</p>
                                        <p className="h-1/3 flex items-center font-medium text-md">Bidding Status : &nbsp;
                                            { bidIsActive ?
                                                (<span className="bg-slate-800 text-white px-3 py-1 shadow-md shadow-slate-400 rounded-full"> Active </span>)
                                                :
                                                (<span className="bg-slate-500 text-white px-3 py-1 shadow-md shadow-slate-400 rounded-full"> Inactive </span>)
                                            }
                                        </p>
                                        <div className="w-[90%] h-1/3 flex flex-row justify-center items-center ">
                                            <div className="w-1/2 h-full flex flex-row justify-center items-center">
                                                <ToggleSwitch initialState={bidIsActive} onClick={handleBiddingStatusChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 h-full flex justify-end items-start">
                                    <BidderList visibility={true} bidders={bidders} view={"sellerView"} finalBuyerID={finalBuyerID}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerSelectModal;