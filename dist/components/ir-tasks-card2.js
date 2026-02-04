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
        return (h(Host, { key: 'c7e406b4efe64d29326500e97c7069b7bfce2d22', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'caa4be3b6091cfa306c3921c0e4fe05d3cf67894', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '7a1d08204304c1f0287a49aadb5f04c7be501b66', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'e41ed2e8b33f91a85520b7fbbc2b42d25b8512e6', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'ecfa49e971813ded22b543e6b2e85b0e6d5ffe09' }, "-"), h("p", { key: '5e7dead8bf1b850d71b9ea4e3b7452a6eff6152e', class: "m-0 p-0" }, "Unit ", h("b", { key: 'fdc416413a844f1e1fe3d534da3327f91ffb7c73' }, this.task.unit.name)))), h("p", { key: '52d841a0a772458526a2191fa1bb6842750bc0b1', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '4f9df870f41eaeb55452314282e5e5fca29f0400', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'b15ea8ce6e8c3d57eda83575318abe925255da5d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'c9e19581973026235e7e927d77a18d8b3b042e30', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e2882845fcdadd937c558320c5870fa5dda65c62', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '65f686f4ec9c416e13c79cd38a90b7fcb79326e1', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '5129570332ba3690d0964c9b48d74dcc97475022' }, h("b", { key: '7943da0583c3fe33dc61b83a6f767d5d514ed13c' }, this.task.adult), " Adults")), h("span", { key: '6da3b05da212b8d35fc2692d0fda7480ac9132c8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '077755d94c78883b5f667e3e5c182c6b69e67b5d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '29160b8f49c2297fb2c434ce452eeaf74db7400b', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'fffc609372ef3288781f6c109729ef66b67d39db' }, h("b", { key: 'e794d0bf38446d8ec9346194c6b1fc3351b2c3e3' }, this.task.child), " Children")), h("span", { key: '632844d721bf7e21a9e8c184d362700ab7d0000f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '97370fc2ee76cc5baa3e477eac8f6f306ee1d005', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '395d087952fca5105746f391a294c1821d055b3b', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '5a9f045710560005f9b5f569c510a14a27303d1d', d: "M15 12h.01" }), h("path", { key: '96f208ba7288d052c4dffcae80f3e537e49c6e4e', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'fd3d62a788a287f540020a7377ad26cbeda1ab13', d: "M9 12h.01" })), h("span", { key: '61049ecc9d5aae1dd8732996522d74f5aaff8a13' }, h("b", { key: 'cec402f82fabd86b8275b77700242b3da531fee8' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'cb8769b0daee534956db86331bbaae931a96cc39' }, h("div", { key: '983084e5b1411ec65799ceafbbc4002c48c98d8d' }, h("ir-button", { key: 'f877cc8a550190cbd774981059a04e001b088515', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '6effdb621f26d5b97c11fe7065c902a21ef54620' }, h("ir-button", { key: 'ffa0a6c319cf1df0261a0fc919511e3027fbefe1', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '67c407208387cd9296969a7811068a3c63ecc2ad' }, h("ir-button", { key: '6f6a6f5c14fc6a557a06ae93b7f4627435e88323', onClickHandler: () => {
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