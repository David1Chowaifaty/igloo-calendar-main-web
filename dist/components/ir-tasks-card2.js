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
        return (h(Host, { key: '1b962d9fb1cd325ce4b8cd9a2e5dc340b8e54f6c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'e7f922292a7f8e834805b23043f5f01fb7ddb384', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'e97843d5ceea31a93a315a4d9c913ca71726fc3f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'dde05eb8a09a40ca4466dce8e4d36c7059bbe8ea', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '9ddef68597535067866e63ae40eb9b28d6580f6f' }, "-"), h("p", { key: '15ad69c021b64113128b274f803df4e09fce584b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'a1be9620f9e14d372466a2753a01296c324d9e24' }, this.task.unit.name)))), h("p", { key: '63447eb12d762c1ffe051cb06b6ce02150a4e642', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'd994cd6a49e20cc1e269dd781a726e30d3dc5190', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'a3fc8489a77b625c305367ff09cf69e9703f486c', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '0f5a72f8693041837c3938c67cb5c327f8490a98', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '01e5fda1dbb9f80e173d9a0600498fb38174a029', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'c83013d9da8ffcb551a98c9216b284f47594b858', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '3d52713af4929349ceda9bd70c18e11dbd6d64cf' }, h("b", { key: '08b72c7f6fb829a0841941c4248e217812a947b4' }, this.task.adult), " Adults")), h("span", { key: '77e729614584f7a4fa8f3aae1663865fcb8df7de', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'f8dcb708c2a4d65599f10567b3de21b99af09180', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '5cc72592fc385b254a4f80df9093ca6665c88046', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'ee3b4b4f90bc92a50aa471dd79fe589900ce835b' }, h("b", { key: '0b47c9aceb618cf8a747eef33c182fd9af86434b' }, this.task.child), " Children")), h("span", { key: 'd306881fd4c51a4756ba1c19968f9b9e2468a09c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '17da8dd57daf902878468f5d68a6866d65a5e8cc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'c36746e8315907d9844853bf776e80539e8d5bb2', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '54fb22104091a18feb716b94372aacea9b026275', d: "M15 12h.01" }), h("path", { key: 'd1ac1b1644370a4bf824a2a3b50d1d3dfea35071', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'b6bd22cc7563cebfaa90cf818968fa2495ed1896', d: "M9 12h.01" })), h("span", { key: '4a7b6bc86343572074f19cb37061c8b49f25df81' }, h("b", { key: 'f6e71bc57bdfc67eda1231d16196b652703b58c5' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '32d0c7c67fb3a74a917ad9739bbbe8cced7901b3' }, h("ir-button", { key: 'a5a1bb2b97374c97974fc3e0711fc6de162890cc', onClickHandler: () => {
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