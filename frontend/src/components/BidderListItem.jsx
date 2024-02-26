import SmallButton from "@/components/SmallButton";


const BidderListItem = ({bidderName , bidderId , bid , option}) => {
    return (
        <>
            {option === "buyerView" ? (
                <li className="w-[95%] p-2 mb-2 list-none rounded-lg bg-slate-100 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-105">
                    <input type={"checkbox"} name="bidderList" id={bidderId} className="hidden peer"/>
                    <label htmlFor={bidderId} className="flex items-center p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">{bidderName}</label>
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-10 transition-all ease-in-out duration-500">
                        <p className="indent-[40%]">Bid : <span className="font-medium">Tk {bid} </span></p>
                    </div>
                </li>
                ) : (
                <li className="w-[95%] p-2 mb-2 list-none rounded-lg bg-slate-100 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-105">
                    <input type={"radio"} name="bidderList" id={bidderId} className="hidden peer"/>
                    <label htmlFor={bidderId} className="flex items-center p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">{bidderName} <span className="font-medium indent-[70%]"> Tk.{bid} </span></label>
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-10 flex flex-row justify-end items-center transition-all ease-in-out duration-500">
                        <SmallButton value={"Accept"} type={"button"} option={1}/>
                    </div>
                </li>
                )
            }
        </>
    )
}
export default BidderListItem;