import BuyerBidModal from "@/components/BuyerBidModal";
import SellerSelectModal from "@/components/SellerSelectModal";


const TestPage = () => {
    return (
        <>
            {/*<BuyerBidModal visibility={true} maxBid={420} />*/}
            <SellerSelectModal maxBid={420}/>
        </>
    )
}

export default TestPage;