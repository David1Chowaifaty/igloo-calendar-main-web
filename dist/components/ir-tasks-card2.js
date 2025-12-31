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
        return (h(Host, { key: 'e51e1c79681dfe8ff12b3ad9505184c4daaf2429', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'db5e16e1d166fbe8c4ba7a985ea21d9e73ac4dc6', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '60718277cfdf5ff18cd41286131b64286c3f839b', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '4b1ae26509a40c2b15daabb888e5ff92fe024469', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '24b474672790732651dc1ba942e0fcacf357e051' }, "-"), h("p", { key: 'c6d8cc1eee3d3fe40364199fc01fbdfbbae0f144', class: "m-0 p-0" }, "Unit ", h("b", { key: 'd1b26fe8695d58bcf2efda8782fe9567247d1468' }, this.task.unit.name)))), h("p", { key: '2b2bad89228271dbe77889d575321f3b8ffa37b9', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '11eb24816b5486e62d8f9a4038198667a88a16d5', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '180d5e0f300f5d4b5d1d55bcdbe678deb15147dd', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '524245e00d71d321effd9b51632013f7ebfe7b73', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e59a69f126b5a0b8348253e5d74edb07c437b459', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '68c386e669006ec97a5e93938982bbb7c3de459c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'c7a4fb36ba0f14322ac944a03c889aa24b9598fc' }, h("b", { key: '94e5337d26fc20af20c513993d2c13b776c0156d' }, this.task.adult), " Adults")), h("span", { key: '3a36136dc1e4f4351f8b6f8be1774226fe260e9c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '93c05cea0a738c3a6e9967570b21f5d3f0c0f292', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '2d263405a23587b3c9132030ced84f60fa4cb883', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'c4ccfd1879f11888d955d15ad11cd6b64938e856' }, h("b", { key: 'b3549c267132dad69a8aa02f9852a6b8ef875efd' }, this.task.child), " Children")), h("span", { key: 'e4066a63651d7367e908de177e016560d412deba', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd2a143f478d7ee881a193aa5baa9f95fa9e4cec4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'da0b4c8ab58ffca71635300151b482d4cc61d16e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '507b7be4de4c966c37cc3f47f7153c3b0922ee95', d: "M15 12h.01" }), h("path", { key: '82de3cd29800eb07aa831ffbb791c57b4a08a683', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'e5e9d2081b3e5c677ba85ff75881050708f22bcc', d: "M9 12h.01" })), h("span", { key: '73e791c9b6f26d776d19e005323e587b12d55d74' }, h("b", { key: '22a51e894b903f5b6870f82152e24936aa8a20d0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '30b8900d5ba9a26806f811837b4c29b76b4f31ff' }, h("div", { key: '58207506ca63b765a89a9ac7f6a333e82a58736b' }, h("ir-button", { key: 'a46d2f7e6f917411f07619aa0d2946e9110d06a3', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '0401e207ecd503a21bf2f97a433714e2e681fb43' }, h("ir-button", { key: 'fb2f8066732c640925313f7d9e2d20f35d0af456', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'c7ddf5780238b3beb0ad73bc10973f80461876bc' }, h("ir-button", { key: '9b05b26a9241a508c83d87f5a4b511816981de0e', onClickHandler: () => {
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