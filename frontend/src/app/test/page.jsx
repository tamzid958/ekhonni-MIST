"use client"
import {useState} from "react";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import {bidFetcher} from "@/utils/bidFetcher";
import SellerSelectModal from "@/components/SellerSelectModal";


const TestPage = ({productName, isBidActive, finalBuyerId, productID}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const {data : session} = useSession();
    const token = session?.user.token;

    // const {data} = getServerApi({ req : req, url : "/products/1"})
    const {data} = useSWR("/products/1",bidFetcher);
    console.log(data);

    return (
        <>
            <SellerSelectModal setModalOpen={setModalIsOpen} productName={data ? data.name : ""} isBidActive={data ? data.isBidActive : false} finalBuyerId ={data ? data.finalBuyerId : false} productID = {data ? data.id : false}/>
        </>
    )
}
export default TestPage;