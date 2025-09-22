import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
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
        return (h("div", { key: '75330a2a47ffdd7d371c89f93b53de6a52a39465', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ce87e19eaea9ff2050f49345fc866422c3b28f94', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '94ea7feac794100f0b8e95c346381e7136d22116', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0b8d0f346e59df85885ff95e7d29dd048e605718', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '5e80384aa467595320f1e10e2f6585d0a921eec6', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '4dc49d65b787715dd6637d9f4d972045856d3062', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '66656b0cfa79631c99f9ed65a5a434fd36a0f379', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '2579ad44c2eeca38bc4a0be892cf1de5e7fd9e98', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '680dd2e9011062ae9d91088625af17a29ca0554e', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '75e173b51c5e2e784aad62faac9cd55f1b6391ea', class: "pt-1 filter-group" }, h("label", { key: 'bd4716688fc7e659d2bdef48271a5f79d687fe00', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '0195f0d81cafb122eedeadf206982904b5414f6b', class: "w-100 d-flex" }, h("style", { key: '5e27ed718a8ce5862fa9de71cc126e5c3404cedd' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '020dcd563cedf189919739f6576185ffdb891f93', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '27cb74643cdac5ce601f714810da54a5ba4ade96', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'cddc87e70482a8b09ed8de8cdcb7915c19295e76', class: " filter-group" }, h("label", { key: '0a25d129e0138a1ef551d0eddfefd414e38aff91', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'b772d65c9194766e45494e67f1b44a9e114873bd', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '90703a86bc1c9f4ad7184b8d3d56c6e7008001bf', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '460fe500b29e78d57417d7205d9893b19f31aad7', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c45deb98cf69f5e1f0039b6386b2a8c6a608a067', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '86fc1931ec67a29b3b73049cc7821e695689e2e7', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f2a3c49f0c0334036ebf225bf746aff4c5bad6a8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ed8aab3b14e391f629bc49411031ee6f7921ce84', class: "table-header" }, h("tr", { key: '60df683f0127e101e2a5fc4407c6f7288b22ee58' }, h("th", { key: 'e9de64ead7cefbf25494ca47f74da6df4b726275', class: "text-center" }, "Date"), h("th", { key: '6b1dd3af28f034ec35f51bc68734eb522b99149b', class: "text-center" }, "Booking"), h("th", { key: '7bf4abb7ac30740a7ece8829a5b003b8e2864cf3', class: "text-center" }, "By direct"), h("th", { key: 'f21f9700253d4acb01f40376921c2c3be5463ab0', class: "text-right" }, "Amount"), h("th", { key: 'f1dbac4edcb628a485555e6da5266a6db2b98906', class: "text-center" }))), h("tbody", { key: '40481afd7a0e55064a82c9d1992217d929f60b48' }, h("tr", { key: '8900d30d620efbadf93ef7da0e7e7b5eb959808f', class: "ir-table-row" }, h("td", { key: 'c0e288d16c00cd79044069108cbadf57ca02556b', class: "text-center" }, "1"), h("td", { key: 'd2ae47b96d31da8d13cff3124c938b7f70b961d4', class: "text-center" }, h("ir-button", { key: '5637be213340c6f60184944560f775bc44b8bb1f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '9c97200989090949046d43725380dc234fb6a6c0', class: "text-center" }, "1"), h("td", { key: '426b1d2f97172b65559f7b7bfb480f9953a855fb', class: "text-right" }, "1"), h("td", { key: '1c6d024cc03e652cf093b3f18288f91536ce1086' }, h("ir-button", { key: 'f21bbee3cb6d477e51ed41f7c28522098e7297b7', size: "sm", text: "Pay", onClickHandler: () => {
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