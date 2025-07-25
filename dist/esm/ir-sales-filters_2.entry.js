import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-bf32d8ec.js';
import { c as calendar_data } from './calendar-data-a6093df2.js';
import './index-c1c77241.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.collapsed = false;
    }
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.applyFilters.emit(this.filters);
    }
    render() {
        var _a, _b;
        return (h("div", { key: '4131112cb7c23758d624db0935eec930eb8cc350', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'abda97fbd6cac84a0616f21ef6b125c41c487802', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '1e4341402d934477165b08fab587eea73ed15e34', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'f2b8ae2033d5ca2e93c74033e9500ae75e02c7b0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '3fa1ec9a9846745f75cd036ff3562a261d584631', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '84f03b22b3cf9806bb6b5b72b614f4d9dca13c8f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '8136064c4e4297f23eeb5502a48dedb33695192f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c7f210028a19c039fbc22389539867f01b1a5971', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '3a30354828a0b858f00ac94d4931694b4eff049b', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '7a39fad840b5979f9ca09b90a8925311bc735d58', class: "pt-1 filter-group" }, h("label", { key: 'e74be5de053855ffb107327bb6dcf46a50a0751e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'd44f5922a84b8aa17ca48ff7f2b5fde7359a420d', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '0276bcf6129fcb445615509e7e103852f4d64534', class: "pt-1 filter-group" }, h("label", { key: '99f5427af1964cdea5775db0c87f5a0bd58f2c3e', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '321d5b39db8642c329272c20e0dd5f6de339b103', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '19664858a3f9eaf791c33aa3b04d3ac9bf44aecd', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, select_id: "period", LabelAvailable: false,
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '302f504aa2c67fe442f93833736169070bf3263f', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'bda36fdb7db5678eacc1e8ef193b8e331d3a8202', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = '';
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'b8e4096003a79f92685eb0de055e122a3ef3fe35', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'ce6d40b76e61d45fbdd8a1cda048d97872fd5350', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'd7be966647f2bd6095ff843284a2971602a341cc', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '8dff9689389195072c8e480727c90e5faad136f9', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'dcc4c9ecb57c89dcf1149b5326f47ca8bf67ba11', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '6c78ce7bfbce176a03ac03018983e6c876715397', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table-container.sc-ir-sales-table{overflow-y:auto;max-height:70vh;max-height:70dvh}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: 'b24f2795581346d663da58ed6f9c58b95d082cba', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '5ac971466247bc117e816645897fd91d15d5a053', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2a6e0df473f7bff07c78b75ba9037350e2cd52de', class: "table-header" }, h("tr", { key: '40f183253d8de75b6555f3b2ea952e20f3286f2e' }, h("th", { key: '714516977c66d941b6bdf9d7475c23f92ff2aed1', class: "text-left" }, "Country"), h("th", { key: 'a5cb726ec25deaba41f1a5394a56b58acd4d1b86', class: "text-center" }, "Room nights"), h("th", { key: '59795b60f98b8bc86641b47e40e3e892ac5e5459', class: "text-right" }, "Revenue"), h("th", { key: '42609402b83e278a04b0e01afeaf4ac465922d91', class: "" }))), h("tbody", { key: 'c9fb2414b1763880a0253b0e37b0ab62b4c507e6' }, this.records.length === 0 && (h("tr", { key: '9c4a1042046f4c6422c6e4be4c2a697f61a70184' }, h("td", { key: '3f0229d525287cded810d9f217d11b86b1318365', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ec1f5fb365025cb58126acc6a3b6354caf865e7e' }, h("tr", { key: '7ca4c650c4445aa446b7429edf9f96da9145b28c', style: { fontSize: '12px' } }, h("td", { key: '847c14fe0fe74a174f40afafff53aa6d5f366fec', colSpan: 3 }), h("td", { key: 'bcdeba9875e7569185a1803e02d872fe5b03fca8', style: { width: '250px' } }, h("div", { key: 'a9a95a90bb8aa13147131a5ec021eaf59a051c12', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'd6b3149fafd8c9b702e366ab11ba8e639a29c1bd', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'f8a05b2f7e73cd8680871e5e9a8d791f1906e1fb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '31155bac8d0812151e5bca73805ad61b2ffc6dc5', class: "legend bg-primary" }), h("p", { key: '5b223d7ef8a54a476992ec1fa1d0713a6f5a3f55', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '018e8bd73fb92a27a6f82f0ea80e0a7e5da5f379', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b48076e7b1be753a670951a23d7bb4c484325525', class: "legend secondary" }), h("p", { key: 'f9997e8bea6cdce29231a4b90a3571a54281e629', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map