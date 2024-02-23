import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const IrChannelManager = /*@__PURE__*/ proxyCustomElement(class IrChannelManager extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openSidebar = createEvent(this, "openSidebar", 7);
    }
    handleCreate() {
        this.openSidebar.emit();
    }
    render() {
        return (h("div", { key: '91672199f1c0545fe791d6c775590ec4c5ee5ea1', class: "card-head" }, h("div", { key: '2a96ab3a496ba7effca320d42cdeacb5c78521bd', class: "input-group input-group-sm" }, h("input", { key: '334a2a484de9c90b7c1217f5bffb6657bc5a73d8', type: "text", class: "form-control border-light", placeholder: "Search" }), h("div", { key: 'd37238b2316824b9114f1bb738ef89dbc900ee08', class: "input-group-append" }), h("button", { key: '767802ab5b7e1d0b22b39bc9a7e33d1970e5f97b', class: "ml-1 btn btn-primary btn-sm openSidebar", onClick: () => this.handleCreate() }, "Create")), h("div", { key: 'ba5156a15bd0127d8a849f8015d5e5ba3aa9cbed', class: "container-fluid" }, h("div", { key: '0a4b95f601d25427a32ea2257f70b4487403efec', class: "row" }, h("div", { key: '34f895176fc501a16d0c31c254a8eab856b24394', class: "col-3 p-1 section-title" }, "Title ", h("ir-icon", { key: '4e8eefd0ad1ac18f557ed15374d730d3276cc6b7', icon: "la la-unsorted" })), h("div", { key: '665626773f4b107ce5cbd3a7ae158506e2f2d529', class: "col-3 p-1 section-title" }, "Channel ", h("ir-icon", { key: '10188db03bd2787d7f8837f8c40ace9248f3c84b', icon: "la la-unsorted" })), h("div", { key: '7a49ba65a008bcba559872824f2e707aea31a3ff', class: "col-3 p-1 section-title" }, "Status ", h("ir-icon", { key: '428a7687be1b25add42791a0a05c293540dbf8c3', icon: "la la-unsorted" }))))));
    }
}, [0, "ir-topbar"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-topbar", "ir-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-topbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrChannelManager);
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrChannelManager as I, defineCustomElement as d };

//# sourceMappingURL=ir-topbar2.js.map