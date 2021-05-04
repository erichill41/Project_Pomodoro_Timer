import React from "react";
import { secondsToDuration } from "../utils/duration";

function DisplaySession ({ session, focusDuration, breakDuration }) {
    function displayLabel(label) {
        if (label === "Focusing") {
            return focusDuration;
        } else {
            return breakDuration;
        }
    }

    function timeElapsed(totalTime, timeRemaining) {
        const timeElapsed = totalTime - timeRemaining;
        return (timeElapsed * 100) / totalTime;
    }

    // if no session, do not display this component
    if (session === null) return null;

    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {secondsToDuration(displayLabel(session.label))} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={timeElapsed(displayLabel(session.label), session.timeRemaining)} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: timeElapsed(displayLabel(session.label), session.timeRemaining) + "%"}} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default DisplaySession;
