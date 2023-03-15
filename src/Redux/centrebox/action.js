import * as types from "./actiontype";

export const getnews = (data) => ({
  type: types.GETNEWS,
  payload: data,
});
export const getnewsloading = () => ({
  type: types.GETNEWSLOADING,
});
export const getnewerror = () => ({
  type: types.GETNEWSERROR,
});

export const Fetchdata = () => {
  return (dispatch) => {
    dispatch(getnewsloading());
    fetch(`https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7a5e8544e0msh4e2c7f28b5938c7p17a8d3jsnd55993987998",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        return dispatch(getnews(res.storyList));
      })
      .catch((error) => dispatch(getnewerror()));
  };
};
