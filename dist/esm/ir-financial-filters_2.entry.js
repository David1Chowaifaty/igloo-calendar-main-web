import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-462ba979.js';
import './index-c4cf83be.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.baseFilters = {
            date: hooks().format('YYYY-MM-DD'),
            sourceCode: '001',
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '251e1e79bb0c8a9d4ea5f2b971ef96735453ffcb', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '8e89058342dc78d4b3db9207c1df54f21da81117', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '0d1a86b0a9edd7ec458c7e742bc5453a8da4a472', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0064817f1a4a3d50c3188060972d4de2d8b2659a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '01bd9b0ea9755f38c6b1e5f7af56b30994f9add1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f0bfa2ea65ec34170a420e480fab6a0488298f02', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '6a37f771c2282c185a50da0d538398c25540565b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '6f68e9861e64a40fb91954f0649b767d654c401e', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '44e65563f399935ed82874dd5c938520727cd997', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'cb397d14563c7ac7c1f4adb9aa254dac6b59ce9b', class: "pt-1 filter-group" }, h("label", { key: '73d83112fa13fec60c8a541a7404a6b593924a43', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '78112ac6b061eadfaab327ad1c5a4c06275252dd', class: "w-100 d-flex" }, h("style", { key: '7a228d7fd8397a35d4ef570d7327974f9b00888b' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '08222fe29cb058fe82c6db4f7f27d5b70e4cbb3d', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'f2fb3983fad77a98d61d929d238a5543b4331bba', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'd8c9de000b697cd69e2723fb1fa26a10394d2c85', class: " filter-group" }, h("label", { key: 'c3f1b60c86a27c10d7ba542f8cd51dcea08f0a89', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'bc7fcd5520b32859d8f30578a316c32915c17f70', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'b1f72664a9bf212f45743a07ccd167643e2c4daf', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '5eb92709868766f0a434ea900c5392bfa394a190', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '544f9cf00b3ea7b93adda31f79b9bad04a87d472', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    render() {
        return (h("div", { key: 'd714b5ee7768da9650ce2a5beb9098fd1e7a4b58', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '87514e9c65cc068d0705389d3e40d9b72584edf9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3cfc530746c651ef301b4119fb5cdc94bcac4689', class: "table-header" }, h("tr", { key: '4554370dfb838ebe92cebd061061f09f8ec5a4af' }, h("th", { key: '061964a545060c591633d67f1a206947a39024b5', class: "text-center" }, "Date"), h("th", { key: '7de25d5419c65939fb754f5acf251db8533b3ae6', class: "text-center" }, "Booking"), h("th", { key: '9d6c200c985e4de3d4e9f48c6ac87f1cb0ee5c0c', class: "text-center" }, "By direct"), h("th", { key: '0069f7ba1c5962672b448a94349ab82022dbb271', class: "text-right" }, "Amount"), h("th", { key: '5b1070999f684ae3b5009f76152303c043f3bb4e', class: "text-center" }))), h("tbody", { key: 'ee46bdd5eca4d9ba6b27198d5cd0c8bca133521f' }, h("tr", { key: '7fccf79c097e6d8d8518333f8b0888a96fcb5d87', class: "ir-table-row" }, h("td", { key: '4f6e69964e280e98d2854e338696b684f76dabec', class: "text-center" }, "1"), h("td", { key: '6a37e4886170c29f2350e3a5ee11fbd58173613f', class: "text-center" }, h("ir-button", { key: '05519a1092c198d68c3a61667315017f92b686fd', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '331f21aaeec78e313f226395b11d325bd4bbc2a1', class: "text-center" }, "1"), h("td", { key: 'ed7cfef583038f0e24c54910dfdebbdc74258d72', class: "text-right" }, "1"), h("td", { key: '63375e18e9a17710bab8a8b823defdb28c2e41e6' }, h("ir-button", { key: 'ca85eede61a2dea1c567689a67c18ecd3e9789af', size: "sm", text: "Pay", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: hooks().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendar_data.currency,
                            designation: '',
                            reference: '',
                        },
                        bookingNumber: 31203720277,
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };

//# sourceMappingURL=ir-financial-filters_2.entry.js.map