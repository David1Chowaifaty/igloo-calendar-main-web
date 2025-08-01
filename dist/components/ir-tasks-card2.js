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
        return (h(Host, { key: '103198ebb5fad3a8a2e1fe5a81247fca9497310b', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: 'a810cf60614dbda606c96419dc374ccb3d3e525b', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: 'abd12e277b7ec7d98dceedf2704c10df9069be78', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: '4358648ba67e42158bc3f8b79b0107a0f62a8040', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '0538a36f1c71982d9619c8b17f73fc1123f2cdcf' }, "-"), h("p", { key: '6f1ae571b0c27ee1a9bedf303eb80a70be5129fb', class: "m-0 p-0" }, "Unit ", h("b", { key: '97831402662905e8ef769fd3995b9510f510ee12' }, this.task.unit.name)))), h("p", { key: '1d9d7ba83eb156d9c7c84e3c73aa05c6a2b1bfe8', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'c282dcf162267ff8ee3914727ab3e676ad5ac056', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '4df8ffd26a2df9c865c6243007a00629d979d9ad', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: 'bb1445afa2eee5d472f62b8de2b30364caad742d', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '4e9257fe1a6949cb0c276d79d19925635f167d12', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '59556618bc8422dfde7270d987b7cc36f02d56a0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: 'cd21200e1d59db4d2b18abd647858ba56cb22d63' }, h("b", { key: 'd1e263d936f390ee6ab13069f94b14391c5d670c' }, this.task.adult), " Adults")), h("span", { key: 'd89712ff266a03d2b703dc32683c4917a12bbc16', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '1ee10dec61e80fb1524835db080df0f0af106e27', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'b3a9a12fa7e608c768027f77c27e209ff8941940', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '92c36f4f4ea468e5d98c7f1c7ad8dddeca702bec' }, h("b", { key: '167a354886f9db35b0aed94efba08e9ff2c0fe09' }, this.task.child), " Children")), h("span", { key: 'acc878500d09985c3dd4db2410b17662d3e209b6', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '13d1c6bbc6dbb4439146bac0b20b94644b06810e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '44ee6a5deb71c5c284204e7cdf593351f600aa14', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'ad4be6cfd110afd39081c5000a6ec12c4b30b800', d: "M15 12h.01" }), h("path", { key: '3c6454e1df476fd98c913bee99362f145aecd02d', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '89cb7a7c194f94eadba0a7312b47328160b9cddf', d: "M9 12h.01" })), h("span", { key: 'e7d0ccdb09837cfddda9a36b1ac5de7b9bd7aa86' }, h("b", { key: 'ad187cb9e258a33335ac5a6d3b7b519ab605de45' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: '13ad6768d4c3db81ea036d18e3a8b6120df76016' }, h("ir-button", { key: '5216b02db7ca58338aff6430381f12b7c6971274', onClickHandler: () => {
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