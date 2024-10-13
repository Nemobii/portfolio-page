'use client'
import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://zenquotes.io/api/quotes/');
            const result = await response.json();
            setData(result); // Set the state with the parsed data
        };
        fetchData();
    }, []);

    return (
        <div className="w-fit mx-auto p-5 bg-teal-100">
            {data}
        </div>
    )
}

export default Quote