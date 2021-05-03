import React from "react";
import {secondsToDuration} from "../utils/duration";
import classNames from "../utils/class-names/index";

function BreakTime({min, max, label, session, setSession}) {
    // decrease break time by 5 minutes each time button is clicked
    function decreaseButtonHandler() {
        if (session.breakTime > min) (setSession({...session, breakTime: session.breakTime - 60}));
    };

    // increase break time by 5 minutes each time button is clicked
    function increaseButtonHandler() {
        if (session.breakTime < max) (setSession({...session, breakTime: session.breakTime + 60}));
    };

    return (
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text">
                {`${label} ${secondsToDuration(session.breakTime)}`}
            </span>
            <div className="input-group-append">
                {/* button to decrease break time next to button to increase */}
                <button
                    type="button"
                    className={classNames({
                        "btn": true,
                        "btn-primary": !session.active,
                        "btn-secondary": session.active,
                    })}
                    onClick={!session.active ? decreaseButtonHandler : undefined}
                    data-testid="decrease-break"
                >
                    <span className="oi oi-minus" />
                </button>
                {/* button to increase break time, disabled during session */}
                <button
                    type="button"
                    className={classNames({
                        "btn": true,
                        "btn-primary": !session.active,
                        "btn-secondary": session.active,
                    })}
                    onClick={!session.active ? increaseButtonHandler : undefined}
                    data-testid="increase-break"
                >
                    <span className="oi oi-plus" />
                </button>
            </div>
        </div>
    );
}

export default BreakTime;