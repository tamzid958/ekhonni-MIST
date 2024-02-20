const CrossButton = ({text})=>{
    return (
        <>
            <button className="bg-gray-100 p-2 flex rounded-md mx-2 my-3">
                <h1 className="mr-3 text-lg">✕</h1>
                <h1 className="text-lg ml-3">{text}</h1>
            </button>
        </>
    )
}
export default CrossButton;