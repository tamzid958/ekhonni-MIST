"use client"


import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {toast, Toaster} from "sonner";
import Header from "@/components/Header";
import {requestApi} from "@/utils/axios.settings";
import {jwtDecode} from "jwt-decode";
import {useRouter} from "next/navigation";

const ResetPass = () => {
    const router = useRouter();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    console.log(token)
    let formData = {
        email: "",
        confirm_password: "",
        password: ""
    };

    const res = requestApi({
        url: "/reset-password",
        params: {
            token: token
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.confirm_password) {
            const decoded = jwtDecode(token);
            formData.email= decoded.sub

            try {
                const res = await requestApi({
                    url: "/reset-password",
                    method: "POST",
                    params: {
                        email: formData.email,
                        password: formData.password
                    }
                });

                if (res.error) {
                    toast.error("Failed to reset password. Please try again.");
                } else {
                    toast.success("Password reset successfully.");
                    setTimeout(() => {
                        router.push("/");
                    }, 2000)
                }
            } catch (error) {
                toast.error("An unexpected error occurred. Please try again later.");
            }
        } else {
            toast.error("Passwords do not match.");
        }
    };
    const handleInputChange = (e, field) => {
        formData[field] = e.target.value;
    }

    return (
        <>
            <Header/>
            <Toaster richColors position={"top-right"} />
            <form onSubmit={handleSubmit}>
                <div className="w-full h-[700px] flex justify-center items-center">
                    <div
                        className="w-[450px] h-[450px] border-2 border-black flex flex-row justify-center items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-lg">
                        <div
                            className="w-full h-full flex items-center bg-gradient-radial from-slate-500 to-slate-700 rounded-r-md">
                            <div className="w-full h-3/5 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-4xl text-white mb-8 "> Reset Password </h1>
                                <p className="text-center text-white text-lg mb-4">Enter new password and reset it </p>
                                <div className="flex flex-col justify-center items-center">
                                    <TextField placeholder={"Password"} type={"password"} name={"password"}
                                               onChange={(e) => handleInputChange(e,"password")}/>

                                    <TextField placeholder={"Confirm Password"} type={"password"} name={"password"}
                                               onChange={(e) => handleInputChange(e,"confirm_password")}/>
                                </div>
                                <div className="mt-8">
                                        <Button value={"Submit"} option={0} type={"submit"}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ResetPass;

