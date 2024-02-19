import Image from "next/image";


const ProductBidPage = () => {
    return (
        <div className="w-screen h-[700px] flex justify-center items-center">
            <div className="w-4/5 h-5/6 border-2 border-black flex flex-row justify-start items-center">
                <div className="w-2/3 h-full border-2 border-red-600 flex justify-center items-center">
                    <div className="w-[95%] h-[90%] border-2 border-green-500 flex justify-center items-center">
                        <div>
                            
                        </div>
                        {/*<Image src={"/dslr.jpg"} alt={"dslr"} width={500} height={00}/>*/}
                    </div>
                </div>
                <div className="w-1/3 h-full border-2 border-blue-500 flex justify-center items-center">

                </div>
            </div>
        </div>
    );
}
export default ProductBidPage;