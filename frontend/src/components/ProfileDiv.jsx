import Image from "next/image";

const ProfileDiv = ({image, text, color, onClick}) => {
    return (
        <>
            <div className={`w-full py-1.5 pl-4 cursor-pointer flex items-center border-black border gap-x-5 ${color}`}
                 onClick={onClick}>
                <Image src={image} alt={"Edit"} width={30} height={30}/>
                <div className="text-lg font-semibold tracking-widest">{text}</div>
            </div>
        </>
    )
}
export default ProfileDiv;