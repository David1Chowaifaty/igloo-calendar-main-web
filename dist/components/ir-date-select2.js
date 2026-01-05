import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as ClickOutside } from './ClickOutside.js';
import { c as createSlotManager } from './slot.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateSelectCss = ":host{display:flex;--arrow-size:0.375rem;--max-width:25rem;--show-duration:100ms;--hide-duration:100ms;--arrow-diagonal-size:calc((var(--arrow-size) * sin(45deg)));font-size:var(--wa-font-size-m);line-height:var(--wa-line-height-normal);text-align:start;white-space:normal}.ir-date-select__control{width:100%;display:flex}.ir-date-select__calendar{display:flex;flex-direction:column;width:max-content;max-width:var(--max-width);padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.ir-date-select__popup{--arrow-size:inherit;--show-duration:inherit;--hide-duration:inherit;pointer-events:auto}.ir-date-select__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.ir-date-select__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.ir-date-select__trigger,.ir-date-select__input{width:100%}";
const IrDateSelectStyle0 = irDateSelectCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDateSelect = /*@__PURE__*/ proxyCustomElement(class IrDateSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.datePickerFocus = createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = createEvent(this, "datePickerBlur", 7);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    get el() { return this; }
    withClear;
    placeholder;
    label;
    dates;
    /**
     * Determines whether the date picker is rendered inline or in a pop-up.
     * If `true`, the picker is always visible inline.
     */
    inline = false;
    /**
     * The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`.
     */
    date = null;
    /**
     * Enables multiple dates.
     * If `true`, multiple selection is allowed.
     * If you pass a number (e.g. 3), that is the maximum number of selectable dates.
     */
    multipleDates = false;
    /**
     * Whether the picker should allow range selection (start and end date).
     */
    range = false;
    /**
     * Format for the date as it appears in the input field.
     * Follows the `AirDatepicker` format rules.
     */
    dateFormat = 'yyyy-MM-dd';
    /**
     * Enables the timepicker functionality (select hours and minutes).
     */
    timepicker = false;
    /**
     * The earliest date that can be selected.
     */
    minDate;
    /**
     * The latest date that can be selected.
     */
    maxDate;
    /**
     * Disables the input and prevents interaction.
     */
    disabled = false;
    /**
     * Closes the picker automatically after a date is selected.
     */
    autoClose = true;
    /**
     * Shows days from previous/next month in the current month's calendar.
     */
    showOtherMonths = true;
    /**
     * Allows selecting days from previous/next month shown in the current view.
     */
    selectOtherMonths = true;
    /**
     * Controls how the date picker is triggered.
     * - **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name="trigger">`).
     * - **`false`**: A default button input is used to open the picker.
     *
     * Defaults to `false`.
     */
    customPicker = false;
    /**
     * Pass a container element if you need the date picker to be appended to a specific element
     * for styling or positioning (particularly for arrow rendering).
     * If not provided, it defaults to `this.el`.
     */
    container;
    /**
     * If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.
     * This can be useful if you need the picker to fully re-initialize in response to dynamic changes,
     * but note that it may affect performance if triggered frequently.
     * Defaults to `false`.
     */
    forceDestroyOnUpdate = false;
    /**
     * If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).
     * Otherwise, empty-date changes will be ignored (no event emitted).
     *
     * Defaults to `false`.
     */
    emitEmptyDate = false;
    /**
     * Styles for the trigger container
     */
    triggerContainerStyle = '';
    isActive = false;
    currentDate;
    slotManagerHasSlot = 0;
    isValid;
    datePickerFocus;
    datePickerBlur;
    dateChanged;
    static instanceCounter = 0;
    popupId;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    // Create slot manager with state change callback
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotManagerHasSlot++;
    });
    airDatePickerRef;
    componentWillLoad() {
        IrDateSelect.instanceCounter += 1;
        this.popupId = `ir-date-select-popup-${IrDateSelect.instanceCounter}`;
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotManagerHasSlot++;
        });
        this.slotManager.initialize();
        if (this.el.hasAttribute('aria-invalid')) {
            this.isValid = this.el.getAttribute('aria-invalid');
        }
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    handleAriaInvalidChange(newVal, oldVal) {
        if (newVal !== oldVal)
            this.isValid = newVal;
    }
    async clearDatePicker() {
        this.airDatePickerRef?.clearDatePicker();
    }
    async openDatePicker() {
        this.isActive = true;
    }
    async closeDatePicker() {
        this.isActive = false;
    }
    togglePicker() {
        this.isActive ? this.closeDatePicker() : this.openDatePicker();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.togglePicker();
                break;
            case 'Escape':
                if (this.isActive) {
                    event.preventDefault();
                    this.closeDatePicker();
                }
                break;
        }
    }
    get _label() {
        if (this.range) {
            return this.dates.map(d => hooks(d).format('MMM DD, YYYY')).join(' → ');
        }
        if (!this.currentDate) {
            return null;
        }
        return this.timepicker ? hooks(this.currentDate).format('MMM DD, YYYY, HH:mm') : hooks(this.currentDate).format('MMM DD, YYYY');
    }
    render() {
        return (h(Host, { key: 'acb73ade9d2a0e9947535844b71b95c60adf4568', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, h("wa-popup", { key: 'ded8bbc1e8b882329587b3b597604e87fb7e9356', arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, h("div", { key: 'bec0b41f65dc2d39e6ae18a732395aca0443f215', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, h("div", { key: 'a871b6b37ad9037e0a4d374695918f6eac22b91f', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("slot", { key: '47d345973ca34d3c6fdfabc65619df1db45e8b26', name: "trigger" }, h("ir-input", { key: '3d9ca822ef52aa06e6a27ff69222f2c26e877f7c', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && h("slot", { key: '50b91d012b7984c031de83ae12eda150161ba682', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '135ea49fc5f55aebfd9945fdf4f5210342533bfc', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: 'b3337e4a0b90e1cc2574c4d757c09d50f3b61ee3', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: 'a73e4a9e9e8511b5a92430401618023a43815fe8', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: 'f6eced31c77b437805f9b3ed4efe3cd2a5367cb9', name: "hint", slot: "hint" }))))), h("div", { key: 'd2f749b3787c9259b6ecc895c28a875ae98c4158', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date selection dialog" }, h("ir-air-date-picker", { key: '1c0133ee220fae1d7ad234832dd1c85ff56fef7f', ref: el => (this.airDatePickerRef = el), withClear: this.withClear, placeholder: this.placeholder, label: this.label, dates: this.dates, inline: this.inline, date: this.date, multipleDates: this.multipleDates, range: this.range, dateFormat: this.dateFormat, timepicker: this.timepicker, minDate: this.minDate, maxDate: this.maxDate, disabled: this.disabled, autoClose: this.autoClose, showOtherMonths: this.showOtherMonths, selectOtherMonths: this.selectOtherMonths, customPicker: this.customPicker, container: this.container, forceDestroyOnUpdate: this.forceDestroyOnUpdate, emitEmptyDate: this.emitEmptyDate, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentDate = e.detail?.start;
                this.dateChanged.emit(e.detail);
                const shouldClose = this.autoClose && (!this.range || (this.range && e.detail.dates.length > 1));
                if (shouldClose) {
                    this.togglePicker();
                }
            } }), h("slot", { key: 'ca700fbe40819f5265c5df515dd3f3fd87d30950' })))));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
    static get style() { return IrDateSelectStyle0; }
}, [1, "ir-date-select", {
        "withClear": [4, "with-clear"],
        "placeholder": [1],
        "label": [1],
        "dates": [16],
        "inline": [4],
        "date": [1537],
        "multipleDates": [8, "multiple-dates"],
        "range": [4],
        "dateFormat": [1, "date-format"],
        "timepicker": [4],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "disabled": [4],
        "autoClose": [4, "auto-close"],
        "showOtherMonths": [4, "show-other-months"],
        "selectOtherMonths": [4, "select-other-months"],
        "customPicker": [4, "custom-picker"],
        "container": [16],
        "forceDestroyOnUpdate": [4, "force-destroy-on-update"],
        "emitEmptyDate": [4, "emit-empty-date"],
        "triggerContainerStyle": [1, "trigger-container-style"],
        "isActive": [32],
        "currentDate": [32],
        "slotManagerHasSlot": [32],
        "isValid": [32],
        "clearDatePicker": [64],
        "openDatePicker": [64],
        "closeDatePicker": [64]
    }, undefined, {
        "aria-invalid": ["handleAriaInvalidChange"]
    }]);
__decorate([
    ClickOutside()
], IrDateSelect.prototype, "closeDatePicker", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-select", "ir-air-date-picker", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateSelect);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDateSelect as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-select2.js.map