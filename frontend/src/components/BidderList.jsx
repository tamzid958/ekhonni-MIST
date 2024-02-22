

const BidderList = ({visibility , bidders}) => {


    return ( <>
        {visibility &&
            <ul className="w-90% border-2 border-black">
                <li className="w-full p-2 m-2 list-none rounded-lg bg-slate-100 shadow-lg shadow-slate-300 group">
                    <input type={"checkbox"} name="bidderList" id="first" className="hidden peer"/>
                    <label htmlFor={"first"}
                           className="flex items-center p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">Buyer
                        1</label>
                    <div
                        className="max-h-0 overflow-hidden peer-checked:max-h-10 transition-max-height ease-in-out duration-500">
                        <p>Lorem Ipsum Dolor sit amets dfsdf </p>
                    </div>
                </li>
                <li className="w-full p-2 m-2 list-none rounded-lg bg-slate-100 shadow-lg shadow-slate-300 group">
                    <input type={"checkbox"} name="bidderList" id="second" className="hidden peer"/>
                    <label htmlFor={"second"}
                           className="flex items-center p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">Buyer
                        1</label>
                    <div
                        className="max-h-0 overflow-hidden peer-checked:max-h-10 transition-max-height ease-in-out duration-500">
                        <p>Lorem Ipsum Dolor sit amets dfsdf </p>
                    </div>
                </li>
                <li className="w-full p-2 m-2 list-none rounded-lg bg-slate-100 shadow-lg shadow-slate-300 group">
                    <input type={"checkbox"} name="bidderList" id="third" className="hidden peer"/>
                    <label htmlFor={"third"}
                           className="flex items-center p-1 cursor-pointer peer-checked:before:content-['-'] before:content-['+'] before:mr-2 before:font-semibold before:text-lg">Buyer
                        1</label>
                    <div
                        className="max-h-0 overflow-hidden peer-checked:max-h-10 transition-max-height ease-in-out duration-500">
                        <p>Lorem Ipsum Dolor sit amets dfsdf </p>
                    </div>
                </li>
            </ul>
        }
            {!visibility &&
                <div className="w-full p-2 m-2 list-none rounded-lg bg-red-200 shadow-lg shadow-slate-300 transition ease-in-out duration-500 hover:scale-105">
                    <p>Seller has chosen to hide visibility of bidders</p>
                </div>
            }
        </>
)
}

export default BidderList;