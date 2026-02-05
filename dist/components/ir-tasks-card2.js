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
        return (h(Host, { key: 'b158d1e317bd6e6cb89b0f88da602698c4badfa9', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '35cb20bdbc03cc13c7d0b26c303a2437e43cc641', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'c9923c8b20a08bd5d4ae1796836d1792ebd19a54', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '8123824ec6cb5b80528665ab9ed9dc47c8f11e89', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '361c817269722df3b9375cb7600c3c00af4686fb' }, "-"), h("p", { key: 'c63712d2cfab314a9ae9e10de5647f3d87945ac0', class: "m-0 p-0" }, "Unit ", h("b", { key: '5859e7d94f96d4bd27b8ae57be52391a33c94b04' }, this.task.unit.name)))), h("p", { key: '78458dc079a6bc5a1cb5e5b6ea10e9c5745f5148', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'afb5c488088e2d285f5ac3418ac341b9ec9249ea', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '081bbb82f3a67ab56be770c07d5d61f6a7185adb', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '95bd622d253c2cae1c3f8c1def013ec7d78f11f9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4affd888e279f958be9b996d927b1f265af2c7e5', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'bb6607a5266a440bbcb7db6ca6a06020a483f9a0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '551b3e4dead337480584bf012484657a623e5abf' }, h("b", { key: 'ef574a1eee91b5f2fcebb60fe1eaa485b1ac258d' }, this.task.adult), " Adults")), h("span", { key: '69beec04fbee0f4c53bb34ace9d321b1263e32e7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4ec8cfc9f0d90cba2e65452e43d4ae20ae59291b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ef090600aa8495b823caefe4720f07b1857fc3f6', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '6f0910bba8167bc5cbe0cfd2b4b51a0a1051ca9f' }, h("b", { key: 'a685159860c8416b977caaccd17d66933987dd2f' }, this.task.child), " Children")), h("span", { key: 'c359d822baa40480885f2a039b1ba41f3df4cbbf', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '91f8cbb19396b930b356faf56cdccc5af46e1c9c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '3312b55186a5c65dba2269391606b4446c981192', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '8e1f5e19ad6edd9f2517c044583e24f231747fde', d: "M15 12h.01" }), h("path", { key: 'c5d0647a7ae5015c5446a3437dfb2c7f013ac98e', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'e6392fb0f006e0b915fdc3d10851478338ec43e6', d: "M9 12h.01" })), h("span", { key: '08e120c9673e4e60612b54c7fdda1ec1bbc10531' }, h("b", { key: 'd5b9a9761118b21e616fb848b7489e86366c38a6' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '97c887f249e8747cd34b2b74f7005087cc3c3a66' }, h("div", { key: '16e1428abe764546d74e2f7da662cb152cad407d' }, h("ir-button", { key: 'ab1208e6e109386a435c45357473e774b42c89ab', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '971d781b6e63d8bf6d10b27e00f4e947a04a60e5' }, h("ir-button", { key: 'aeaca53270b297facf06efa2dca2f2ebb10bf90d', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '745511b4d5656cdd9b39bb6d4c0e15407e78c7fd' }, h("ir-button", { key: '7c3b23cc4056ae33d0f1622f30d3a45d9f0e86d4', onClickHandler: () => {
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