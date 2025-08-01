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
        return (h(Host, { key: '2c06449a004db266186cb830959a6f63321b191c', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '9a5f48f88543f9e75db5b15090c92cce78d7828f', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '0fa0af1022ec0adb4f9b2ddb3d2dcfb19303df00', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '699832ea855eb7feccc5e19202da91c5628a0780', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0287069e54d9cba6d87671c521ee0be54f38e652' }, "-"), h("p", { key: '3c7523e72a501fc6f5cb90aa543aeb4ef0ec56d5', class: "m-0 p-0" }, "Unit ", h("b", { key: '53a1ea48a2de6176aadba1f87a719a2bfc8f72fb' }, this.task.unit.name)))), h("p", { key: 'd69baf43bd23834a264936070f6b0540295482c4', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '4dec598c85fc93c9fa3ff960b9643fa0e22926c3', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: 'fcd6dd728eb9bbe16da689d1827010ba0a61172e', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '845fdde8fd46d112c3aee5c8707950eff3218ec5', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '6d7f1f76ce673032912169a498b502593f606d68', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '9acc11e8a642bb3c94276d11cb91b7c296015599', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '281369743c077722d0e73a88ab371e7a79b9ccdd' }, h("b", { key: 'ed476cf257af41856066bfa4ac3e149aa5e170bc' }, this.task.adult), " Adults")), h("span", { key: '45540cd60872dbc0d5eb01fd4fcbe984953264f3', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'e08aee5cf325d16bcd3b98d176e0518fc6ebed08', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '5d4a1460d93270a7c6a90d584af520fb9267f42c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '4a175486c6178e850819d0343192ac14074557d6' }, h("b", { key: '28bed38636819b0d034bfad59e53020734022940' }, this.task.child), " Children")), h("span", { key: '2040a3b28a8c6fb6e749366641e757d722bc6413', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '2efb55a4974b1bdfda2f5fd444109a497fd7ba81', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: 'b9ffa9aedf6a133d7dbe62b821af3cad2869a987', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '02239f037ea077d71e41b445aee7a0abe08fcc79', d: "M15 12h.01" }), h("path", { key: 'ee67e65d0637fe863ddefe596769c8a757bd33be', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'fd8a4d254293ae2bf89641e8d94417ec05712d03', d: "M9 12h.01" })), h("span", { key: '34f55595090c71c4eb49d182461aecd4de8cd48b' }, h("b", { key: 'b05e423b7136fbb073400db18dc3ab33eff8e526' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '8875e2d07cfa01808bc8f5131371903d330f3e18' }, h("ir-button", { key: 'd241ad10f7b101f4c73ccf4ef61a2fa2bced1e4f', onClickHandler: () => {
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