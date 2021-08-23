import { useContext, useState } from "react";
import { SettingsContext } from '../context/SettingsContext'

export function SetPomodoro() {
  const [newTimer, setNewTimer] = useState({
    work: 0.1, 
    short: 5.0, 
    long: 15.0,
    active: 'work'
  })

  const {updateExecute} = useContext(SettingsContext)

  const handleChange = input => {
    const {name, value} = input.target
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value)
        })
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value)
        })
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value)
        })
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateExecute(newTimer)
  }

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} title={`${newTimer.work} minutes`}/>
          <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} title={`${newTimer.short} minutes`}/>
          <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} title={`${newTimer.long} minutes`}/>
        </div>
        <button className="active-label" type="submit" >Set timer</button>
      </form>
    </div>
  )
}