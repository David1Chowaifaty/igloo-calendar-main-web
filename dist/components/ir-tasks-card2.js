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
        return (h(Host, { key: '30ac669a51553ca2f13fbbb62df999157cb2226c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '19c67d4f641bf869cc7d03b20526b49a34b17e74', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '75e18a238c7ccc230a14aac39a59df573edacedf', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c541e366a01a5ece0df88e5784a685f26dc1ca7f', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'c9f4352e275edbc6e1cb60c34b1b67a291a6f74f' }, "-"), h("p", { key: '5c47697de4a75c5d385c7eba31fe5d92e019bd32', class: "m-0 p-0" }, "Unit ", h("b", { key: '15d9f2cc7fddbda2287ca8a7013f6942b9125adc' }, this.task.unit.name)))), h("p", { key: '1e15b6428811d0d85a454d61ae7d5b3af10098bf', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '06250db368215a28409bb4a51a37528ac213ce3f', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'abefb717182c1bdb4540b4d3ebd94a3dc7f43b27', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '2e6a12b69371fc0cc17fc82e2749bde5e703bcb9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6868cb852eed7cf28731293d5b85cfaf96979388', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '106e3dd3a0ed97aba4868fb3328d21a2f26b4d62', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '184921b818fc098afe89baf11a85c72564e6288d' }, h("b", { key: '2633a84e08a22c10b52ae0fb1ca72e6bd373c5ec' }, this.task.adult), " Adults")), h("span", { key: 'e7deafadb5633474475c86ebbe1209f4be91389a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '3a01e21106a6df704bfe4728da5aabf27502e80d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'e6324193887c9268e658b3e563ba70582e98b450', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '1dae8383b205611720fd2a6e010f069605d10479' }, h("b", { key: '9db9e3a149613637652f5b5dbbd1dc04f445b951' }, this.task.child), " Children")), h("span", { key: '91914ad4c8c4609698f6d4da31e228cb39e3efb6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '143edba63757f192c8745e477d5e86aede8c731c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '6520da22b596a1bff485038cc48fc28d10e83fdd', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'ab0ff735e7309b9ee95cad23278fcf986c81c7fb', d: "M15 12h.01" }), h("path", { key: '68d5bf9f13acc32076e9ef063cc97921a6f31acd', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'fdc2453da39d98fa126fb73635223c519d9df661', d: "M9 12h.01" })), h("span", { key: 'e2bf99a0679b1e9e194bfbbfa6d15e0db54adda8' }, h("b", { key: 'c2472093f3a7b6786cfeaa86993c07c3cb8500be' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: 'c2e2053f4dbe991c885ea3531bc331522ab8aa2f' }, h("div", { key: '88a9898dad8ec66297edae8c78b2a928bb9ef032' }, h("ir-button", { key: '20c998cd89599c76a66dad4bf215e55f5e407cfc', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'a9dacae2be655b78f9cd5488c99f5e7e04488766' }, h("ir-button", { key: '18130b5cda602ff060d7e4abe9f8826a4a00e681', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '436128d30f3ad772d15d31e64f6179c29d7fd10a' }, h("ir-button", { key: '05773bd4e0817002a48a70738259feb04b934336', onClickHandler: () => {
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