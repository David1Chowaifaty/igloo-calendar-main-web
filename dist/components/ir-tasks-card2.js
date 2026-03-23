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
        return (h(Host, { key: '98f1e302e7e2274526d8694066a33104d8c11c07', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'debe63c522c092eba7ffba3e27c99a8e2c6081f8', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '525b25683aa9afd259b49bac7402ca8db481f686', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'b19033c93f356eba4aff692a82c9af487d979612', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '88e8b3f927d07f5dad51caec454f585c628d4d50' }, "-"), h("p", { key: '7783aa3b06102d1396bf71b732c7e2560951cc43', class: "m-0 p-0" }, "Unit ", h("b", { key: '99e624c785c9086656e3d20271f188039543f60a' }, this.task.unit.name)))), h("p", { key: 'f014f95d7b48fbbecd59f18b12c379676b4ce991', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'e42667677f54ec6c12576e72108d8ddd89dcec0c', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'cb3e7c4125e4341b582258f174e5ecf796d97868', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'd4d0a423d611abddf5a5413a68e7e026b9c62cac', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a03e71e5982bdccd55917cf29065443ffa656156', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '9b15096071d7c59bf9916b5262c5da357495ddc5', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '03919588a1192f667e86e075e9091be7d9147260' }, h("b", { key: '7ca1f08172e559e54a75df00b285e57c05a482b9' }, this.task.adult), " Adults")), h("span", { key: '6db1d178212102c49d7928badac7575575667d45', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '579dda220ead2f2a5102509530fc7177929b8437', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '88bab4d23fe511d5ea97dcbbbe057cdb66e0ec84', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '5b3510344070668b0dce5c1e4f44bc4d40f4703f' }, h("b", { key: '60336e6b7a808024b9718fd78bbe87316300188f' }, this.task.child), " Children")), h("span", { key: 'd45b46915272cd18664db2285cf41a8cc64573e6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '730e01b6ca0387327a23a17a97d6677dbbd4ddf0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '8552c837ed915b3abaa0efdc67cc7ce4f3f9ba87', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '808b0ae68a115784e3bf1436ab3110b50b230159', d: "M15 12h.01" }), h("path", { key: '39e271e25019c03690dc4396c7535c13ed2a3ce9', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '371d6cc6ebfcd0f3c7b2fc0864d140cd94699255', d: "M9 12h.01" })), h("span", { key: 'cad9b6bf962efd5005573f29cbaa25beafcf7059' }, h("b", { key: '608cc86e7b3515f7a8f778551953cc7ea251cf1b' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'e52df9504ff7424936731a41e66259fe5de07898' }, h("div", { key: '483417036bdc7df44ddb039596bf9428beea492b' }, h("ir-button", { key: '701702fad84ccf9b78d325377ce1d35de2118b49', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'e9fd4f1be836ae95238583e08e25ca57c2014a87' }, h("ir-button", { key: '3dcbf334955d86721465ccf5bc8dbaf5845ce0f9', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '458b66464b1b003b6b3a6001bf1b681d78a32386' }, h("ir-button", { key: '031de7347d20f10d00f922459e2144dbbc0cfcf6', onClickHandler: () => {
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