import BidderListItem from "@/components/BidderListItem";
import SelectedBidderListItem from "@/components/SelectedBidderListItem";


const BidderList = ({visibility , bidders , view , finalBuyerID}) => {

    const bidderSelected = finalBuyerID !== null;
    return ( <>
        {visibility &&
            <ul className="w-full mt-[2%] rounded-lg ">
                <li className="w-full p-2 flex flex-col items-center list-none rounded-lg bg-slate-100 border border-neutral-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[100.5%]">
                    <input type={"checkbox"}  checked name="bidderList" id="first" className="hidden peer"/>
                    <label htmlFor={"first"}
                           className="w-full flex items-center mb-2 p-1 text-xl cursor-pointer before:mr-3 before:font-semibold before:text-lg rounded-lg">Bidder List
                        </label>
                    <div className="w-full overflow-hidden max-h-72 hover:overflow-y-scroll transition-all ease-in-out duration-1000">
                        <ul className="w-full flex flex-col items-center">
                            {view === "buyerView" ? (
                                bidders.map((bidder) => (
                                        <BidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name} bid={bidder.bid} option={"buyerView"} />
                                    ))
                            ) : (
                                bidderSelected ? (
                                        bidders.map((bidder) => (
                                            <SelectedBidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name} bid={bidder.bid} option={"sellerView"} finalBuyerID={finalBuyerID}/>
                                        ))
                                    ) : (
                                        bidders.map((bidder) => (
                                            <BidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name} bid={bidder.bid} option={"sellerView"}/>
                                        ))
                                    )
                            )}
                        </ul>
                    </div>
                </li>

            </ul>
        }
            {!visibility &&
                <div className="w-full p-2 mt-[5%] list-none rounded-lg bg-red-200 shadow-lg shadow-slate-300 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
                    <p>Seller has chosen to hide visibility of bidders</p>
                </div>
            }
        </>
)
}

export default BidderList;