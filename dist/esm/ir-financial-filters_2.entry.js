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
        return (h("div", { key: '990696c860e6977f7942ed24eb5766762d819666', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '26830f1376afcdef77c98c52d5406fb3cd5c80ed', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '36727a06d1c5f304c54c0c1fa3fa340fbcc24aea', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'e99e0852b201f12ba69a24e2787e5718380d863e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd1fcaf62826bd23706cdc2e627cd805440e59306', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5e76ac2055fce0af03fc1993386db4fbf865909d', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: 'e8d8733e0f697d274a0c81634d0385be00d868bb', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '67460413cec9c3270edffcbe0488443a081a6158', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '6851b4fef5a351cddfcca7d47ce93f3bf599d8e2', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'abcce66cc4801a755f1927585345aff99a543134', class: "pt-1 filter-group" }, h("label", { key: '55a73e8cbfa97a775018afada458db41b9ef4646', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'f1d35b1121698a317ba824661ee3be5a4c82aceb', class: "w-100 d-flex" }, h("style", { key: '1c72714892a263745380488d9ea5a43631e672ab' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'e8026c2eb2b0d0d32fbcbaae04ffdfa9312aabf0', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '24777ccc947b2145f87bf4e9352c236aaff53bce', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '5d78b7260660875566d0706c083c6ba968439717', class: " filter-group" }, h("label", { key: 'd0b152873a9ddfd7e4c721760f06089baacb37b6', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'f2fc8e6c308a1fd9a1d658127de652cb3950dae7', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '2fd741d28f373b411ad38c857e5534cb4dd2105c', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '5e7f8a348377243c57e3ddf8b216b96bf1da044d', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7405da19a5eb21c348e387868c7d388eff1a7b31', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '7279954327f25704f43335b60ddc5352aad6f0d4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c70dcda091ed81efe64d0669c8f460129d2a9b3b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '27cf7827495e93ec2c7943dc2e3dc6018e490508', class: "table-header" }, h("tr", { key: '047ebbe627c8e68358a7aacafb583e9df7f5814f' }, h("th", { key: '1eeb63031f06db8bf8d5e0a23573ed071cf7eb05', class: "text-center" }, "Date"), h("th", { key: '6750db269906518f18d37555850a0739c03c9d1e', class: "text-center" }, "Booking"), h("th", { key: '12799bcff598eb4cac0150f2505db35e6995a8e9', class: "text-center" }, "By direct"), h("th", { key: '4fd1dd0bd0a8d0c482f7d9783f01ee6669b6e9df', class: "text-right" }, "Amount"), h("th", { key: 'd8f7210dd4d92b0339ec489c3991c2f39c2a039f', class: "text-center" }))), h("tbody", { key: 'ed3417a2550fa756442ad5862d68e633098f3570' }, h("tr", { key: 'f116fbb64253fbd133f741226ca40383613a2ced', class: "ir-table-row" }, h("td", { key: '28a25466372e52f911069df7464d6f5ba5335cc8', class: "text-center" }, "1"), h("td", { key: '784a5a541384ead7c996f054dde65517f6315a7f', class: "text-center" }, h("ir-button", { key: 'a92819256bfd771974cab364ae856fed9a11e63c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b8b3facd676f13f755efe1db602ec40fa2c3632c', class: "text-center" }, "1"), h("td", { key: '08bb16b5e4a25e755eea9fcac355e0d621d68dee', class: "text-right" }, "1"), h("td", { key: '7b9e43f61e10fa288246432db4bc0a469c323297' }, h("ir-button", { key: '92d84ff8360748f2b15a9c0551b4e1545dafb570', size: "sm", text: "Pay", onClickHandler: () => {
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