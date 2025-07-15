import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { t as toggleTaskSelection } from './hk-tasks.store.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = /*@__PURE__*/ proxyCustomElement(class IrTasksCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '3b3563df192a6ae15c48f5e11c2a65359dbbcb5f', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'ded99869ca4a7a6b3f212304f600983444ce8d3c', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'ac7a1b7664f60b740da294f0f78ae78352331d31', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '85adc3d4d740f35c1a2f4254abb2a3bd8d3f54e3', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8c1665e3a32b5f2ba2aac1be9a342f4a4b86d770' }, "-"), h("p", { key: 'dd7926110ea95b6dea11577acf05b0980e64281b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'fae41e1445e4ea5737eb9b332e7296636b6c45ac' }, this.task.unit.name)))), h("p", { key: 'eb134703577741daab3d9618340b41b1e1e0b339', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'cd3d7d9191af6f0f40e56bfcd21b99fd705dfc2b', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'c9558b0aa6eee9069126a4856756b0c22b9ff88d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '7069f03498efaac0d7cf824df7d30b4b1bc5759b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '810433f24b6676459bfbc9223658340a67043f7e', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '09d284b5c2e78573bb990378506aa365d104d8e8', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'cceae62ef31b966b551307a501d7fa9460f069ac' }, h("b", { key: 'd28bfb524f8417fef85b7647aeff0da48fa51e5f' }, this.task.adult), " Adults")), h("span", { key: 'ed1d96053925bf25e6c6078d1f3cb8a5c84537ad', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '3696ee8d1136d20a45a03357d2b7a5cc3946de09', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'abc87a349fc7cd489149bcfc1f3dc87c4e61b670', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '6213960de80adcb81b661aa7d33bb2a8026bc15a' }, h("b", { key: 'fc861693de28da14aa478f3f7fba5339522c4f18' }, this.task.child), " Children")), h("span", { key: 'c7c8542e2b206557d48ca8e5b435ca616d56aa77', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '230bd321fce8bd142fbd03b313e7bec92aaa171b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '43ce6316c846d9d7a8b2b3bb78b1ae30bdca2959', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'd09e36af9b75b4cd9da01ef5128b3b450720a669', d: "M15 12h.01" }), h("path", { key: 'ec1c7a2ed4353ed865cf502eff3b71e95ac2725b', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '783a7f0acc9d9b4e52ee861220c58358093660e8', d: "M9 12h.01" })), h("span", { key: '0849f4edda9ac9f19ff9e1dccb2028ddf4d57432' }, h("b", { key: '7c751da112d42f3a8406fce3f470ad47917770c0' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '99c728bea22a95a8d53162a8754bdd7843297d94' }, h("ir-button", { key: '97bd96247827d2ea310dbf5ca61d3591cfe81efd', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get style() { return IrTasksCardStyle0; }
}, [2, "ir-tasks-card", {
        "task": [16],
        "isCheckable": [4, "is-checkable"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-card", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksCard);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-card2.js.map