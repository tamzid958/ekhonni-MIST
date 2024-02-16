
const TextField = ({placeholder , type , name , value , onChange}) => {
    return (
        <>
            <input className="w-[275px] h-10 border-2 my-3 border-neutral-900 rounded-lg pl-2" placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} required/>
        </>
    )
}

export default TextField;