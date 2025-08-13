import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';
import { l as locales } from './locales.store-629477c2.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-81ee5d46.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
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
        return (h("div", { key: '8492c4b40d62108e9be0de8471bed9bc86688681', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '4b8d0ac8ed0cdbc38b2f7d41f73895954a70c2ee', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'b62756ca974bd721eac1900625babe6f82bb70aa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0b788f91d5a78fb5ffc6bf12167365b54aababcb', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '15d0daee0fdaa44d7e14ab34cd1aebdb2e0e9b08', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3fb77d08a82155c203c80365e519165136d7ead0', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'c5051bc84f8d78e3d9f7e996fbd44d508b10588e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '8dd5927b264cd3d809a17deda50e9578f90e739e', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '5c052bbea4a70e90a622b5bf3319daf67585b1f0', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '626f230466228499d2e947b43a63e1fa0752d586', class: "pt-1 filter-group" }, h("label", { key: '7ec706181860daf9d79ada16baf612d5e9fbc92a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '1a1fa4351cbe4a0800fcf04c1d2275d23aa152da', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '83987ec4a894db21773fc4a41248dc114738cea2', class: "pt-1 filter-group" }, h("label", { key: '9d7864d42e80d71d87874f500336848476fcd4b5', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'd4946e85cfecbc5ffec86e48a1d67c8c7706d4b6', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '3804226c50b99c4ad6dbda2a961c5401441e72f7', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '0551870091c8fb8c97fe0509c21451d6694dbb96', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'f046bb4d812fb5a234e5364d6aa89236d8662ff8', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '3b2eafcda548adad7fbc13da8a4d437736010da8', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '63d9ee64a507584fe0c15af7213e127632bff814', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'ed471241eb355b9262bfbf2775207c1ea57ee171', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'efd7ed0248afb13f5ea9f2280b75499d6258ae24', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8e33cf1491ddbd391c0bc615715021bda2285d5d', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '90c25b76c97a43a2fb0389830ff30100f52c66c4', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '295cc3ff9a7a07627013f4f85b7b4a27f25f0dc4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4554c3d8839e96ce21e3f6a2fbb31fa1b1da2d83', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '10d7f8cea0ba3cb2b225df95d79ed868e33d11aa', class: "table-header" }, h("tr", { key: 'b3c87b45b2bb836b331681ac5408d9cecf9da4a6' }, h("th", { key: 'bd4767529bbba24643133db3b8787e40870a54f7', class: "text-left" }, "Country"), h("th", { key: 'f48f724147f806da3eba8881e285b370d618012c', class: "text-center" }, "Room nights"), h("th", { key: '1a8f015ace3e763d25210520a99cf38691a5bc8b', class: "text-center" }, "No of guests"), h("th", { key: 'a3ebd378ca5a46acb952de813b266d39d7210c55', class: "text-right" }, "Revenue"), h("th", { key: '24231d6b227b3949e47b9f1191e19f63e277e16e', class: "" }))), h("tbody", { key: '6781600fd428faeba4cf2f939e6da88428a4217b' }, this.records.length === 0 && (h("tr", { key: 'd62075b497165b7244173dbe0837965891f3a7b1' }, h("td", { key: '352b5b2d66c0437e412f5dda6f4fb3a60afe9853', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a487c1b7f19c53012aac54692df6f66f3d2e54e' }, h("tr", { key: '829f6e544d3cc29897c7b821f078297b3de93f49', style: { fontSize: '12px' } }, h("td", { key: '4b38a9decd98ea3ed8da21b56c682563914d64e0', colSpan: 4 }), h("td", { key: '757c2b78166d62b077ebb356eefc35557c7730bc', style: { width: '250px' } }, h("div", { key: '0e48c50c8d8f4ad48702bbee0251bb3c1ab046e7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bfbbf3353565c5a1faad7c1c54bc9104fb5f8741', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f64c84132c07be8c448244083434bdd83c7e87ac', class: "legend bg-primary" }), h("p", { key: '1bfe16cfa7f2de1643d54a90eb6273944961ff92', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a1e1f13be1a63e029f726a1ffd141055d75475d8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0f2ab2d20401bebbee2cc2c61239e19fc4a43d5f', class: "legend secondary" }), h("p", { key: '56b0d90249cd1f4ac4421fe58a0f15b95112f3fc', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '7b548184ffdd454913a3a2a0d5ca078390d46ef8', class: 'd-flex mx-auto' }, h("ir-button", { key: '45a6b5c97a2395cf0e932902ea24b93351c63a0d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map