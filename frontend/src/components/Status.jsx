const Status = ({value, option, type, onClick}) => {

    return (
        <>
            {option === "purchased" ? (
                <button
                    className="absolute top-3 right-3 px-2 py-2 border border-slate-300 bg-slate-200 shadow-slate-400 shadow-sm text-slate-400 rounded-full font-semibold"
                    type={type} onClick={onClick}>
                    {"Purchased"}
                </button>
            ) : option === "ongoing" ? (
                <button
                    className=" absolute font-medium top-3 right-3 px-3 py-1 border border-slate-300 bg-slate-200 shadow-slate-400 shadow-sm text-black rounded-full "
                    type={type} onClick={onClick}>
                    {"Bid Ongoing"}
                </button>
            ) : option === "buynow" ? (
                    <button
                        className="absolute top-3 right-3 px-2 py-1 border border-black bg-black text-white rounded-lg font-semibold transition duration-500 ease-in-out hover:scale-105 active:scale-90"
                        type={type} onClick={onClick}>
                        {"Buy Now"}
                    </button>
            ) : option === "paused" ? (
                        <button
                            className="absolute top-3 right-3 px-2 py-1 border border-slate-300 bg-slate-200 shadow-slate-400 shadow-sm text-slate-500 rounded-lg font-semibold "
                            type={type} onClick={onClick}>
                            {"Bid Paused"}
                        </button>
            ) : option === "sold" ? (
                        <button
                            className="absolute top-3 right-3 px-4 py-1 border border-slate-300 bg-slate-200 shadow-slate-400 shadow-sm text-slate-600 rounded-full font-semibold"
                            type={type} onClick={onClick}>
                            {"Sold"}
                        </button>
            ) : <></>}

        </>
    )
}
export default Status;