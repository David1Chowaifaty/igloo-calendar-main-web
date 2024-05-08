export declare class Countdown {
    private seconds;
    private isActive;
    private intervalRef;
    private onFinish;
    private format;
    private subscribers;
    constructor(initialSeconds: number, onFinish?: () => void, autoStart?: boolean, format?: 'days' | 'hours' | 'minutes');
    private clearInterval;
    start(): void;
    pause(): void;
    reset(newSeconds?: number): void;
    private notifySubscribers;
    subscribe(callback: (formattedTime: string) => void): void;
    unsubscribe(callback: (formattedTime: string) => void): void;
    getFormattedTime(): string;
    getSeconds(): number;
    isRunning(): boolean;
}
export declare function getDateDifference(date1: Date, date2: Date): number;
export declare function daysToSeconds(days: number): number;
