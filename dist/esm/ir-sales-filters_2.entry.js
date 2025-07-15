import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import { i as formatAmount } from './utils-a6ca6bbf.js';
import { c as calendar_data } from './calendar-data-20e9d53b.js';
import './index-c1c77241.js';
import './index-502f9842.js';
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
        return (h("div", { key: '43cce231c6664f746100131aceb509eeff364cab', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'aafbd02408edb95b6e744c18228ab77241384000', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '9ab042dbd38b30707182c9d28db709e8bfec9528', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '65da30386e9fd9eeeb7c5acd7e8263d00122a9a6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7d5add23a9d18fc65261380efb1e85a33594dd3a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3ddde2d5ecd36ea4e3d877ffef91824ffad992e6', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '469ed542e069b4f200c965e109a2f3f063ead896', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'f0070c4acc4f7c320bdad2b14ae158b94c6fde0a', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '52640a5f1ab12f1037dfa3a5a217044541cd4a72', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '38f71d2d053315c8afce13eb28313597dbceb811', class: "pt-1 filter-group" }, h("label", { key: '1dbe53471de4f37531b618c9433b8738c478645c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '7a757e763924f386a09af4fea6390953dba96369', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'a93bd0d01aa24aaa363bf2de8ea6f38101264914', class: "pt-1 filter-group" }, h("label", { key: '3ff13bb3d5964eb7f10d2a908b4988b221b94f04', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '2dc448305ba59df10a616b1982092c1e453a6cb3', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '360fec803bc54d788d60514f5f0599209ff58ce2', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '50c4c358f20d239be73cb605f9c1d4b627d37124', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '28679762ff8bff64924791acd727ba6badc27fc8', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'cbf97a6d16b3b238fa10a6079e49ba5807dcd81b', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '0b8768ad22d2b617acded4de0ce044ab7f7554d3', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '6599c80b0e993aa2f46a7051521d21676f2873e3', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'e255f655717bcd6ebdf94b824fb8a6a49011cddb', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '2a788fe53f8e18190483e83bd84221a9e6e37137', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'be6902bef34e42ca43180cecf6f649dd056ac1ae', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '0a1b9970b3ac6833fe21da6fa479b6c70d5703f4', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'f53fda922508864234655abb9c1e1e2c223e4eb3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd9fc33993c63892cb480564803769c16bdd7831d', class: "table-header" }, h("tr", { key: '030c3df61e24076a1726ac4ea8484cb9d7a90a04' }, h("th", { key: '31a059dae4d1327c3fed38b722d641257f1b386d', class: "text-left" }, "Country"), h("th", { key: 'e418473b7f950638e0fcef147fced86d6f8f5d8f', class: "text-center" }, "Room nights"), h("th", { key: '3d682931cdd49b09760954c66a524ec546bab7a8', class: "text-right" }, "Revenue"), h("th", { key: 'c52916cc4516f2b209bacb5f5c6716ce03e40b8a', class: "" }))), h("tbody", { key: '9bdb5c313bbfe36bdbaa23abcc96911f7960ac19' }, this.records.length === 0 && (h("tr", { key: '70ba72629e2fa8b79e9886cffc08f49d8dc89d89' }, h("td", { key: '8b22721f0ceca918885b4584f27b889e0bfbfb8d', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: 'b7ca6796d7f75b4bc22ff00c83864c8c1f57fa9d' }, h("tr", { key: 'f696aa71fca9be9650cbb5c4c4bb51fee5755fb6', style: { fontSize: '12px' } }, h("td", { key: '933efb63cd31cbaaad7df4564bb660acc6a638c0', colSpan: 3 }), h("td", { key: '28ff5597420cfbd93af274540aa933c8035cca97', style: { width: '250px' } }, h("div", { key: '8b3fb86c14525d385ee917ccdc7c90f40ff1b942', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'ddda439ef7f6142d8b05517e2915ec3bb152d9f5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '70e89753c446d8b148ccdcb6edd86ed0dc3f0a24', class: "legend bg-primary" }), h("p", { key: '453ea354d8bc72efe3c3a1465040b0feaf8bbb94', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c0955722493719a7f659c5ddfefed4685a541fe2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '70c0ce51695552b837963d221f22d14d2a8cdfb5', class: "legend secondary" }), h("p", { key: 'a24a89dc4a46e5f37bae4abfbc52d3a9765fb919', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4d64154171dc2b9283f148b94de742c72eb745e0', class: "d-flex justify-content-center my-2" }, h("ir-button", { key: 'd5ea4bba8b8e834607cbfe4ec90dacb7e736847c', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map