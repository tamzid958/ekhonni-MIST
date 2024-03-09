"use client"
import Card from "@/components/Card";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";

const TopBidding = () => {
    const { data, error,isLoading } = useSWR('/popular-products', fetcher);
    const products =(!isLoading && !error && data && data.slice(0,4))

    return (
        <>
            <div className="w-11/12  mx-auto">
                <h1 className="font-bold text-xl">Top Bidding</h1>
                <div className="md:flex justify-around my-3  lg:flex-row md:flex-wrap">
                    {!isLoading && !error && products.length && products.map((data, index) => <Card key={index} picture={"/ball.jpg"} id={data.id} name={data.name}
                                                        categories={data.category.category} price={data.startingPrice}/>)}
                </div>
            </div>
        </>
    )
}
export default TopBidding;