import Image from "next/image";
import Button from "@/components/Button";

const Header = ()=>{
    return (
        <>
            <div className=" mt-2 px-6 w-screen h-[100px] border-black flex justify-between bg-gray-300">
                <div className="flex">
                    <div className=" my-auto">
                        <h1 className=" font-extrabold text-2xl font-serif tracking-widest">Ekhonni</h1>
                        <p className=" text-sm">Buy now,pay later</p>
                    </div>
                    <div className="flex my-auto px-5">
                        <Image src={"./all_adds.svg"} alt={"message"} width={30} height={30} className=" mr-4"/>
                        <p className=" text-lg font-semibold">All ads</p>
                    </div>
                </div>
                <div className="flex my-auto">
                    <div className="flex my-auto px-5">
                        <Image src={"./notification.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                        <p className=" text-lg font-semibold">Notifications</p>
                    </div>
                    <div className="flex my-auto px-5">
                        <Image src={"./user.svg"} alt={"message"} width={20} height={20} className=" mr-4"/>
                        <p className=" text-lg font-semibold">Account</p>
                    </div>
                    <Button value="Post Ad" option={true} type={"submit"}/>
                </div>
            </div>

        </>
    )
}
export default Header;