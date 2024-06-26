import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProgress, fillDurationVariables } from "../../features/progress";

import "./index.scss";

export default function Player() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const audioRef = useRef();

  useEffect(() => {
    if(playlist.songs && playlist.play) {
      audioRef.current.play()
    }
    else {
      audioRef.current.pause()
    }
  }, [playlist])

  function handleLoadedData(e){
    if(playlist.songs) {
      dispatch(fillDurationVariables({
        currentTime: e.target.currentTime,
        totalDuration: e.target.duration,
      }))
    }
  }

  function handleTimeUpdate(e) {
    dispatch(updateProgress(e.target.currentTime))
  }

  return (
    <audio
      id="audio-player"
      src={playlist.songs?.find((obj) => obj.id === playlist.currentSongID).url}
      ref={audioRef}
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
    ></audio>
  );
}
