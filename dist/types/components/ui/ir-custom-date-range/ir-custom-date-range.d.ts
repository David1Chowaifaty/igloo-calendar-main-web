import { EventEmitter } from '../../../stencil-public-runtime';
import { IDateModifiers, IDateModifierOptions } from './ir-custom-date-range.types';
import moment, { Moment } from 'moment/min/moment-with-locales';
export declare class IrCustomDateRange {
    fromDate: Moment | null;
    toDate: Moment | null;
    minDate: Moment;
    maxDate: Moment;
    dateModifiers: IDateModifiers;
    maxSpanDays: number;
    showPrice: boolean;
    locale: string;
    selectedDates: {
        start: Moment | null;
        end: Moment | null;
    };
    displayedDaysArr: {
        month: Moment;
        days: Moment[];
    }[];
    hoveredDate: Moment | null;
    dateChange: EventEmitter<{
        start: Date | null;
        end: Date | null;
    }>;
    weekdays: string[];
    componentWillLoad(): void;
    handleLocale(newValue: string, oldLocale: string): void;
    handleFromDateChange(newValue: Moment | null, oldValue: Moment | null): void;
    handleToDateChange(newValue: Moment | null, oldValue: Moment | null): void;
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
    getMonthStyles(index: number): "margin-horizontal" | "margin-right" | "margin-right margin-left" | "margin-left";
    checkDatePresence(day: Moment): IDateModifierOptions;
    render(): any;
}
