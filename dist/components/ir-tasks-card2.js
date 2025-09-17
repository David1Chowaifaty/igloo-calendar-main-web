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
        return (h(Host, { key: '77fe8363ee946b8d8a06f04bced4d0a875d54152', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'd682f0ec1d1c05886d8a2e14355c6af9fe6d7cfa', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'f673ffdd47dd857bb266bc341f61e742b23682c8', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5a9f54c9372bca841d85067b1a9941021f7ba528', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8972d7fcc356d3d830e3b7eb8b62370aa02e3d77' }, "-"), h("p", { key: 'a67f7e9525690d850b32b9c4560ec22b78506a3b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'bfe6e2623e8d12e74adc443f36f3ea51499509f2' }, this.task.unit.name)))), h("p", { key: '6ece422c5e5bbdb8fb04ade28b7ec15d0c5509bb', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '97b0ac9dffd34c9cd7853cedc89781767cc23959', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '9aee8ef33f8dd07ba80dd75b3ad616b0d73b7302', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '239526763a50ecf9b905db92133beb550a35bff7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6439e287a3f024ec14c34a18fcd884eb9678cecd', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '2ae44c01caa872d86542348511dd4b8feca44af9', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '0decf61b4e87bac2bc50991373f6548af62b43c1' }, h("b", { key: 'c0debaa81e44a8fb0b9fb368074ae9a111959059' }, this.task.adult), " Adults")), h("span", { key: 'ae1b8ca93bbad1d1e65475743fe6357c21f94745', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '93c90ac0525bda24dcec4aa54c2a13a4435f4b47', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1dbf6ada050d59d3bdf70c4d1e95eea02c93f1d7', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'd09d9c7498633b98f1637d65048a05ccdf3e06bc' }, h("b", { key: 'b3d64c92148c427d7d4e382d7c8ef72a5c638b72' }, this.task.child), " Children")), h("span", { key: '52fbace6db6148b60e00929959b0b572b98fc7ba', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ff45f89ecb46610b836fb774871e21afdae4cf86', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '797e2f5fddfb7d1d777178af4f5787df93e9604c', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '604f5d73309d693dd592f269ce8de33cfab1e1a2', d: "M15 12h.01" }), h("path", { key: '1ba45e0275aaa80a2db2292d098750f624dde4b9', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'c073479968af63b33d0b287894d263f8baeeedde', d: "M9 12h.01" })), h("span", { key: 'ceec4413267923250e950a2c2ac5cf8e6790ffe9' }, h("b", { key: 'ad668f68c5a074c629938bf529a86d28456a7d87' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'e4ef2b2cde76ef54fc432e0b1248d58d8a32a07f' }, h("div", { key: '17d6b7b1335578a70d7629a3197f8b3a181ec4a8' }, h("ir-button", { key: '465e1d67f11dfce6f2f560d9d3d4feb32a81587f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '8b2cda5f2dddc2991dbb7929ad22806d2dfa2590' }, h("ir-button", { key: 'fd498b5855d661c884a1150e96b660936c1fb3cd', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'abc63c95b641e965178638a5e35d983e07ad3462' }, h("ir-button", { key: 'a86a1df8ae84ed5a9afa2bb89197142d14ae51d0', onClickHandler: () => {
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