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
        return (h(Host, { key: '51d998b9c5d13d11c2b10c87ba01781f47d1d078', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'ed204d3389b0741a248acdf2261c18c6d2fde1f3', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'd763f5e564634468ef4604cb9edec366d7c4fa8d', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '2390b6ab13ef0972f35087da12a16b3d0a2485d0', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'c9b78ea68acdcd97e00755afc9250d57660686fe' }, "-"), h("p", { key: '79a2469f3d0e1f70c752428e2bdaa01ed671384f', class: "m-0 p-0" }, "Unit ", h("b", { key: '077716864283f24b57e400920fa527f62b615ead' }, this.task.unit.name)))), h("p", { key: 'a2b3712989a441774af85b4f4f8eaa22591d4382', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '633b9b278d29bdcb589ee4d4fa27fe5b04075c35', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '2192099ee8b8c9155b63943956a0d882f3f5cad0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '2676d58d1ea3f33ce1f5bacb2935c5080df687c1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd18d138a2417fb7da9b6df8fd4567ab70892fbf2', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '23fcabaa06f2ac47a13f9327211b6b15498f16c2', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'ca2606bb1b76dd5e4cc941037b342b2fb3f98c56' }, h("b", { key: '82b5f0d94eba9a4c1327d44f113b7251efbb9659' }, this.task.adult), " Adults")), h("span", { key: '6c77c98a7f37777e78476f8501019a48f074bd02', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4ab651ca1d04a531359f45f8ac11b9699bd1ea40', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'd568bd71255f046b3d0c3d988a0d0d1ef06a5073', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'da9821f4c7dfada02e1a8fe3aef75831028603ce' }, h("b", { key: '76dbb78729ef97e6e5da674e3b93a4c9d2e9daaf' }, this.task.child), " Children")), h("span", { key: 'd4024181b252dd1513c9f47e53bac01322bfd964', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'fe2d96c4cdaca42c3021ad46ecd9ac9b7561c7b2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '840f55e4f3202382c0aa0136cc3ec1597782acf4', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'a7bfa426d6908aa296ed7e05de71b4d7c67c8640', d: "M15 12h.01" }), h("path", { key: 'b25f6150214081147f7ad6a19cb33f3dd4a11fef', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '8eafd26bc4210ebca1183800111c2986d3ae1ceb', d: "M9 12h.01" })), h("span", { key: '1ae8d4bdb59ead559ba370c60f23a6aa68a79b32' }, h("b", { key: '60ef63091744bf408bc7c272c6663bc00d5e3294' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '43eb963d9d8bd636906a49fc29bdd6f546f7c7e6' }, h("div", { key: 'b7495b1a32175f227496e2778cb316486a4db055' }, h("ir-button", { key: '609e965942fd6fcac2aad2822ff1fe8ff8ecaace', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '261d19ffb41d012abe073c333160268f061fe8ee' }, h("ir-button", { key: 'f260f17aeb7609f557948e73fa6a6dfad60e6b16', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'ded99cd2911294fd64ea5f0a5262382ec70f0b15' }, h("ir-button", { key: 'd4c8337362f6f7b6e06d089128b38a37c8479de8', onClickHandler: () => {
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