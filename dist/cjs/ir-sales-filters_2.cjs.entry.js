'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const moment = require('./moment-1780b03a.js');
require('./index-467172e1.js');

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
        this.filters = {
            from_date: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
            to_date: moment.hooks().format('YYYY-MM-DD'),
            rooms_status: { code: '' },
            show_previous_year: false,
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        console.log(this.baseFilters);
    }
    // private updateFilter(params: Partial<ModifiedSalesFilters>) {
    //   this.filters = { ...this.filters, ...params };
    // }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (index.h("div", { key: 'd3921d76027b686dcb16456667e359d4c7d94dee', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '8d22eeddcf058a23752e6eb69480cd90dff18e54', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '260230d28afdbd9fbc0ad0be6fadc64869b62af5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'c986ab571a4dd786e6ba66710aa2c818e649170c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '8ddcc077959bf2175459f3b4032180b37e581d5f', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'ed2b869601f8ba651198ccc615f5e920c6d71486', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '8826d0aa579a923ce95578d9d598d75c64d1f22e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'cbddfd67a90fc675a6dba38f9b88ecf75768c3b4', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: '9d8269058d0f0dad46a0089882f1c5e0accb219f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'e1436c6c2858d2496aab5b27f94f8f7e21900492', class: "pt-1 filter-group" }, index.h("label", { key: 'fee66a3a19012d0e6808b1dd4a2d9d2e1712b4bf', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), index.h("ir-select", { key: '49594faec1d8debb0191dcbdae8d5654965b7d20', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '396817e863a2246023f9bb408de5ac85817cdb7e', class: "pt-1 filter-group" }, index.h("label", { key: 'a0212b28b371afed199a547b4bd282a3d9e1212f', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), index.h("div", { key: '82389274388e3848d053491603666237be0dad78', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: 'e006d6995334eceac8adad388a85485ed2f6e9c3', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '68eddb181108895d1d2bcd458992deafcec49b1d', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '7cad578aa9e32446d088a95d0105f361cef5c068', maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: 'e2ef0953f79b301ba39bed0c09ce1fbf7388eddd', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '321055016b3a7edb19c06833569b4e907b863c09', htmlFor: "compare-prev-year" }, "Compare with previous year"), index.h("ir-checkbox", { key: 'cec232b8aa72b36973ad3110d12657134f575836', checkboxId: "compare-prev-year" })), index.h("div", { key: '59f98cb937f8e3e3ba0394db65d29886905d3013', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'd84cdbc9d1a80fed5376301f42c1461468ecbac6', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '74e9cf1b5ad4fec27e9d2c5c4b21b286d4dc4c53', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrSalesFilters.style = IrSalesFiltersStyle0;

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table:last-child{width:100%}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const sampleSalesData = [
    {
        id: '1',
        country: 'United States',
        nights: 120,
        percentage: 65.5,
        last_year_percentage: 60.2,
    },
    {
        id: '2',
        country: 'United Kingdom',
        nights: 90,
        percentage: 55.3,
        last_year_percentage: 50.1,
    },
    {
        id: '3',
        country: 'Germany',
        nights: 75,
        percentage: 48.7,
        last_year_percentage: 45.0,
    },
    {
        id: '4',
        country: 'France',
        nights: 60,
        percentage: 42.9,
        last_year_percentage: 39.5,
    },
    {
        id: '5',
        country: 'Australia',
        nights: 30,
        percentage: 21.0,
        last_year_percentage: 19.0,
    },
];
const IrSalesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.records = sampleSalesData;
    }
    render() {
        return (index.h("div", { key: '0ab505ea636b2f3506dbc69002b62b87a73bee3a', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: '1ceac9a3c08e3d31fe509688180a3146c902ff46', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'e6f275ae9ce9197017d4eafbf00b6012dc6490dd', class: "table-header" }, index.h("tr", { key: '4da9d0dddb9b40b0328c3a2d7fb3d57a2b43e2d6' }, index.h("th", { key: 'e5cae59e4da2bb8fe4216f868e84a2c708a3a2f5', class: "text-left" }, "Country"), index.h("th", { key: 'f34e17b288b048f70a889930418ecbecc74dc6ab', class: "" }, "Room nights"), index.h("th", { key: '6d2248a04f30b6ffae2589e2190990d60f0560b9', class: "" }))), index.h("tbody", { key: '4da19b88449865befefc97f55039e12e3620488d' }, this.records.length === 0 && (index.h("tr", { key: '8da16657b0f479d8e7b544e95846f0e6ef051153' }, index.h("td", { key: '5e5a25f7a430eb0e363320077bbad3c415c20284', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, record.country), index.h("td", null, record.nights), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: '251b3b405664be3fa379dc965979ed9671aa4fcf' }, index.h("tr", { key: 'c584144a5926c231be22be1eb91513d1e411e5b4', style: { fontSize: '12px' } }, index.h("td", { key: '3c993f60641824f731bd939c03cc8a4a200bc46e', colSpan: 2 }), index.h("td", { key: '26645ecffd6e7da787a09cc966aa2695f7aa40a3', style: { width: '250px' } }, index.h("div", { key: '5dca2ba24f9e00cc5a1eb8597b619ad2b19c0207', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, index.h("div", { key: 'ed8fdb172fb36aaa969f2244eb722b3cbf2c6d6a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '903cb7fa74fd46a3aa2d5203a71daaf27c189c98', class: "legend bg-primary" }), index.h("p", { key: '1c76de2bce5daa5c507ad1dc6703ff809413dd88', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'ae09dde9c62955f0b5ec2d68432ceda1f3b56123', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'a8ffe607453863f5727339756909f9115a42f350', class: "legend secondary" }), index.h("p", { key: '0d7c087369fc33dd6700862caec788707ad50b70', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map