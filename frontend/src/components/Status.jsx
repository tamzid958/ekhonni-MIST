const Status = ({value, option, type, onClick}) => {

    return (
        <>
            {option ? (
                <button
                    className=" px-2 py-1 border border-black bg-black text-white rounded-xl font-bold transition duration-500 ease-in-out hover:scale-105 active:scale-90"
                    type={type}>
                    {value}
                </button>
            ) : (
                <button
                    className="px-2 py-1 border border-white bg-transparent text-white rounded-xl font-bold transition duration-500 ease-in-out hover:scale-105 active:scale-90"
                    type={type}>
                    {value}
                </button>
            )}
        </>
    )
}
export default Status;