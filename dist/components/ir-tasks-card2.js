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
        return (h(Host, { key: '3fa0f6698be7777ea4e26b879fcb2d130f531eef', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'eca9c858de3f480ea3746ece0b7af9a8bb030666', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '4af44b535d7101d9ed63d3e68a796152c9037ba9', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '4a38e6a153f1cada7f16ba58b61e81f31473d821', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'c8b0c3a79e0f6ba028e1f4c377453608eedcd41c' }, "-"), h("p", { key: '54a71907ccbd7274299c0b8d7b5f0c3e99ee10ea', class: "m-0 p-0" }, "Unit ", h("b", { key: '86c018eab0518d7ad1daa4f7f93ea32ca06cf4cc' }, this.task.unit.name)))), h("p", { key: 'd89301b3a3a74446ecdf38f4b294bb591699b1cf', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '9f07de35bcf7ea81b5a2e3a63f4e6a319aa94d90', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '351de9d47b62a17045b48903331b13e48c12a6e0', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '069c068de81fc95935088666e0f5f6375fed1d97', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'b494eaed7412ee0e4f98a4faa7574a8fa8fe4961', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '4641c24e7e6bb43ed13c68aefc4c3bed5468d82c', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '855fd34a8a5b190a4d4ddcf0e97b9199a7ca83d1' }, h("b", { key: 'fdc5a6caf61021d0fbce00c7808750b6b59d8aac' }, this.task.adult), " Adults")), h("span", { key: '6f965cd171ace6a351ba8b69940547c674b2315f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '1273fcc152041595cbfe45305631189038d11475', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '31df1ff52c03cf53adffce265f958d76025f1a6a', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '02c447fa53da8877b29cf776b4fbb7cf97e7d6b5' }, h("b", { key: 'a2f42bd48ca59a04ced74e73b6c730c7111cecfd' }, this.task.child), " Children")), h("span", { key: 'd8cea7553ff5e45409e34401602eb4cb219e749a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd7c91b9ed9bb201edb11ab51bfb344d1d8b19c1b', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'ae7e3808dec032723004ed75985bf99a8795eb12', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '1e2ffa384579ff76bb42253691ee1838a42f9012', d: "M15 12h.01" }), h("path", { key: '9435cf100f2ddc184c7d3cd252b4fc4212dc44e0', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '966152a989c48fc8b9272805fd33a37e5b358c31', d: "M9 12h.01" })), h("span", { key: '9a4b269ea81a597c0c16f1b2bbe5bcb195582551' }, h("b", { key: '4820fad329b7843f5a67d5947b5b817dfce0eda9' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '41b0ef7bfe6bb3394957d8ef8a4463ee8289044e' }, h("div", { key: 'd1f773718c136187eccba981a4f56f6d49e4e91d' }, h("ir-button", { key: 'f3f878847815ab068dc112822a8579d5e38204c8', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'a8ba5312560a3d4d7c341fd3382595976dd4a86c' }, h("ir-button", { key: 'dcbd8cef5cb8773d7fdf87a1b8b26514a5a3ee34', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'ab4ad2ef1b60343166fbc9661d7455f1730d5a28' }, h("ir-button", { key: 'c5362cb13dd821de996604833f5345db37af1adb', onClickHandler: () => {
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