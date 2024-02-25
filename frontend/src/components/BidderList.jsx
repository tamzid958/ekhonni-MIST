import BidderListItem from "@/components/BidderListItem";


const BidderList = ({visibility , bidders , view}) => {


    return ( <>
        {visibility &&
            <ul className="w-full mt-[5%] rounded-lg ">
                <li className="w-full p-2 list-none rounded-lg bg-slate-100 border border-neutral-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-105">
                    <input type={"checkbox"} name="bidderList" id="first" className="hidden peer"/>
                    <label htmlFor={"first"}
                           className="w-full flex items-center mb-2 p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-3 before:font-semibold before:text-lg shadow-lg shadow-slate-300 rounded-lg">Bidder List
                        </label>
                    <div className="w-full max-h-0 overflow-hidden peer-checked:max-h-52 hover:overflow-y-scroll transition-all ease-in-out duration-1000">
                        <ul className="w-full flex flex-col items-center">

                            {view === "buyerView" ? (
                                bidders.map((bidder) => (
                                        <BidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name} bid={bidder.bid} option={"buyerView"} />
                                    ))
                            ) : (
                                bidders.map((bidder) => (
                                        <BidderListItem key={bidder.id} bidderId={bidder.id} bidderName={bidder.name} bid={bidder.bid} option={"sellerView"} isSelected={bidder.isSelected}/>
                                    ))
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