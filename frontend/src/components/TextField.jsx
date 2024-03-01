const TextField = ({placeholder, type, name, value, onChange}) => {
    return (
        <>
            <input
                className="w-[350px] h-12 my-3 bg-slate-50 border-2 border-black shadow-md shadow-slate-400 rounded-lg pl-2 transition ease-in-out duration-500 focus:scale-105"
                placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} required/>
        </>
    )
}

export default TextField;