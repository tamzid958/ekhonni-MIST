"use client"

const CrossButton = ({text,RemoveOneProduct}) => {

    return (
        <>
            <button className="bg-gray-100 p-2 flex rounded-md mx-2 my-3" onClick={()=> {RemoveOneProduct(text)}}>
                <h1 className="mr-3 text-md">✕</h1>
                <h1 className="text-md ml-3">{text}</h1>
            </button>
        </>
    )
}
export default CrossButton;