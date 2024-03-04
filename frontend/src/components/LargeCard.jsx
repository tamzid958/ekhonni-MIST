import Image from "next/image";
import Button from "@/components/Button";

const LargeCard = (props) => {
    return (
        <>
            <div className="w-full  my-3 border-2 flex rounded-lg">
                <div className="w-1/3 h-auto border-2 relative rounded-lg">
                    <Image src={props.img} alt={"mobile"} objectFit={"cover"} fill className={"rounded-lg"}/>
                </div>
                <div className={"w-2/3  pl-10 pt-4 pb-5"}>
                    <h1 className={"font-semibold text-xl"}>{props.name}</h1>
                    <p className={"text-md my-2"}>{props.desc}</p>
                    <p className="text-blue-500 text-md font-semibold mt-2 mb-5">৳ {props.price}</p>
                    <Button value={"Details"} type={"submit"} option={true}/>
                </div>
            </div>
        </>
    )
}
export default LargeCard;