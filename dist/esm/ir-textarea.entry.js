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
        return (h("div", { key: '25efe3cb8cb9ef08d42d286bb8bd0c231701873f', class: "form-group" }, h("label", { key: '15f2a41bdc4df0c98138451846f227074827b06b' }, this.label), h("textarea", { key: 'ca05308bfebd4012fc08aa12e65b81f94822b17e', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map