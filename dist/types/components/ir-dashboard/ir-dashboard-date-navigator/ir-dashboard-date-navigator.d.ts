import { type ISODate } from "../../../utils/calendar-dates";
import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * Day picker for the dashboard header: a pill showing the selected day that opens a list of the days from
 * `MAX_DAY_OFFSET` before today to `MAX_DAY_OFFSET` after it.
 */
export declare class IrDashboardDateNavigator {
    /** Selected day (`YYYY-MM-DD`). */
    date: ISODate;
    /** Emitted with the new day when the user picks another day. */
    dateChange: EventEmitter<ISODate>;
    private handleSelect;
    render(): any;
}
