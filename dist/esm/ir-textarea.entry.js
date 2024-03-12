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
        return (h("div", { key: '07e7a42b4e07a39c3a06e0342e7b6cb11182a3af', class: "form-group" }, h("label", { key: '0e1336de2ec8abd7b1a13d97ed9b3ddb3ae7bad6' }, this.label), h("textarea", { key: 'be9c4bced786e6f12f0a91d9c7ec7014898e366f', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map