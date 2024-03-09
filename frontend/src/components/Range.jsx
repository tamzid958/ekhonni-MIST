"use client"
import React, { useState} from 'react';

const PriceRangeSlider = ({min, max,ChangeHandle}) => {
    const [minPrice, setMinPrice] = useState(max/2);
    const [maxPrice, setMaxPrice] = useState(max/1);
    const handleMinChange = (e) => {
        setMinPrice(parseInt(e.target.value));
        ChangeHandle(e)
    };

    const handleMaxChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
        ChangeHandle(e)
    };

    return (<div className="w-full flex items-center">
            <div className="flex-1">
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700"></label>
                <input
                    type="range"
                    id="minPrice"
                    min={min}
                    max={max / 2}
                    name={"startPrice"}
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
                    name={"endPrice"}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="block w-full mt-1 bg-white"
                />
            </div>
        </div>);
};

export default PriceRangeSlider;
