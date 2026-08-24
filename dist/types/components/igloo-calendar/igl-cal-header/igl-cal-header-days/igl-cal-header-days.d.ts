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
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked: EventEmitter<{
        day: string;
        currentDate: any;
    }>;
    private handleBadgeClick;
    render(): any;
}
