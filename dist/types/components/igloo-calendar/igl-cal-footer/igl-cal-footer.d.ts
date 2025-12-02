import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglCalFooter {
    optionEvent: EventEmitter<{
        [key: string]: any;
    }>;
    calendarData: {
        [key: string]: any;
    };
    isLegendOpen: boolean;
    today: String;
    highlightedDate: string;
    private _today;
    handleOptionEvent(key: any, data?: string): void;
    render(): any;
}
