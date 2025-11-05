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
        return (h(Host, { key: 'df5e5074cbe87daaabccde8e3274d5b33676aa03', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '65abf6a7b6bd5b1bbbdb7c106967ef472da87941', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '52109903151875d3d42e97c606c308394976a0ed', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5aa7f043f1b6ce74eab35838d16c49eddda4e0a9', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'f42e428e0fe63e33cd67e049ccf017220f1980b3' }, "-"), h("p", { key: 'f1cb536a73b98b4ef8612fced7b1caa1674eba84', class: "m-0 p-0" }, "Unit ", h("b", { key: '0b05abb494a0e946326edccb6be381606cb6d746' }, this.task.unit.name)))), h("p", { key: '8840d35486e68bf35c211c1f841b93e59785a4a0', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'f190b0a607ec0c976ed540f99c3702c11dc5578f', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '5da299f1c88c587762527aae2b98cc37b5142e80', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '5bddc40838d72b91a24b19e2b2f2693bfc7c455b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '942cb2024584eed05992ddbe550394c7fd9167d3', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '777b644a44de4f032da0f7b645ef82f9d128b043', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '50d33c5dac16c41c82d913bde74affb253c63928' }, h("b", { key: '646f0daf13cb6d3e0b189b6962e332493ac7d1ce' }, this.task.adult), " Adults")), h("span", { key: 'a8f16855b220cae19afe7b8f93f0ad0d19b2f8f0', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5dadce32207e67dae126eab0498502fe77c8bce5', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '1c85f787d5d73bb660b0b2c18775b8e2e6891752', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '4c8791cdced8bd029797812f75f46c77f4f7dc8f' }, h("b", { key: '7c0d26fb404a9659306808d30b1a22156d1c2584' }, this.task.child), " Children")), h("span", { key: 'f70011f0df04ed86c6aa5420dfd05b960d581e4d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ed90901be0b9a4eccea5429bf5d195119584b9e8', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '62c2be34a936fea5bebbe88b8965a4eb4f47d4ac', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '45f4ddc46fdfcd4af727012a4c970c14a2ababee', d: "M15 12h.01" }), h("path", { key: 'cf55d208baab7c93f23aabf962dcba2f4cb282f2', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '0592abb01c129eb4c0105a9bb7ea4f08756c86ca', d: "M9 12h.01" })), h("span", { key: '2581fadf033084d2997f24f58fff36441eb09e6e' }, h("b", { key: '7ee7d92d685243bdf9fbd6c10a2455ac2d2c58e9' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '09c3163d86ae2af8d51607858349f7d257245f8f' }, h("div", { key: 'b979392e7aa6d37bfba08c7be280110fc24b9350' }, h("ir-button", { key: '55a4af1a0a5cf8a2734f83ca20483e9ee40d21af', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '05eba65fe127ab73dfc69a07a29838c89ee28adf' }, h("ir-button", { key: 'c786c9c42e5a68ed0225a0d103988b48a6e24772', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '47b3d5868ec1ede69ba91bf4205363095aca99b4' }, h("ir-button", { key: 'c3173600e976646aedfeea203599055978ac31bb', onClickHandler: () => {
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