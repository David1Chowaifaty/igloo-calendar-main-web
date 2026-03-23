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
        return (h(Host, { key: '4bb8443e6259fe295b02754c10e5ac8b9f64e13f' }, h("div", { key: 'b5b801457caee520738f9152e5ccc93d4bcdee75', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '35bb7ea857f3382b391fba4c92bfc18fd00a817c', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '81afec7b4a62713e71f1402fc2c8690c2d59886d' }, this.arrival?.description))));
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