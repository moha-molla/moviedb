import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { MovieInstance } from "../../utility/MovieInstance";
import requests from "../../utility/requestUrls";
import { useEffect, useState } from "react";

const DisplayRow = () => {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginal: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        MovieInstance.get(requests.fetchTrending),
        MovieInstance.get(requests.fetchNetflixOriginals),
        MovieInstance.get(requests.fetchTopRatedMovies),
        MovieInstance.get(requests.fetchActionMovies),
        MovieInstance.get(requests.fetchComedyMovies),
        MovieInstance.get(requests.fetchHorrorMovies),
        MovieInstance.get(requests.fetchRomanceMovies),
        MovieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginal: netflixRes.data.results, // FIXED: Changed netflixOriginals to netflixOriginal to match state initialization
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix trending" movies={movies.trending} />

      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginal} />

      <SlideShow title="Top Rated" movies={movies.topRated} />

      <SlideShow title="Action" movies={movies.action} />
    </div>
  );
};

export default DisplayRow;
