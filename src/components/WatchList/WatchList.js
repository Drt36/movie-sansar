import React,{useEffect, useState} from 'react'
import Card from '../Card/Card';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './watchlist.css'
const WatchList = () => {
    const [data, setData] = useState(Object.values(localStorage));
    const [key, setkeys] = useState(Object.keys(localStorage));

    useEffect(() => {
        setData(Object.values(localStorage));
        setkeys(Object.keys(localStorage));
    }, [key])

    console.log(key)
    return (
        <div>
            <Navbar/>
            <h3 className='watchlist__title'>My Watchlist</h3>
            <div className='watchlist-wrapper'>    
                {
                data.map((item) => {
                const parsedData = JSON.parse(item);
                const isWatchlisted=key.includes("l"+parsedData.id);
                console.log(parsedData.id);
                console.log(isWatchlisted)
                return ( isWatchlisted===true?<Card movieDetail={parsedData} key={parsedData.id} remove={true} />:'')
                })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default WatchList
