import { baseSongs } from "../features/playlist";

export function getSongsData() {
  return function (dispatch, getState) {
    fetch("/data/playlist.json")
      .then((response) => response.json())
      .then((data) => dispatch(baseSongs(data.playlist)))
      .catch((error) => {
        console.error("Error :", error);
      });
  };
}
