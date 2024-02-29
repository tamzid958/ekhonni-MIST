import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className="w-full overflow-x-hidden h-[200px] bg-black flex text-white p-4 my-3">
                <div className=" w-1/3 h-full text-center">
                    <div className="my-3">
                        <h1 className=" font-extrabold text-2xl font-serif tracking-widest">Ekhonni</h1>
                        <p className=" text-sm">Buy now,pay later</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src={"/facebook.svg"} alt={"facebook"} width={30} height={30} className="mx-2"/>
                        <Image src={"/what's_app.svg"} alt={"facebook"} width={30} height={30} className="mx-2"/>
                        <Image src={"/instagram.svg"} alt={"facebook"} width={30} height={30} className="mx-2"/>
                    </div>
                </div>
                <div className=" w-1/3 h-full text-center">
                    <h1 className=" font-xl font-bold my-3">Contact Us</h1>
                    <p>House # 177,Lane #2</p>
                    <p>Mohakhali-DOHS</p>
                    <p>Dhaka-1236</p>
                    <p>Email: ekhonni.official@gmail.com</p>
                </div>
                <div className=" w-1/3 h-full text-center">
                    <div className=" w-2/5 mx-auto text-left">
                        <h1 className=" font-xl font-bold my-3">Company</h1>
                        <p>Policies</p>
                        <p>Terms of Use</p>
                        <p>Code of Conduct</p>
                        <p>About</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;