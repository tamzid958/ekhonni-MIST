"use client"
import {callApi, getServerApi, requestApi} from "@/utils/axios.settings";

let req = {
    'content-type': 'application/json'
}


export const fetcher = async (url) => {
    const {data} = await getServerApi({req,url})
    return data;
}

export const reqFetcher = async ([url,method,data]) => {
    const {data:value} = await requestApi({req,url,method,data})
    return value;
}

export const addProductFetcher = async ([url, baseURL, method, headers], {arg}) =>{
    return await callApi({url, baseURL, method, data: arg, headers});
}