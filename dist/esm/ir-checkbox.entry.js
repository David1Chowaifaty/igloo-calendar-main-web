import { r as registerInstance, c as createEvent, h } from './index-e7294bf2.js';

const irCheckboxCss = ".check-container{display:block;position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container input{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container .checkmark{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container input:checked~.checkmark{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark:after{content:'';position:absolute;display:none}.check-container input:checked~.checkmark:after{display:block}.check-container .checkmark:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.check-container.before span:last-child,.check-container.after span:first-child{margin-right:8px}.check-container.after span:last-child{margin-left:8px}";
const IrCheckboxStyle0 = irCheckboxCss;

const IrCheckBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkboxChange = createEvent(this, "checkboxChange", 7);
        this.handleInputChange = () => {
            if (!this.disabled) {
                this.checked = !this.checked;
                this.checkboxChange.emit({ name: this.name, value: this.value, checked: this.checked });
            }
        };
        this.name = undefined;
        this.checked = false;
        this.label = '<label>';
        this.disabled = false;
        this.value = undefined;
        this.labelPosition = 'after';
    }
    render() {
        return (h("label", { key: 'c07840fac7f45ea8669ec33871e2fa8e2d37649c', class: `check-container ${this.labelPosition}` }, this.labelPosition === 'before' && h("span", null, this.label), h("input", { key: '4f83a4655152d64e14e25fbdf494eb58b3e6d9ff', type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onInput: this.handleInputChange }), h("span", { key: '0773ec115701df761c6513a686d29ed6c83eac16', class: "checkmark" }), this.labelPosition === 'after' && h("span", null, this.label)));
    }
};
IrCheckBox.style = IrCheckboxStyle0;

export { IrCheckBox as ir_checkbox };

//# sourceMappingURL=ir-checkbox.entry.js.map