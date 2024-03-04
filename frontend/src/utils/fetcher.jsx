import axios from "axios";
import {baseUrl} from "@/utils/baseUrl";
import {getServerApi} from "@/utils/axios.settings";

let req = {
    'content-type': 'application/json'
}
export const fetcher = async url => await axios.get(`${baseUrl}${url}`).then(res => res.data)


// export const fetcher = async url => await getServerApi({req,url})