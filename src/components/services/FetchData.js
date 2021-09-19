import axios from "axios";
export const getUpcomingMovies= async () => {
    let date=new Date().toISOString;
    let limit=4;

  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?date_added=${date}&limit=${limit}`
    );
    const data = await response.data.data.movies;
    return {
      data: data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error.message || "Oppps, Movies Not Found."
    };
  }
};

export const getMoviesByGenre= async(genre,limit)=>{
    try{
      const response=await axios.get(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=${limit}`
      );
      const data=await response.data.data.movies;
      return{
        data:data,
        error:null
      }
    }
    catch(error){
        return{
          data:null,
          error: error.message || "Oppps, Movies Not Found."
        }
    }
}