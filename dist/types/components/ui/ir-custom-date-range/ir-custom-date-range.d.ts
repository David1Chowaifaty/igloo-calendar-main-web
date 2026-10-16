import { EventEmitter } from '../../../stencil-public-runtime';
import { IDateModifiers } from './ir-custom-date-range.types';
import { Moment } from 'moment/min/moment-with-locales';
/**
 * @component ir-custom-date-range
 * @description A two-month inline calendar for selecting a date range.
 * Emits `dateChange` whenever the user clicks a day.
 *
 * @csspart base           - The root wrapper div.
 * @csspart calendar       - Each month `<table>` element.
 * @csspart calendar-header - The `<tr>` that contains the month navigation row.
 * @csspart month-navigation - The `<div>` holding prev/next buttons and the month label.
 * @csspart nav-prev       - The previous-month `<button>`.
 * @csspart nav-next       - The next-month `<button>` (both months).
 * @csspart month-label    - The `<span>` showing the current month and year.
 * @csspart weekday-row    - The `<tr>` containing weekday abbreviation headers.
 * @csspart weekday        - Each `<th>` weekday abbreviation cell.
 * @csspart days-grid      - The `<tbody>` containing all week rows.
 * @csspart week-row       - Each `<tr>` representing one week.
 * @csspart day-cell       - Each `<td>` grid cell.
 * @csspart day-button     - The `<button>` rendered for each visible day.
 */
export declare class IrCustomDateRange {
    /** The currently selected check-in date. */
    fromDate: Moment | null;
    /** The currently selected check-out date. */
    toDate: Moment | null;
    /** The earliest selectable date. Defaults to 24 years in the past. */
    minDate: Moment;
    /** The latest selectable date. Defaults to 24 years in the future. */
    maxDate: Moment;
    /**
     * An optional map of `YYYY-MM-DD` → `IDateModifierOptions` used to
     * mark specific dates as unavailable or attach pricing data.
     */
    dateModifiers: IDateModifiers;
    /** Maximum number of nights that can be selected in one span. */
    maxSpanDays: number;
    /** When `true`, displays a price line inside each day button (requires `dateModifiers`). */
    showPrice: boolean;
    /**
     * BCP-47 locale tag used to localise day names and month formatting.
     * @reflect
     */
    locale: string;
    private selectedDates;
    private displayedDaysArr;
    private hoveredDate;
    private weekdays;
    /**
     * Emits the selected start and end dates as native `Date` objects.
     * `end` is `null` when the user has only picked the first date.
     */
    dateChange: EventEmitter<{
        start: Date | null;
        end: Date | null;
    }>;
    componentWillLoad(): void;
    /** Re-localises weekday names when the locale changes. */
    handleLocale(newValue: string, oldLocale: string): void;
    /** Syncs the internal selection start when `fromDate` prop changes. */
    handleFromDateChange(newValue: Moment | null, oldValue: Moment | null): void;
    /** Syncs the internal selection end when `toDate` prop changes. */
    handleToDateChange(newValue: Moment | null, oldValue: Moment | null): void;
    private getMonthDays;
    private goToNextMonth;
    private goToPreviousMonth;
    private selectDay;
    private resetHours;
    private handleMouseEnter;
    private handleMouseLeave;
    private isDaySelected;
    private checkDatePresence;
    render(): any;
}
