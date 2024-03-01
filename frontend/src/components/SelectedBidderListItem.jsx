import SmallButton from "@/components/SmallButton";


const SelectedBidderListItem = ({bidderName, bidderId, bid, finalBuyerID}) => {
    const isSelected = finalBuyerID === bidderId;
    return (<>
            <li className="relative w-[95%] p-3 mb-2 list-none rounded-lg border border-slate-300 bg-slate-100 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[101%] hover:-translate-y-1">
                <input type={"radio"} name="bidderList" id={bidderId} className="hidden peer"/>
                <label htmlFor={bidderId}
                       className="flex items-center text-lg p-1 cursor-pointer before:content-['+'] before:mr-2 before:font-semibold before:text-lg">{bidderName}
                    <span className="font-medium absolute right-7"> Tk.{bid} </span></label>
                {isSelected && (<>
                        <div
                            className="max-h-0 overflow-hidden mt-2 mr-3.5 peer-checked:max-h-10 flex flex-row justify-end items-center transition-all ease-in-out duration-500 ">
                            <SmallButton value={"Revert"} type={"button"} option={0}/>
                        </div>
                        <div
                            className="absolute top-0 right-0 px-2 py-0.5 text-white bg-slate-800 opacity-40 text-xs rounded-full">
                            <span>Selected</span>
                        </div>
                    </>)}
            </li>

        </>)
}
export default SelectedBidderListItem;