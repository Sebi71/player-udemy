import { useSelector } from "react-redux"
import formatValue from "../../../utils/formatValue";
import "./index.scss"


export default function Progress() {
  const progressData = useSelector((state) => state.progress)

  const scaleValue = progressData.current / progressData.totalDuration 

  function handleProgress(e) {
    const player = document.getElementById("audio-player")
    const rect = e.target.getBoundingClientRect()
    const width = rect.width 
    const x = e.clientX - rect.left
    console.log((x / width) * progressData.totalDuration);
    player.currentTime = (x / width) * progressData.totalDuration
  }

  return (
    <div className="progress-container">
      <div 
        onClick={handleProgress}
        className="progress-content">
        <div
          style={{transform: `scaleX(${scaleValue})`}} 
          className="progress"></div>
      </div>
      <div className="time-content">
        <span>{formatValue(progressData.current)}</span>
        <span>{formatValue(progressData.totalDuration)}</span>
      </div>
    </div>
  )
}

