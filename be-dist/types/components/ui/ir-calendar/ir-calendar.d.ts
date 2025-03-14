import { EventEmitter } from '../../../stencil-public-runtime';
import moment, { Moment } from 'moment/min/moment-with-locales';
import { IDateModifierOptions, IDateModifiers } from '../ir-date-range/ir-date-range.types';
export declare class IrCalendar {
    fromDate: Moment | null;
    toDate: Moment | null;
    minDate: Moment;
    maxDate: Moment;
    dateModifiers: IDateModifiers;
    maxSpanDays: number;
    showPrice: boolean;
    locale: string;
    date: Moment;
    selectedDate: Moment;
    displayedDays: {
        month: Moment;
        days: Moment[];
    };
    hoveredDate: Moment | null;
    dateChange: EventEmitter<Moment>;
    weekdays: string[];
    componentWillLoad(): void;
    handleDateChange(newDate: Moment, oldDate: Moment): void;
    handleLocale(newValue: string, oldLocale: string): void;
    getMonthDays(month: Moment): {
        month: moment.Moment;
        days: any[];
    };
    handleKeyDown: (e: KeyboardEvent) => void;
    decrementDate(): void;
    incrementDate(): void;
    goToNextMonth(e: MouseEvent): void;
    goToPreviousMonth(e: MouseEvent): void;
    selectDay(day: Moment): void;
    resetHours(): void;
    handleMouseEnter(day: Moment): void;
    handleMouseLeave(): void;
    isDaySelected(day: Moment): boolean;
    checkDatePresence(day: Moment): IDateModifierOptions;
    render(): any;
}
