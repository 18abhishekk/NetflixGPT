import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const gemini = async () => {
    const prompt =
      "Act as a movies recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only Give me 5 movies name , comma separated like the example given ahead. Example: Gadar, Animal, Pathan, Tiger, Jawan";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const moviesArray = text.split(",").map((movie) => movie.trim());
    return moviesArray;
  };

  // Search Movie in TMDB
  const searchMoviesTMDB = async (movie_name) => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie_name,
      API_OPTIONS
    );
    const json = await movies.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const moviesArray = await gemini();
    const gptMovies = moviesArray;
    const promisArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(promisArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
