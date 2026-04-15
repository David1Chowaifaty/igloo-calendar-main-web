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
        return (h(Host, { key: '210a313361b8aa4b07431151e60feee244704ff2' }, h("div", { key: '0e8aecea677f11f57bb583dc36c82b5f0a2c052a', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'b1ce08859e92c7b1060607a443980667d01ec2ed', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '68d576dee4554243d02e78f146350e9f3903f0f1' }, this.arrival?.description))));
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