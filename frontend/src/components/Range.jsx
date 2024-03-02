"use client"
import React, {useEffect, useState} from 'react';

const PriceRangeSlider = ({min, max, valueFunction}) => {
    const [minPrice, setMinPrice] = useState(max / 2);
    const [maxPrice, setMaxPrice] = useState(max);
    useEffect(() => {
        valueFunction([max / 2 - minPrice, maxPrice]);
        // console.log(max/2-minPrice);
    }, [minPrice, maxPrice])

    useEffect(() => {
        valueFunction([max / 2 - minPrice, maxPrice]);
        // console.log(max/2-minPrice);
    }, [])

    const handleMinChange = (e) => {
        setMinPrice(parseInt(e.target.value));
    };

    const handleMaxChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
    };

    return (<div className="w-full flex items-center">
            <div className="flex-1">
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700"></label>
                <input
                    type="range"
                    id="minPrice"
                    min={min}
                    max={max / 2}
                    value={minPrice}
                    onChange={handleMinChange}
                    className="block w-full mt-1 scale-x-[-1]"
                    style={{backgroundColor: 'white'}}
                />
            </div>
            <div className="flex-1 -ml-2">
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700"></label>
                <input
                    type="range"
                    id="maxPrice"
                    min={max / 2}
                    max={max}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="block w-full mt-1 bg-white"
                />
            </div>
        </div>);
};

export default PriceRangeSlider;
