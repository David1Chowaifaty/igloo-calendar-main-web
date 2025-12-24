import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './igl-bulk-block2.js';
import { d as defineCustomElement$a } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-icon2.js';
import { d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$5 } from './ir-radio2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-tabs2.js';
import { d as defineCustomElement$2 } from './ir-title2.js';
import { d as defineCustomElement$1 } from './ir-weekday-selector2.js';

const iglBulkOperationsCss = ".bulk-operations-sheet-container.sc-igl-bulk-operations{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important}.animated-container.sc-igl-bulk-operations{transition:all 0.5s ease}.tabs.sc-igl-bulk-operations{position:sticky;top:var(--ir-tabs-top, 54px);background-color:white;z-index:9999999;padding-top:1rem;margin-bottom:1rem}";
const IglBulkOperationsStyle0 = iglBulkOperationsCss;

const sheetCss = ".sc-igl-bulk-operations-h{height:100%}.sheet-container.sc-igl-bulk-operations{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-operations{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-operations{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-operations{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-operations{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-operations{flex-direction:row;align-items:center}}";
const IglBulkOperationsStyle1 = sheetCss;

const IglBulkOperations = /*@__PURE__*/ proxyCustomElement(class IglBulkOperations extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    maxDatesLength = 8;
    property_id;
    closeModal;
    toast;
    selectedTab;
    tabs = [
        {
            id: 'stop-sale',
            label: 'Stop/Open Sale',
        },
        {
            id: 'block',
            label: 'Block Unit',
        },
    ];
    tabsEl;
    titleEl;
    componentDidLoad() {
        this.tabsEl.style.setProperty('--ir-tabs-top', this.titleEl?.getBoundingClientRect()?.height?.toString() + 'px');
    }
    render() {
        return (h("div", { key: '6854cc14a087c8ffffd093aab3e982c5585c76f7', class: 'bulk-operations-sheet-container' }, h("div", { key: '973a71c39e0556995a15720d45d77484c0784a6f', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: '8d5ab95af600aabdfeaf4a99b904ac075e6c349f', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), h("ir-tabs", { key: '715fdf10eaf696ff1278a076eb284453ed619df8', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), this.selectedTab?.id === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
    }
    static get style() { return IglBulkOperationsStyle0 + IglBulkOperationsStyle1; }
}, [2, "igl-bulk-operations", {
        "maxDatesLength": [2, "max-dates-length"],
        "property_id": [2],
        "selectedTab": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-bulk-operations", "igl-bulk-block", "igl-bulk-stop-sale", "ir-button", "ir-date-picker", "ir-icon", "ir-icons", "ir-radio", "ir-select", "ir-tabs", "ir-title", "ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-operations":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkOperations);
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-tabs":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-title":
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

export { IglBulkOperations as I, defineCustomElement as d };

//# sourceMappingURL=igl-bulk-operations2.js.map