

const ToggleSwitch = ({initialState , onClick}) => {
    return (
        <label  htmlFor="toggleButton" className="flex bg-slate-300 cursor-pointer relative w-20 h-10 rounded-full">
            <input checked={initialState} onClick={onClick} type="checkbox" id="toggleButton" className="sr-only peer"/>
            <span className="w-2/5 h-4/5 bg-slate-500 absolute rounded-full left-1 top-1 peer-checked:bg-slate-800 peer-checked:left-11 transition-all duration-500"/>
        </label>
    )
}

export default ToggleSwitch;