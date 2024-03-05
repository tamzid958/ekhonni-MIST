"use client"

import SellerSelectModal from "@/components/SellerSelectModal";
import {useState} from "react";
import {useSession} from "next-auth/react";
import {getServerApi} from "@/utils/axios.settings";
import useSWR from "swr";
import {fetcher} from "@/utils/fetcher";

const TestPage = ({productName, isBidActive, finalBuyerId, productID}) => {
    const biddingActive = true;
    const [modalIsOpen, setModalIsOpen] = useState(true);



    const {data : session} = useSession();
    const token = session?.user.token;
    const req = {
        'content-type': 'application/json'
    }
    // const {data} = getServerApi({ req : req, url : "/products/1"})

    const [bidIsActive, setBidIsActive] = useState(isBidActive)
    const {data} = useSWR("/products/1",fetcher);
    console.log(data);

    return (
        <>
            <SellerSelectModal setModalOpen={setModalIsOpen} productName={data ? data.name : ""} isBidActive={data ? data.isBidActive : false} finalBuyerId ={data ? data.finalBuyerId : false} productID = {data ? data.id : false}/>
        </>
    )
}

export default TestPage;