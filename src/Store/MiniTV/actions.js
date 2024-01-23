import { toast } from "react-toastify";
import { setLoadingmovie, setMovies } from "./slice";

export const getMovies = () => (dispatch) => {
  try {
    dispatch(setLoadingmovie(true));
    fetch(`https://api.tvmaze.com/shows?_limit=30`).then((res) => {
      res.json().then((result) => {
        dispatch(setMovies(result));
        dispatch(setLoadingmovie(false));
      });
    });
  } catch (error) {
    dispatch(setLoadingmovie(false));
    toast.error(error.message);
  }
};
