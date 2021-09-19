import {useState,useEffect} from 'react'
import { getMoviesByGenre } from './FetchData';

export const UseMoviesByGenre = (genre,limit) => {
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieByGenre=async()=>{
            setLoading(true);
            const{data,error}=await getMoviesByGenre(genre,limit);
            setLoading(false) ;

            if(error){
                return setError(error);
            }

            return setMovieDetails(data)
        }
        fetchMovieByGenre();
    }, [genre]);
    return {loading,movieDetails,error}
};

