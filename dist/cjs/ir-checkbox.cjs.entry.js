'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const v4 = require('./v4-9b297151.js');

const irCheckboxCss = ".sc-ir-checkbox-h{display:flex;align-items:center;width:fit-content}button.sc-ir-checkbox{all:unset}.CheckboxRoot.sc-ir-checkbox{background-color:white;width:20px;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:center;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.CheckboxRoot.sc-ir-checkbox:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3);pointer-events:none}.CheckboxRoot[data-state='checked'].sc-ir-checkbox{background-color:#1e9ff2;color:white;border-color:#1e9ff2}input[type='checkbox'].sc-ir-checkbox{background-color:initial;cursor:default;appearance:auto;box-sizing:border-box;margin:3px 3px 3px 4px;padding:initial;border:initial}.checkbox.sc-ir-checkbox{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0px;width:20px;height:20px}";
const IrCheckboxStyle0 = irCheckboxCss;

const IrCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
        this.checked = false;
        this.checkboxId = v4.v4();
        this.currentChecked = false;
    }
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (index.h(index.Host, { key: '70275de6568f4e972a20af5ef5673bbdff145183' }, index.h("button", { key: 'e8b8f54113cc0328aa967c3e9cdfeea5443bc359', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked || this.indeterminate ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (index.h("svg", { key: 'd1d860a0ce1b65cc1408adebdc4ef98f3e8bd024', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '86cc53746049ea9bf9673d6ff53edcd63710062c', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))), this.indeterminate && (index.h("svg", { key: 'cded17309983e0d884b35caa76a6d6bdfe9a0275', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: 'aa6d914e82518c517d05ffbb25b7f91da3654149', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })))), index.h("input", { key: '2a0464ec3d0441e3f125d9da28d695a15b9e626b', type: "checkbox", indeterminate: this.indeterminate, "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && index.h("label", { key: 'af02f9cb707e36828fe22c6b28cdb5802f6d4ccd', htmlFor: this.checkboxId }, this.label)));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrCheckbox.style = IrCheckboxStyle0;

exports.ir_checkbox = IrCheckbox;

//# sourceMappingURL=ir-checkbox.cjs.entry.js.map