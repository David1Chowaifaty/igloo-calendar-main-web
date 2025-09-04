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
        return (h(Host, { key: 'a3028b79e7caaf3e025fe5ebe42af908ae4c3f1e', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '5589d334b0af1be8a9938da603888670012c6b60', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'e18ea79e3618b3400205498fc1b5a1adf8c9ca8a', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '3c51762cd0f2cc112739cac8d0e8ff8a9fe1e018', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '9e0e051d794a8c8f89f9feb66c464451a402e56f' }, "-"), h("p", { key: '2f47e3a6dfa4b064acb103f101c09517220b6843', class: "m-0 p-0" }, "Unit ", h("b", { key: 'b647a948e600526e179e70a564ada00b6c726d2d' }, this.task.unit.name)))), h("p", { key: 'a9dc08fdb2b40092baf8d99aa61eb30ff7b26977', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'e9ef1cc00dae1604a5108b023526c4c9877c3417', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'df4ff3460138cc34260f4b38623723ce0279f05d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '168fa15da64b5702f4d916597092f00b04e071e4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '9fcc0f4491d87baf8042b19265c7e8507d6119fe', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '1c12a372e7479e4bd4d3a414538ef79d0183db8a', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '739230e28c4e4f6905a9b6b9d7e5be947e7cb8dd' }, h("b", { key: '0fbb67fc1bc45f57a82431de03f7aa8251140137' }, this.task.adult), " Adults")), h("span", { key: '073926e56ca3f9985ea2d3164706f19ad1a3846a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5f74bb0d78c6d634584b559d82caac5fed49af3d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'af6583ac81cb796cbb38654e9206f9bb320171ec', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'fb8963ef242bf6fc8270cba40fc718258ff4487c' }, h("b", { key: '3a7aa13e0ec564f3c8efa0a31baf17e2886569fb' }, this.task.child), " Children")), h("span", { key: 'ccd181d942db3394a21ededf21bcbdc0bd6ce25b', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd258a4edbdfa08ea0a5f6e775a7a90529ec34a0a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '2261de8a3cccd96591fa273b0a723e591a30a0f0', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '904afef07841f9ff8c6a1841d2bf1f71c9b57471', d: "M15 12h.01" }), h("path", { key: 'b3d7f2be4957bd772da5003eec03d3408811a1f7', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '43c8fb5bc50a7ce0b1c5ec24a7dd1cfd156408c3', d: "M9 12h.01" })), h("span", { key: '6734cfe97720a0923b9be8e8dcabf7ecad468590' }, h("b", { key: 'c92f65dcd87702589c01b00c7d5a5bf0c078dcd6' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'fcff80976769230ec5f1f8e819530dfd4f7cbc57' }, h("div", { key: '8647d20fcc67fc1a269531db83bbe30a3a2f7d7d' }, h("ir-button", { key: 'd8b5e0bda0cb934075ef5898b4eeea67b22cb0e9', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'd93f36398469991792d220b7278040bef01d84ca' }, h("ir-button", { key: '0db939cb38a55e21869cebf690998158b64fd0d6', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'bede7ce267c5e34667cbde6c02d2c09f66d4c7ab' }, h("ir-button", { key: '6a15450f2cf5371d388c7e07e8439d83125e2158', onClickHandler: () => {
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