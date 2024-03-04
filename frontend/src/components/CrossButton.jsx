"use client"
import {useDispatch} from "react-redux";
import {deleteIndividual} from "@/Actions/filter";

const CrossButton = ({text}) => {
    const dispatch = useDispatch();

    return (
        <>
            <button className="bg-gray-100 p-2 flex rounded-md mx-2 my-3">
                <h1 className="mr-3 text-md" onClick={() => dispatch(deleteIndividual(text))}>✕</h1>
                <h1 className="text-md ml-3">{text}</h1>
            </button>
        </>
    )
}
export default CrossButton;