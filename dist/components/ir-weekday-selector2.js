import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

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
    const components = ["ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrWeekdaySelector);
            }
            break;
    } });
}

export { IrWeekdaySelector as I, defineCustomElement as d };

//# sourceMappingURL=ir-weekday-selector2.js.map