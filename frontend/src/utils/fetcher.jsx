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

export const postCallFetcher = async ([baseUrl, url, method, headers], {arg}) => {
    const response = await callApi({baseURL:baseUrl, url, method, data:arg, headers});
    return response;
}