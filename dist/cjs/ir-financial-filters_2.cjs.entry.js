'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const calendarData = require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.baseFilters = {
            date: moment.hooks().format('YYYY-MM-DD'),
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
        return (index.h("div", { key: '20268a911bd7b0be9997c7acdbee4070a6812c93', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '34fd6479a7967be64a256b919819954d1129bbdd', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '1c51533fd3897bdc2a1bf19dc1c2f552bf7d90ca', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'abb922318b238e4d8450abe361f150534b66797f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '4f34dcb5704b15def84ca1c4ef25a488e2865370', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '851cbf44429377e90f0f524c00aa181041b19b6b', class: "m-0 p-0 flex-grow-1" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), index.h("ir-button", { key: 'df9e9d49e50629952fe0b2af3cb8394246b2ae53', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '3d36482b405dabe2cb9b5cc98fb7837193df40ec', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '607c44a2afb2cd090f23a23d287f9f2e2dae3409', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '92fed49f8fca81979cf9851f5f5d2d5c9acb8dc4', class: "pt-1 filter-group" }, index.h("label", { key: 'b88ecf18d35ee35bcd5b4a7cf0d5f78f4baa0507', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: '06af6c0c3eaa6f505c807546946189112b6d1ef3', class: "w-100 d-flex" }, index.h("style", { key: '60c34feecc1c9d60bc81ef5b0f330a202461810b' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: 'b320f1bff40cc088ebfb6263ac3bd8042463248d', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: 'c6a532d18a26fd5e0e6128affbbb4af84e13244c', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '560e5f074c8b711707924f3260b27a092999bfbc', class: " filter-group" }, index.h("label", { key: '8579b0200b889d486678484d4191d788e0608f8a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: 'ee76c79ad2ec31aeffef82eaa17bb699f3199c41', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '4996ab5f8281eca56b097382a66e3a33adec9420', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '5b7c5aad50640802f7cb0cd950565502d323178d', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '96221909fdf59a472be411689223c8c5eda31738', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    render() {
        return (index.h("div", { key: '407afa82ed3122422cc7181cc12875dc49cbd181', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '05c5acbc6e8ddb2b93bd843bcc994966061a1392', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'ccbbb486d171c2366b6fa1051ac7f0170f340b60', class: "table-header" }, index.h("tr", { key: 'c6a7697fdd9e9674ab10700cba565a8d079fbfd8' }, index.h("th", { key: '5289e505419a0b174b55a4dd99eabe6968f331ec', class: "text-center" }, "Date"), index.h("th", { key: '632e7c9f32c4d0ec22841a7c4fed7ef648efaa65', class: "text-center" }, "Booking"), index.h("th", { key: '71de05f829351c517e98c674e4075784f0694ed4', class: "text-center" }, "By direct"), index.h("th", { key: 'f720f2b2b2ca9b7c70ef6666b651a9890c2f99d4', class: "text-right" }, "Amount"), index.h("th", { key: '93a411ab0bda2b3c7533ca4efc192f3343502673', class: "text-center" }))), index.h("tbody", { key: '56d6cf833cfababcbdb26f4e465762b539687dec' }, index.h("tr", { key: '7cb2aedd87e1faf3b1bc421d7429210e81969d16', class: "ir-table-row" }, index.h("td", { key: '0c32b4f3bdcab2529116fa45208e7f52c98d9193', class: "text-center" }, "1"), index.h("td", { key: '049cc09beadf71588d5f906944c93017e9c58c34', class: "text-center" }, index.h("ir-button", { key: '43c29dda56ccabfb40befd0116258a9b7c43aaab', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: 'dc0720ff6b2f8dd58d36dc0b330e91bd121fe20c', class: "text-center" }, "1"), index.h("td", { key: '440088c5076bf7486f437d94ca796ed49218238e', class: "text-right" }, "1"), index.h("td", { key: '5be457308621314feb26c6c5b6f13fc98cc62438' }, index.h("ir-button", { key: 'e6bd5742fe933bbd4dd0787d7bcff52eece81cc0', size: "sm", text: "Pay", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: moment.hooks().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendarData.calendar_data.currency,
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

exports.ir_financial_filters = IrFinancialFilters;
exports.ir_financial_table = IrFinancialTable;

//# sourceMappingURL=ir-financial-filters_2.cjs.entry.js.map