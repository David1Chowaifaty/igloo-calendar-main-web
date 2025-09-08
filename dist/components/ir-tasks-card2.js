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
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        const btnCleanAndInspectText = this.task.housekeeper ? `Clean & Inspect for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'fb20ac40d4546fde628b554233b6244ec496125b', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '0131f319490c39fba65a0237b47576b4a1760efc', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '7838c23c0f0cb6dfb0229aee29ed657d173b585f', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '35192254fdc2ef5c537cb351ea8beb09e31a67d6', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '97765caa34af5e796e9c84b11b61b841170d446f' }, "-"), h("p", { key: 'a8f05d3ef71f12a3bfc49c7bb1303b6cbe2570cd', class: "m-0 p-0" }, "Unit ", h("b", { key: 'ad6b3d2109b01066a64f9d826ed7924bb8fec661' }, this.task.unit.name)))), h("p", { key: 'fb7effc5391fa7df82fedf98ec9736f98048df64', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '210e6c2cc325e43e4144af449668171bc55f1cd6', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'de9f71bbd93276b2f0e8b7ec93807f3b68b87342', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '3b28992571532fd22cd96f4eb82df97e022f18c2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd49c63b89f325bd662150c4b350de127a21be24b', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '414a8a86b80eb3149f4409cc0e70bdfb818d1e98', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '59e12ab9ee263ecefd0047caf21f8baa20b3b860' }, h("b", { key: '12741b097e3d071044769ccc8f019cff93b7fc98' }, this.task.adult), " Adults")), h("span", { key: '5543ef572ce2b4531986a34d2786237d4f0507c7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '115b30255c3c6aee9fdf1dbd0570ab3df61b8a7b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '4b72e7089cb7e76ac5b3e40b8337a2d689af0578', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'd7ab9a85c4c452506774fe6f24bb860b4a2ecdc6' }, h("b", { key: 'b1626a5e1959402e6a49ba6b81d1b01f904f2ef0' }, this.task.child), " Children")), h("span", { key: '71c2392937369d083b2842309309d7676bc7902b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '543113578b25daf690c612234f99d2f463e61918', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '032448c2769fac9f6f1828bf2ab634b61ceb440f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'daf9c16a552d5027308eed2b85079f8c5123c782', d: "M15 12h.01" }), h("path", { key: '49f1cce741ebc1020a9c99c6894aa708ffb2b136', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '5dc86d056ccf8dc4d4a96432c1e4a78fbbf1e345', d: "M9 12h.01" })), h("span", { key: '7d17e5118c84255fc9961e98ca56d6f2013804fa' }, h("b", { key: '04ff0fb19a378b305771cf30e2ddb0916a4e5eb9' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'b34b6410c6f3e16309a11744a0eed86f341ef0d7' }, h("div", { key: '7aee22b17714b71b4f68b03f840c964c4d19d106' }, h("ir-button", { key: 'f19f18ba57cb5cb36912b6aa02d5dbca0d04b439', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'ea9d4b93335217189972effcb4447e2400b8bd61' }, h("ir-button", { key: '5ef81f0d31451864f5678340f2b6cd1495397ac9', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '001ef36fed4748cb6e20b2f16c303a458f3b3ed2' }, h("ir-button", { key: '5206976dd1d7081d47939fd3563631ca13320f24', onClickHandler: () => {
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