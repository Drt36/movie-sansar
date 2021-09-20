import { useState, useEffect } from "react";
import { getMoviesById } from "./FetchData";

export const useMovieDetail = (id) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [torrent, setTorrent] = useState({});
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      setLoading(true);
      const { data, error } = await getMoviesById(id);
      setLoading(false);

      if (error) {
        return setError(error);
      }
      return setMovie(data), setTorrent(data.torrents[0]),setDescription(data.description_full.slice(0,350));
    };
    fetchMovieById();
  }, [id]);

  return { loading, movie, error, torrent,description };
};
