"use client"
import ScrollCard from "@/components/ScrollCard";
import {useEffect, useState} from "react";

const Corosol = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === textData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);
    const textData = [
        {
            image: "/discover.jpg",
            heading: "Discover Treasures, Rekindle Stories",
            description: "Your One-Stop Re-Sell Haven!",
            button_text:"Buy"
        },
        {
            image: "/bidding.jpg",
            heading: "Revive, Reuse, Re-Sell",
            description: "Where Every Item Tells a New Story!",
            button_text:"Bid now"
        },
        {
            image: "/savings.jpg",
            heading: "Secondhand Splendor",
            description: "Elevate Your Lifestyle, One Find at a Time!",
            button_text:"Sell"
        },
    ];
    return (
        <>
            <div className="w-11/12 h-[500px] mx-auto my-5 border-2 border-black rounded-xl relative overflow-hidden">
                <div className={"flex transition ease-out duration-1000"}
                     style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    {
                        textData.map((data, index) => <ScrollCard key={index} img={data.image} header={data.heading}
                                                                  description={data.description} button_text={data.button_text}/>)
                    }
                </div>
            </div>
        </>
    )
}
export default Corosol;