
const Status = ({value , option , type}) => {

    return (
        <>
            {option ? (
                <button className=" w-24 h-10 border border-black bg-black text-white rounded-2xl font-bold" type={type}>
                    {value}
                </button>
            ) : (
                <button className="w-24 h-10 border border-white bg-transparent text-white rounded-2xl font-bold" type={type}>
                    {value}
                </button>
            )}
        </>
    )
}
export default Status;