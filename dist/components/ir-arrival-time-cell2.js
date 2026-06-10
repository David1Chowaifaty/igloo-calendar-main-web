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
        return (h(Host, { key: '332cb98916172682ff73a25ec7b2db2565cddfbc' }, h("div", { key: 'bbc3d70826fbaa105664a6e77fb0731029e03a6b', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '0ac8f6d87b484120635b14b426748557b720d0f5', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '875b1fd0715fe4546ff339a1ac0914618890f7be' }, this.arrival?.description))));
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