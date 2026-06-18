import { h } from "@stencil/core";
export class IrInputCell {
    el;
    /** The value of the input. */
    value;
    /** Disables the input. */
    disabled;
    /** Mask for the input field (optional) */
    mask;
    active = false;
    slotState = new Map();
    cellValueChange;
    inputRef;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    handleActiveChange() {
        if (this.active) {
            setTimeout(() => {
                this.inputRef?.focusInput();
            }, 100);
        }
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    render() {
        return (h("div", { key: 'df91b2062434afe4f12c406b4367651b05b7b29b', onDblClick: () => {
                if (this.disabled) {
                    return;
                }
                if (!this.active) {
                    this.active = true;
                }
            }, "data-active": String(this.active), class: "input-cell__container" }, this.active ? (h("ir-input", { ref: el => (this.inputRef = el), mask: this.mask, class: "cell-input", value: this.value, "onText-change": e => {
                this.value = e.detail;
            }, "onInput-blur": () => {
                this.active = false;
            }, onChange: () => {
                this.cellValueChange.emit(this.value);
            } }, this.slotState.get('label') && h("slot", { name: "label", slot: "label" }), this.slotState.get('start') && h("slot", { name: "start", slot: "start" }), this.slotState.get('end') && h("slot", { name: "end", slot: "end" }), this.slotState.get('clear-icon') && h("slot", { name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && h("slot", { name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && h("slot", { name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && h("slot", { name: "hint", slot: "hint" }))) : (h("slot", null))));
    }
    static get is() { return "ir-input-cell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-input-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-input-cell.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
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
                    "text": "Disables the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "mask": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MaskProp",
                    "resolved": "\"autofix\" | \"blocks\" | \"commit\" | \"definitions\" | \"dispatch\" | \"displayChar\" | \"eager\" | \"format\" | \"lazy\" | \"mapToRadix\" | \"mask\" | \"max\" | \"min\" | \"normalizeZeros\" | \"overwrite\" | \"padFractionalZeros\" | \"parent\" | \"parse\" | \"placeholderChar\" | \"prepare\" | \"prepareChar\" | \"radix\" | \"scale\" | \"skipInvalid\" | \"thousandsSeparator\" | \"validate\" | ((value: string, masked: Masked<any>) => boolean) | ArrayConstructor | DateConstructor | ExtendFactoryArgOptions<{ expose?: boolean; }>[] | Masked<any> | MaskedDynamic<any> | MaskedFunction<any> | MaskedNumber | MaskedPattern<string> | MaskedRegExp | NumberConstructor | Omit<MaskedDateOptions, \"mask\"> & { mask: DateConstructor; } | RegExp | string | { mask: Masked<any>; } & Omit<Partial<Pick<Masked<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { mask: MaskedDate; } & Omit<MaskedDateFactoryOptions, \"mask\"> | { mask: MaskedDynamic<any>; } & Omit<Partial<Pick<MaskedDynamic<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"dispatch\">>, \"mask\"> | { mask: MaskedEnum; } & Omit<MaskedEnumOptions, \"mask\"> | { mask: MaskedFunction<any>; } & Omit<Partial<Pick<MaskedFunction<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { mask: MaskedNumber; } & Omit<Partial<Pick<MaskedNumber, \"mask\" | \"min\" | \"max\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"radix\" | \"thousandsSeparator\" | \"mapToRadix\" | \"scale\" | \"normalizeZeros\" | \"padFractionalZeros\">>, \"mask\"> | { mask: MaskedPattern<string>; } & Omit<Partial<Pick<MaskedPattern<string>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"definitions\" | \"blocks\" | \"placeholderChar\" | \"displayChar\" | \"lazy\">>, \"mask\"> | { mask: MaskedRange; } & Omit<MaskedRangeOptions, \"mask\"> | { mask: MaskedRegExp; } & Omit<Partial<Pick<MaskedRegExp, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { mask: typeof Masked; } & Omit<Partial<Pick<Masked<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { mask: typeof MaskedDate; } & Omit<MaskedDateFactoryOptions, \"mask\"> | { mask: typeof MaskedDynamic; } & Omit<Partial<Pick<MaskedDynamic<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"dispatch\">>, \"mask\"> | { mask: typeof MaskedEnum; } & Omit<MaskedEnumOptions, \"mask\"> | { mask: typeof MaskedFunction; } & Omit<Partial<Pick<MaskedFunction<any>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { mask: typeof MaskedNumber; } & Omit<Partial<Pick<MaskedNumber, \"mask\" | \"min\" | \"max\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"radix\" | \"thousandsSeparator\" | \"mapToRadix\" | \"scale\" | \"normalizeZeros\" | \"padFractionalZeros\">>, \"mask\"> | { mask: typeof MaskedPattern; } & Omit<Partial<Pick<MaskedPattern<string>, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\" | \"definitions\" | \"blocks\" | \"placeholderChar\" | \"displayChar\" | \"lazy\">>, \"mask\"> | { mask: typeof MaskedRange; } & Omit<MaskedRangeOptions, \"mask\"> | { mask: typeof MaskedRegExp; } & Omit<Partial<Pick<MaskedRegExp, \"mask\" | \"parent\" | \"prepare\" | \"prepareChar\" | \"validate\" | \"commit\" | \"format\" | \"parse\" | \"overwrite\" | \"eager\" | \"skipInvalid\" | \"autofix\">>, \"mask\"> | { readonly mask: \"HH:mm\"; readonly blocks: { readonly HH: { readonly mask: typeof MaskedRange; readonly from: 0; readonly to: 23; readonly placeholderChar: \"H\"; }; readonly mm: { readonly mask: typeof MaskedRange; readonly from: 0; readonly to: 59; readonly placeholderChar: \"m\"; }; }; readonly lazy: false; readonly placeholderChar: \"_\"; } | ({ readonly mask: DateConstructor; readonly pattern: \"DD/MM/YYYY\"; readonly lazy: false; readonly min: Date; readonly max: Date; readonly format: (date: any) => string; readonly parse: (str: any) => Date; readonly autofix: true; readonly placeholderChar: \"_\"; readonly blocks: { readonly YYYY: { readonly mask: typeof MaskedRange; readonly from: 1900; readonly to: string; readonly placeholderChar: \"Y\"; }; readonly MM: { readonly mask: typeof MaskedRange; readonly from: 1; readonly to: 12; readonly placeholderChar: \"M\"; }; readonly DD: { readonly mask: typeof MaskedRange; readonly from: 1; readonly to: 31; readonly placeholderChar: \"D\"; }; }; }) | { readonly mask: NumberConstructor; readonly scale: 2; readonly radix: \".\"; readonly mapToRadix: readonly [\",\"]; readonly normalizeZeros: true; readonly padFractionalZeros: true; readonly thousandsSeparator: \",\"; } | ({ readonly mask: RegExp; readonly overwrite: false; readonly prepare: (appended: any) => any; readonly commit: (value: any, masked: any) => void; }) | ({ readonly mask: RegExp; readonly overwrite: false; readonly prepare: (value: string) => string; readonly validate: (value: string) => boolean; })",
                    "references": {
                        "MaskProp": {
                            "location": "import",
                            "path": "@/components/ui/ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::MaskProp",
                            "referenceLocation": "MaskProp"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Mask for the input field (optional)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mask"
            }
        };
    }
    static get states() {
        return {
            "active": {},
            "slotState": {}
        };
    }
    static get events() {
        return [{
                "method": "cellValueChange",
                "name": "cellValueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "handleActiveChange"
            }];
    }
}
