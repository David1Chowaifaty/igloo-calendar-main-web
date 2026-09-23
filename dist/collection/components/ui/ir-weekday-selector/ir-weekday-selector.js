import { h, Host } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrWeekdaySelector {
    /**
     * Initial list of selected weekdays (numeric values).
     */
    weekdays = [];
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
        return (h(Host, { key: '4280f6dc88cf9ee3eab46d7b94062735baa8f6b7', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
    }
    static get is() { return "ir-weekday-selector"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-weekday-selector.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-weekday-selector.css"]
        };
    }
    static get properties() {
        return {
            "weekdays": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial list of selected weekdays (numeric values)."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "selectedWeekdays": {}
        };
    }
    static get events() {
        return [{
                "method": "weekdayChange",
                "name": "weekdayChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an updated list of selected weekday values when the selection changes.\n\nExample:\n```tsx\n<ir-weekday-selector onWeekdayChange={(e) => console.log(e.detail)} />\n```"
                },
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "weekdays",
                "methodName": "handleWeekdayChange"
            }];
    }
}
