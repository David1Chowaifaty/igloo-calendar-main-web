import { r as registerInstance, h } from './index-e7294bf2.js';

const IrTextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: '7152ff8bd71b7087da62fed62d2d70c0185f0fcf', class: "form-group" }, h("label", { key: 'bd0841d578374d992466530a36604d490386997e' }, this.label), h("textarea", { key: '803c2e469c344af5120fcb4c69825d7e7c687671', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map