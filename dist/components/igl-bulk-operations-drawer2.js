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
        return (h(Host, { key: '847e117e5e729b04abe8e12d3055da737610d086' }, h("ir-drawer", { key: 'e55a0df4af3e58f208cca81874130637cb3ea0b9', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: 'ba92079b5a11b2e467e8a0ba39728068d9ad39cc', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: '570250a0ea94b13bda40420923c1a2934dda1083', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'def701cff46c994cba56143fc9bc37b57e3980f7', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'cdc5e1f07e9a0ed4af526563bfcad1ae8eb6ca7b', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '7e6d4227384bc817d28377cf64da1a416cdef27b', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: 'c779ef81528b0ba0c7aed073dafe9ede1704535b', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '28af66b35cd0f48462513bc35237269e27953d92', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: '9332b3845c85a9d4809cd8d6dde6fef48d9e0aa9', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '84134236cdcf6aad21db27fe7f831ae51572a028', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '6c92a230d6eae57e6629599d2d8bb0690bea40e3', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
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