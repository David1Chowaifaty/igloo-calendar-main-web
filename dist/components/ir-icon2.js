import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = /*@__PURE__*/ proxyCustomElement(class IrIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
        this.type = 'button';
    }
    render() {
        return (h("button", { key: '6d62c5ce57a0d0416c70e19e79ebbae66b61a847', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '3d098d3f4905bff66c8f8c52f5a1fd739d60ff19', name: "icon" })));
    }
    static get style() { return IrIconStyle0; }
}, [6, "ir-icon", {
        "icon": [1],
        "type": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrIcon);
            }
            break;
    } });
}

export { IrIcon as I, defineCustomElement as d };

//# sourceMappingURL=ir-icon2.js.map