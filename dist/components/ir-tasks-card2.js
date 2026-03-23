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
        return (h(Host, { key: '0b57d6bdb735644597b1b296e3b4fb3e5a901782', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'b84a444a28ade3e59a9b849b3200839bc373eaa7', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '8a958bbf908c6be9024a60b4e4b2e1632f68b7d8', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '5ed060899c24cb944f7f6607a50dc807caeecbe5', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0d85687e1907360f80940d4b02bd6da91f188abb' }, "-"), h("p", { key: '5225406c5975dc9a6e3732b7592058afbd376d8b', class: "m-0 p-0" }, "Unit ", h("b", { key: 'd85bbb7b1ee545cfdfbf5e1a080cd17d0671335e' }, this.task.unit.name)))), h("p", { key: '76b588da9c56042c131b4b78a9a6f5d0ee11ae05', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '41d85935723710268ffbb2167aed6debc8f7e2cf', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '7552495d95b99ab277deab095675cc61774f55ef', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'fa631cc869fca8803b748cafec4ed4e0d8318a40', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '218df47f4211e2ec119b66e5526b168ab356ead4', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '637eaa844073659dc1d08a961c234bfcef39c310', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '39205ec79621865d60632ad5057a29713429b869' }, h("b", { key: 'b8a6b0e2bc92be4077b299cc01812183570e5d5e' }, this.task.adult), " Adults")), h("span", { key: 'c2d268a108327e721f51716dc038afcc1aadce64', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'f68d9fa32e77bad2f28212cd31834ebc569e2f15', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '959f110c16e9504098452a01c39f94727ad18f9e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '53e11fc3878d6709274925f533750868a96a84dc' }, h("b", { key: 'cf9082a466b6f4f5b895bad5b63a20ed8eb4b75d' }, this.task.child), " Children")), h("span", { key: 'f7264da337f59dd2a1caedfc1ca78f72efefe2e8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '75097591c3828542c8bb978ff6b9cb5114829673', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'b9798f8da57f4fb17aad5e4e1e1278eba48ba562', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'fef094a4c57ec30c60482bcc41f0e977313b0c10', d: "M15 12h.01" }), h("path", { key: '5509ff90e70134bac19d66f0df26a70d56905174', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'eaa972af05fa141f73eb52a596a04ecdff2cba29', d: "M9 12h.01" })), h("span", { key: 'fb573dc553216987f305d030e5c8c1d6699d1c7b' }, h("b", { key: 'd9b0f1d7896fd67b9cb4de0a9f9d8aea6b564150' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '675996f98b2b17c7401a492ba984af1dbd4a56a7' }, h("div", { key: '12140de7979338b8b1e14e9d2e67cf0364c104be' }, h("ir-button", { key: '54acebc9e08b16520b3c99a2114743ed407bf1f6', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '33a5969f73569302e4588b5a7c065473b8e9b4fa' }, h("ir-button", { key: '57fc8e3acca0585ceb764722f35249afeed4ca6f', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '9f69ce59e85abd4f6b53435aec63c85529b933f0' }, h("ir-button", { key: 'bb08c3460422e9d3037a3ba6709dedefd469fea5', onClickHandler: () => {
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