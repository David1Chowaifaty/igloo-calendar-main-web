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
        return (h(Host, { key: '28ff0f3f5e37d7e018f8d661c3e45173a4aa4877', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'b74a66a27715c0803034e2575d444346aa268cfb', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '7c16af83ae0f7fed9904e133f84f0775a5bad0c3', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e2ee2d5e60f83c32b414c2ab85b909dc4802ef18', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '33dfebe5cf905d860116f8a80019c51307513d18' }, "-"), h("p", { key: '39986f9172b6aeddfb067720aadeb98640d84132', class: "m-0 p-0" }, "Unit ", h("b", { key: '221adb6ea665f3f7060a044d37d4eb634a64d127' }, this.task.unit.name)))), h("p", { key: 'c3dec3e1cd22011c5325ec8bfe30d22c566ff745', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '90b7dd4c72f22b434a4a728385cfa15abafa996d', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '909b65a509116b506acbbb3e6d34d6b4ede8db8c', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '6abdb0cb1af934f10df4b5dd7a02e85591786b8c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '88ff41a76a9807fc45bb3dd3984ac5c111254dfb', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'bd19ff83ebc8f925eb27c83cac503745ca778775', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'ac28f8628a14e46e2ec6c6097df0d4547d478c4c' }, h("b", { key: 'f940e90739daeed70f5777990b050ab5d22fbc8a' }, this.task.adult), " Adults")), h("span", { key: '9d19881f5252c67f53b40795d76a34b428b3d078', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'be559322e79a5dff3a2426b28029264e018cfda7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ca5cf53a5e47b4ffa0ff4d3c9d6eb82b2f71f703', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'e8539a43e72289b43f9b1d7e4f5ad56a73008a67' }, h("b", { key: '6e3475783b4266f77e4ee5334dc602d2682027c8' }, this.task.child), " Children")), h("span", { key: '6b9fb27e9f8dbaece877e1981d33999498d30557', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '38cab8ad74da3c4176552dbe06a8977e5147a938', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '4a3d53ba1768dcc23186bc068fda070008dbda3b', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '27bf43374b7392afcf13a4bce86f2aab87a1395e', d: "M15 12h.01" }), h("path", { key: 'e943543874be0b572c057d3923412d4338e2f0f1', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0cacae73ed994ed584231f2528921eb52ef7f11f', d: "M9 12h.01" })), h("span", { key: 'cbd4234cc65c859f4ddce9ff77c4937c37c375a1' }, h("b", { key: 'c46728b4914e244def966afbae8c5beaff5cb4ae' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '96256428a182543f7753ab0b7c56e7d38c2678d0' }, h("div", { key: '317011837a5af7d8ae644438518020dcddaf0259' }, h("ir-button", { key: '3f8917ada7baa2b636a1650c59bf2592483fe914', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '74ce51092f66b4bfa6014a368e5c905890ce2fef' }, h("ir-button", { key: '40c9f0a3168b1d3baf41a34c1cd26d6251e3077f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '022febc7e649235da1b05467698bc7999625241b' }, h("ir-button", { key: 'ba5fe9531a80dd5a0f13e41c9f440f5d20100d4e', onClickHandler: () => {
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