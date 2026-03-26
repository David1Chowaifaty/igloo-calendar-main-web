import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irArrivalTimeCellCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}";
const IrArrivalTimeCellStyle0 = irArrivalTimeCellCss;

const IrArrivalTimeCell = /*@__PURE__*/ proxyCustomElement(class IrArrivalTimeCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'ca5c88d28804bfd3de01183a1fc05810a6045c82' }, h("div", { key: '1004ee5706bfa7a1dcc2fa03e735f1971be08b7c', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '7ddb8c11d461a9bd17642950c4c7cfea0c34d534', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'c2a540bfe5b29e2b94c2d8df9f9234257dc0c848' }, this.arrival?.description))));
    }
    static get style() { return IrArrivalTimeCellStyle0; }
}, [1, "ir-arrival-time-cell", {
        "display": [513],
        "arrival": [16],
        "arrivalTimeLabel": [1, "arrival-time-label"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrival-time-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrival-time-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalTimeCell);
            }
            break;
    } });
}

export { IrArrivalTimeCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-arrival-time-cell2.js.map