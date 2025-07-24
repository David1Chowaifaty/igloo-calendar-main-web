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
        return (h("button", { key: 'f162d39bbf1437870da357e6c331c6b2c862519b', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '5af6271ad423c70e46c3bd9296491a6eb46e50fd', name: "icon" })));
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