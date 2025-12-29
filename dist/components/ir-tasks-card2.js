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
        return (h(Host, { key: '900e4e4fa280cfae2f4d374a374ccd414b014796', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '603cbaf49efcc5c1596c07c492c7653c93d73a6f', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6d906db61272d8b4e23356810e0e89b7b1ff6d65', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c0b92815103051c2e8f935e0598b4cb32a5d9267', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'e46014839367b4f630dd9fb47990fea233c29b7b' }, "-"), h("p", { key: '883957075b1e21a082bb413f479c51f342b2b334', class: "m-0 p-0" }, "Unit ", h("b", { key: '8d456c74296c156b6dd433155742e2ac02301799' }, this.task.unit.name)))), h("p", { key: '0de89177682cbedd9ded2714dfe6c1df9e4788af', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '2acd2d1a6cfa2db5e5f880e7f44a7c1b5a5be134', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '1893f9214873b0fa03686fbb592fc6b25bc9f00a', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '211335ba960a7563a8509b5a6c41d5d45eda9ee9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '09a215155c303f252604e5c5e2ceb564287d2b7e', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '5520abb08d95ae5c89096a9c40a9324d39df845f', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '06c487b8195c3bf39b2fb4326a99e111dd616f22' }, h("b", { key: 'd870a8e83e250e631641fae039bf40ba3b5897c5' }, this.task.adult), " Adults")), h("span", { key: '2972fdb0152404965f1c40a0216ed6b56840dcde', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '3e37c7437eb44d2c1a55b625c7fe129f6d5dd60e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ac5ace23afa12ba9fde2de916ea8419a6f395d6a', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'd236efd731df4bc22b18f8fcb16b17996357ec2a' }, h("b", { key: '70309267d90301c2785a29c09c170fb18c29a034' }, this.task.child), " Children")), h("span", { key: '0e25a6953cd91983d0fa7be8fc9d2d4657fd5a47', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4dab93cf535c1392c20be7e6c9025ff57768dad1', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '97b6811eb5072ac9ae2c3a591c0f8d65edee9687', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'e143357aa008de4f61c5f833c65f144cb18b7dde', d: "M15 12h.01" }), h("path", { key: '228a5813c24518a265b7cfae9a4add26289bca84', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '1f5711ae0ddfdd7bdefdcfa0ef6bf8ef4330061c', d: "M9 12h.01" })), h("span", { key: 'e75e6ab468b9f9007edbd52e262789c1dfd7321f' }, h("b", { key: '2e342bb422b3f92cd75375d76cd6a52488895204' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'e66ca2d5d5ee6e6796318210585adf8c8d4121df' }, h("div", { key: 'ef82c4c7d01a99b35f17080416837766e9b5ade4' }, h("ir-button", { key: '4edf7f3f36329e1aac8a6bc76fe2e53fbbdd4b1e', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: '2ca64d2a70f68fefcb9a064482ac94daebeffdcf' }, h("ir-button", { key: '6fff2f226819477a2c7051fde93d72a21c874676', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: 'b9796feaef761cf2c1bb6457ad81fcee0f29143c' }, h("ir-button", { key: '936c24fe88af0fa2c9d6dcd7a5601cb7e363c72b', onClickHandler: () => {
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