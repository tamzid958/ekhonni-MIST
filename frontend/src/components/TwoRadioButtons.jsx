const TwoRadioButtons = ({label, inputLabel1, inputLabel2, value, setValue}) => {
    return (
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
            <div className="w-2/5 h-1/2 flex justify-start items-center">
                <p className="p-2 text-white text-lg font-normal text-left">{label}</p>
            </div>
            <div className="w-full h-1/2 mt-2 flex flex-row justify-center items-end ">
                <input className="w-5 h-5 mr-2 cursor-pointer" type="radio" required name={label} value={value}
                       onChange={(e) => {
                           setValue(true)
                       }} id={inputLabel1}/>
                <label className="text-white font-light cursor-pointer mr-5" htmlFor={inputLabel1}>{inputLabel1}</label>
                <input className="w-5 h-5 mr-2 cursor-pointer" type="radio" required name={label} value={value}
                       onChange={(e) => {
                           setValue(false)
                       }} id={inputLabel2}/>
                <label className="text-white font-light cursor-pointer" htmlFor={inputLabel2}>{inputLabel2}</label>
            </div>
        </div>
    )
}

export default TwoRadioButtons;