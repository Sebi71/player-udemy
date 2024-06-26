import { useSelector } from "react-redux";
import PreviousBtn from "../PreviousBtn";
import PlayBtn from "../PlayBtn";
import NextBtn from "../NextBtn";
import Progress from "../Progress";

import "./index.scss";

export default function PlayerControl() {
  const playlist = useSelector((state) => state.playlist);
  const listenedSong = playlist.songs?.find(
    (obj) => obj.id === playlist.currentSongID
  );

  return (
    <div className="player-control-container">
      <div className="player-control-info">
        <p className="title-song">{playlist.songs && listenedSong.title}</p>
        <div className="info-song-content">
          <p className="info-song">{playlist.songs && listenedSong.artist}</p>
          <p className="info-song">
            {playlist.songs?.findIndex(
              (obj) => obj.id === playlist.currentSongID
            ) + 1}
            / {playlist.songs?.length}
          </p>
        </div>
      </div>
      <div className="btn-content">
        <PreviousBtn />
        <PlayBtn />
        <NextBtn />
      </div>
      <Progress />
    </div>
  );
}
