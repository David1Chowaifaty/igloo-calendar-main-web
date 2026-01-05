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
        return (h(Host, { key: 'bc7cc1b8fcd2fa2b9611df46f1b4e6f0eb59c252', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '35d540c896a4b30fa6ce7c6fc38fca285c5c5b00', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '7a37c5cd7958cddced01397ccbc817f2841ed982', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '9bd16f96d73d81a5f521928d5fe322b73c7f2a16', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'eeede9882dadac40d774c1c1c730bb0987412aab' }, "-"), h("p", { key: '604a44e26193865ae997e66272e40db7da07401f', class: "m-0 p-0" }, "Unit ", h("b", { key: 'c89a997320c8fc24efc85be1761f056dd5850e03' }, this.task.unit.name)))), h("p", { key: 'fa86811f1ba4263e80436f429c941f36fbc52241', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'b1fb3a5c2c90f8c558f55fa15cf8f35863a50e11', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'dd03c4bbf72ca195b6cfcc4bab8217220b21bddf', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '7b6712d0d5cea121ce73040419c3e28fc000228a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0522a0557ad0fae286f2329899b32f14d87f47d0', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '4b4f66b5149493506540b83961924f08460ba031', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '453c37447737d09617733569c48b3e62935a33a4' }, h("b", { key: '0e6fcec830f4c19a337b46db9ec07b15b64db610' }, this.task.adult), " Adults")), h("span", { key: '1b7ae96ace14c5944c1d00527a3d02084404292c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '0991595e5ad231331ba0a932f0d91291abbcde26', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ff7bd3b54b2d9dc77b4c7a64e7cf9ef484a97ada', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '5a120771eda0d9022fb932988378857e4f73958c' }, h("b", { key: '1f99515289866dfc644f6a5d75079e5f7f8447f8' }, this.task.child), " Children")), h("span", { key: '40424cfc6b8c9aa7ffe4ef6b6872ebe20c45a4b6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'fd025d79b94c8352e098e913dfafa25f2648b88e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '6bc096c60f25e3004e1771f54e15e63241eec9e7', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'dfc8b06ade602ac9ac01fa167c2a83009b9c719e', d: "M15 12h.01" }), h("path", { key: '743277374be30cd2d1dce372c2612864f33aa3d3', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'df08975d024543a1b7892a015ded9fb79d2b48ad', d: "M9 12h.01" })), h("span", { key: 'c22d8e16279e79874dea7aaf3faf37405cf8855b' }, h("b", { key: 'd8773d32884dcaf103b478624dfeb5aea25218d0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'ae83ec2d47e45afbb81843edcb41c407fe3ded23' }, h("div", { key: 'f84f40497237bf44342dd43887bdd93fc53e984d' }, h("ir-button", { key: '6544a543bd4973e870e27178807ba75607130597', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'b4f44650eb5de6a819a9764252b99884b587163d' }, h("ir-button", { key: '9e76e7781e53da31241a87a82d2d8af794974a77', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '3de257d2c3bb57a972e852724d7671c153de9090' }, h("ir-button", { key: 'b093f23f78cb2578dabbc7008154e5e4e61aa742', onClickHandler: () => {
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