const TwoRadioButtons = ({label, inputLabel1, inputLabel2, value, setValue, name}) => {
    return (
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
            <div className="w-2/5 h-1/2 flex justify-start items-center">
                <p className="p-2 text-white text-lg font-normal text-left">{label}</p>
            </div>
            <div className="w-full h-1/2 mt-2 flex flex-row justify-center items-end ">
                <input className="w-5 h-5 mr-2 cursor-pointer" type="radio" required name={label} value={value}
                       onChange={(e) => {
                           setValue(name, true)
                       }} id={label + "1"}/>
                <label className="text-white font-light cursor-pointer mr-5" htmlFor="value">{inputLabel1}</label>
                <input className="w-5 h-5 mr-2 cursor-pointer" type="radio" required name={label} value={value}
                       onChange={(e) => {
                           setValue(name, false)
                       }} id={label + "2"}/>
                <label className="text-white font-light cursor-pointer" htmlFor={label + "2"}>{inputLabel2}</label>
            </div>
        </div>
    )
}

export default TwoRadioButtons;