import { EventEmitter } from '../../../../stencil-public-runtime';
import { DayInfo, MonthInfo } from '../types';
/**
 * The `.headersContainer` sticky bar of `igl-cal-header`: the month row plus the per-day header
 * cells (unassigned-units badge, day title, occupancy percent). `.headersContainer`/`.headerCell`
 * and each cell's `data-day` attribute are read directly by `igloo-calendar.tsx`'s drag-bounds
 * calculation (`document.querySelectorAll('.headersContainer .headerCell')`) — do not rename them.
 */
export declare class IglCalHeaderDays {
    isVacationRental: boolean;
    today: String;
    highlightedDate: string;
    monthsInfo: MonthInfo[];
    days: DayInfo[];
    /** Unassigned-unit counts keyed by `dayInfo.day`, falling back to `dayInfo.unassigned_units_nbr` per cell. */
    unassignedRoomsNumber: {
        [key: string]: number;
    };
    /** Days (keyed by `dayInfo.day`) whose unassigned-units fetch is still in flight; their badges breathe. */
    loadingDays: {
        [key: string]: boolean;
    };
    /**
     * Gates the badge entrance cascade so it plays once per screen open. Stays open from mount until
     * `REVEAL_TOTAL_MS` after the initial unassigned-units fetch settles — the calendar snapshot often
     * has no counts, so most badges only mount when that fetch lands, well after the first paint.
     */
    private revealing;
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked: EventEmitter<{
        day: string;
        currentDate: any;
    }>;
    private revealTimer;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /**
     * A fetch in flight keeps the gate open; the countdown restarts when it goes idle. The parent
     * builds a fresh map every render, so only busy/idle transitions count — not reference changes.
     */
    handleLoadingDaysChange(loadingDays: {
        [key: string]: boolean;
    }, previous?: {
        [key: string]: boolean;
    }): void;
    private hasLoadingDays;
    private scheduleRevealEnd;
    private handleBadgeClick;
    /** Stagger radiates outward from today's cell, where the user is looking after the initial scroll. */
    private getRevealDelay;
    render(): any;
}
