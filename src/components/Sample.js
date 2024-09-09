import React, { useState, useEffect } from 'react';

const Sample = () => {
    const apiUrl = "https://run.mocky.io/v3/317651c7-748c-49fe-a3b2-0bc081b2e134";

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error("Network response not okay");
                }
                const data = await response.json();  // Await the promise
                setDatas(data);  // Set the resolved data
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData();
    }, []);  // Empty dependency array ensures useEffect runs only once

    const mappedData = datas.map((item) => (
        <div className='card'>
            <div className='image'>
                <img src={item.image}/>
            </div>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    ));

    return (
        <>
            <section>
                {mappedData}
            </section>
        </>
    );
};

export default Sample;
