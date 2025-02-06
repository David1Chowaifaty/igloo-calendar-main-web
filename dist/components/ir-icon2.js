import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = /*@__PURE__*/ proxyCustomElement(class IrIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (h("button", { key: '9c3efd9f784015a1982d9588ce97199905571c96', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'bffa9eef2fd49718e829c4556bc98ca822346975', name: "icon" })));
    }
    static get style() { return IrIconStyle0; }
}, [6, "ir-icon", {
        "icon": [1]
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