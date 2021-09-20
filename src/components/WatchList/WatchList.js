import React,{useState} from 'react'
import Card from '../Card/Card';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './watchlist.css'
const WatchList = () => {
    const [data, setData] = useState(Object.values(localStorage));
    const [key, setkeys] = useState(Object.keys(localStorage));
    let watchlist=[];

    const renderWatchList=()=>{
        let movieDetail;
        data.map((item) => {
            movieDetail = JSON.parse(item);
            const isWatchlisted=key.includes('l'+movieDetail.id);

            if(isWatchlisted){
                watchlist.push(movieDetail);
            }
        });
        
        return ( watchlist.length>0? <Card movieDetail={movieDetail} key={movieDetail.id} remove={true} /> : <div className='watchlist-noresult'>No Result Found!</div>)
    }
    return (
        <div>
            <Navbar/>
            <div className='watchlist-wrapper'>
                {renderWatchList()}
            </div>
            <Footer/>
        </div>
    )
}

export default WatchList
