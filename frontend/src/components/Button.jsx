
const Button = ({value , option , type , onClick}) => {

    return (
        <>
            {option ? (

                <button className="px-4 py-2 border border-black bg-black text-white rounded-lg font-bold transition duration-500 ease-in-out hover:scale-110 active:scale-90" type={type} >
                    {value}
                </button>
            ) : (
                <button className="px-4 py-2 border border-white bg-transparent text-white rounded-lg font-bold transition duration-500 ease-in-out hover:scale-110 active:scale-90 hover:bg-white hover:text-black" type={type}>
                    {value}
                </button>
            )}
        </>
    )
}
export default Button;