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
        return (h("div", { key: '349260214eeb982e595dbc34071418713575d9df', class: "card-head" }, h("div", { key: '127169644b0bdc7f34e86852757705259f2c7e9c', class: "input-group input-group-sm" }, h("input", { key: '8a380f7b5797a65fe4add97e185885f206158b40', type: "text", class: "form-control border-light", placeholder: "Search" }), h("div", { key: 'b0126989965f6ad048f50794ed4499082634f8eb', class: "input-group-append" }), h("button", { key: '65ab7bc50fc88315ecb442127aad7a2066d69498', class: "ml-1 btn btn-primary btn-sm openSidebar", onClick: () => this.handleCreate() }, "Create")), h("div", { key: 'ec0e4cef6d4f8ffc737c1afb25f44ece8d8d2eb7', class: "container-fluid" }, h("div", { key: '7c4c45cab83a01e6d3592ef84331028e46313dfc', class: "row" }, h("div", { key: '527a88cd009a3e7c262661123c5df4d6cc192e22', class: "col-3 p-1 section-title" }, "Title ", h("ir-icon", { key: 'c82717883d1ad51748ad2d87402d400e754fec22', icon: "la la-unsorted" })), h("div", { key: 'd72cc281c8654c516d7100f26068ebbe561ba07f', class: "col-3 p-1 section-title" }, "Channel ", h("ir-icon", { key: '558c1c71bf6eaa123f33a6b3176a3237df015577', icon: "la la-unsorted" })), h("div", { key: '17f7b983b303b6880e95bfedaf68742434c34555', class: "col-3 p-1 section-title" }, "Status ", h("ir-icon", { key: '6cd8e5df086bdc1111dd4f0b58bbe4b802d605ab', icon: "la la-unsorted" }))))));
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