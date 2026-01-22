'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const iglBulkOperationsCss = ".bulk-operations-sheet-container.sc-igl-bulk-operations{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important}.animated-container.sc-igl-bulk-operations{transition:all 0.5s ease}.tabs.sc-igl-bulk-operations{position:sticky;top:var(--ir-tabs-top, 54px);background-color:white;z-index:9999999;padding-top:1rem;margin-bottom:1rem}";
const IglBulkOperationsStyle0 = iglBulkOperationsCss;

const sheetCss = ".sc-igl-bulk-operations-h{height:100%}.sheet-container.sc-igl-bulk-operations{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-operations{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-operations{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-operations{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-operations{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-operations{flex-direction:row;align-items:center}}";
const IglBulkOperationsStyle1 = sheetCss;

const IglBulkOperations = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
        return (index.h("div", { key: 'a01e090d3c6791ac28894d4a2a2b3e7ab8400063', class: 'bulk-operations-sheet-container' }, index.h("div", { key: '82e503a1ffc1718425cb20e5d370f56cea7c0aba', class: "sheet-header d-flex align-items-center" }, index.h("ir-title", { key: '4532e5753df2607fd317099e84a0261e7785c030', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), index.h("ir-tabs", { key: '9de08be546b7787884ea00d9668f31e8e78b9231', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), this.selectedTab?.id === 'stop-sale' ? (index.h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (index.h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
    }
};
IglBulkOperations.style = IglBulkOperationsStyle0 + IglBulkOperationsStyle1;

exports.igl_bulk_operations = IglBulkOperations;

//# sourceMappingURL=igl-bulk-operations.cjs.entry.js.map