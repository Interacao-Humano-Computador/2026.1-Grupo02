let sessionLog = {
    participantId: 'User_' + Date.now() + '_' + Math.floor(Math.random()*1000),
    startTime: Date.now(),
    endTime: null,
    events: []
};

function logEvent(type, target, details) {
    sessionLog.events.push({
        timestamp: Date.now(),
        type: type,
        targetTag: target ? target.tagName : '',
        targetId: target ? target.id : '',
        targetClass: target ? target.className : '',
        ...details
    });
}

document.addEventListener('click', (e) => {
    logEvent('click', e.target, {
        x: e.clientX,
        y: e.clientY
    });
});

document.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) {
        logEvent('keydown', e.target, {
            key: e.key
        });
    }
});

window.addEventListener('beforeunload', () => {
    sessionLog.endTime = Date.now();
    // Use fetch with keepalive for reliable delivery on page unload and correct Content-Type
    fetch('/api/log-interaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sessionLog),
        keepalive: true
    });
});
