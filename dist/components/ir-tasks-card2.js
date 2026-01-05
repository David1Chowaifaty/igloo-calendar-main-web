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
        return (h(Host, { key: 'cde72012c765628deb9cb32e29fae0469e3d377b', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'ae6db182a8b3cfb5155458022d6166d0d20de0c3', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'c4e0d7eddd73044ea9b4cae26cae1439d4a55963', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'cdc9c126f74b7239f90f30ef6cca5a007ee4fb49', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'c8abffa7db8bd15cfb4b68b758421dc4ad9ff6ae' }, "-"), h("p", { key: '095a70610da84c23a8861bf0776dc3f39cefaa0a', class: "m-0 p-0" }, "Unit ", h("b", { key: '9ad2094c96b574c0b70eca97b854000535e08588' }, this.task.unit.name)))), h("p", { key: '8151ce04622a2af0ad9c05a11408094f30954c9e', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '99ee216814087f7efcae081f9f23a17776edc8b4', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '2fbb01e4123b7ebb15a88ada8d5d69f0cfb33489', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '5486fe6bdcfe535d42856188aeea08dce7755da3', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '73705d35a914324b716751e6e4c71b1b2f559ffe', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '51f5a797b6db57547ed3b7964626942955935d2c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'e2b9e761b9b51d0d7d4990005c9f6d499517cf5d' }, h("b", { key: '897b59a385a26dfd27c746e9f1eb22a89e7e6502' }, this.task.adult), " Adults")), h("span", { key: '7eaed2c99285e1459484c4ac0fe4faddd5f9fe2d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ce39b6b1bd50ec62cce7dbd55de5dfc4dd51cec2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '5f52a7f306f2d8502990b23d679f39d8241f003c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '0305dcf01c47ddba7dc0a387b6fddd3b655b09e9' }, h("b", { key: 'e3b778b2d4865bf9fb6403a16a28086353c77826' }, this.task.child), " Children")), h("span", { key: 'cd99d5ecee4a0c6b561db9a6ead448be69f22dfb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a2ce5dfec54ce02cf14033d6b049dc0fcc954207', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'c3bc69564a935cc73ea4574090c05730bdb9520e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '876d26a470c3cd14470e2e976a1cd99598565e1f', d: "M15 12h.01" }), h("path", { key: '066fa86f968878ff276c2761b9e72a0b9e370aca', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '4e383da7858ad1c4dea25223839121687f14af9d', d: "M9 12h.01" })), h("span", { key: '74039f993cfe2a8cdaa9080117a20185244cf1da' }, h("b", { key: 'af7099fd004ae02bfad5fcd85d4ed50f8befe8be' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '232409d7fae1d6be5e461a51815e3077cc5205e4' }, h("div", { key: '5d634da89a4c3b1d07fa391129d63e44edfcb107' }, h("ir-button", { key: 'dd98f62ba50d84c634f827f9a5dbf21a4627eb20', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '7f7511fdc00f58bcac4e980f2b0a27838aa92ec2' }, h("ir-button", { key: '55784934eb61ee781e0376ab4717e89c71d1423e', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'f0a6aeadb2c8cda3961b78de755fcc9e993cbe68' }, h("ir-button", { key: 'abddb8fdd17a9ae87b0db2d1fa58d9222097de4a', onClickHandler: () => {
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