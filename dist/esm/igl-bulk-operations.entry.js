import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const iglBulkOperationsCss = () => `.bulk-operations-sheet-container.sc-igl-bulk-operations{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important}.animated-container.sc-igl-bulk-operations{transition:all 0.5s ease}.tabs.sc-igl-bulk-operations{position:sticky;top:var(--ir-tabs-top, 54px);background-color:white;z-index:9999999;padding-top:1rem;margin-bottom:1rem}`;

const sheetCss = () => `.sc-igl-bulk-operations-h{height:100%}.sheet-container.sc-igl-bulk-operations{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-operations{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-operations{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-operations{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-operations{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-operations{flex-direction:row;align-items:center}}`;

const IglBulkOperations = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
        this.toast = createEvent(this, "toast");
    }
    maxDatesLength = 8;
    property_id;
    closeModal;
    toast;
    selectedTab;
    tabs = [
        {
            id: 'stop-sale',
            label: t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' }),
        },
        {
            id: 'block',
            label: t('Lcz_BlockUnit', { fallback: 'Block Unit' }),
        },
    ];
    tabsEl;
    titleEl;
    componentDidLoad() {
        this.tabsEl.style.setProperty('--ir-tabs-top', this.titleEl?.getBoundingClientRect()?.height?.toString() + 'px');
    }
    render() {
        return (h("div", { key: 'c92e32d2bc664e68d6bb46c34cdddc6ded0daa03', class: 'bulk-operations-sheet-container' }, h("div", { key: '2bfb2b58b59ccebe0ea10c0757877648dee9d495', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: '216b903b7adeac322f7757f4e15f343207647742', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={t('Lcz_BulkStopOpenSale')}
            label: t('Lcz_BulkOperations', { fallback: 'Bulk Operations' }), displayContext: "sidebar" })), h("ir-tabs", { key: 'fcfd0986c4277f58987b31b42bda29e67f26f8ef', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), this.selectedTab?.id === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
    }
};
IglBulkOperations.style = iglBulkOperationsCss() + sheetCss();

export { IglBulkOperations as igl_bulk_operations };
