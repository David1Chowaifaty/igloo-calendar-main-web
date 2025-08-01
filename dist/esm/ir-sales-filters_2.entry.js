import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-8efeec43.js';
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
        return (h("div", { key: '02a8193cea97ffc3746845e58a912b2fd87ba6e4', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'f8349846ec0ba81f58f47bd8d4817cde839add4f', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '759fd256fa503ead0ba85ff65509536d3d80d614', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'c14a33c783d20b5c4eb6b2d18d63884b57b91be5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a28b047ab35e34807378c28fd4cfb948f59bd250', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5cf12a18d75a4988ae6db5d39d3d5518c46f29fc', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'd75b0b6d0dbca3ff6fbac1ce26c79b9220538b1b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'eb8944ea42c07ca8f2546fa4614bc518dfe12602', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '519855f102203acc130b76864a84f36e9ec68dca', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'f59fe9f381409218e8e09012d627f94120e3b0f8', class: "pt-1 filter-group" }, h("label", { key: '40223f8573769fe62f20468176a9388e9f7a2ddf', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'd3283eb58af1f9f8b763ae5fe376d228aef527e4', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'ff8577aa076dcae4e90a99d47874181030a8fdf3', class: "pt-1 filter-group" }, h("label", { key: 'eb843de967eacebeb679eb0fe2a2238376d16a51', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '94ad09f9cd440332466d6d4e8817656fe9776273', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '0c2d1b0630e7a9dd1eee7ca6e399d81018989c83', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '9c6900da6cb7033b11f16308e42e7f92f8742719', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '53a49db1944c1e516e65b5719bf6bbc95acce5de', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'f37d5cefb293fd017488c9120b4e8c7d0803b199', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '3ffa84a8efa5a9996e055781957dc364cb95cf45', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '9af5a0601a7a931e3d7c7d9bad2649896857dfdc', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '8a7452bcad9af18e8a1e4146aba8329bcac89f57', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '0c75a029545d8ad7a355c5e5a23b2f32c381bcb2', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '706a7581768cbbdf5516eb4920359980724f8698', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '7a2ea35f762ea011b7839102a0f05d9d6f38e5e6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fcda469b83a301a31345cac2d705812efb4e8e7a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd224276cadafbcec44e37b296ffd1f8bcb57c4ef', class: "table-header" }, h("tr", { key: 'f8957ff0eea9b1d43e01c9ef41a9b325145faa1c' }, h("th", { key: '3dfde9314cff2afff1b16b5d414f16ca796ed282', class: "text-left" }, "Country"), h("th", { key: '7a83ddeb39021ef38d9eea6e670129e122271b75', class: "text-center" }, "Room nights"), h("th", { key: 'c77d84495a44bd34d008f6a675d1e04ca13fd79f', class: "text-center" }, "No of guests"), h("th", { key: 'f9a8a3dcdc5ef22816951c1e422d90415585ff8b', class: "text-right" }, "Revenue"), h("th", { key: '5da2519fffd1cacde9179ae689bf3f813f7650e4', class: "" }))), h("tbody", { key: '3afe397514d7983588c4f5c3573b67aa28ebd958' }, this.records.length === 0 && (h("tr", { key: 'e9526df85c358926c3a3ffb333fb21e22dee2b2c' }, h("td", { key: 'df3d62f05bd6f55f3afdc83a6e593ce64f51a017', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cfbfccb3d022a9e63cacdb5f0540a988dc99832f' }, h("tr", { key: '91890d989c44a160e4ffdc405a08a6ea173c4978', style: { fontSize: '12px' } }, h("td", { key: 'c58a0f5a0e9b048fc3245b241f81dae1393c4d64', colSpan: 4 }), h("td", { key: 'c9f407023507b1b851ae1a0e524187efe677e091', style: { width: '250px' } }, h("div", { key: '1c591e920460b7eae444c280c6bb817b4d7793e5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2921ddb5e1284bcaff08bc8db8d5d582f027472e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a4a5516b79060222326f53df0b9b1ac942c1636f', class: "legend bg-primary" }), h("p", { key: '5f5c70335b65c6f7159f3705a94626d0a915313c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '31fb8ad2520c78b7f60f751eecaf818bd55fb152', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2023ea587dce1f93b93c3a4939ab46b83a3c1c94', class: "legend secondary" }), h("p", { key: 'e066df545d6874c66e11f139ae9f22131947494f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'db9c372ee974c2ae96e2b76f2c9d24784c46c02a', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dd21e165dfd0dced28f67cff51707ea3d93e0b8d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map