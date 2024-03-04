"use client";

import {useBid} from "@/app/services/queries";

export default function bids(){
    const  bidQuery = useBid()
    return <div>{bidQuery.data?.offeredPrice}</div>
}