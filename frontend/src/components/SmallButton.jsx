const SmallButton = ({value, option, type, onClick}) => {
    return (


        <>
            {option ? (
                <button
                    className="px-2 py-1 border border-black bg-black text-white rounded-lg font-semibold transition duration-500 ease-in-out hover:scale-105 active:scale-90"
                    type={type} onClick={onClick}>
                    {value}
                </button>
            ) : (
                <button
                    className="px-2 py-1 border-2 border-neutral-700 bg-slate-100 text-black hover:bg-black hover:text-white rounded-lg font-semibold transition duration-500 ease-in-out hover:scale-105 active:scale-90"
                    type={type} onClick={onClick}>
                    {value}
                </button>
            )}
        </>

    )
}

export default SmallButton;