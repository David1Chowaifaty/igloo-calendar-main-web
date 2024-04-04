import { EventEmitter } from '../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { IDateModifiers, IDateModifierOptions } from './ir-date-range.types';
export declare class IrDateRange {
    fromDate: Date | null;
    toDate: Date | null;
    minDate: Date;
    maxDate: Date;
    dateModifiers: IDateModifiers;
    maxSpanDays: number;
    showPrice: boolean;
    locale: Locale;
    selectedDates: {
        start: Date | null;
        end: Date | null;
    };
    displayedDaysArr: {
        month: Date;
        days: Date[];
    }[];
    hoveredDate: Date | null;
    dateChange: EventEmitter<{
        start: Date | null;
        end: Date | null;
    }>;
    weekdays: string[];
    componentWillLoad(): void;
    handleLocale(newValue: Locale, oldLocale: Locale): void;
    getMonthDays(month: Date): {
        month: Date;
        days: Date[];
    };
    handleKeyDown: (e: KeyboardEvent) => void;
    decrementDate(): void;
    incrementDate(): void;
    goToNextMonth(e: MouseEvent): void;
    goToPreviousMonth(e: MouseEvent): void;
    selectDay(day: Date): void;
    resetHours(): void;
    handleMouseEnter(day: Date): void;
    handleMouseLeave(): void;
    isDaySelected(day: Date): boolean;
    getMonthStyles(index: number): "margin-horizontal" | "margin-right" | "margin-right margin-left" | "margin-left";
    checkDatePresence(day: Date): IDateModifierOptions;
    render(): any;
}
