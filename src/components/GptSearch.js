import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { HEADER_BG } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 w-full h-full -z-10">
        <img
          src={HEADER_BG}
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
