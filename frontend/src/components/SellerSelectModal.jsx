"use client"

import {Toaster} from "sonner";
import BidderList from "@/components/BidderList";
import {useState} from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const SellerSelectModal = ({setModalOpen, maxBid, isBidActive}) => {


    const [bidIsActive, setBidIsActive] = useState(isBidActive)

    const handleBiddingStatusChange = (e) => {
        setBidIsActive(!bidIsActive);
    }

    const bidders = [
        {
            id: "1",
            name: "Syed Nafees Kaiser",
            bid: 10000
        },
        {
            id: "2",
            name: "Ikhtiar Uddin Muhammad Bin Bakhtiar Khilji",
            bid: 3000
        },
        {
            id: "3",
            name: "Shahabuddin Akhon",
            bid: 25000
        },
        {
            id: "4",
            name: "Sheikh Rafsan Provee",
            bid: 250
        },
        {
            id: "5",
            name: "Sadia Bintay Mostafiz",
            bid: 25000
        }
    ];
    const finalBuyerID = "2";

    const handleModalCloseOnBgClick = (e) => {
        if (e.target.id === "backgroundBlur")
            setModalOpen(false);
    }
    return (
        <>
            <Toaster richColors position={"top-right"}/>
            <div
                className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-[1px] flex justify-center items-center"
                id="backgroundBlur" onClick={(e) => {
                handleModalCloseOnBgClick(e)
            }}>

                <div className="w-[750px] h-[575px] flex flex-col">
                    <button
                        className="text-white text-lg font-semibold ml-3 place-self-end transition ease-in-out duration-500 hover:scale-110 active:scale-90"
                        onClick={() => {
                            setModalOpen(false)
                        }}>X
                    </button>
                    <div
                        className="w-full h-full border border-neutral-700 bg-white shadow-lg shadow-slate-500 flex justify-center items-center rounded-lg">

                        <div className="w-[90%] h-[90%] flex flex-col justify-start items-center">
                            <div className="w-full h-[25%] flex flex-row justify-start items-start">
                                <div
                                    className="w-[69%] mr-[1%] h-full border border-neutral-300 overflow-hidden flex justify-start items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-[101%]">
                                    <p className="p-3 text-2xl font-medium text-black text-wrap text-ellipsis "> Product
                                        Name</p>
                                </div>
                                <div
                                    className="w-[30%] h-full border border-neutral-300 overflow-hidden flex flex-col justify-center items-center bg-slate-100 shadow-lg shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-[101%]">
                                    <p className="text-lg font-medium mb-[5%]">Bidding Status</p>
                                    <ToggleSwitch bidIsActive={bidIsActive} onClick={handleBiddingStatusChange}/>
                                </div>
                            </div>
                            <div className="w-full h-[75%] flex flex-row justify-center items-center">
                                <div className="w-full h-full flex justify-end items-start">
                                    <BidderList visibility={true} bidders={bidders} view={"sellerView"}
                                                finalBuyerID={finalBuyerID}/>
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