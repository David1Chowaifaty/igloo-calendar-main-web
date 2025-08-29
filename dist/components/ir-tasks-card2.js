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
        return (h(Host, { key: 'cd1ceebb675e849678870ff2c4751b8478f560b3', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '08733a1a9d3c227bd852d7bd4e43ff0603e9a337', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '68de205b26f346db4f4170b7980a2ddbc956d522', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '10e091a6afca81a183f394de29473f07f5b4dceb', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'a6ee22e356e9e27fbd8225f745f9470b607fe27a' }, "-"), h("p", { key: 'aab74cb84d4c0e18f929ca77a687afbc586a1c95', class: "m-0 p-0" }, "Unit ", h("b", { key: 'd427c1cbcc5ee00d7ffa77786f9c3d978d8fc284' }, this.task.unit.name)))), h("p", { key: '5172d14e7fbff6fddbc142121b5768fc4d289edc', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'f1d8b27c8ce45e095b33c3f35504215efadd5444', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'c87d99bfd67c129725d997d405fb8b81e7f924e8', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '040f5a4a76d69c16155a876de40e2c1d64d495a9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a387658fe38c09255aec21353780268ba6b39117', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '54efa77cc707f72714ea3d6ede920901906d2479', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'af6398806ab57e340dd6e79aa45addf3a7cbd1bc' }, h("b", { key: 'cd6dd502dcfa5950e914e21d367f95b002ec32ed' }, this.task.adult), " Adults")), h("span", { key: '9dfcadb1a13a2ccc6d57834c87f34c1c981415d4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'eaf06af7df3e548c1e6a5d75dcb963733ca6bcd8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ab9514794f5af1914f37fb6b891e835770857e95', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'caa232f61be27a8b82a8e4f1f70c5f6098b0fb50' }, h("b", { key: '5b313974877eac0fa2aa15fd213f7991e057148d' }, this.task.child), " Children")), h("span", { key: '0ec500e5520e00bc02bfa2784b65bd8161c832ab', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6ac865b3a92f1ab9cb2f9f050a3823fc2c4a3d24', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '8713ee40811a4c434a6fadfe176ab662a0c56c2c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '31bbc51d7314eba5c3cd18cf4bbbb8866b9485e9', d: "M15 12h.01" }), h("path", { key: 'e3276ee1cfa758389e9d2edeb693e35c3bf6fec4', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'bc25ce8e92095daa4c486bc21d34bb1a83f1849a', d: "M9 12h.01" })), h("span", { key: '1255d65e4c2c21fc099fcd59e6494c6733c15c63' }, h("b", { key: 'c3f165faa46bdaf2a437c4b9b22b8ecb030ae1fb' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '82b345da166b8f914ccab8301e8b7ed98b9c17d5' }, h("div", { key: 'cada6275b55c418bd6c6dfdc8310e5f603a64526' }, h("ir-button", { key: '14f0ef70ba05883c4f55ef6d899a2a01037075e0', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '337f49264f0a2795075c40a20f61267ba32da2bb' }, h("ir-button", { key: '8b4538a122cffda25f6326de40f766d1d8ad1f38', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'f9e2b281c19e44c5b6d41443eb4e63df12898730' }, h("ir-button", { key: '996664375ed70432828414e013c9d77d97808a62', onClickHandler: () => {
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