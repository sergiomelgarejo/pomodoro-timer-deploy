import { useContext, useEffect } from "react";
import { Button } from "./components/Button";
import { CountdownAnimation } from "./components/CountdownAnimation";
import { SetPomodoro } from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";

function App() {
  const {
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingsBtn, 
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    resetTimer,
    updateExecute
  } = useContext(SettingsContext)

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container">
      <h1 className="title">Pomodoro</h1>
      <small className="sub-title">Increase your productivity with the pomodoro technique.</small>
        {pomodoro !== 0 ?
          <>
            <ul className="labels">
              <li>
                <Button 
                  title="Work" 
                  activeClass={executing.active === 'work' && 'active-label'}
                  _callback={() => setCurrentTimer('work')} 
                />
              </li>
              <li>
                <Button 
                  title="Short Break" 
                  activeClass={executing.active === 'short' && 'active-label'}
                  _callback={() => setCurrentTimer('short')} 
                />
              </li>
              <li>
                <Button 
                  title="Long Break" 
                  activeClass={executing.active === 'long' && 'active-label'}
                  _callback={() => setCurrentTimer('long')} 
                />
              </li>
            </ul>
            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper labels">
              <Button 
                title="Start" 
                activeClass={!startAnimate ? 'active' : undefined}
                _callback={startTimer}
              />
              <Button 
                title="Pause" 
                activeClass={startAnimate ? 'active' : undefined}
                _callback={pauseTimer}
              />
              <Button 
                title="Reset" 
                activeClass={'reset'}
                _callback={resetTimer}
              />
            </div>
            <Button title="Settings" _callback={SettingsBtn} />
          </> : <SetPomodoro />
        }
    </div>
  );
}

export default App;
