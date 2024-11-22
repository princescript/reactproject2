import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    const [data, setData] = useState([]);

    const getImages = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data);
        console.log(data)

    }
    useEffect(() => {
        getImages()
    })

    return (
        <div className='p-10'>
            {/* <button onClick={getImages}
                className='bg-teal-800 text-white font-semibold px-4 py-2 rounded-md active:scale-90'> Get Data</button> */}
            <div className='bg-gray-950 p-5 mt-5 rounded-md'>
                {data.map((elem, idx) => {
                    return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-6 py-6 rounded-md mb-3'>
                        <img className='h-40' src={elem.download_url} alt='#' />
                        <h1 className='text-2xl font-semibold bg-white text-black'>{elem.author}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default App