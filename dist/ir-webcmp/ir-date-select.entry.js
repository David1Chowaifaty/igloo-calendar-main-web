import { r as registerInstance, a as createEvent, i as getElement, h, e as Host } from './index-7b3961ed.js';
import { C as ClickOutside } from './ClickOutside-94ce191a.js';
import { c as createSlotManager } from './slot-4b32bd27.js';
import { h as hooks } from './moment-ab846cee.js';

const irDateSelectCss = ":host{display:flex;--arrow-size:0.375rem;--max-width:25rem;--show-duration:100ms;--hide-duration:100ms;--arrow-diagonal-size:calc((var(--arrow-size) * sin(45deg)));font-size:var(--wa-font-size-m);line-height:var(--wa-line-height-normal);text-align:start;white-space:normal}.ir-date-select__control{width:100%;display:flex}.ir-date-select__calendar{display:flex;flex-direction:column;width:max-content;max-width:var(--max-width);padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.ir-date-select__popup{--arrow-size:inherit;--show-duration:inherit;--hide-duration:inherit;pointer-events:auto}.ir-date-select__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.ir-date-select__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.ir-date-select__trigger,.ir-date-select__input{width:100%}";

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
const IrDateSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.datePickerFocus = createEvent(this, "datePickerFocus", 7);
        this.datePickerBlur = createEvent(this, "datePickerBlur", 7);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    get el() { return getElement(this); }
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
    selectedStart = null;
    selectedEnd = null;
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
        // Initialize internal selection state from props
        if (this.range && this.dates?.length) {
            this.selectedStart = this.dates[0] ? hooks(this.dates[0]) : null;
            this.selectedEnd = this.dates[1] ? hooks(this.dates[1]) : null;
        }
        else if (this.date) {
            this.selectedStart = hooks(this.date);
            this.currentDate = this.selectedStart;
        }
    }
    handleDatePropChange(newVal) {
        this.selectedStart = newVal ? hooks(newVal) : null;
        this.currentDate = this.selectedStart;
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
        this.selectedStart = null;
        this.selectedEnd = null;
        this.currentDate = null;
        if (this.emitEmptyDate) {
            this.dateChanged.emit({ start: null, end: null });
        }
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
            if (!this.selectedStart)
                return null;
            const start = this.selectedStart.format('MMM DD, YYYY');
            const end = this.selectedEnd ? this.selectedEnd.format('MMM DD, YYYY') : '...';
            return `${start} → ${end}`;
        }
        if (!this.currentDate) {
            return null;
        }
        return this.timepicker ? hooks(this.currentDate).format('MMM DD, YYYY, HH:mm') : hooks(this.currentDate).format('MMM DD, YYYY');
    }
    render() {
        return (h(Host, { key: '78f3c8296a97e6adce07346745f02f5753b2ea30', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, h("wa-popup", { key: 'bab1cc1f6c9379fac9716f895b2a4aa18433d76c', style: { '--max-width': 'auto' }, arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, h("div", { key: '5cc7a0755c714c76e680d7e992509134d4e163fb', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, h("div", { key: '326e090304d5905257d71226589ade7b5aeeb877', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("slot", { key: '46742530c8d4cf5a5f6750f47b2d25e8bcba4fd2', name: "trigger" }, h("ir-input", { key: '3fd294d65a26937685a23a8d1c98e8d27cd9a64d', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && h("slot", { key: '837d019f7215e0f75ca4191acb761b1db83ef932', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '90abc98e1567da80d645eab88a6ab7d9fc2d300d', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: '606715921dbd0a0a765677716d6bb452d13ddc63', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: '10f4b394deab3e02f3c14b7d4d346a62c0419690', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: '6b5bb861bd3309a94ad74fbcf788f88d15c31701', name: "hint", slot: "hint" }))))), h("div", { key: '70d82ddfb16ce545c3a2a2060c38c8f76f24844e', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date selection dialog" }, h("ir-custom-date-range", { key: '9118ba8569331a8ac62edd82038e5d88c82ef5f1', style: { '--cal-button-size': '35px' }, fromDate: this.selectedStart, toDate: this.selectedEnd, minDate: this.minDate ? hooks(this.minDate) : undefined, maxDate: this.maxDate ? hooks(this.maxDate) : undefined, onDateChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const start = e.detail.start ? hooks(e.detail.start) : null;
                const end = e.detail.end ? hooks(e.detail.end) : null;
                this.selectedStart = start;
                this.selectedEnd = end;
                this.currentDate = start;
                this.dateChanged.emit({ start, end });
                const shouldClose = this.autoClose && (!this.range || (this.range && end !== null));
                if (shouldClose) {
                    this.closeDatePicker();
                }
            } }), h("slot", { key: 'c081d3ef493f80fe7dccb0c874a289261125ae65' })))));
    }
    static get watchers() { return {
        "date": ["handleDatePropChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
__decorate([
    ClickOutside()
], IrDateSelect.prototype, "closeDatePicker", null);
IrDateSelect.style = irDateSelectCss;

export { IrDateSelect as ir_date_select };

//# sourceMappingURL=ir-date-select.entry.js.map