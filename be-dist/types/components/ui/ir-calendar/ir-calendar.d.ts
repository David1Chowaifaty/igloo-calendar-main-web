import { EventEmitter } from '../../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { IDateModifierOptions, IDateModifiers } from '../ir-date-range/ir-date-range.types';
export declare class IrCalendar {
    fromDate: Date | null;
    toDate: Date | null;
    minDate: Date;
    maxDate: Date;
    dateModifiers: IDateModifiers;
    maxSpanDays: number;
    showPrice: boolean;
    locale: Locale;
    selectedDate: Date;
    displayedDays: {
        month: Date;
        days: Date[];
    };
    hoveredDate: Date | null;
    dateChange: EventEmitter<Date>;
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
    checkDatePresence(day: Date): IDateModifierOptions;
    render(): any;
}
