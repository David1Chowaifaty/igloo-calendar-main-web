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
        return (h(Host, { key: '44f3aa30b7864eb6b204577177c1d82c8c342458', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'ec139eb4a62de01434e7fd3d0d9ca6f3c70a824d', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '2b8cc98f5fa2b523385bf8ca4764963472807d82', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '3169d2cd05801ca7612dd41c901623815b9a1893', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '6d308c4467d40af73f4ff3e255c5215ef221cd3f' }, "-"), h("p", { key: '57c46584463aa56fb07628fd64b8b2e5dc01737b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'ed00b1268f81cbd6a06e414935cdfe63aee96f03' }, this.task.unit.name)))), h("p", { key: '8e30ed07f75b5894104cb2d35f1a2cb076ae8d9b', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'e0bdd5d27298596597f153850f3c6db2cef117e5', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '4512bf8dc305728a133c09387e1cdabec209bd58', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'ae55fd3935ce1c544abb8a5dc13c8f93fd5445fd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '015c842cb0acb77acae6b8550903696823a3aa04', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '880b2359dd114461dc294f8ab29d786c373340bd', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '40f7a54d59d76868b13ed9dc62152e600c8e96e1' }, h("b", { key: '5b1a86a240eb1ea80cf4e9942fced29c4e25cdf4' }, this.task.adult), " Adults")), h("span", { key: '3c25a93cb07efff45b4b9e76df26eed586e242bd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '91f4789460f845d8e857b99c563d841948c92e6f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '47856170b9babdb6d9e09722a95130d8284c5b66', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'ee14eaa6edf3e8df8db7ac8461a7dced58c5fba2' }, h("b", { key: 'c4a635d9a82ff3c0c7ebe6e365415fc2de45562b' }, this.task.child), " Children")), h("span", { key: '524aef81f5cc0a6cc403accdb7471b5d3ab2ae81', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '62d59747c5ad790d7e3b987317a851bfc61f48d7', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'e956c6d4ce47f6e42f67f15defaaf8f47f920d43', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'c88e72df26d153943caf3451bdc2bd2353252530', d: "M15 12h.01" }), h("path", { key: '9cecbdf893b295b5a8dbf9703e3af9d8ca04d304', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'c94a821457028f7e69633ac5f248f0bc6c3c03cd', d: "M9 12h.01" })), h("span", { key: 'cf344d022d3b074f41f62c842577fb15d75c68d0' }, h("b", { key: '8a68a28608c4d8040ebd7d18717b0437c9d09289' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '35159d6f621def4bc4ddabe01a969a2a589a5b35' }, h("div", { key: 'ccd00aafea41c5424ff06518dd1357c2b538071d' }, h("ir-button", { key: '0c61fab63c5a8896a69a64ae06b781c84b0a60e8', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'cdc8b570c0caf3138e0fe4ae7286c498924b021a' }, h("ir-button", { key: '8915879e6bfa0c009794987453a2bab851c0d511', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '4567dbc164cc01330d6c8121aeb138d945ac07b3' }, h("ir-button", { key: 'd5d704be22f85b513c2387df1bd2fb4e4afe41d0', onClickHandler: () => {
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