import Image from "next/image";

const Corosol = ()=>{
    return (
        <>
            <div className=" w-[1500px] h-[400px] border-2 border-black mx-auto my-2 relative">
                <Image src={"/banner.jpg"} alt={"Banner"} objectFit={"cover"} fill />
            </div>
        </>
    )
}
export default Corosol;