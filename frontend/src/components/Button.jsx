
const Button = ({value , option , type}) => {

    return (
        <>
            {option ? (
                <button className="px-3 py-2 m-1 border border-black bg-black text-white rounded-lg font-bold" type={type}>
                    {value}
                </button>
            ) : (
                <button className="px-3 py-2 m-1 border border-white bg-transparent text-white rounded-lg font-bold" type={type}>
                    {value}
                </button>
            )}
        </>
    )
}
export default Button;