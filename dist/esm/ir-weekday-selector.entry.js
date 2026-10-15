import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irWeekdaySelectorCss = () => `.sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}`;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.weekdayChange = createEvent(this, "weekdayChange");
    }
    /**
     * Initial list of selected weekdays (numeric values).
     */
    weekdays = [];
    /**
     * When true, at least one weekday must stay selected:
     * the last remaining selected weekday is disabled so it can't be unchecked.
     */
    required = false;
    /**
     * Internal state tracking currently selected weekdays.
     */
    selectedWeekdays = new Set(this.weekdays);
    /**
     * Emits an updated list of selected weekday values when the selection changes.
     *
     * Example:
     * ```tsx
     * <ir-weekday-selector onWeekdayChange={(e) => console.log(e.detail)} />
     * ```
     */
    weekdayChange;
    /** Monday-first day values; labels come from `Lcz_WeekdayAbbreviations` so they localise. */
    static WEEKDAY_VALUES = [1, 2, 3, 4, 5, 6, 0];
    static WEEKDAY_FALLBACK = 'M, T, W, Th, Fr, Sa, Su';
    get _weekdays() {
        const labels = t('Lcz_WeekdayAbbreviations', { fallback: IrWeekdaySelector.WEEKDAY_FALLBACK })
            .split(',')
            .map(s => s.trim());
        return IrWeekdaySelector.WEEKDAY_VALUES.map((value, i) => ({
            value,
            label: labels[i] ?? IrWeekdaySelector.WEEKDAY_FALLBACK.split(', ')[i],
        }));
    }
    componentWillLoad() {
        if (this.weekdays) {
            this.selectedWeekdays = new Set(this.weekdays);
        }
    }
    handleWeekdayChange(newDays, oldDays) {
        if (newDays.length !== oldDays.length && newDays.length !== this.selectedWeekdays.size) {
            this.selectedWeekdays = new Set(newDays);
        }
    }
    /**
     * Toggles the selected state of a specific weekday.
     * Updates internal state and emits `weekdayChange` event.
     *
     * @param checked - Whether the checkbox is checked.
     * @param weekDay - The numeric value of the weekday.
     */
    toggleWeekDays({ checked, weekDay }) {
        const prev = new Set(this.selectedWeekdays);
        if (checked) {
            if (!this.selectedWeekdays.has(weekDay)) {
                prev.add(weekDay);
                this.selectedWeekdays = new Set(prev);
            }
        }
        else {
            prev.delete(weekDay);
            this.selectedWeekdays = new Set(prev);
        }
        this.weekdayChange.emit(Array.from(this.selectedWeekdays));
    }
    render() {
        const isLastSelected = this.required && this.selectedWeekdays.size === 1;
        return (h(Host, { key: 'f564214bbae4581294353259ff8ac22c05593459', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), disabled: isLastSelected && this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
    }
    static get watchers() { return {
        "weekdays": [{
                "handleWeekdayChange": 0
            }]
    }; }
};
IrWeekdaySelector.style = irWeekdaySelectorCss();

export { IrWeekdaySelector as ir_weekday_selector };
