import nextIcon from "../../../assets/next-icon.svg"
import {useDispatch, useSelector} from "react-redux";
import {nextSong} from "../../../features/playlist"

import "./index.scss"

export default function NextBtn() {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlist)

  function handleNextSong() {
    if (playlist.songs) {
      const nextID = playlist.songs.findIndex(song => song.id === playlist.currentSongID) + 1
      dispatch(nextSong(nextID))
    }
  }

  return (
    <button 
      onClick={handleNextSong}
      className="next-btn">
      <img className="next-btn-img" src={nextIcon} alt="musique suivante" />
    </button>
  )
}