"use client"
import axios from "axios";
import {baseUrl} from "@/utils/baseUrl";
import {getServerApi} from "@/utils/axios.settings";
import {useSession} from "next-auth/react";

let req = {
    'content-type': 'application/json'
}


export const fetcher = async (url) => {
    const {data} = await getServerApi({req,url})
    return data;
}