import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
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
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '4fe8552cfa2b1101232a4b46bf5479fff4722bc0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '09e9c6ff904fd3b69d6ac9886575cd3ffa1d331e', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6ef375de9ae0ecb1457b3a382645e611629dd32f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '1e799c127cb0e3814dcb544e45f4803ecaf65608', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '843b06f6f9a0270dd5f9c71d5f533ad5e32a2f9e' }, "-"), h("p", { key: '381af7a412c870a7eb6abc416b955697678e10cd', class: "m-0 p-0" }, "Unit ", h("b", { key: 'c2cfe31b908c8418b31ea46c642416c3eb605611' }, this.task.unit.name)))), h("p", { key: '32908116b9fe0e609d0ceabdf330b59f22e201c1', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '1ab3fa2a5be8640917af59e482497c2820722266', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '529ee605b91d710ebe473355aa52fdf9e34a162d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'ac34071a148f2e6486832c7a20140797dbea6be7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'f73033fd7c3d207d47478b164af18cc9cd14093d', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'f021138928528c1d4aa9473a2efd411e83e2e2a8', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '9205286febece5fcf6209ad60dc7eea20e15f15c' }, h("b", { key: 'be2662d0eb18a4ee08b81f47690d41035e7ef185' }, this.task.adult), " Adults")), h("span", { key: '0ee46307ee4bc1d75db3370247ea323bcde60011', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a967dbe89ee37ec52503b3b4d0c70408fdbe22c7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'beca96f0509743440e17c147d35f2631e16b8fc0', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '1b784f28dff49133705cf8e566a9d709b03093ac' }, h("b", { key: '240090f45dd25f0048ef10d9ad68247783bd5def' }, this.task.child), " Children")), h("span", { key: '224e70c80081ad86e1776b290a95c01c6075aa03', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '9ba9f5211ea784396746b88e96d2138d7449e4f2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'd1d867d302191227663ea1453f37576557559378', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '6f5c2cfca240dac7595fc3d776dd13fae6296d8b', d: "M15 12h.01" }), h("path", { key: '32c56f158104a6ecd5e0d43cc7a37af200dd6a73', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '2d0fc81eaeb08d198c91700ee6ad56b869f22b48', d: "M9 12h.01" })), h("span", { key: '9fe6ba04c0c4e08ab3b24d9d2cc69a6d908b0df3' }, h("b", { key: '1a4b7160957990c9956206a1013e45bda5ddad7c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '4fd1d727d170fb5d5e7315c4f3c53ad878eb9ff2' }, h("div", { key: 'f92b09833ba59072dfd6ea3ed70d239ff5001e2c' }, h("ir-button", { key: 'cffc9b6a8ea7708fdf33dea3adb7fcb7502d56bf', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '75e77961ed3a145f509e6b381aed8314eb8911c4' }, h("ir-button", { key: '1805241dc9f8e26ea726c01717b2923b0002c0da', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'a1abc21096c9a765091767b72f55ff88e96d5b7b' }, h("ir-button", { key: '71d04b77cd7e6610f533b2d1484629c1541b569d', onClickHandler: () => {
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