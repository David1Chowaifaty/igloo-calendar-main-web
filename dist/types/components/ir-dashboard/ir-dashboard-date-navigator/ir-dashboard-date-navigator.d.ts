import { type ISODate } from "../../../utils/calendar-dates";
import { EventEmitter } from '../../../stencil-public-runtime';
/** How many days either side of today the picker reaches. */
/**
 * Day picker for the dashboard, bounded to five days either side of today: weekday, day and month stacked
 * between the previous / next chevrons, all vertically centred. The day turns brand blue while it is today.
 */
export declare class IrDashboardDateNavigator {
    /** Selected day (`YYYY-MM-DD`). */
    date: ISODate;
    /** Emitted with the new day when the user moves to the previous / next day. */
    dateChange: EventEmitter<ISODate>;
    private shift;
    render(): any;
}
