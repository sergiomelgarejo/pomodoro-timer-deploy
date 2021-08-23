import { createContext, useState } from 'react'

export const SettingsContext = createContext()

export default function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0)
  const [executing, setExecuting] = useState({})
  const [startAnimate, setStartAnimate] = useState(false)

  function startTimer() {
    setStartAnimate(true)
  }

  function pauseTimer() {
    setStartAnimate(false)
  }

  function resetTimer() {
    setPomodoro(executing.active)
    setStartAnimate(true)
  }

  const SettingsBtn = () => {
    setExecuting({})
    setPomodoro(0)
  }

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state
    })
    setTimerTime(executing)
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings)
    setTimerTime(updatedSettings)
  }

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work)
        break;
      case 'short':
        setPomodoro(evaluate.short)
        break;
      case 'long':
        setPomodoro(evaluate.long)
        break;
      default:
        setPomodoro(0)
        break;
    }
  }

  function stopAnimate() {
    setStartAnimate(false)
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
  }

  return (
    <SettingsContext.Provider value={{
      resetTimer, 
      updateExecute,
      pomodoro,
      executing,
      startAnimate,
      stopAnimate,
      startTimer,
      pauseTimer,
      SettingsBtn,
      setCurrentTimer,
      updateExecute,
      children
      }}>
      {props.children}
    </SettingsContext.Provider>
  )
}