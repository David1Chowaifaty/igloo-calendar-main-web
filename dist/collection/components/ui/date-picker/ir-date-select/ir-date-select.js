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
import { t } from "../../../../services/locale/t";
import { createSlotManager } from "../../../../utils/slot";
import { formatDate } from "../../../../utils/date/index";
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
        if (this.date) {
            this.currentDate = moment(this.date);
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
    handleDatePropChange(newDate) {
        this.currentDate = newDate ? moment(newDate) : null;
    }
    async clear() {
        this.airDatePickerRef?.clearDatePicker();
    }
    async show() {
        this.isActive = true;
    }
    async hide() {
        this.isActive = false;
    }
    togglePicker() {
        this.isActive ? this.hide() : this.show();
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
                    this.hide();
                }
                break;
        }
    }
    get _label() {
        if (this.range) {
            return this.dates.map(d => formatDate(d, { style: 'medium' })).join(' → ');
        }
        if (!this.currentDate) {
            return null;
        }
        return formatDate(this.currentDate, { style: 'medium', withTime: this.timepicker ? 'short' : undefined });
    }
    render() {
        return (h(Host, { key: '2a58b702eacc138248599d660474352b0eb0e994', class: {
                'ir-date-select': true,
                'ir-date-select--active': this.isActive,
                'ir-date-select--inline': this.inline,
                'ir-date-select--disabled': this.disabled,
            } }, h("wa-popup", { key: '7ef9a0e711e689b1c0529b83b370b7aa7bf4ff10', arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "ir-date-select__popup" }, h("div", { key: '2713f0823dfcac0bec2a5157d58c6a32175c87c7', slot: "anchor", part: "anchor", class: "ir-date-select__trigger" }, h("div", { key: '99da4e0d2308900f750b24cabaed94e5ead150d0', part: "combobox", class: "ir-date-select__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }), onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("slot", { key: 'cc9c96792484deb66a9d7cb032902128ed01b966', name: "trigger" }, h("ir-input", { key: '053046e5a993f14dff23d5c5f5e8a810449f9fc2', disabled: this.disabled, class: "ir-date-select__input", placeholder: this.placeholder, withClear: this.withClear, tabIndex: !this.customPicker && !this.disabled ? 0 : undefined, "aria-expanded": !this.customPicker ? String(this.isActive) : undefined, "aria-disabled": this.disabled ? 'true' : undefined, "aria-invalid": this.isValid, readonly: true, defaultValue: this._label, label: this.label, value: this._label }, this.slotManager.hasSlot('label') && h("slot", { key: 'bbd662d7e16498ea33763e04de8eea2c9595878a', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '488450bc788f36202d65b88e438c6c7a83fbf989', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: '0a9c3c647f8df2933858958e7d5685e926c9757e', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: 'f05cc21f0059148adbfb9bb389a090eae71294f3', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: '39f0998771e5940a9a4af8c2d2f64af878d90696', name: "hint", slot: "hint" }))))), h("div", { key: '1c721bda2c83e189cceb9e1c690550db1b158c4e', part: "body", id: this.popupId, class: "ir-date-select__calendar", role: "dialog", "aria-modal": "false", "aria-label": t('Lcz_DateSelectionDialog', { fallback: 'Date selection dialog' }) }, h("ir-air-date-picker", { key: '1026eb7c0098b1eed4a0e7dfa310b548ce99af76', ref: el => (this.airDatePickerRef = el), withClear: this.withClear, placeholder: this.placeholder, label: this.label, dates: this.dates, inline: this.inline, date: this.date, multipleDates: this.multipleDates, range: this.range, dateFormat: this.dateFormat, timepicker: this.timepicker, minDate: this.minDate, maxDate: this.maxDate, disabled: this.disabled, autoClose: this.autoClose, showOtherMonths: this.showOtherMonths, selectOtherMonths: this.selectOtherMonths, customPicker: this.customPicker, container: this.container, forceDestroyOnUpdate: this.forceDestroyOnUpdate, emitEmptyDate: this.emitEmptyDate, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.currentDate = e.detail?.start;
                this.dateChanged.emit(e.detail);
                const shouldClose = this.autoClose && (!this.range || (this.range && e.detail.dates.length > 1));
                if (shouldClose) {
                    this.hide();
                }
            } }), h("slot", { key: '89d852c5f475777625e93eafc46879eb4eb518c1' })))));
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
                "reflect": false,
                "attribute": "with-clear"
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
                "reflect": false,
                "attribute": "placeholder"
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": false,
                "attribute": "inline",
                "defaultValue": "false"
            },
            "date": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Moment | null",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
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
                "reflect": true,
                "attribute": "date",
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
                "reflect": false,
                "attribute": "multiple-dates",
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
                "reflect": false,
                "attribute": "range",
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
                "reflect": false,
                "attribute": "date-format",
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
                "reflect": false,
                "attribute": "timepicker",
                "defaultValue": "false"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Moment",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
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
                "reflect": false,
                "attribute": "min-date"
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Moment",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
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
                "reflect": false,
                "attribute": "max-date"
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
                "reflect": false,
                "attribute": "disabled",
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
                "reflect": false,
                "attribute": "auto-close",
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
                "reflect": false,
                "attribute": "show-other-months",
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
                "reflect": false,
                "attribute": "select-other-months",
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
                "reflect": false,
                "attribute": "custom-picker",
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
                "reflect": false,
                "attribute": "force-destroy-on-update",
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
                "reflect": false,
                "attribute": "emit-empty-date",
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
                "reflect": false,
                "attribute": "trigger-container-style",
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "currentDate": {},
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
                    "original": "DateChangeEvent",
                    "resolved": "{ start: Moment; end: Moment; }",
                    "references": {
                        "DateChangeEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/date-picker/ir-date-select/ir-date-select.tsx",
                            "id": "src/components/ui/date-picker/ir-date-select/ir-date-select.tsx::DateChangeEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "clear": {
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
            "show": {
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
            "hide": {
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
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }, {
                "propName": "date",
                "methodName": "handleDatePropChange"
            }];
    }
}
__decorate([
    ClickOutside()
], IrDateSelect.prototype, "hide", null);
