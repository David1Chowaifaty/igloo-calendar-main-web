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
        return (h(Host, { key: '9249b1056590ca5e00055102ba337f672deab5b0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '222d72d1a11b9da840be08898c90324888844762', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'ed7ac24fb33bbdb2365e0cee800221226fa32681', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '9c00bbe408a53981cc8239a9fcd325be51078b94', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0171c98caa9742ddcc9d7e5dedae936448142dae' }, "-"), h("p", { key: '5f45e860f5358abae18c644183cb72c0d0d41a06', class: "m-0 p-0" }, "Unit ", h("b", { key: '42822ccb1abe02eb9e79761540149757e3148b39' }, this.task.unit.name)))), h("p", { key: '1fcc659dd059f031018a1b235eebe5a5c5000407', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '1cdb3f48d85699fff244002352264df614ee1296', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '5d3e191bf88c3959d04ab5c4f8c45345dcd66def', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'b11ca0248eda38354fc46fd4690c6163ad83c3d9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '9845b4e9b372ce5e64814134ac51477ea9ae0c47', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ae181f5e61d36b7c50ca4398cfb752d17c549857', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '4f9ee63a9bfa0745b22faad40eb67a1a832437c4' }, h("b", { key: '6a25563afe45e70e2e900739458ed80ce81a33e2' }, this.task.adult), " Adults")), h("span", { key: 'b6068d88c3301a9dc644dffe1752a067b03f2674', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b1ac5011b1b1552afbf93926f42ff94bd367d06e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'daec7bd2cb3bd360588ff23c8ce0483330776788', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '40b4560860c5b91bd2b4e3b4a62a5d9440ee1d74' }, h("b", { key: '9cde85f37134e0c5a746cf10300db3c26471c4da' }, this.task.child), " Children")), h("span", { key: 'e1650e6514d1723d472b32d15a9dea00bba2a4e2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '188ff3a865d2a75b85a48fe2872d6cb2be3921e1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'd35155e066723b48ca4c4f6848e659192bf08cb9', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'e2f3ecb5fcbbdfc1d9547400885c177e11f51cb5', d: "M15 12h.01" }), h("path", { key: 'f661ebb7b54918ac6c8d39fd9ff31950cfdd5776', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'a97d6e02210214addda64df3100354887e039cda', d: "M9 12h.01" })), h("span", { key: '4a65374daa6784657f7a1b351a55f85a3c077f18' }, h("b", { key: '8fce08058707199489c01816c932718810161f4c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'a46c3c73a4d522e14f9419025fb2904a20f67e4e' }, h("div", { key: '279204da23c46b225bf0269df50aa17d5146ec54' }, h("ir-button", { key: '3001ca84d6faf30574756a2b445574334b5d5f9a', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'f8887eec1fc6cf636949e1a3efa931397c41e113' }, h("ir-button", { key: '4a99027a8bcb5066f6ba90513609cd5691f550b5', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'df80b64557e006bad38090f8a368063e69bc6b2e' }, h("ir-button", { key: '14e7a1d9c4dad448facc5d312e922e57a8ee1d5d', onClickHandler: () => {
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