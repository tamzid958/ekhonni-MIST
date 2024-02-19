import Card from "@/components/Card";

const Product = [
    {picture:"/ball.jpg",name:"Football",category:"Sports item",price:"120"},
    {picture:"/bike.jpg",name:"Motorbike",category:"Vehicle",price:"340000"},
    {picture:"/chair.jpg",name:"Chair",category:"Furniture",price:"1000"},
    {picture:"/mobile.jpg",name:"iphone 14 pro",category:"Electronics",price:"120000"},
]
const TopBidding =()=>{
    return (
        <>
            <div className="w-11/12  mx-auto">
                <h1 className="font-bold text-xl">Top Bidding</h1>
                <div className="md:flex justify-around my-3  lg:flex-row md:flex-wrap">
                    {Product.map((data,index)=> <Card key={index} picture={data.picture} name={data.name} categories={data.category} price={data.price} />)}
                </div>
            </div>
        </>
    )
}
export default TopBidding;