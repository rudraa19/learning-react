import React, { useState, useEffect } from "react";

export default function Card() {
    const [data, setData] = useState(null); // Initialize with null

    useEffect(() => {
        fetch('https://api.github.com/users/rudraa19')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={data.avatar_url} alt="User avatar" />
            </a>
            <div className="px-5 pb-5">
                <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {data.name || data.login}
                    </h5>
                </a>
                
                <div className="flex items-center justify-center text-gray-900 dark:text-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, assumenda enim nesciunt, quam ipsa corporis quia accusantium aut harum consectetur omnis atque dignissimos dolor ab quaerat eos pariatur quidem alias.</p>
                </div>
            </div>
        </div>
    );
}
