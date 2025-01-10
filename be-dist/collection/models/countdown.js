export class Countdown {
    constructor(initialSeconds, onFinish, autoStart = true, format = 'minutes') {
        this.intervalRef = null;
        this.subscribers = [];
        this.seconds = initialSeconds;
        this.isActive = autoStart;
        this.onFinish = onFinish || (() => { });
        this.format = format;
        if (this.isActive) {
            this.start();
        }
    }
    clearInterval() {
        if (this.intervalRef !== null) {
            clearInterval(this.intervalRef);
            this.intervalRef = null;
        }
    }
    start() {
        this.clearInterval();
        this.isActive = true;
        this.intervalRef = window.setInterval(() => {
            if (this.seconds > 0) {
                this.seconds -= 1;
                this.notifySubscribers();
            }
            else {
                this.clearInterval();
                this.isActive = false;
                this.notifySubscribers();
                this.onFinish();
            }
        }, 1000);
    }
    pause() {
        this.isActive = false;
        this.clearInterval();
    }
    reset(newSeconds = this.seconds) {
        this.pause();
        this.seconds = newSeconds;
        this.isActive = false;
        this.notifySubscribers();
    }
    notifySubscribers() {
        const formattedTime = this.getFormattedTime();
        this.subscribers.forEach(callback => callback(formattedTime));
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
    getFormattedTime() {
        const d = Math.floor(this.seconds / (3600 * 24));
        const h = Math.floor((this.seconds % (3600 * 24)) / 3600);
        const m = Math.floor((this.seconds % 3600) / 60);
        const s = this.seconds % 60;
        switch (this.format) {
            case 'days':
                return `${String(d).padStart(2, '0')}:${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            case 'hours':
                return `${String(h + d * 24).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            case 'minutes':
            default:
                return `${String(m + h * 60 + d * 1440).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
    }
    getSeconds() {
        return this.seconds;
    }
    isRunning() {
        return this.isActive;
    }
}
export function getDateDifference(date1, date2) {
    const diff = date2.getTime() - date1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
export function daysToSeconds(days) {
    return days * 86400;
}
//# sourceMappingURL=countdown.js.map
