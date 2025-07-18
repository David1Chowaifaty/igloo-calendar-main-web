'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const utils = require('./utils-12ac7153.js');
const calendarData = require('./calendar-data-b2787812.js');
require('./index-467172e1.js');
require('./index-db8b30d9.js');
require('./axios-6e678d52.js');

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
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
        return (index.h("div", { key: '74bb0a2b515821c831ca34fa1dfd7e53d7e2ff69', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '8500dc506c628b29ebf31846897388b36bb2a4c1', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '7b4f9cff0021ae4b028aeca8f0473f2b347a2a0b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '862582bb1641996afae29b9ef755012debd44313', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'e6ffe7f98a076dda05960e8255525527ded8a491', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '5c9c083489986992657533e960340570fdec6ce6', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'cd4142cb9316313d044e9e46573bae72cda69f6c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'ef62999df0c014b9a7f3edbfd3991b7e4257a010', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: 'f89b0be149f6ea6d777c2b058722a5a9115714cb', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '74c18d5071758f059e1c48fb53a1b827c6a203ec', class: "pt-1 filter-group" }, index.h("label", { key: '70e62cc1e919bc29e9b2ecc90fde5a6174940353', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '082f3a19337657f3138fbc0cb4560f432b389791', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: 'fc2817a3d218a7e4b226bd7e62cae7a22313cd49', class: "pt-1 filter-group" }, index.h("label", { key: 'c968afce61b260dc7dabb462f9918cfee88021a5', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '71242a6c5d292a2f18dee095c84cbd2eaec84591', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '27cc8a0d16ecdcb6b92a9fad5830e3e08ebc0d88', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = utils.hooks();
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
            ] }), index.h("p", { key: '199b425efa5a39d35133acb85930fb1892d34a6f', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'fb61208d2f4f2ceaeda74c51800b7621b8c6d38d', onDateRangeChanged: e => {
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
            }, fromDate: utils.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: utils.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: utils.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '0721bd5fab877577b8fab289cb5758686e73f4eb', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '13bc5c54c2344e3a0688baf23466bce64c47a872', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '6d85a406cd41c773552397cd5c42ad262f082e80', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: 'a487db15965675fcf7bbef111135d4f317ced6d9', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '63d65b979be2d2cede51953a60a10c9e01ba82d6', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'd1a8e3551a6adf6005da100584c6ad6df41df97c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table-container.sc-ir-sales-table{overflow-y:auto;max-height:70vh;max-height:70dvh}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (index.h("div", { key: '0db2864a17902a429f021284298c78859a6eade6', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: 'ab9b7012e18ddda445f15f42a672f398d3bc98e5', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'c1960fa01f332adc8a2a54b889ff9847ee37bb35', class: "table-header" }, index.h("tr", { key: 'fea97f3878fccc5b40b6ed76ea221c4e3944de10' }, index.h("th", { key: '8fb0c3e0e2acebec47ad83e61069cccc9137527a', class: "text-left" }, "Country"), index.h("th", { key: 'fb15bfb1009a09ad3143cd8c89582e85d3ab0962', class: "text-center" }, "Room nights"), index.h("th", { key: '86a448ce88021fa301f7a8272937022559ca1b7b', class: "text-right" }, "Revenue"), index.h("th", { key: '1acb6c7412263fd2164f9fae21521bd7206bf1cf', class: "" }))), index.h("tbody", { key: 'a31af7ab66bd593e669f5533cba42214ce23533b' }, this.records.length === 0 && (index.h("tr", { key: '3940cd800fc5790b9fcd8de89f2185de05cc3a54' }, index.h("td", { key: 'da1e9bd810ae9d796d2e240b50d474d57473c16a', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: '9bbb69104340c8f1ce928ab9fa6ab8f3412cd5a0' }, index.h("tr", { key: 'e463f952ac5fec29a23b6f2407a14d203d637f02', style: { fontSize: '12px' } }, index.h("td", { key: 'bbf0c61f731c2ed4a491cc56f655c1e79cc00fa1', colSpan: 3 }), index.h("td", { key: '86eeac90d5e2d9bef723311bf1b3fe4bdac39674', style: { width: '250px' } }, index.h("div", { key: 'e30acfd4f3f6dd97e5ef79edb6799e94793cb0b3', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && index.h("ir-button", { key: 'e45e8dddcab2ad93487dbf605f5b980a16b14982', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), index.h("div", { key: 'ea7ddf69aed3979f16e8575f15e4b1896ee8b5d5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '2554d8191cbfac8d8a9d3ba55dffe9ce8895c743', class: "legend bg-primary" }), index.h("p", { key: '4026d5be0bcf343c9fdf08ad2da617711a2274e4', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '457a3c93d006d382d716740a409cf9cf0239471d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'f7acdc649a89e04a83ec4ca99e08fb1d783cbdd6', class: "legend secondary" }), index.h("p", { key: '6e12dd0dcac1baf6985ce5492e29fc05d46e9089', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map