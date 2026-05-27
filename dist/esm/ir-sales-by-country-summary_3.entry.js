import { r as registerInstance, h, c as createEvent } from './index-7e96440e.js';
import { f as formatAmount } from './utils-c81c2ca7.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { l as locales } from './locales.store-cb784e95.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-87419685.js';
import './type-501de9b6.js';
import './index-f100e9d2.js';

const irSalesByCountrySummaryCss = ".sc-ir-sales-by-country-summary-h{display:block}.sales-by-country-summary__container.sc-ir-sales-by-country-summary{display:grid;grid-template-columns:repeat(1, 1fr);gap:0.5rem}@media (min-width: 640px){.sales-by-country-summary__container.sc-ir-sales-by-country-summary{grid-template-columns:repeat(3, 1fr);gap:1rem}}";
const IrSalesByCountrySummaryStyle0 = irSalesByCountrySummaryCss;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    salesReports;
    calculateTotalValues(field, lastYear = false) {
        return this.salesReports?.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    getIcon(val1, val2) {
        if (this.salesReports?.length && this.salesReports[0].last_year) {
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
        return (h("div", { key: 'fe4a86bc0858182fd84bf1ca1623a523033b35fe', class: "sales-by-country-summary__container" }, h("ir-stats-card", { key: 'f9d39e6a23906df13c20a7e4acc2cdb8175b2310', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), h("ir-stats-card", { key: '2a262a53cfdbf94508983d42554da07e67a0d511', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), h("ir-stats-card", { key: '384d882c041265ff94a0c9d2e19ace421f6d2aa3', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = IrSalesByCountrySummaryStyle0;

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
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
        return (h("div", { key: 'a11e6265298f8bdc80fb285fd225c749c03f0156', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '166bfb58b241aa4d15cc4ac6fd0a4faa86374f4c', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '68b843971039d72604a3a39215d0cb30eb5c3a81', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '8a30f40868baa4189585a741e44d1e676d97ab1c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '95caf8dd0908e26cd367c5c5920032a51a4b9d0d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '46b5dcebea3465a74fe169da8b4b53b1f7c2895c', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'f885da64cd2360d3893449aa711eb98eec143829', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '1ce181f9927db0b0e3a8b58f1e43ed2c582ddf5f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '0911517cb4225723c18a47ca31dd73734a0f7eeb', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fbcb905440a7fd07b606942a2d6fde1b2561c3d9', class: "pt-1 filter-group" }, h("label", { key: 'a2b913d88501ce0f85d75c579f6c2b48093c456a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'c94184e60012352ccf0eee0f682eafd46072d59e', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '5e3b369ecc7bced0836dd01548dd2162d9fdeaeb', class: "pt-1 filter-group" }, h("label", { key: '9898e2332532217f5198c1d402227c2649e46742', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'c6ed3c484eb3a3345c5fb04516d7d6a72743f039', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '5613f62a6eda0ef3cf0be8f9c58a6e068d677a32', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '3b784dc94ca78a2ee6513868668833221dbf0514', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '3125fe26e6ce83c902c70d3e1ba58aaece568e5c', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '0d229d363b928a09e8df5cc7dc4191c477134081', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '9d938a0fe1ca3b4836dec6dee50fc285b7c9a743', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'cf54e8a8d282aed65ea3ff717fc1615e5377c2b7', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'c1ce554ebb0e73afd0523884182eedb2ba0c4b90', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f4f74a25b133fe3d08f018a800429583ef2b3a55', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '91a4e43fcfd7c7572cba070a9e46d2d7b19a7c18', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".sc-ir-sales-table-h{--ir-cell-padding:0.1rem 0.8rem}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-table{overflow-x:auto}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: '2645f53f8813fb22529b82d81e016f4ad34b7480', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '574cf113dbee92c1c43c898a6adaf9c53ef826ee', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e120ea835c5e09d3251527200f0bd5503a308eb8', class: "table-header" }, h("tr", { key: '6ab21336dcd24392317413ae11ac891418f01141' }, h("th", { key: '4cd3a5918dd7102e5828ceb1d243ef71ed09887c', class: "text-left" }, "Country"), h("th", { key: '4226c3c8ddd1200292ec33bbde5aac6fabc136ab', class: "text-center" }, "Room nights"), h("th", { key: 'b8c604996d6ac43ff30743863ddc6bd35439f8dd', class: "text-center" }, "No of guests"), h("th", { key: 'c4f2ec4531da5cad8701b060b7c0a02b2f10d5a8', class: "text-right" }, "Revenue"), h("th", { key: '0afa319d29cd48b51d925bdd4911bdfff85ff6f6', class: "" }))), h("tbody", { key: '72f2df35d0afa776d6102b9c718346beab634d0a' }, this.records.length === 0 && (h("tr", { key: '308a769d062dd3f608cee7f2739b440f44fb3a99' }, h("td", { key: 'e6f4e027af5d272afd7139dafb4870a3cb2c05a0', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a0bb84013ef5602d887995bfaae4d2b623d31826' }, h("tr", { key: '9b5325ede0d550a2cd8d6b0eb2bd81de33f72e7a', style: { fontSize: '12px' } }, h("td", { key: 'f615f34cdc3a3d7be1570d08893719632dfe240a', colSpan: 4 }), h("td", { key: '7750aec108921a91d25331d7962381478b4959c0', style: { width: '250px' } }, h("div", { key: '39273bd6fb15738e5bc0585ba97ba5101da99f4d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '45587b8cf023760e5648736dd18f5089a4ca8417', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '95f4d5a915012261e56c3492b4cb5162148b074e', class: "legend bg-primary" }), h("p", { key: '536955c318b18c65fc70e5069a45309c96d51382', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '89bc11af3daaa84f6d655484281ae4852153eff6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e8435e8755a368d906ff1fd68d955c5274cfcdfc', class: "legend secondary" }), h("p", { key: 'a3f564717a0f6ea6e2d3ff2e9db0c073c66f0605', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '52f291ec9046637a1aa6bbb6ede12bed34f7375d', class: 'd-flex mx-auto' }, h("ir-button", { key: '766ff9821961f87838725951af78585ecaa0a141', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesByCountrySummary as ir_sales_by_country_summary, IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-by-country-summary_3.entry.js.map