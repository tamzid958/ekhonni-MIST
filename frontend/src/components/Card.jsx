import Image from "next/image";
import Button from "@/components/Button";
import ButtonFull from "@/components/ButtonFull";

const Card = ({picture,name,categories,price})=>{
    return (
        <>
            <div className=" m-3 w-[300px] h-[350px] border-2 border-black rounded-md hover:w-[305px]">
                <div className=" w-[290px] h-[192px] relative mx-auto mt-1 duration-500 hover:scale-105">
                    <Image src={picture} alt={name} objectFit={"cover"} fill />
                </div>
                <div className=" w-full h-[157px] text-black text-center py-3 leading-7">
                    <h1 className=" font-bold text-xl">{name}</h1>
                    <p className=" text-gray-400">{categories}</p>
                    <p className="pb-2">৳{price}</p>
                    <ButtonFull value="Bid"/>
                </div>
            </div>
        </>
    )
}
export default Card;