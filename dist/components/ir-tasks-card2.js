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
        return (h(Host, { key: 'bd572098db07052cfd323dbea54064af2a6859f5', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '3942a4bce75488d027e75a3299497c6aa94e7e90', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '7c5a2ec2717f1d32fd7a8a5f4f815fbdd9673f4a', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'b6b47393e8b72be205049b1913f3be03c464b26b', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'ea9a765c5de3578ebe4167d7e63daa9188300ba7' }, "-"), h("p", { key: 'eb89338278054cab6faa1dcf8eb57fa9504c6bea', class: "m-0 p-0" }, "Unit ", h("b", { key: 'c960e0bee399b7b8315480db3a81e858a677d5c0' }, this.task.unit.name)))), h("p", { key: '18618824225b1fd111531d26f3c65e957f5631ed', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '58a14b1b0e21d58760c5c6a845f722851cabf294', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '9e37d0262a43107744d8dc30e66150f263e05bde', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '08236261d19659865a06c509aa09297c25c9ce87', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '09e5d7c9c4e044322055eb37d53ebb28f5909043', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '53d8d11e54836b9ad184f4659b3226ca47766021', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '7b93e88b5c6c5b4a793fcfac5fcc6761925e5d0d' }, h("b", { key: '64a355bf3ec5b04fda345971102890caeb379b24' }, this.task.adult), " Adults")), h("span", { key: 'a5f07acfdb4148e247bbfbe524e3e11ec5a7bef0', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'a856ad70f506c17f6f9f0700b1d30ee4e6899749', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: '6eacc406c52bf118e2d42944b3b0de6481950fd4', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '7cbf616550ef1f7694e838c2feb7433e32e311a1' }, h("b", { key: '7c8e8aa69ff4f93a644d5a80552eba257a9966a8' }, this.task.child), " Children")), h("span", { key: '21be422fb337d82a2580c531cffc3456bf107092', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '597d09583a66576e8c4e2ba6a83620fb3e62db19', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '7494cb00e758834af1b662c8c2c568fbc3572fbc', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'd892fa873f44c495eb3ac9175ba035c8a654cf0e', d: "M15 12h.01" }), h("path", { key: '9c8be8f788880a92b7d645383f713fa8f0a6a1e1', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '773c4b5a4106fdc6fa19aea3b8c8a0d8a0ec0dee', d: "M9 12h.01" })), h("span", { key: 'b9498c77d03d5de22fb02b9d382167309cd80f4b' }, h("b", { key: '07ff8a225a46508e1471bd5883930cca4699c4a0' }, this.task.infant), " Infants"))), this.isCheckable && (h(Fragment, { key: '6e334201ccf7d58201ce35b058ec41c3f30d5f8b' }, h("div", { key: 'a6504ddc2c0db35ebaa847d5af66a59eedff8c9f' }, h("ir-button", { key: '276bcdd3d0dbd991d2f3f526e0f8334e796ffdc8', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })), h("div", { key: 'd4b8d3b8cdeec772000d48c6ed9cafb76cbb2b87' }, h("ir-button", { key: '0209a1ec8e892a12a0b0620884a67d156983cbda', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            }, size: "sm", text: btnCleanAndInspectText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))), this.isSkippable && (h("div", { key: '89a33c45cab5c4ce84b083cc47ca4ff311d6fead' }, h("ir-button", { key: 'f3179bdbe1894cd3a0f25ce2f6c2f439b01042df', onClickHandler: () => {
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