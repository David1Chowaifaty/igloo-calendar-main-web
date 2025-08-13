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
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '911fe3a094c71c962c1a00f8d01f7a50516c30d9', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'eadad40bc2f612d31be12b9c348e7d5b61d509a4', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '4e95cf87286d8e566e7d1ad9e966bdc571ef8e6f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c86727c2e385476873f4f5b360ee9d6a8405761e', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1ad3fbf0fd8414fe63f4323919e2c301163fb427' }, "-"), h("p", { key: '4696990b515b4a295cf6c5201e8529bc3afbdba1', class: "m-0 p-0" }, "Unit ", h("b", { key: '94e7a371935a83cc88ca1dcfec0de7b613cf68b0' }, this.task.unit.name)))), h("p", { key: 'bb3fd6d098c8e7f8819b09da81aecb96d1f5e9df', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '988769f954c940b10d13ccdec95fa302ee13e0b6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '7164b1ce81cdd332a8020d98f7755d9f3ea4e5f0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '2bcf1db44c014fdd8812cb89b36170a779a96178', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2a3dc9e451d2b358211e2043caa1fab198427fa3', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '5671e85fac6c4de6dbe8dc4c099cd9342cd4d074', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '8ac6883fe8fd71b0843b241545df72cfa9f4a845' }, h("b", { key: 'd240d2e0342e48321146435b03d47465ce567ff4' }, this.task.adult), " Adults")), h("span", { key: '603ff0d1c6655e9b69f2fd823312cec0c3d62acf', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0537323835be0d352fa1c11be39a0f7e7a8bff34', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'cfbf883bee472decbaaa3378ca9b8fcde9c8489e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '26017045b3108ba91e6df4b19398e76d3ec1d05d' }, h("b", { key: 'e6dbe50ca394474cc1a1026374dc54560c869fc9' }, this.task.child), " Children")), h("span", { key: 'f6bd17f2f01ff1065196f527cf96b602adfb32b3', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2586eba14fa1fb6ccd54df9e65bf3c6885394ff0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '3a4a6b590bf3e3d3b218beb24f1a1e943fc466a8', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'ca5cff0656c6e6d2f60444fd3d572de1ebe9ea98', d: "M15 12h.01" }), h("path", { key: 'ed2e0a088758aea1de0ad06368af964c4f3bffdb', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '66c71d903492571d3c25711fd7059b6b2f9607f3', d: "M9 12h.01" })), h("span", { key: '8295481191d1a920b0afad1e069be6405401c901' }, h("b", { key: '81eb8ded7eed322830484a589dad36381eeda5ec' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'd00f0bda637e64aff811cf05aaecf926ba1011e1' }, h("ir-button", { key: 'ab6f3672ff1e46258bfa3a663f9e3c6b656777a8', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: '4f6cbc3f5e97bb297c5676f363096d660d65b720' }, h("ir-button", { key: '0b5883846314962a2b5c76d07b784fd83d7509ec', onClickHandler: () => {
                // toggleTaskSelection(this.task);
                this.skipSelectedTask.emit(this.task);
            }, size: "sm", text: 'Skip', labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get style() { return IrTasksCardStyle0; }
}, [2, "ir-tasks-card", {
        "task": [16],
        "isCheckable": [4, "is-checkable"],
        "isSkippable": [4, "is-skippable"]
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