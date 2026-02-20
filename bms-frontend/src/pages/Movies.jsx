import React from "react";
import Bannerslider from "../components/shared/Bannerslider";
import Moviefilters from "../components/movies/Moviefilters.jsx";
import MovieList from "../components/movies/MovieList.jsx";
import {getAllMovies} from "../apis"
import {useQuery, keepPreviousData} from "@tanstack/react-query"

const Movies = () => {
  const { data: allMovies, isError } = useQuery({
    queryKey: ["allMovies"],
    queryFn: async () => {
      return await getAllMovies();
    },
    placeholderData: keepPreviousData,
    select: (res) => res.data.movies
  });
  if (isError) {
    toast.error("Something went wrong!");
  }
  return (
    <div>
      <Bannerslider />
      <div className="flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen md:px-[100px] pb-10 pt-8">
        <Moviefilters />
        <MovieList allMovies = {allMovies}/>
      </div>
      
    </div>
  );
};

export default Movies;