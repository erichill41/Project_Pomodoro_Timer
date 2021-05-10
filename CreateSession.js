import React from "react";
import { minutesToDuration } from "../utils/duration";

function CreateSession({ focusDuration, setFocusDuration, breakDuration, setBreakDuration, session }) {
    // decrease break time by 5 minutes each time button is clicked
    const decreaseFocusHandler = () => {
        setFocusDuration((currentDuration) => Math.max(5, currentDuration - 5));
      };

    // increase break time by 5 minutes each time button is clicked
    const increaseFocusHandler = () => {
        setFocusDuration((currentDuration) => Math.min(60, currentDuration + 5));
      };

    // decrease by 1 minute every button click
    const decreaseBreakHandler = () => {
        setBreakDuration((currentDuration) => Math.max(1, currentDuration - 1));
    }

    // increase by 1 minute every button click
    const increaseBreakHandler = () => {
        setBreakDuration((currentDuration) => Math.min(15, currentDuration + 1))
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group input-group-lg mb-2">
                    <span className="input-group-text" data-testid="duration-focus">
                        {/* TODO: Update this text to display the current focus session duration */}
                        Focus Duration: {minutesToDuration(focusDuration)}
                    </span>
                    <div className="input-group-append">
                        <button
                            type="button"
                            className={session === null ? "btn btn-primary" : "btn btn-secondary"} // dynamically change class if session is active
                            data-testid="decrease-focus"
                            disabled={session === null ? false : true} // disable if there is a session
                            onClick={decreaseFocusHandler}
                        >
                            <span className="oi oi-minus" />
                        </button>
                        <button
                            type="button"
                            className={session === null ? "btn btn-primary" : "btn btn-secondary"} // dynamically change class if session is active
                            data-testid="increase-focus"
                            disabled={session === null ? false : true} // disable if there is a session
                            onClick={increaseFocusHandler}
                        >
                            <span className="oi oi-plus" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="float-right">
                    <div className="input-group input-group-lg mb-2">
                        <span className="input-group-text" data-testid="duration-break">
                            {/* TODO: Update this text to display the current break session duration */}
                            Break Duration: {minutesToDuration(breakDuration)}
                        </span>
                        <div className="input-group-append">
                            <button
                                type="button"
                                className={session === null ? "btn btn-primary" : "btn btn-secondary"} // dynamically change class if session is active
                                data-testid="decrease-break"
                                disabled={session === null ? false : true} // disable if there is a session
                                onClick={decreaseBreakHandler}
                            >
                                <span className="oi oi-minus" />
                            </button>
                            <button
                                type="button"
                                className={session === null ? "btn btn-primary" : "btn btn-secondary"} // dynamically change class if session is active
                                data-testid="increase-break"
                                disabled={session === null ? false : true} // disable if there is a session
                                onClick={increaseBreakHandler}
                            >
                                <span className="oi oi-plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default CreateSession;