import { useState, useEffect } from "react";
import {getMovieSuggestions } from "./FetchData";

export const useMoviesSuggestions = (id) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
        setLoading(true);
        const { data, error } = await getMovieSuggestions(id);
        setLoading(false);
    
        if (error) {
          return setError(error);
        }
        return setMovies(data);
      };
    fetchMovieById();
  }, [id]);

  return { loading,movies,error };
};
