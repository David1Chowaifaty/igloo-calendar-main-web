import { r as registerInstance, h, c as createEvent } from './index-60982d00.js';
import { f as formatAmount } from './utils-30ce039e.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { l as locales } from './locales.store-629477c2.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

const irSalesByCountrySummaryCss = ".sc-ir-sales-by-country-summary-h{display:block}.sales-by-country-summary__container.sc-ir-sales-by-country-summary{display:grid;grid-template-columns:repeat(1, 1fr);gap:0.5rem}@media (min-width: 640px){.sales-by-country-summary__container.sc-ir-sales-by-country-summary{grid-template-columns:repeat(3, 1fr);gap:1rem}}";
const IrSalesByCountrySummaryStyle0 = irSalesByCountrySummaryCss;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    calculateTotalValues(field, lastYear = false) {
        var _a;
        return (_a = this.salesReports) === null || _a === void 0 ? void 0 : _a.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    getIcon(val1, val2) {
        var _a;
        if (((_a = this.salesReports) === null || _a === void 0 ? void 0 : _a.length) && this.salesReports[0].last_year) {
            return val1 > val2 ? 'arrow-trend-up' : 'arrow-trend-down';
        }
        return;
    }
    render() {
        const totalRoomNights = this.calculateTotalValues('nights');
        const totalGuests = this.calculateTotalValues('number_of_guests');
        const totalRevenue = this.calculateTotalValues('revenue');
        const lastYearTotalRoomNights = this.calculateTotalValues('nights', true);
        const lastYearTotalGuests = this.calculateTotalValues('number_of_guests', true);
        const lastYearTotalRevenue = this.calculateTotalValues('revenue', true);
        return (h("div", { key: '995e668f09abee9af2e5b6014b8ee5e067e3a456', class: "sales-by-country-summary__container" }, h("ir-stats-card", { key: '9871ca777b092b902ff8049811cc57e29450618c', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), h("ir-stats-card", { key: 'cd0ba54f43fc7eee1aef060d737e44f7bef773fa', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), h("ir-stats-card", { key: '1368445edca23424f7a6989e1057c85415b90f72', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = IrSalesByCountrySummaryStyle0;

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
        return (h("div", { key: 'b7eb3f75b71cdaf8c46975f3b8800670e65c7b27', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '266e51d04446b296cd42ce8551d21147f21c7c0e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '11d409bc45cb8b60871e212aa88f451f86866bd2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'c576160a1ee7661d6aee3e44edeb29196d669f80', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '842b57db4b1f0fbb61112045a257a32ecaeac614', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a4733808cd1ab84028b5f06ac74583f33025ca6b', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '610b5d2aa45934eba3c5f5fe7e6ac9e3410ce148', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '89b3a797887ac98fb2d1aeb18eca343407846312', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '526c693169533afeba36ddf4ac0bd199db0c4e47', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '273a929c76253b4612c0420cbb54c18008d60d3f', class: "pt-1 filter-group" }, h("label", { key: 'dcf2f32e64298d6a2024d79949266bb1f0127365', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'f203ed63863965a13f6b47cff58f3f5918b7a460', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '5b433de85c0c075b64ac02e4b9c993beec0dab4c', class: "pt-1 filter-group" }, h("label", { key: 'a37bf265b5dfdbd178de3ede74b37e62ea42ac9e', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'f9bd4f94a4f5b2390dd72dc2308f48f2bc88caf9', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'da07acd9722ad1d7d8dcc78fee8c974693d457c1', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '3f577030ecbf0b5aeab03f480776642eee683d63', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '243bdd529658d103687a379c2374ca491b315a45', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '35a403671351d79e63e614dae3724372908091f4', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '0cfee23a5ee75e95a3e0428770bb759b8f197c37', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '91491363704b58535541a4cf40f367217b213f84', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'fdf465a152043bb5ffaf00405ee71d5ff9eb151d', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'a0d424bfedb0b7216ddc8f7845e88514e03924b8', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c7547647ada09f5eddcc12025c4e7df2c4c94043', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
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
        return (h("div", { key: '1459fdece6122702f5edf7fb1f6cc2d54dbebcdb', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f929521c68cedfa1a0578e571c79ff1285b14850', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '17c724ccdc546cab0732bed7c4e891751a407582', class: "table-header" }, h("tr", { key: '343d2a8056f1ce7fb95bc9c47480dba0efdecf07' }, h("th", { key: '097f2ffa0cf5b5f57b30ba787b1e5cd5048fb7ae', class: "text-left" }, "Country"), h("th", { key: '1db1da39b2ee435db4cb62700eabd13b489daff1', class: "text-center" }, "Room nights"), h("th", { key: '89bef8a5d68db8c7d145f27ff8a2e8680917e704', class: "text-center" }, "No of guests"), h("th", { key: '2b20438374be886063b05bf33badd6cef6ffbcfa', class: "text-right" }, "Revenue"), h("th", { key: '4dcd889ae804cb0f8e26da8522e2e15bb500e0b4', class: "" }))), h("tbody", { key: 'd780e6e8322b48467067a1bd24af24c8b5ffb359' }, this.records.length === 0 && (h("tr", { key: '991cf86101157c9010548092719e430278443400' }, h("td", { key: '359076a4b28d5b4c8f449ef1c3adfc3c8973fa22', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8d21f7008c4b7018c77cfb831ed2adda847a51ab' }, h("tr", { key: '791aaec67cc05796baec545a3ffd4649881a0d16', style: { fontSize: '12px' } }, h("td", { key: '515ee8678d2f1163125f8e05242eef95f0276a11', colSpan: 4 }), h("td", { key: '91ee63d8a5d060c9df6915b524c8be9a38569994', style: { width: '250px' } }, h("div", { key: '00e3ec7b8f5de44f8f9a155994bebc33266765f1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2ecff6b4afc7ca39c661765350d4557dabf92fd6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9a46d5a215a19691c6bf00143f60d2703945dd82', class: "legend bg-primary" }), h("p", { key: '35eb853c977c9cc289308ec4a807ba68b98fdc7c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cbe1a044ee2cbf5c2503009565b331ade9871394', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '568083bed4c5db675478715bccd8f57b128770e7', class: "legend secondary" }), h("p", { key: '7de4598b2c9af8e9a7ad113adc7fe5920c800a3d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c30c36438524dcef5712a17333d901b069bbf43c', class: 'd-flex mx-auto' }, h("ir-button", { key: '765c71f06211a8c3f621a28fa3fd3fa606c562fa', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesByCountrySummary as ir_sales_by_country_summary, IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-by-country-summary_3.entry.js.map