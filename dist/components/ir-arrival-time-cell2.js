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
        return (h(Host, { key: 'ce1dd9bb2f4669b95c331d88fc821cbde7cd496b' }, h("div", { key: '77839427279cff981437271d1cc85a052ebcf82f', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '61df2eef68c93fb82e21287398f7a147e166bec3', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '1026ba6ae4f5fa3e124391c096eaec7863f6c08a' }, this.arrival?.description))));
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