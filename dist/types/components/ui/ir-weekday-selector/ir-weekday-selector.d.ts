import { EventEmitter } from '../../../stencil-public-runtime';
export interface Weekday {
    value: number;
    label: string;
}
export declare class IrWeekdaySelector {
    /**
     * Initial list of selected weekdays (numeric values).
     */
    weekdays: number[];
    /**
     * Internal state tracking currently selected weekdays.
     */
    selectedWeekdays: Set<number>;
    /**
     * Emits an updated list of selected weekday values when the selection changes.
     *
     * Example:
     * ```tsx
     * <ir-weekday-selector onWeekdayChange={(e) => console.log(e.detail)} />
     * ```
     */
    weekdayChange: EventEmitter<number[]>;
    private _weekdays;
    componentWillLoad(): void;
    handleWeekdayChange(newDays: number[], oldDays: number[]): void;
    /**
     * Toggles the selected state of a specific weekday.
     * Updates internal state and emits `weekdayChange` event.
     *
     * @param checked - Whether the checkbox is checked.
     * @param weekDay - The numeric value of the weekday.
     */
    private toggleWeekDays;
    render(): any;
}
