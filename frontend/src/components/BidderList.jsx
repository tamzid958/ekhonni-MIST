import BidderListItem from "@/components/BidderListItem";
import SelectedBidderListItem from "@/components/SelectedBidderListItem";
import {useState} from "react";

const BidderList = ({isVisible , bidderList , view , finalBuyerId, productID, isBidActive}) => {

    const [expandList, setExpandList] = useState(false);
    const timeoutID = setTimeout(() => {
        setExpandList(true)
    }, 50);

    return (
        <>
            {isVisible &&
                <ul className="w-full mt-[2%] rounded-lg ">
                    <li className="w-full p-2 flex flex-col items-center list-none rounded-lg bg-slate-100 border border-neutral-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[100.5%]">
                        <input type={"checkbox"} checked={expandList} readOnly name="bidderList" id="first" className="hidden peer"/>
                        <label htmlFor={"first"} className="w-full flex items-center mb-2 p-1 border-b border-b-neutral-300 text-xl before:mr-3 before:font-semibold before:text-lg">Bidder List
                        </label>
                        <div className="w-full overflow-hidden max-h-0 peer-checked:max-h-72 peer-checked:h-72 overflow-y-scroll transition-all ease-in-out duration-1000">
                            <ul className="w-full flex flex-col items-center">
                                {bidderList && bidderList.length ? (
                                    view === "buyerView" ? (
                                    bidderList.map((bidder) => (
                                        <BidderListItem key={bidder.buyer.id}
                                                        productID={productID}
                                                        bidderId={bidder.buyer.id}
                                                        bidderName={bidder.buyer.name}
                                                        bid={bidder.offeredPrice}
                                                        isBidActive = {isBidActive}
                                                        option={"buyerView"}/>
                                    ))
                                    ) : (finalBuyerId ? (
                                            bidderList.map((bidder) => (
                                                <SelectedBidderListItem key={bidder.buyer.id}
                                                                        productID={productID}
                                                                        bidderId={bidder.buyer.id}
                                                                        bidderName={bidder.buyer.name}
                                                                        bid={bidder.offeredPrice}
                                                                        buyerEmail={bidder.buyer.email}
                                                                        isBidActive = {isBidActive}
                                                                        option={"sellerView"}
                                                                        finalBuyerId={finalBuyerId}/>
                                            ))
                                    ) : (
                                        bidderList.map((bidder) => (
                                            <BidderListItem key={bidder.buyer.id}
                                                            productID={productID}
                                                            bidderId={bidder.buyer.id}
                                                            bidderName={bidder.buyer.name}
                                                            bid={bidder.offeredPrice}
                                                            isBidActive = {isBidActive}
                                                            buyerEmail={bidder.buyer.email}
                                                            option="sellerView"/>
                                        ))
                                    )
                                )) :
                                    (<li className="w-[95%] flex flex-row items-center justify-center p-3 mb-2 list-none cursor-default rounded-lg bg-slate-100 ">
                                        No Bidders Yet
                                    </li>)}
                            </ul>
                        </div>
                    </li>
                </ul>
            }
            {!isVisible &&
                <div className="w-full flex ">
                    <div
                        className="w-full p-4 mt-[2%] list-none rounded-lg bg-red-200 shadow-lg shadow-slate-300 cursor-default">
                        <p className="text-lg font-medium text-center">This bid is private</p>
                    </div>
                </div>
            }
        </>
    )
}
export default BidderList;