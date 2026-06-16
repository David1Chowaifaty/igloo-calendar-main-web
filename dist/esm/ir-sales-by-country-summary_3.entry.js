import { r as registerInstance, h, c as createEvent } from './index-7e96440e.js';
import { f as formatAmount } from './utils-3c91939f.js';
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
        return (h("div", { key: 'ac874bcc8ade26e16a78d64a99bc1e05e9560780', class: "sales-by-country-summary__container" }, h("ir-stats-card", { key: 'fe7352a91109aad18b847efb28c023ef56f0be29', cardTitle: "Total Room Nights", icon: this.getIcon(totalRoomNights, lastYearTotalRoomNights), value: totalRoomNights.toString(), subtitle: lastYearTotalRoomNights ? `Last year ${lastYearTotalRoomNights}` : undefined }), h("ir-stats-card", { key: 'e864c814b69285a9cc8cda363658f2e9896a19bd', icon: this.getIcon(totalGuests, lastYearTotalGuests), cardTitle: "Total Guests", value: totalGuests.toString(), subtitle: lastYearTotalGuests ? `Last year ${lastYearTotalGuests}` : undefined }), h("ir-stats-card", { key: '2177fb34527c3239dee680aa7430749061bbe6d5', icon: this.getIcon(totalRevenue, lastYearTotalRevenue), cardTitle: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), subtitle: lastYearTotalRevenue ? `Last year ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (h("div", { key: '8969b9538a306a4215f783ef819d25fe2ac8a7fa', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '1d966d4982873184ea50b5868cb62c51c52a8ea0', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'd4acbd71369094a627b157c983ca71ad9a70351a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4e885f5e9b00781fba337da979b8f525ba74e726', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '49a5ddc24fd5e37bd92666e3be4fbf0a9f5c902a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '8e694422488b44659c6ce0dea6de4e9549865f31', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '1629f10303c3c745512cc054824241ceea956c26', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '1fe61fc1b69a7490d371aa7351b0f26e3bb58746', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '3d1aca6db83e2e23ba6100f2f214ed7b5b9a7a37', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '5c25412582b44e72c294c167adb9fdd471913d05', class: "pt-1 filter-group" }, h("label", { key: '4da29ead07ed6689746ec419653c1df33fe65ed8', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '0456e20dbc5aa84f33adcf1529f90b5db2378fb9', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'a3a7b187dccd82fe57a901b0763b8b8bfa82525e', class: "pt-1 filter-group" }, h("label", { key: '0cf7fcfd99ed151eccca723459f108d34a6c74d5', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'f63f6efb8a27ea33c9ad6ac6110a6832a0e0d1d9', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '21b82551eff77a41743e748f521aa8f1fe91419b', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: 'fa5663f547341b86028d1215275ec2a7c80aba51', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '09af122fb79987138a459c992c704af3fe154a01', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '25a851386cc8c392413e656372905d0d9d75b53f', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '5cc86c242d0d4cdc1a9baa78931d8fcf4456ce99', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '00f9d660d4175f37d8e3fd7b0c05b4681a5c728e', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '070010ed62579d83dcdc4deecacac31b812d11d1', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '1e159bc94aec595a6cd75ffe6b5ec774e0822d9b', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c40f6a51b10482e9e7f3c0d8c5dabb7f5587892b', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-table{overflow-x:auto}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}";
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
        return (h("div", { key: 'cdf26be914dbb0385e807845de7356cc9ac7d1b6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '295ab44b5e5ca26a867389f6a277ae65bdacdefe', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6f0026dd1c99e5442658a8c88b91d24986dcacbc', class: "table-header" }, h("tr", { key: '5b1223f5e0b395c82d763f8efc1ec7555d6aa085' }, h("th", { key: '1c2a741862819d52fd3f956a4f69419b349baa7e', class: "text-left" }, "Country"), h("th", { key: '3296d9f5e59e607eb7992ea4af33cc1fe0c06b06', class: "text-center" }, "Room nights"), h("th", { key: 'c407bbaa6aac1b6706abe8668251fdd8795028f5', class: "text-center" }, "No of guests"), h("th", { key: '95d830eb7a00edbfdb025f1a0ea91bfd730943e8', class: "text-right" }, "Revenue"), h("th", { key: '5fd1b0a02d462435babe417cf6a27d3085d4259d', class: "" }))), h("tbody", { key: '1d2ca35220dd57b234792f4f1487e98b7f244d8e' }, this.records.length === 0 && (h("tr", { key: '056f000245471edefdb2ad510b333b644a09d12d' }, h("td", { key: '0197541b22aaec5baa5d4a1b65c2d770dae0fcb2', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd2f98c1c6dbd80772cdfc6986015f3bf4233ad3d' }, h("tr", { key: '03ea8bb13270bd7f8081bdbc36399369118b224d', style: { fontSize: '12px' } }, h("td", { key: '2617abbe20b7c41b2005abaa1a3a74e6c94fcd6e', colSpan: 4 }), h("td", { key: '7d988d4729c1e5b1ce8572ccb9ca675842a6a116', style: { width: '250px' } }, h("div", { key: '90c841934f2e3161ddc29517c44e38f8611fcdc4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b3a6deea9de942e68c0a635076fe14214591ecab', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fdda7d0508ed253892f2ece065f68884cc79e753', class: "legend bg-primary" }), h("p", { key: '76eb6ae4726108362a6b6f82753dbf92983edb22', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9f66c18eed57dc6a2aefdd9146840d1332095214', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '09276e29bbe22436f6f1c7a01a83c9b78e0e3bb2', class: "legend secondary" }), h("p", { key: '7e9df36594fb79120b53ce3601c04a7a5ab686cf', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '5349b3f515b9be2eb9ddaba91b09d946e116bf44', class: 'd-flex mx-auto' }, h("ir-button", { key: '20eb0fd9ccc6bc978d7d5ca46fd40be50fa25df2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesByCountrySummary as ir_sales_by_country_summary, IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-by-country-summary_3.entry.js.map