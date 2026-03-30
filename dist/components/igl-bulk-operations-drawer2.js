import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$9 } from './igl-bulk-block2.js';
import { d as defineCustomElement$8 } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-custom-date-picker2.js';
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
        return (h(Host, { key: 'b844c0bec4cead452f0c594e75b92ecc4130732d' }, h("ir-drawer", { key: 'd75ad42b075dce222eba93f94df3e7d91f3111fb', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '915993cf7a24bef8dc556b4d990f492827204b34', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: 'bafde1157d539584a6e6a58514e3701534f245d8', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'ef36a888cd1d7500141aa2a94ee050fe920dd3ab', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '91658bb6498f79e2ebd95fb2f292f2f852259084', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '0d965e6c0e2b0943d65f7c6b6a212456b9e1a00d', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: 'd49ace7d193e60149c8f5848c3c9c0f43f700780', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '132a96437cdba5899448a83e8fd9de14e9687bae', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: 'bca1e03f8cd633828eaed3450565680e95fee0f6', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'bcba4b2cdf1ac9148dc7ee61af705a5b1017d279', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '0d4efb278079ef3d5a4473a57211f4a84c722b6d', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
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
    const components = ["igl-bulk-operations-drawer", "igl-bulk-block", "igl-bulk-stop-sale", "ir-custom-button", "ir-custom-date-picker", "ir-drawer", "ir-input", "ir-rectifier", "ir-validator", "ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-operations-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkOperationsDrawer);
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-date-picker":
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