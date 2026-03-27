var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ClickOutside } from "../../../../decorators/ClickOutside";
import { createSlotManager } from "../../../../utils/slot";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrDateSelect {
    el;
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
            this.selectedStart = this.dates[0] ? moment(this.dates[0]) : null;
            this.selectedEnd = this.dates[1] ? moment(this.dates[1]) : null;
        }
        else if (this.date) {
            this.selectedStart = moment(this.date);
            this.currentDate = this.selectedStart;
        }
    }
    handleDatePropChange(newVal) {
        this.selectedStart = newVal ? moment(newVal) : null;
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
        return this.timepicker ? moment(this.currentDate).format('MMM DD, YYYY, HH:mm') : moment(this.currentDate).format('MMM DD, YYYY');
    }
    render() {
        return (h(Host, { key: '6bff82bdd20f7d74d6ac8b75a5ae8c63c842eab7', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, h("wa-popup", { key: 'd68420b3e2d8100e59f5d4dc205abedca424ced9', style: { '--max-width': 'auto' }, arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, h("div", { key: '4cba927537ce4698f078034c3d26977c15650df0', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, h("div", { key: '1ec36e4a3288934edb63d8585fe5174c45fb163e', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("slot", { key: '95655d38548645d08044db10eb7adab525ba8455', name: "trigger" }, h("ir-input", { key: '3dff6f2f0b2efc101e0bccb7151fc1a7cba8b51a', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && h("slot", { key: 'd1a0dd168968c4cc76434cb5634b87d65679658f', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '1e2c8cddef344c00242917e2f30a9f98d62ef88e', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: '26a8e5150d3aecec2709660ba372dfd478c19500', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: '368c62a183dc0907da26cb3adc843b2b7f2ae82e', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: '138ed706728e4dee413222f2b4cffbb8fe4b625e', name: "hint", slot: "hint" }))))), h("div", { key: '2309a49017f96c5556e644dab48cb198e8d5da14', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date selection dialog" }, h("ir-custom-date-range", { key: '7e4ad68852bfb5e08430fdef5252afef1f7e6ad4', style: { '--cal-button-size': '35px' }, fromDate: this.selectedStart, toDate: this.selectedEnd, minDate: this.minDate ? moment(this.minDate) : undefined, maxDate: this.maxDate ? moment(this.maxDate) : undefined, onDateChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const start = e.detail.start ? moment(e.detail.start) : null;
                const end = e.detail.end ? moment(e.detail.end) : null;
                this.selectedStart = start;
                this.selectedEnd = end;
                this.currentDate = start;
                this.dateChanged.emit({ start, end });
                const shouldClose = this.autoClose && (!this.range || (this.range && end !== null));
                if (shouldClose) {
                    this.closeDatePicker();
                }
            } }), h("slot", { key: '5a21e635856b4b1d837822d3729714d0778d91fc' })))));
    }
    static get is() { return "ir-date-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-select.css"]
        };
    }
    static get properties() {
        return {
            "withClear": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "with-clear",
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "dates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "inline": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines whether the date picker is rendered inline or in a pop-up.\nIf `true`, the picker is always visible inline."
                },
                "getter": false,
                "setter": false,
                "attribute": "inline",
                "reflect": false,
                "defaultValue": "false"
            },
            "date": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Date | null",
                    "resolved": "Date | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`."
                },
                "getter": false,
                "setter": false,
                "attribute": "date",
                "reflect": true,
                "defaultValue": "null"
            },
            "multipleDates": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "boolean | number",
                    "resolved": "boolean | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables multiple dates.\nIf `true`, multiple selection is allowed.\nIf you pass a number (e.g. 3), that is the maximum number of selectable dates."
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple-dates",
                "reflect": false,
                "defaultValue": "false"
            },
            "range": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the picker should allow range selection (start and end date)."
                },
                "getter": false,
                "setter": false,
                "attribute": "range",
                "reflect": false,
                "defaultValue": "false"
            },
            "dateFormat": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Format for the date as it appears in the input field.\nFollows the `AirDatepicker` format rules."
                },
                "getter": false,
                "setter": false,
                "attribute": "date-format",
                "reflect": false,
                "defaultValue": "'yyyy-MM-dd'"
            },
            "timepicker": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables the timepicker functionality (select hours and minutes)."
                },
                "getter": false,
                "setter": false,
                "attribute": "timepicker",
                "reflect": false,
                "defaultValue": "false"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date",
                    "resolved": "Date | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The earliest date that can be selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date",
                    "resolved": "Date | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The latest date that can be selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-date",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the input and prevents interaction."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "autoClose": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Closes the picker automatically after a date is selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-close",
                "reflect": false,
                "defaultValue": "true"
            },
            "showOtherMonths": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows days from previous/next month in the current month's calendar."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-other-months",
                "reflect": false,
                "defaultValue": "true"
            },
            "selectOtherMonths": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Allows selecting days from previous/next month shown in the current view."
                },
                "getter": false,
                "setter": false,
                "attribute": "select-other-months",
                "reflect": false,
                "defaultValue": "true"
            },
            "customPicker": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls how the date picker is triggered.\n- **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name=\"trigger\">`).\n- **`false`**: A default button input is used to open the picker.\n\nDefaults to `false`."
                },
                "getter": false,
                "setter": false,
                "attribute": "custom-picker",
                "reflect": false,
                "defaultValue": "false"
            },
            "container": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Pass a container element if you need the date picker to be appended to a specific element\nfor styling or positioning (particularly for arrow rendering).\nIf not provided, it defaults to `this.el`."
                },
                "getter": false,
                "setter": false
            },
            "forceDestroyOnUpdate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.\nThis can be useful if you need the picker to fully re-initialize in response to dynamic changes,\nbut note that it may affect performance if triggered frequently.\nDefaults to `false`."
                },
                "getter": false,
                "setter": false,
                "attribute": "force-destroy-on-update",
                "reflect": false,
                "defaultValue": "false"
            },
            "emitEmptyDate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).\nOtherwise, empty-date changes will be ignored (no event emitted).\n\nDefaults to `false`."
                },
                "getter": false,
                "setter": false,
                "attribute": "emit-empty-date",
                "reflect": false,
                "defaultValue": "false"
            },
            "triggerContainerStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Styles for the trigger container"
                },
                "getter": false,
                "setter": false,
                "attribute": "trigger-container-style",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "currentDate": {},
            "selectedStart": {},
            "selectedEnd": {},
            "slotManagerHasSlot": {},
            "isValid": {}
        };
    }
    static get events() {
        return [{
                "method": "datePickerFocus",
                "name": "datePickerFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "datePickerBlur",
                "name": "datePickerBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "dateChanged",
                "name": "dateChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    start: moment.Moment | null;\n    end: moment.Moment | null;\n  }",
                    "resolved": "{ start: Moment; end: Moment; }",
                    "references": {
                        "moment": {
                            "location": "global",
                            "id": "global::moment"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "clearDatePicker": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "openDatePicker": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeDatePicker": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "date",
                "methodName": "handleDatePropChange"
            }, {
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
__decorate([
    ClickOutside()
], IrDateSelect.prototype, "closeDatePicker", null);
//# sourceMappingURL=ir-date-select.js.map
