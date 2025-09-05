'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const locales_store = require('./locales.store-a1ac5174.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-bf9b1b25.js');
const calendarData = require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');
require('./index-63734c32.js');
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
        return (index.h("div", { key: '38ffef0d092de581fd4710bb4a256c5c303487c9', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '26d602a2c8de5beeb7e9948611bc972cae7625ef', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'b23d01442a98ec374e6038410d5ec0c2ff5b44a1', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'dd0b3ddf67505295f8852c166dd431f597b12aea', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'cd47eb705bb7d2b81c204f964620af16c2a5a0f2', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'affa65359f0acdfee9de8332f56873af8e36e721', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'ae599b6ddae78c4b839e67862d0bc60c037e84d2', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '577a1944532c7f734820e7eefbeb3ae1b709761f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '7ed628081db26ef07a6f32e9f0df778e54b1cd12', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'b53ceb90786349d530dd00778aeababd32223400', class: "pt-1 filter-group" }, index.h("label", { key: 'a659af86cd6d5a5253e733f4667979b1a47957cd', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: 'f4a38989a93d92104cbe32e9a6101864db3c3e3e', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '3bfbf243a7d58e714585fc11c790d882110d0851', class: "pt-1 filter-group" }, index.h("label", { key: 'c362fac60abafab533b7a328919f4d68512d7fbc', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'c05e1c23bdeb0096532add06c419d59846f46393', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '52cf5644f1c4170af389df26653a7293af325048', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment.hooks();
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
            ] }), index.h("p", { key: '28c085fd3ebf8d7e64cc35a48a131e553ab5a077', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '548b1a1b0f7e2b4d1da152bfdc613aae5ef78b59', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '050b7820713c75875ebba6167994ca273810a7a3', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'a4dc43281b21bc1f43c4ecd0aa3d384b27906763', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '24b0f70c09469f3e2c0c4ff1197f9cfaa3c92bb0', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '6c24fad704d3cc31b662350f3d07aea171ff8ca3', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '0b41f8fe0b74a7823a562befff767a755e169817', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'dd0a96c3c397899da4e08211f974bc7f312d09f4', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
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
        return (index.h("div", { key: 'f729aa01f6dd165825e2bcc040188fb14a769c36', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '569c08526a7f0e28e91dc4be9aa7dd6122ea37ce', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'c9250223e3ae8a310539e412630c0465b6ca0931', class: "table-header" }, index.h("tr", { key: '3f4c83a89b03e0cc230f1a4eb6f982ae97f5255b' }, index.h("th", { key: '25374d17824eb33ca6b96a0fd906b8cb29de434c', class: "text-left" }, "Country"), index.h("th", { key: '9e19cae868316c509e50da483bd7a4cf53cee88b', class: "text-center" }, "Room nights"), index.h("th", { key: '4386c73dba389d7d201aad3c77738cc2d5b97def', class: "text-center" }, "No of guests"), index.h("th", { key: '84e390295a842aacbd405b2058084880861f4d7d', class: "text-right" }, "Revenue"), index.h("th", { key: '3074ab2a469fd6fff5b97389a9ff0fa1ccba2847', class: "" }))), index.h("tbody", { key: 'fccd72ff390daf306738ce5cdb933940fbe2c93d' }, this.records.length === 0 && (index.h("tr", { key: 'bb151d0484be20b9f3f4e6e20a43ef8c5dd7d67e' }, index.h("td", { key: '52cc38e726d175a8a95a3a7ffa55df29135ea0f5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), index.h("td", { class: "text-right" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue))))), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: 'a00706ddcd165058a39bee685dd25fdbbb93199c' }, index.h("tr", { key: '59d1a7977a4a4c5434e88c74beb9f8aa0c5b2620', style: { fontSize: '12px' } }, index.h("td", { key: '8a211db6eda955437a8c54d8c83625f4310ff35f', colSpan: 4 }), index.h("td", { key: '34e3f15629be0238e8aa4bcb6df2349b9931f17d', style: { width: '250px' } }, index.h("div", { key: 'ea9a99007a51630fb6ca0aad7afcaf1c0f5e807d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '99490b5aa6bcd241acb72e86be38e277e087a68d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '8beba225f9037374a7fc8ae73570981d54f6e50b', class: "legend bg-primary" }), index.h("p", { key: 'bd6942c1e87e64034513582d4c3f6c3259456382', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'c9f8102d488f95b0436f02150f715eb700a0cecc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '0d8bfef3e36e3d198a69e6e8de4f20f7d60a748f', class: "legend secondary" }), index.h("p", { key: '15a15d0ed22632ec5691bf449450e40524125c68', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { key: '4fe09267435245f6adfb9631d3e13ab3d9b32cf3', class: 'd-flex mx-auto' }, index.h("ir-button", { key: 'c9713783c0e78a24350bff2a680cb740a0d2a3f2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map