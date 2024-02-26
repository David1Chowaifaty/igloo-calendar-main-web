import { r as registerInstance, h } from './index-31d07507.js';

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
        return (h("div", { key: '90ace70e7e16fefb047884fae240adccacea9bad', class: "form-group" }, h("label", { key: '8081b54620a4baf45eb16c17a6b3f82a7631c268' }, this.label), h("textarea", { key: '4e5a5f6942952ec34bf1bb0888c45dede92c00b2', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map