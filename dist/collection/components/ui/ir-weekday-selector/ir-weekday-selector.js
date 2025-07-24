import { h, Host } from "@stencil/core";
export class IrWeekdaySelector {
    constructor() {
        /**
         * Initial list of selected weekdays (numeric values).
         */
        this.weekdays = [];
        /**
         * Internal state tracking currently selected weekdays.
         */
        this.selectedWeekdays = new Set(this.weekdays);
        this._weekdays = [
            { value: 1, label: 'M' },
            { value: 2, label: 'T' },
            { value: 3, label: 'W' },
            { value: 4, label: 'Th' },
            { value: 5, label: 'Fr' },
            { value: 6, label: 'Sa' },
            { value: 0, label: 'Su' },
        ];
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
        return (h(Host, { key: 'c4303227cab91ad9822effae7b94431f8928a66f', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("ir-checkbox", { checked: this.selectedWeekdays.has(w.value), onCheckChange: e => this.toggleWeekDays({ checked: e.detail, weekDay: w.value }), label: w.label, labelClass: "m-0 p-0", class: "days-checkbox" })))));
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
