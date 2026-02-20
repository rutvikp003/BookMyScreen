import React from "react";
import m4 from "../assets/m4.avif";
import TheaterTimings from "../components/movies/TheaterTimings.jsx";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getMovieById } from "../apis/index";
import { useParams } from "react-router-dom";
import { filters } from "../utils/constants.js";

// const movie?.data.movie = {
//         id: 4,
//         title: "F1: The Movie",
//         genre: ["Action", "Drama", "Sports"],
//         rating: 9.5,
//         votes: "6.8K",
//         img: m4,
//         languages: ["English", "Hindi", "Tamil", "Telugu"],
//         format: ["2D", "3D", "IMAX 3D"],
//         certification: "UA16+",
//         duration: "2h 22m",
//         releaseDate: "2024-06-28",
//         description: "F1: The Movie is an exhilarating sports drama that takes you behind the scenes of the high-octane world of Formula 1 racing. Directed by acclaimed filmmaker Director's Name, the film delves into the lives of top drivers, their fierce rivalries, and the relentless pursuit of victory on the world's most challenging circuits. With breathtaking cinematography capturing the speed and intensity of F1 racing, the movie?.data.movie offers an immersive experience for both motorsport enthusiasts and general audiences alike. The narrative explores themes of ambition, teamwork, and the personal sacrifices made by those who live life in the fast lane. Featuring a stellar cast and a gripping storyline, F1: The Movie is a must-watch for anyone seeking adrenaline-pumping action and heartfelt drama.",
//     };

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isError } = useQuery({
    queryKey: ["movies", id],
    queryFn: async () => await getMovieById(id),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {/* moviedetails section */}
      <div
        className="relative text-white font-sans px-4 py-10"
        style={{
          backgroundImage: `url(${movie?.data.movie.posterUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* actual content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* poster */}
          <div>
            <img
              src={movie?.data.movie.posterUrl}
              alt={movie?.data.movie.title}
              className="rounded-xl w-52 shadow-xl"
            />
          </div>
          {/* details */}
          <div className="flex flex-col justify-start flex-1">
            <h1 className="text-4xl font-bold mb-4">
              {movie?.data.movie.title}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2">
                <span className="font-bold text-pink-500">
                  Rating: {movie?.data.movie.rating}
                </span>
                <span className="text-gray-300">
                  ({movie?.data.movie.votes} votes)
                </span>
                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                  Rate now
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie?.data.movie.format.join(", ")}
              </span>
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie?.data.movie.languages.join(", ")}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              {movie?.data.movie.duration} *{" "}
              {movie?.data.movie.genre.join(", ")} *{" "}
              {movie?.data.movie.certification} *{" "}
              {movie?.data.movie.releaseDate}
              {movie?.data.movie.releaseDate}
            </p>
            <div>
              <h2 className="text-xl font-bold mb-2"> About the movie</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {" "}
                {movie?.data.movie.description}
              </p>
            </div>
          </div>

          {/* share buttons */}
          <div className="absolute top-0 right-0 cursor-pointer">
            <button className="bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Show Timings */}

      <div className="relative z-10 max-w-7xl mx-auto mt-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {filters.map((filter, i) => (
            <button
              className="border border-gray-300 px-5 py-1 rounded-lg cursor-pointer text-sm hover:bg-gray-100"
              key={i}
            >
              {filter}
            </button>
          ))}
        </div>

        <hr className="my-2 border-gray-200" />

        {/* Avalability Status*/}
        <div className="flex items-center gap-4 rounded-s-sm mb-1 py-2 text-sm px-8 bg-gray-200">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 font-semibold bg-green-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">Available</small>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 font-semibold bg-yellow-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">Filling fast</small>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 font-semibold bg-red-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500"> Almost full</small>
          </span>
        </div>

        {/* theater and showtime section */}
        <TheaterTimings movieId={id} />
      </div>
    </>
  );
};

export default MovieDetails;
