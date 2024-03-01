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
        return (h("div", { key: 'cc95217a051d89cfe9e4b38bb91a64339b9c5d1c', class: "form-group" }, h("label", { key: '6666b7bafcfe12b3e26d7181e0ccbd18817e18e0' }, this.label), h("textarea", { key: '777e00e4b9cae20b7f272c6eacf1e8e58def2d96', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map