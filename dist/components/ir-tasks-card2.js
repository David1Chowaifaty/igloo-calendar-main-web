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
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'c7d9224f5e8af81495c0478311e995aaab5129ed', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'e7484cac24fc1a9e8eb34861d2cd776686c175fd', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'f233f81e5c6d1def84b59c289e201b648a26968e', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem', fontWeight: 'bold' } }, h("p", { key: '38dc90c9e0c749fe6bcda0f5dea1ce5f5bc1bfa5', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'e5170219a0573500ce57d9845a379017d99035aa' }, "-"), h("p", { key: 'd561094bf859c73630aeb258556a3e7fa990da95', class: "m-0 p-0" }, "Unit ", h("b", { key: '2babde0842858044193baecbd0822a8eb34e629e' }, this.task.unit.name))), h("span", { key: '172cdc3802822e218150722bfb31b23564872a78' }, this.task.status.description)), h("p", { key: '4713a528b7d13a85b37c61e67d6ba3186f432702', class: "m-0 p-0", style: { fontSize: '12px' } }, this.task.hint), h("p", { key: 'ab03b1fb06a30c965c71a819a02de5ec0d6c6236', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '60cb4fe6fba42fb2cc6a4c458b3f7e38988408ab', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '46a3f6b7ee6e9023c8b027790da9f38bfa89311a', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-user-icon lucide-user" }, h("path", { key: '9227f5b5c73341e9378a95546a1363acb72df76e', d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), h("circle", { key: '98783125bb8c796cfef00a26c426e9dfb7250e25', cx: "12", cy: "7", r: "4" })), h("span", { key: '316e0a149365d334932674e28ecb51833d5e43b1' }, this.task.adult, " Adults")), h("span", { key: '72662c248aacd13efb0f1f0627a66502d2d1721f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '16cbb90dbf5a27eea9b1006ae831690243ce16ef', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-users-icon lucide-users" }, h("path", { key: '4d9fc8aa1899b1340f949cb14db10f7c83bc631d', d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), h("path", { key: 'dbeed478ba7d472cb335623a9dbaaabec031322e', d: "M16 3.128a4 4 0 0 1 0 7.744" }), h("path", { key: 'b7689e7dade7e5ec8a15b157045e614a9b96ef5c', d: "M22 21v-2a4 4 0 0 0-3-3.87" }), h("circle", { key: '819a1ba2875b7a7818c46cfda77c27fb9ef6480b', cx: "9", cy: "7", r: "4" })), h("span", { key: '642d07c437e6c6402361a4aa38d087376a5bf0b9' }, this.task.child, " Children")), h("span", { key: 'b785c6d21e05fa21db03a7d5dedfe0f9782d02c2', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '7d71282ed0a56a495a0b4c044fe6bc4cc9beb619', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '3ee9e25a90cea7fb6daabc3af8b8123bc3a2117f', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '461025f341584b15e8a3568d5e6a1ab5557937ea', d: "M15 12h.01" }), h("path", { key: '98df4199a514275b14453a0ed1c5625cd0454409', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'a1bc2bf5e1e708863098e50b22b2efa9ee498849', d: "M9 12h.01" })), h("span", { key: '15ea4cd814da812496b5af4c296f6605da4166f6' }, this.task.infant, " Infants"))), this.isCheckable && (h("div", { key: 'b4d215cb3955a99a6f8b1998ead98909bb05afcc' }, h("ir-button", { key: '4002d69af7b44e0641b7100eee7b61f892265793', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.headerButtonPress.emit({ name: 'cleaned' });
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