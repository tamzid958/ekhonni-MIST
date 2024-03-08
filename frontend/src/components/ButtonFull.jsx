const ButtonFull = ({value}) => {
    return (
        <>
            <button
                className="w-11/12 border-2 border-black h-10 bg-black text-white rounded-lg font-bold hover:bg-white hover:text-black">
                {value}
            </button>

        </>
    )
}
export default ButtonFull;