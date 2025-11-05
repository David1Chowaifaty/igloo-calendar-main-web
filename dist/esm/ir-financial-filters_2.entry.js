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
        return (h("div", { key: '1c0a0ab8fee9b574b593458128177e06c80a1f4a', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'dffb0cf10510acdf45f2a5b4ae99c00fcc050ee8', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '9c6189e04fd88529f5fe39e609dbf89f29bdfb2c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '22b8b66e12ffa686309912d3e59597e43e3ba4dc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '6078049a0181b5ad20ba429759b80ae066609d82', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '287e8a6a39526cd0c412ab82fcd675e7e8d861ba', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '3b0c75a918bd03978e54a804606a30322dd2c0f8', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '6b5f06f227d324327c3b99ae60c23735771a8d47', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '0e38bd232a1e1c97ae286b62eaf87980d7219885', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6bbe08f3dae48fb9c8f99ef4ae9a85f9e1c609cb', class: "pt-1 filter-group" }, h("label", { key: '2fad088f7ccd156048d10166a4f83618ea8e861f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '92e88e7725f510d7c6610fdd88d4e9ac2ba0b743', class: "w-100 d-flex" }, h("style", { key: 'fa2235b3613f3ec38af2cd0178d4bdbd7fd5379d' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '742035afcbff4421a90be127323da0502de31ad1', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'c9da0cff28e565b50ca668ecd531d69bcfde1fa4', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '35051739ec968265f990ff0dab9bb6e4d488d0fd', class: " filter-group" }, h("label", { key: '0ae44e0ad42464d4ac78ae8dc5c382666388a4c1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '4cdbcf2d9bba489e947b36b509eb9da03af4b38f', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '06e5f3a3ff6b8add3b01844ab44bace2bbf54b51', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f4738000a02f1a97a9d534cd33e9a532473cc846', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '345935abdba4166a9b5ffdb8f25772c55a45a7ad', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: 'c96a585731477f8d9d80d8a3ad6f195dc150fc42', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a6a54571ebcc2943b5094b01084862a216f7edc7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2296cfddd60e689323b09b4db3d69fe06c05f484', class: "table-header" }, h("tr", { key: '5f6a012adda62d340eb2f2728705a7c03b54ee4b' }, h("th", { key: '315e921630c11e448d4c888baf6cac27a349e9e0', class: "text-center" }, "Date"), h("th", { key: '48a72b1fe5a20a96dca4dd8565fb8a6ca990e30a', class: "text-center" }, "Booking"), h("th", { key: '76889cb97cac4b9d8be0b9d8c885e39300ad1417', class: "text-center" }, "By direct"), h("th", { key: '40ebe0cbe0e0299c780843e47e2aeaa9e236d01e', class: "text-right" }, "Amount"), h("th", { key: 'cc3bcf396140e83978ffc0eb8ea5f8faa10fe626', class: "text-center" }))), h("tbody", { key: '531f7ec7c3bb03a054340e9557f9180f0e687df2' }, h("tr", { key: '959537259ad10d3105817f4c7ec87f95455edeb4', class: "ir-table-row" }, h("td", { key: 'c8323151c906ed8f285fcadb7eabb603d3332db9', class: "text-center" }, "1"), h("td", { key: '82eb999963c1e261b7eeead51b7d9be7f152c51c', class: "text-center" }, h("ir-button", { key: '6f58afaaef4edaaaca8ed833fa6a93454033deaa', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7a1ea5edfc3016797251b8d73cac6b16402be276', class: "text-center" }, "1"), h("td", { key: '9d27c61c21c90c555ce53d9a1e0e8145a5cbb8d4', class: "text-right" }, "1"), h("td", { key: 'b82b2b13bcfd4990d130cf8ba7a1dadc581d4e9a' }, h("ir-button", { key: 'a3c1488984e895f3dc20e818253a9be8ee399073', size: "sm", text: "Pay", onClickHandler: () => {
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