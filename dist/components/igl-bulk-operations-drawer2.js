import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$a } from './igl-bulk-block2.js';
import { d as defineCustomElement$9 } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$8 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-date-select2.js';
import { d as defineCustomElement$5 } from './ir-drawer2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-rectifier2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ir-weekday-selector2.js';

const iglBulkOperationsDrawerCss = ".sc-igl-bulk-operations-drawer-h{display:block}.bulk-operations__drawer.sc-igl-bulk-operations-drawer::part(body){padding:0;padding-inline:0.1rem}.bulk-operations__tab-group.sc-igl-bulk-operations-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IglBulkOperationsDrawerStyle0 = iglBulkOperationsDrawerCss;

const IglBulkOperationsDrawer = /*@__PURE__*/ proxyCustomElement(class IglBulkOperationsDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    open;
    maxDatesLength = 8;
    property_id;
    closeDrawer;
    toast;
    selectedTab = 'stop-sale';
    isLoading;
    formId = `bulk-operations-form`;
    tabs = [
        {
            id: 'stop-sale',
            label: 'Stop/Open Sale',
        },
        {
            id: 'block',
            label: 'Block Unit',
        },
        {
            id: 'rectifier',
            label: 'Rectify Availability',
        },
    ];
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    render() {
        const formId = `${this.formId}-${this.selectedTab}`;
        return (h(Host, { key: '1c1c821e1a8dc4d27c81fe6c183dc088699a26ac' }, h("ir-drawer", { key: 'a7da5345012cc631ced482768e2301a3e1606756', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: 'd72eef683bd9e68b794a7c3005b710a70381d981', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: '744a6840ed2509f83502f6a7d18b19e3a065698e', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'e86bd6b346e6e51eae588a1aa39aa5ef98da770a', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '459a6d1acdbe0097a71ecfd85b1835db16e0eab2', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '4bfb9c3456d41958b0a9e04dddbbc6cb75a84aff', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: 'dd5d0f52786652fafea590130cf797ae95b8f9cd', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: 'f6f13760cd41e176d91eba82c25b62b86bde1db5', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: 'dd2d89d61974ad2451dd274f5e6c76af808f708b', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '4f2489dc309b0025ef279c32b190a3003cfba2c2', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '025f0a2d16cfaf60aa38cc8b02469550e9506337', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
    }
    static get style() { return IglBulkOperationsDrawerStyle0; }
}, [2, "igl-bulk-operations-drawer", {
        "open": [516],
        "maxDatesLength": [2, "max-dates-length"],
        "property_id": [2],
        "selectedTab": [32],
        "isLoading": [32]
    }, [[0, "loadingChanged", "handleLoadingChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-bulk-operations-drawer", "igl-bulk-block", "igl-bulk-stop-sale", "ir-air-date-picker", "ir-custom-button", "ir-date-select", "ir-drawer", "ir-input", "ir-rectifier", "ir-validator", "ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-operations-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkOperationsDrawer);
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-rectifier":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBulkOperationsDrawer as I, defineCustomElement as d };

//# sourceMappingURL=igl-bulk-operations-drawer2.js.map