import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-checkbox2.js';

const irWeekdaySelectorCss = ".sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}";
const IrWeekdaySelectorStyle0 = irWeekdaySelectorCss;

const IrWeekdaySelector = /*@__PURE__*/ proxyCustomElement(class IrWeekdaySelector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.weekdayChange = createEvent(this, "weekdayChange", 7);
    }
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
        return (h(Host, { key: '168b4be2a44340685a28981556b37d217709a53f', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("ir-checkbox", { checked: this.selectedWeekdays.has(w.value), onCheckChange: e => this.toggleWeekDays({ checked: e.detail, weekDay: w.value }), label: w.label, labelClass: "m-0 p-0", class: "days-checkbox" })))));
    }
    static get watchers() { return {
        "weekdays": ["handleWeekdayChange"]
    }; }
    static get style() { return IrWeekdaySelectorStyle0; }
}, [2, "ir-weekday-selector", {
        "weekdays": [16],
        "selectedWeekdays": [32]
    }, undefined, {
        "weekdays": ["handleWeekdayChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-weekday-selector", "ir-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrWeekdaySelector);
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrWeekdaySelector as I, defineCustomElement as d };

//# sourceMappingURL=ir-weekday-selector2.js.map