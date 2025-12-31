import { h, Host } from "@stencil/core";
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
    _weekdays = [
        { value: 1, label: 'M' },
        { value: 2, label: 'T' },
        { value: 3, label: 'W' },
        { value: 4, label: 'Th' },
        { value: 5, label: 'Fr' },
        { value: 6, label: 'Sa' },
        { value: 0, label: 'Su' },
    ];
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
        return (h(Host, { key: '23b4c4feafa49a32a7f3a581beb2164433719c71', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
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
//# sourceMappingURL=ir-weekday-selector.js.map
