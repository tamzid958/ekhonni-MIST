import Image from "next/image";

const Search = () => {
    return (
        <>
            <div className="w-full h-[50px] bg-slate-100 border-black flex justify-center overflow-hidden">
                <div className=" flex relative">
                    <input type="text" placeholder="What are you searching for?"
                           className="border-2 border-black p-4 w-[500px] h-10 rounded-3xl"/>
                    <Image src={"/search.svg"} alt={"image"} width={25} height={25}
                           className="absolute right-2 top-1.5 "/>
                </div>
            </div>
        </>
    )
}
export default Search;