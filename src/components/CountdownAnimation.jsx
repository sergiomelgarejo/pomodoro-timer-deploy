import { useContext } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingsContext } from "../context/SettingsContext"

export function CountdownAnimation({
  key = 1, 
  timer = 20, 
  animate = true, 
  children}) 
{

  const {stopAnimate} = useContext(SettingsContext)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={ timer * 60 }
      colors={[['#ff6961', 0.33]]}
      strokeWidth={6}
      size={220}
      trailColor="#3a3b3c"
      onComplete={() => {
        stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}