import { r as registerInstance, h, c as createEvent } from './index-7e96440e.js';
import { f as formatAmount } from './utils-857cf993.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { l as locales } from './locales.store-cb784e95.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-87419685.js';
import './type-e34653d3.js';
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
        return (h("div", { key: '6762eb2713ddeb1d246c2a6ad8a2b198da6ee238', class: "sales-by-country-summary__container" }, h("ir-stats-card", { key: '889c7406f060c20cb41e34dd5313cc345aff98d1', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), h("ir-stats-card", { key: '9bb36b1445e4422c555ba1fb704a21dc43c4bf67', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), h("ir-stats-card", { key: '573aece1ca101becd3872a9a115de707edb3e151', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (h("div", { key: '3a454d8c00a798f9eefc3773d090eef0eda078cb', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'f21ae394ea25ae550cc2a7a5e2804d6ac86f4eef', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4962e56a527008ec085b59143065d8ce39aacc60', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ad92db66df775eda8262882e7857cd77f11cdc0a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '40510e2e012ab4cf3734db6c819fd806d9145b52', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '765882bacfa92e83099274a57273725734c6fe40', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '6af5c408c4c5a2a06c8149727af7935c78c2656d', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '9a450b8147c853eaaa348626cccc5794520e8465', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '03efb5405438605a8b614d3f5b1d5e1ec3193f9f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '7df7c453dfae2d0e955f94b062c65e6b3134b642', class: "pt-1 filter-group" }, h("label", { key: '7a03eefca737f3eeac8ff2e3d78907c7ae6d764b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '239b7f3927f943695ec13eca4b6c9d4f4f5032d3', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '31e22f04e5288141695791a0b2b5c7782666f22d', class: "pt-1 filter-group" }, h("label", { key: '324498a6a4951011aeb42147934a6f20de0102d7', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '021dc539652320a0b3022939880f09d906c46748', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '55ef75a8da7c7334c2f2f44a7199c3795dcd9226', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '0a593cf3029533c0627dd411c6b0dbe4e2352be2', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '4123be0ce6fe83ece6fdae510a06e3731b1da52b', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '06b29198a29081f0e111931931b4e546888cb4d4', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'ecd316c97d531ca05d386be03cd567e7b3474bc5', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'df26f2dfdc72d2ab612c6917545ef8856091b2a0', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '688b89fb7f36a7ed60c0576e86fa1d77c8d2ff9d', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8b17230ecc112393b28078e24ba39362d42209c0', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd97eb642a33042331794c32eae3db73490f6fdbf', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-table{overflow-x:auto}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}";
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
        return (h("div", { key: 'ecaed6fe4716999bd93b78620b9cace684377bce', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9754c6cd14cacf16c0b86627536599b25e440332', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4b37c7ad4bc86202f99ce6032acbcee805aa7bf4', class: "table-header" }, h("tr", { key: '1e74c7f43819b211371b2ef6b389f8c9b31e89d4' }, h("th", { key: '64a87650c1c86147a04399ec74f191707c0b534d', class: "text-left" }, "Country"), h("th", { key: 'fc559ec67afbe87c0d79407c5b6906db46751841', class: "text-center" }, "Room nights"), h("th", { key: '575e124098cf7f79a6784ffb7715da4c24f40100', class: "text-center" }, "No of guests"), h("th", { key: 'a4179a45c7a320b480bb60db72d894ca79aba84c', class: "text-right" }, "Revenue"), h("th", { key: '3f1243314d901c45b6ff06d21fd73e0d4de5fd2d', class: "" }))), h("tbody", { key: 'bed2b800c64be62fda378dede3e3f9e58f57b37c' }, this.records.length === 0 && (h("tr", { key: '40d24aaf977a10d8d48bf39fbcf42c94aa4e7926' }, h("td", { key: 'a1fee5e4bc3bef5a31a41d11d9c5d35faed4d8f4', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7925fbf5c058c45eff554463dd2d2f327fce595f' }, h("tr", { key: 'e8b6df971b85a7e7f0f9ac92ac8318c133912fac', style: { fontSize: '12px' } }, h("td", { key: '0c5fadd27cc03b78f237056f20a1598d25e51df8', colSpan: 4 }), h("td", { key: '126e8259e9e9e4960e34c62934bdf426b92d8ac8', style: { width: '250px' } }, h("div", { key: '336957757ceb08e59cd4f343b03872d5886d8370', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '213271a17dcad2478e0bad6576cfccacd8dd3f54', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '39a5372a0d66e5f490c846a6f8d50d2fc2660ffc', class: "legend bg-primary" }), h("p", { key: 'a8e306c69fa8c620fb5327dac9e8684865425893', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a749df072969f51f387ea90e93ba8b1d3e2223e7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f202da0186e48616a400d21fa9edfa3a08361b7a', class: "legend secondary" }), h("p", { key: 'b62d8ecab1a3d951a4ffef7167e01843d1b8ae9c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '07adc63717712397e383d26c0816915d6c7ffbe7', class: 'd-flex mx-auto' }, h("ir-button", { key: '25dbcbf2bb5ebc6e7ba160ffd8acac93c168524b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesByCountrySummary as ir_sales_by_country_summary, IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-by-country-summary_3.entry.js.map