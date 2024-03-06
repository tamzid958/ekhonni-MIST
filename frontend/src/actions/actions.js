'use server'
import {requestApi} from "@/utils/axios.settings";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const addToDb = async (formData) => {
    const param = {
        req:{
            'Content-Type': 'multipart/form-data'
        },
        url: "/user/products/save",
        method: "POST",
        data: formData
    }

    // const session = await getServerSession(authOptions)
    // console.log("the session from actions ", session)
    const response = await requestApi(param)
    if(!response) return {'error':"can not save data"}
    return response
}