import React from "react";
import { secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

function RemainingTime ({ session, isTimerRunning }) {
    if (!session.active) return null;

    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <h2 data-testid="session-title">{session.sessionTypeTitle} for {secondsToDuration(session.currentTime)} minutes</h2>
                    <p className="lead" data-testid="session-sub-title">
                        {secondsToDuration(session.timer)} remaining
                    </p>
                    <h3>{!isTimerRunning && `PAUSED`}</h3>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <ProgressBar session={session} />
                </div>
            </div>
        </div>
    )
}

export default RemainingTime;
