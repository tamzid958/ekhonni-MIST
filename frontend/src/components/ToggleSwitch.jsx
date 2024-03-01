const ToggleSwitch = ({bidIsActive, onClick}) => {

    return (
        <label htmlFor="toggleButton" className="flex bg-slate-300 cursor-pointer relative w-36 h-12 rounded-md">
            <input checked={bidIsActive} onClick={onClick} type="checkbox" id="toggleButton" className="sr-only peer"/>

            <span
                className="w-[68px] h-10 bg-slate-500 absolute rounded-md left-[72px] top-1 peer-checked:bg-slate-900 peer-checked:left-1 transition-all ease-in-out duration-500">
                {bidIsActive && (<p className="absolute left-1.5 top-2.5 text-[0.85rem] text-white ">Enabled</p>)}
                {!bidIsActive && (<p className="absolute left-1 top-2.5 text-[0.85rem] text-white">Disabled</p>)}
            </span>
        </label>
    )
}

export default ToggleSwitch;