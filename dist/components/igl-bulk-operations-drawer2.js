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
        return (h(Host, { key: '2094cd0c10921f8e1b5656d59d9e3e8d6e2e6015' }, h("ir-drawer", { key: '1115236366a1250ce1e7e19287fa4cba2334da5c', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '736ebc216597f8de982e50dd2b24df249cf9d71f', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: 'c902f72a3a74c0f31d9ff5647597ae8c06ad4c6b', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'eb42a725631042aa0c03832320567a522fa92ca9', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'abf8168e1a216cf9981a84428b0c310215ecb2b8', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '0d4e1c1bfb38da1932ffd6d7613e6dc1ac0b8bd1', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: '481ae003179d574b955ab34fa31185f18b2731b4', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '5f316e40a23e6cfecd9b4d32f844a639819c3467', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: 'f8a5b009fa2fa3b70e2f8fade802d44eeec5fd64', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'a20c328096b47ffdf966acea40ab5dcb619a87bc', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '51dfafda1a8d816cb0fbec040c6d3f61e9aab3df', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
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