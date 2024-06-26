import {useDispatch, useSelector} from "react-redux"
import { getSongsData } from "../../services/asyncActions"

import "./index.scss"

export default function Playlist() {
    const dispatch = useDispatch()
    const playlist = useSelector((state) => state.playlist)

    if(!playlist.songs) {
        dispatch(getSongsData())
    }

  return (
    <>
        <ul className="playlist-container">
            {playlist?.songs?.length && playlist.songs.map((song) => (
                <li className="playlist" key={song.id}>
                    <span>{song.title} - </span>
                    <span>{song.artist}</span>
                </li>
            ))}
        </ul>
    </>
  )
}