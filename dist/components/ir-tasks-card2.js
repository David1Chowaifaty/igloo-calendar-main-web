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
        return (h(Host, { key: 'c98d3040ba351fa34ab3f769a4870cff361aa19e', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'dd8513176260deb59d88d8d44d21ee14d1c1eae3', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '005029ebe15d8402cfef5854f6b3097be2b1fc8b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '51a9e83266fe9d332bec0d4242a4c782f62a84f0', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0714de1c4fd1edd43cf2434f111a58c62f9a2d47' }, "-"), h("p", { key: 'c55b8c8153953352199aa230f88f2308418d5c62', class: "m-0 p-0" }, "Unit ", h("b", { key: '51a9d9d158807d792fc2418984af1c510f3f6626' }, this.task.unit.name)))), h("p", { key: '384a1bef7c1e207390e77f2725a7fa9ebca0d900', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'f3216d3789e5e06d990bc57e63b53214e322334e', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '0def1031c2c9dd48a3bccef24ae48b82edeccbd5', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '08db0378a713aae3bed0eadab4cae3c4e8dd998b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'aa31bd45968f5bbdff49f19925a72714e977bf87', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ebff4c93b6c3409e3f269fd531a16fecccdf9d02', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'dc391c8f66073decffa62731401aed9f49e65a37' }, h("b", { key: '45e79ccdef9e0e716050668c5211834b98adba86' }, this.task.adult), " Adults")), h("span", { key: 'f092494e8dc25cf682da68a76fd50a54106baac4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '660c99b1f1464a7c52e00d442b2d91735171d8c1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '816fde71a7d4014a2633004079e5326e65ffa064', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'abf38d2c570b79fa0e70150d190c4a84d8fdb1d4' }, h("b", { key: 'c47bc1a34e1f9195a0739d8a36b83d50449f53f2' }, this.task.child), " Children")), h("span", { key: 'c627e134b988ff8e47b818979701d1074be985b8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '96c74d3a030d105cc44c698f98966869126a2cca', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '599d8adc2a9359f5d2055db5180df9d58ad312d4', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '783e20e488a13855376c3cf88c1e5de41064f234', d: "M15 12h.01" }), h("path", { key: 'a235b02d77b1220265fa1e6a96539b78a5ac9a61', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'b9d2d607ea1ab14c5fb800d2c79d32f68bfb0d5d', d: "M9 12h.01" })), h("span", { key: '994dc55d9544322461093ca783616a4be90fc324' }, h("b", { key: 'f3b0be673303dc3d3f957ce8e5acf9fc6657ff3c' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'bba3e66784753ce4feaf7b59eb8cacbb5a207f71' }, h("div", { key: '2e7eb2666a7bd9628280399de84f6568cc4a8001' }, h("ir-button", { key: 'd488ca128e41aacdb9e075c43ecc3ec219a8fb86', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '4a13fa05d830aee68c43b33269eeefc4766575a5' }, h("ir-button", { key: '4dca2909dd0c6a0221882b4ebf608fcf4b182c3f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '53cce493574772bb5e2dfbf5400c2fda28e31814' }, h("ir-button", { key: '00cbc8fcb8f4f691876bd6572503e243bc158e1a', onClickHandler: () => {
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