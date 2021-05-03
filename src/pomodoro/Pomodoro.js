import React, { useState } from "react";
import classNames from "../utils/class-names/index";
import useInterval from "../utils/useInterval";


import FocusTime from "./FocusTime";
import BreakTime from "./BreakTime";
import RemainingTime from "./RemainingTime";


function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // creating intial session properties
  const sessionInitialState = {
    active: false,
    focusSession: true,
    sessionTypeTitle: "Focusing",
    focusTime: 1500,
    breakTime: 300,
    currentTime: 0,
    timer: 1500,
  }

  // setting initial state of session to the above initial state object
  const [session, setSession] = useState({...sessionInitialState});

  // using useInterval to play audio and change the session type with function
  useInterval(() => {
    setSession({...session, timer: session.timer -1,});
    if (session.timer === 0) {
      new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
      changeSessionType(session, setSession);  
    
    }},
    isTimerRunning ? 100 : null
  
  );

  // function to change the session type between focus and break
  function changeSessionType(session, setSession) {
    if (session.focusSession) {
        setSession({
            ...session,
            focusSession: false,
            sessionTypeTitle: "On Break",
            currentTime: session.breakTime,
            timer: session.breakTime,
        });
    } else {
        setSession({
            ...session,
            focusSession: true,
            sessionTypeTitle: "Focusing",
            currentTime: session.focusTime,
            timer: session.focusTime,
        });
    }
}



  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
      
      if (!session.active) {
        setSession({
          ...session,
          active: true,
          currentTime: session.focusTime,
          timer: session.focusTime,
        });
      }
    }
  const stopButtonHandler = () => {
    setIsTimerRunning(false);
    setSession({
      ...session,
      active: false,
      focusSession: true,
    });
  }
  
  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col" data-testid="duration-focus">
          <FocusTime
            min={300}
            max={3600}
            label={"Focus Duration: "}
            session={session}
            setSession={setSession}
          />
        </div>
        <div className="col">
          <div className="float-right" data-testid="duration-break">
            <BreakTime
              min={60}
              max={900}
              label={"Break Duration: "}
              session={session}
              setSession={setSession}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* Implement stopping the current focus or break session. and disable the stop button when there is no active session
                This is done with ternary operator in onClick function */}
            <button
              type="button"
              disabled={!session.active}
              className={classNames({
                "btn": true,
                "btn-primary": session.active,
                "btn-secondary": !session.active,
              })}
              data-testid="stop"
              title="Stop the session"
              onClick={session.active ? stopButtonHandler : undefined}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <RemainingTime
        session={session}
        isTimerRunning={isTimerRunning}
      />
    </div>
  );
}

export default Pomodoro;
