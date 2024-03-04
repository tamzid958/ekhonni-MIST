import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const ScrollCard = ({img, header, description, button_text}) => {
    return (
        <>
            <div className="w-full h-[500px] flex flex-shrink-0">
                <div className="w-3/5 h-full border border-black rounded-xl relative">
                    <Image src={img} alt={"Image"} sizes={"100vw"} fill className={"rounded-xl"}/>
                </div>
                <div className="w-2/5 h-full flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold leading-[3rem]">{header}</h1>
                    <p className="text-xl mb-5">{description}</p>
                    <Link href={"/products"}>
                        <Button value={button_text} option={true} type={"submit"}/>
                    </Link>

                </div>
            </div>
        </>
    )
}
export default ScrollCard;