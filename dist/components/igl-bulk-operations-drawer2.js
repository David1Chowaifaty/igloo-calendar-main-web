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
        return (h(Host, { key: '642dacec53ba75f3686ccb8d0ec3ae6b447fa8fe' }, h("ir-drawer", { key: '9bf072dc81a7c92534595ffb8b6545075b0d44b2', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '0e72f06e4e22cbfb137b08bbdd53a3ef66005546', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: '9e650397a8b9853b357766066e2465f5cbcfc4c6', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '70efe9716afda6bd7674e5eda9ae44097d2997c5', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '2f06f6ef92ab6995a657d568cfb2c361753122ba', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'ff067fdf7099caacb120972ee8fe974ca59c3914', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: '9e6181ca8c2b7995fb4e3a0a0fa2687ca15a6ebb', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '911f42da8aff3f36817359f419bc5e34d02ca4d0', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: 'a0216efca2af84690395ceb51ffb0efa3205561f', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'ca9540a46a2e8066e594d1f6b8eb15a3105a09d8', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '7d2e669ef6b46c1ad9001f4659a16d297f709bb0', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
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