import play from "../../../assets/play-icon.svg";
import pause from "../../../assets/pause-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import { togglePlay } from "../../../features/playlist";

import "./index.scss";

export default function PlayBtn() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);

  return (
    <button 
      onClick={() => dispatch(togglePlay())}
      className="play-btn">
      <img className="play-img" src={playlist.play ? pause : play} alt="lecture ou pause" />
    </button>
  );
}
