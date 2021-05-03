import React from "react";
import { secondsToDuration } from "../utils/duration";
import classNames from "../utils/class-names";

function focusTime({min, max, label, session, setSession}) {
    const decreaseButtonHandler = () => {
        if (session.focusTime > min) (setSession({...session, focusTime: session.focusTime - 300}));
    };

    const increaseButtonHandler = () => {
        if (session.focusTime < max) (setSession({...session, focusTime: session.focusTime + 300}));
        console.log("focus time", session.focusTime);
        console.log("max", max);
    };

    return (
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text">
                {/* display the current focus session duration */}
                {`${label} ${secondsToDuration(session.focusTime)}`}
            </span>
            <div className="input-group-append">
                {/* button: decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className={classNames({
                        "btn": true,
                        "btn-primary": !session.active,
                        "btn-secondary": session.active,          
                    })}
                    onClick={ !session.active ? decreaseButtonHandler : undefined }
                    data-testid="decrease-focus"
                >
                    <span className="oi oi-minus" />
                </button>
                {/* button: increasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className={classNames({
                        "btn": true,
                        "btn-primary": !session.active,
                        "btn-secondary": session.active,
                    })}
                    onClick={ !session.active ? increaseButtonHandler : undefined }
                    data-testid="increase-focus"
                >
                    <span className="oi oi-plus" />
                </button>
            </div>
        </div>
    );
}

export default focusTime;