// Will change the type of session from focus to break or break to focus
// Sound will play either way

function ChangeSessionType(session, setSession) {
    if (session.focusSession) {
        setSession({
            ...session,
            focusSession: false,
            sessionTypeVerb: "Taking Break",
            currentDuration: session.breakDuration,
            timer: session.breakDuration,
        });
    } else {
        setSession({
            ...session,
            focusSession: true,
            sessionTypeVerb: "Focusing",
            currentDuration: session.focusTime,
            timer: session.focusTime,
        });
    }
    new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1922.mp3`).play();
}

export default ChangeSessionType