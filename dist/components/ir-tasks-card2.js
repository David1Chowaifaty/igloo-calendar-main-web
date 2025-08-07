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
        return (h(Host, { key: 'd74730b9e660528fce1f735ffe63c2a8194126bf', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '5528105d0b7e450ca757be6fe1613459c7925e7d', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'b8ddbad4cd80262cd17a15753a5ac92dca083141', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '1ee2b0acfba56070fefb3f1bd295ac63037a6e6c', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '9cbf2566726d45daa6ed949735c9adf69af47431' }, "-"), h("p", { key: '8a4803d00a40935b53b3d6eb79b2c60daece0568', class: "m-0 p-0" }, "Unit ", h("b", { key: 'fb4630992f80738a02b71d0f1ad84c4e6483bf6a' }, this.task.unit.name)))), h("p", { key: 'f9a2e4637a133d98df8c1864e53128fb4a5af454', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '3aecb6ac7e73ba09ed0ceb621f96ea39e2ddc058', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'd528da9425e38e89866f7906dae6a6ea12c4b8e0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '8109ca99f2c4813392eec93c6974c1e6926bef0b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b4cd6458b8cacfd3dd8f59aff29388b9e14a9eb5', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'e5cf6171482311b03be8fcfa1cf20ddad357dfd6', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '5178c4da90d19971670a3686f63350b4eb692ae0' }, h("b", { key: 'ef0c5c97b87d030fb868ae41ea5485aa1675d046' }, this.task.adult), " Adults")), h("span", { key: '70865f1e22766a45ed24d3d5f9afb17311e67b4c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ac6c165766aedd2a71b271ad125b965ff7871d93', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '5b6988b2b8a06ca64291eb013c1916fda570404c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'fd580d686e841cb975724267888dd8d849def91b' }, h("b", { key: 'f75b95e5d244734be9b5ccfa936a7c31b02e9d1f' }, this.task.child), " Children")), h("span", { key: '98e63a859303403424141e1c856ea24f23ac7edc', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '431df117b15c806abb5599862aae51154681215b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '9e05c94d046c36d451c0571cfa4c172ee2eafb6f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '3b3c440b85bdd94a0b5ea3af8153b6ba0a33aa82', d: "M15 12h.01" }), h("path", { key: '8a44ebf376c21955e7118105d86555d2f76b0796', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '9d4634b15ae8922a4d3aec665cce5b20027725f8', d: "M9 12h.01" })), h("span", { key: '1dc2bf20907544bf61eb35bba5164a0de34cd9a7' }, h("b", { key: '73cd978ecc84a4da8db559d9fbb3cc3ee5e84b8e' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '0358413d2597aeb4221fcc7c18424c55602bca74' }, h("ir-button", { key: '2d930f4332c875e9b9b29680ae461cca05fc0366', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" }))), this.isSkippable && (h("div", { key: 'fc43b1c4de9c6e188903c2251d4b6ab7985e612e' }, h("ir-button", { key: '666b042522a9e3dca7b5cab10ddfb2819a18d29d', onClickHandler: () => {
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