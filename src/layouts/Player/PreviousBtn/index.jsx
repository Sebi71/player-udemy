import previousIcon from "../../../assets/prev-icon.svg"
import {useDispatch, useSelector} from "react-redux";
import { previousSong } from "../../../features/playlist";

import "./index.scss";

export default function PreviousBtn() {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlist)

  function handlePrevSong() {
    if (playlist.songs) {
      const prevID = playlist.songs.findIndex(song => song.id === playlist.currentSongID) - 1
      dispatch(previousSong(prevID))
    }
  }

  return (
    <button 
      onClick={handlePrevSong}
      className="previous-btn">
      <img className="previous-btn-img" src={previousIcon} alt="musique précédente" />
    </button>
  );
}
