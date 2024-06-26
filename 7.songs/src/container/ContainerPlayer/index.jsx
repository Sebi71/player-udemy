import Playlist from "../../components/Playlist"
import Player from "../../components/Player"
import PlayerControl from "../../layouts/Player/PlayerControl"
import "./index.scss"

export default function ContainerPlayer() {
  return (
    <>
        <div className="global-container">
            <div className="player-container">
                <Player />
                <h1 className="player-title">SebPlayer - Liste de musique :</h1>
                {/* playlist */}
                <Playlist />
            </div>
        </div>
        <PlayerControl />
    </>
  )
}