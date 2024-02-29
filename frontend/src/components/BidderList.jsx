import BidderListItem from "@/components/BidderListItem";
import SelectedBidderListItem from "@/components/SelectedBidderListItem";
import {useState} from "react";


const BidderList = ({visibility, bidders, view, finalBuyerID}) => {

    const bidderSelected = finalBuyerID !== null;

    const [expandList, setExpandList] = useState(false);
    const timeoutID = setTimeout(() => {
        setExpandList(true)
    }, 50);
    // clearTimeout(timeoutID);

    return (<>
            {visibility &&
                <ul className="w-full mt-[2%] rounded-lg ">
                    <li className="w-full p-2 flex flex-col items-center list-none rounded-lg bg-slate-100 border border-neutral-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[100.5%]">
                        <input type={"checkbox"} checked={expandList} name="bidderList" id="first"
                               className="hidden peer"/>
                        <label htmlFor={"first"}
                               className="w-full flex items-center mb-2 p-1 text-xl before:mr-3 before:font-semibold before:text-lg rounded-lg">Bidder
                            List
                        </label>
                        <div
                            className="w-full overflow-hidden max-h-0 peer-checked:max-h-72 peer-checked:h-72 hover:overflow-y-scroll transition-all ease-in-out duration-1000">
                            <ul className="w-full flex flex-col items-center">
                                {view === "buyerView" ? (
                                    bidders.map((bidder) => (
                                        <BidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name}
                                                        bid={bidder.bid} option={"buyerView"}/>

                                    ))
                                ) : (
                                    bidderSelected ? (
                                        bidders.map((bidder) => (
                                            <SelectedBidderListItem key={bidder.id} bidderId={bidder.id}
                                                                    bidderName={bidder.name} bid={bidder.bid}
                                                                    option={"sellerView"} finalBuyerID={finalBuyerID}/>
                                        ))
                                    ) : (
                                        bidders.map((bidder) => (
                                            <BidderListItem key={bidder.id} bidderId={bidder.id}
                                                            bidderName={bidder.name} bid={bidder.bid}
                                                            option={"sellerView"}/>
                                        ))
                                    )
                                )}
                            </ul>
                        </div>
                    </li>

                </ul>
            }
            {!visibility &&

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