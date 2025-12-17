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
        return (h(Host, { key: '74893012b07793276a7a8273c25d0bf380a54fc5', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '59e45a905dd32ba42b23fa054939e2b5fddfd33e', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'c226f098a56433cec8b45593f71a5122d8aeb169', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '1a09cdbc41bbb0687910c9aa7150115b6057ecf5', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'e27663ac260c6bb73123fbcc78d86e8654417c0a' }, "-"), h("p", { key: '8da7f6dbdee417ae15f6529819b6a7a49c1cb8ed', class: "m-0 p-0" }, "Unit ", h("b", { key: '1af008fb84f2f78f8190bd2b312076fd0f590a86' }, this.task.unit.name)))), h("p", { key: 'de8fe0bdd1507cc4a2f4b6f0a600d91875b23799', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '858cfbf1a211dcd01558ca43f5aa0f606a772442', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '33d7310f3f82ba57eef388e0a2c8b23e0bffa2bc', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'e90652ff320c0ee20e8ef4d5a680c859713fd277', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '28a9a5860d7295b131919a802376aa21595bfde9', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '113ba7483e38b8c6198cf2140be5e57563b0f7f0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '3d254f88dbb71947d5069b78b1bb5915acf8bca2' }, h("b", { key: '49ce41cb00a2adba93cbb5fe867cb89ac7767d75' }, this.task.adult), " Adults")), h("span", { key: 'e12967f9fac3365262b0afce2c80274df9a6b65f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'fcd1be2be49e13d3a689161d5c23760ecc8bb317', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '10678f40a4f76f7d8f901fb00cbb09aecb756cc6', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '047603a686c2e9583c1421b8622ffd307b0669d3' }, h("b", { key: '10538beb00bea76ff072c1e1c85b75eddb35e488' }, this.task.child), " Children")), h("span", { key: '5d3c3572f00dacefefda1a3b9d0f5d3165cca7b0', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '8755a24f028eb547200f638afb2876e740c2bd6f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '5838a66216efe47b65f3214295fd7cec49a757ef', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'f4a6795ead0e01626b4960484865f475701eff82', d: "M15 12h.01" }), h("path", { key: '67a51bf656d20902724b54a1d54bf02825667b36', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'f6727d381b4d47a8e7a6ff1c7f2d245623b60ef7', d: "M9 12h.01" })), h("span", { key: '51b724e616aef8521e73c31bbb3a5a0bce8820cd' }, h("b", { key: '450729ce2f30cdb492ab12a8cd45d8022871b5b9' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'b7612c19b9d0dfc899427e8aac1ffa3c86d21704' }, h("div", { key: 'eada3bc65852e3c319c53f809b8868259d5e5a9f' }, h("ir-button", { key: '53cc86a0d919d3cb50f33a0e07e00db723c8ecdb', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '8d05678f1819c7072e8beb5ee0099ffeea8ddb3d' }, h("ir-button", { key: 'f02350cb80c5bc075212aa0a587be077e5fd03ef', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '579aa385f196107bd93eeabd7f35a22a4e299afc' }, h("ir-button", { key: '29b4f6600940ca6947f5b272f5584f4fd6cca613', onClickHandler: () => {
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