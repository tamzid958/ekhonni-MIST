import SmallButton from "@/components/SmallButton";
import Button from "@/components/SmallButton";

const BidderListItem = ({bidderName , bidderId , bid , option}) => {
    return (
        <>
            {option === "buyerView" ? (
                <li className="w-[95%] flex flex-row items-center justify-center p-3 mb-2 list-none cursor-default rounded-lg bg-slate-100 border border-slate-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[101%] hover:-translate-y-1">
                    <div className="w-3/5 flex items-center p-1 text-base overflow-hidden">{bidderName}</div>
                    <div className="w-2/5 flex justify-end">
                        <p className="bg-slate-200 border border-slate-300 text-center font-medium shadow-inner shadow-slate-400 min-w-32 rounded-md p-1 px-2 "> Tk {bid}</p>
                    </div>
                </li>
                ) : (
                <li className="w-[95%] relative p-3 mb-2 list-none rounded-lg bg-slate-100 border border-slate-300 shadow-lg shadow-slate-300 group transition ease-in-out duration-500 hover:scale-[101%] hover:-translate-y-1">
                    <input type={"radio"} name="bidderList" id={bidderId} className="hidden peer"/>
                    <label htmlFor={bidderId} className="border-black flex items-center p-1 text-lg cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">{bidderName}
                        <span className="absolute right-7 font-medium"> Tk.{bid} </span>
                    </label>
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-14 flex justify-end items-center mt-2 mr-3.5 transition-all ease-in-out duration-500">
                        <Button value={"Accept"} type={"button"} option={1}/>
                    </div>
                </li>
                )
            }
        </>
    )
}
export default BidderListItem;