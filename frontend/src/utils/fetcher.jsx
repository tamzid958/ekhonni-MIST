"use client"
import {getServerApi} from "@/utils/axios.settings";
let req = {
    'content-type': 'application/json'
}


export const fetcher = async (url) => {
    const {data} = await getServerApi({req,url})
    return data;
}