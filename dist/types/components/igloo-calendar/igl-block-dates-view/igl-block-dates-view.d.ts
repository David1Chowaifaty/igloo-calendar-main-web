import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglBlockDatesView {
    defaultData: {
        [key: string]: any;
    };
    fromDate: string;
    toDate: string;
    entryDate: string;
    entryHour: number;
    isEventHover: boolean;
    entryMinute: number;
    renderAgain: boolean;
    dataUpdateEvent: EventEmitter<{
        [key: string]: any;
    }>;
    private blockDatesData;
    private releaseList;
    private bookingService;
    componentWillLoad(): Promise<void>;
    private handleOptionalReason;
    private handleReleaseAfterChange;
    /**
     * Switches between the two ways a block resolves: auto-release after a period, or out-of-service (manual release).
     * The `wa-select` / `wa-input` for the auto-release branch live inside the radio group, so their bubbled `change`
     * events reach this handler too — ignore anything that isn't the radio group or a radio.
     */
    private handleModeChange;
    private emitData;
    private getReleaseHoursString;
    private formatNumber;
    private renderPage;
    render(): any;
}
