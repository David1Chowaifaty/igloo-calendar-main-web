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
        return (h(Host, { key: '65046d646332d7dc50c268d7abaa8e33af441db0', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '49efc9ff73706e6c377eeb864cd2368f8208d6e8', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'f74fd1ee923a0cd9ec08bf56c39ef8c73d16c530', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '568a0205cd007671a305f195490346d3e4e65e26', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1251a47e421f53f14a8d2062f46a6eac4f0299be' }, "-"), h("p", { key: '78b7320f7674cddb576b8ccafd1464d3eb38b2ff', class: "m-0 p-0" }, "Unit ", h("b", { key: '9347f63ca9ac373284f87f5d8a63814361517981' }, this.task.unit.name)))), h("p", { key: '6830aebbf489c24e7e76e30cf80fd4f84fbf4a19', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '32f101c029c4f26991919d1c96a6847f63f107e3', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'ce97c3f7b0bc5ad0ffc885e411a91d34f898aabf', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'f2d08498fb83b5576c04e339fe61007a3ce409e8', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '81a6c7e0f11fba83c333b114806e70226dc1e18a', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ec68bb9c31b9b12f3fb70a21c29ec7edecf4e196', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '01473c483d61e68561a61be0f550b7b133f2974b' }, h("b", { key: '4b006af9e4c4e1af3db984b693ea6df670780547' }, this.task.adult), " Adults")), h("span", { key: '2b7db9035c3f686f7365f11f52ad23088cdaddc7', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6982f55b1743c84956abb7d9c25c58a7471ddbd9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'c26b741d1304921cf674a714cb08bbcd8d64111f', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'c34eab29761fd1e2558dcd58faba9d6f8b775430' }, h("b", { key: '5ccb33d296b4f165a233ddf843d553b50903b3d8' }, this.task.child), " Children")), h("span", { key: '269e35671195d6e09612f0ababd46af4f4c4c681', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6682f3366eedae59b5f535ef4669d549d6842103', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '415a1a7839cb3d303c81b120bc7f2a087fe24d02', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '5852298caad90bfc16000892940d1f1207f4c747', d: "M15 12h.01" }), h("path", { key: 'c1eb024e04bf2ced860110e630c407ae224f809d', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'ed63840d6b6b779c4fb764723db390a5cbe807da', d: "M9 12h.01" })), h("span", { key: '3de7d722a885eb94335114e4192ad64e0f2ccb82' }, h("b", { key: '305259a94e2e30b9493a41ad32f45d3094f79055' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'dada9db7d0ab1bf2cfd0b2db1efc76b09f3f970a' }, h("div", { key: '8310c0476a8b8aa81034cba65f143c8c9186ef5b' }, h("ir-button", { key: '0af0b38583b1b7adbe30a44e06952ca7611580e2', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'b05038d76b274abf1fb24c13f75fd8b575511824' }, h("ir-button", { key: '1b90881e0619cd2cf5fc9f5ff691c30e8c6d3d27', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '2e3a10d7b95f525144dba6e416fcff8998d9b3e0' }, h("ir-button", { key: '23261e5f064f19374b6a1d4921dfbd1717ec8232', onClickHandler: () => {
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