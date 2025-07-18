import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
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
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '76411317af9948b797b97275f71805f50255697d', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '9de5ce9c9c09965c254277c7ef40459e3f71dc6c', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '51439001b7eae6a8f9c6d1ca9905c26fe02166b4', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '993adf06d3920cfa92d8d45bc81ea223fc513ce4', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '230058b9731cca6c74d6a887b557b202f2c8e9be' }, "-"), h("p", { key: 'dc3e975e16dc6985169277f9e2af449d46afe814', class: "m-0 p-0" }, "Unit ", h("b", { key: 'ab6a4c8c356feb7a2fd7a5d6fd216a0aca5caf4f' }, this.task.unit.name)))), h("p", { key: '85b02321f779c2991788578ee4ddb9969d9819bc', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'cbd5c9b9216e5ee9f36aa0512602d7117a37491a', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '162d7bbf994e426176702383a189f1faa29380c6', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'ea089b0cb73d84f018b2cf7b64f1d8a6ce6e5a93', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2f7e59f53ef4df142957c3b784845a8a7ea0227c', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '57ed4db0d2f629268aeed6f4570d8ac1d0e6b028', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '78ede2798b55803c68c88d80be0450572935cf37' }, h("b", { key: 'a3779477f507cd07d415a63593efcca58eddadc7' }, this.task.adult), " Adults")), h("span", { key: '51c650dbc7dcd50b6489b2d23f92bc8e52b754a6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '5ef5e9e03fb672332f0de3d9d02e76be5bfd1f8f', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '9f31395a077c07dec34e0ff0f465be38ecfff51e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '01da822efdb0e184a994f3ad41f5614f75a0ceca' }, h("b", { key: 'ab3704aeacd291da6e25232c65d2790e8d3a80e4' }, this.task.child), " Children")), h("span", { key: '42a6064ddf19c2655d141015bf42f6208a917be9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e1b17e3ccf4bbef416e5df3bd9aed42ae5d0c424', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '1fafd22c356b90056bea2b7be1389e98ee4ba87f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '984749a9fc9a23ed4ab9754d6991a6e57a49ddd7', d: "M15 12h.01" }), h("path", { key: '7929bedf54c9b19f6f69d94fa79633da9703cb6a', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'd26fb007ef75bb1a4d10128081fd75f766f0ceaa', d: "M9 12h.01" })), h("span", { key: '2b4973f91a118c6f236b6f0e6182853d0e7157a5' }, h("b", { key: '1036e2051ac466402fb498c0023fc514060294c5' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '0fe4d1e2f79e11aa2aeaec51b122619d8a5ffda9' }, h("ir-button", { key: 'bc599c6c989d38ed33db1e5d385d2d8cff1a3069', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get style() { return IrTasksCardStyle0; }
}, [2, "ir-tasks-card", {
        "task": [16],
        "isCheckable": [4, "is-checkable"]
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