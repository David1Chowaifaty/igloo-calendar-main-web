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
        return (h(Host, { key: 'e9565f68d848c69bf2b6586e9bd4f75cfaf441fe', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'db074c01b1c0ab74ed8167afd67cc63781e9dead', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6668a87a9d4ab803db2d0d580f5275ebcf7ed9fc', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '24dff69b69ddddd42ae26088219399d8358ea5ca', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '1924fdbedbf84c74617d27b24fcac7920c669149' }, "-"), h("p", { key: '46b19c484cb6e7a0fe7a55114673dc8f8fa6811c', class: "m-0 p-0" }, "Unit ", h("b", { key: '6d0a61b1176f5dc90de0a0eb45363b49e1690e48' }, this.task.unit.name)))), h("p", { key: '75c8bee907412cfd0ffb38999ca12974b3c205fd', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'c6fbbd5edc293918b09a9ad1f5d0e44e2adceabe', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '8ed6733eb72ef117777e6340c83cc3563a01986f', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '833b2b9709769bf2f940dce686dbad4e9925e4ed', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '914828bb591c609e4a0ffbbfaaeffa7762fcc37f', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '76534d690e4233c3095f42aca93371a5fb1f30e2', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '7b23ce0e156c98262cb5e877129c7d2d0088f9b4' }, h("b", { key: 'cad040d8e3779d1379112dc97070c39992ffd345' }, this.task.adult), " Adults")), h("span", { key: '6959839850de8eeec3cfb9292ee14213dcde1c4f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd7ff1522a7db650bb0a6e3715fd3f3cdb4169210', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'bdb569f764d06c0e233cc3ed3b53af3e0ab67a2f', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'b3bccd2755182b26a18c1d6e166f62c9ccfcd880' }, h("b", { key: 'aa9c3b1afee203fbdfcc5268f2a4709ecf8f22a2' }, this.task.child), " Children")), h("span", { key: 'e25641d711dd121b072dedbd0844ac7335c7cb29', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '06313093848edff878345e486f692d9ee9916725', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'f3ff74ea780516a62496d7e382f12e3d01105aac', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '3ade315f6be8849530faf5e012473336c1e1540d', d: "M15 12h.01" }), h("path", { key: '83d4892cd9fda7db25a40d878fd6eacb8bb67cf7', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'f6b0dbdd082b8aa33785a4580347db490b1ca3a2', d: "M9 12h.01" })), h("span", { key: '2c67c6e1ae20966615b492e64cf1973150d3e80f' }, h("b", { key: '1a3e447f0a17968d970923f17b02c981b373fdf0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '27f014f4a5ee13e62b6de2d7976667ce2f0c8a4b' }, h("div", { key: '296c0e3e7137b35c7251318ef3814f28bb7aabde' }, h("ir-button", { key: '86b7c5332d0f5c46e75c9bd0a47c2dd9865a1ae1', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '38e129114596094953aa45a9134d0c542f478709' }, h("ir-button", { key: 'eea579613b1f086f3877f33a1cb618f7b895850b', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '4ae97273bffe9cdee3e35c1c9d869144b7587a7e' }, h("ir-button", { key: '17a81386530a30533bfb7c61ea997193ae0dd933', onClickHandler: () => {
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