import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import GptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gpt: GptReducer,
  },
});
export default appStore;
