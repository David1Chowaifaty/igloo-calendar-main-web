import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = /*@__PURE__*/ proxyCustomElement(class IrTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    get el() { return this; }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: 'ca29a4bc6e4c84608a726f58a5a683f4153e840b' }, h("h4", { key: '11e54c9e214e61b652213c8c6e16ed2aed3165ac', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: 'd0fc0bd077aad3c55ebba69bc4b97718fd17e18b', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: 'd4acde6a2ad2aaaea40b61cbfadc7d7c9069e76c', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '49a8eb334a7cca096d8175617f99f6d0489587e0', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: '85c084ba93186823bf09b6a56407614431a99899', class: 'title-body' }, h("slot", { key: 'd548ff9b55066008b93251069c7bf4dc66b41e5b', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
    static get style() { return IrTitleStyle0; }
}, [6, "ir-title", {
        "label": [1],
        "borderShown": [516, "border-shown"],
        "displayContext": [513, "display-context"],
        "justifyContent": [513, "justify-content"]
    }, undefined, {
        "justifyContent": ["handleJustifyContentChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-title", "ir-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTitle);
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTitle as I, defineCustomElement as d };

//# sourceMappingURL=ir-title2.js.map