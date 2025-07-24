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
        return (h("button", { key: 'e3924763d6b857b2a95a42dd86d1f98a03892320', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '3ad430899b878d3a881ea3cc27f0a6b6034eed1c', name: "icon" })));
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