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
        return (index.h("div", { key: 'ba17ca17e7bb1e5566679fc6d8db50a697bf46ce', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '9c5d5af0658129652e922056b6ae7d8e9100b1ff', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '44b16118e2f29c741aaf46a417c3fa2b54020d70', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'e8cd7b2488baf60027d8d55afb0500a977a942aa', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '1a0ff8013e685fea2772bbc43c5dc49cb321f0d6', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'a54e0a203060517067a0819348616c8a6e7ea02f', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '577321388fa46ad9b0184d1280605f8c110d5520', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '6a667c90fdbe0ac251dfa3b87b61de2a816201d4', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: 'bcf300b8acaa8882e5beea6a15c1c70d08a0bd21', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '8a10373de7aaeaab157c65d0e6a3dc0b9c012aef', class: "pt-1 filter-group" }, index.h("label", { key: 'bbfde8523a5c72eda214c79ef3697c789637c818', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), index.h("ir-select", { key: '8285bba837e1db96aedc40f28af63d3dd9be1303', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '80cdf72e6d409915193e3d15ac17e6dcbd054632', class: "pt-1 filter-group" }, index.h("label", { key: '51385b64408c9310c3aa05bc0fe55063e2c49aa0', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), index.h("div", { key: '1e073e327f715ca8198514aa239fc12a4ea8faac', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '05cb28678078d058943d28f6a018f92cdffa0e71', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '97b931ef759b6e3ca11e95fe8ce8c407637785f8', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '1c6a586d18d35b7bf4ec4314e80f56c473a48010', maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '8e3fa9039999fbd99b8ff7fd5145be57d068a3b0', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'dde60b544635d66b1dc52232942b3f29b5bbbfe1', htmlFor: "compare-prev-year" }, "Compare with previous year"), index.h("ir-checkbox", { key: '62e31ed9e698f2737fea07d9c09cf824715585e1', checkboxId: "compare-prev-year" })), index.h("div", { key: '7074ca0f01312df666e41175ea593bb496e60352', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'f37167e93a5c42475bf3e048570f06ab71a51dc5', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '23e9111eaf9b361797f0c557e31cd102514903b7', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '5b3a50e56a8b5ec3e600e8f7d574749cd0b5a3c4', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: 'e09abc009fbb537780765a484ded17bbf4253b35', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '595a2de7571a97cab2ddd1414cf1c6a995ba35a4', class: "table-header" }, index.h("tr", { key: 'ffb244aa125ed404b3c8d72378e32e87c7494857' }, index.h("th", { key: '6374eb672e40d6c15778ebc517e653a373ea9aa2', class: "text-left" }, "Country"), index.h("th", { key: 'dc39245265f452fb1b9efa79fdc87bf710b9cd40', class: "" }, "Room nights"), index.h("th", { key: '9a6ed4f58f78c0f0d36c45af6d9d67d44ef0494a', class: "" }))), index.h("tbody", { key: '34202f5ec6b9bf0b7dd827e37c434f4fb6950f07' }, this.records.length === 0 && (index.h("tr", { key: '91fc54453555fda9ec8ed1b2176cdb062a2a8461' }, index.h("td", { key: '64f8709bc99d834ee332eb75ca2c0878964263f9', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, record.country), index.h("td", null, record.nights), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: '07ec7d387b5eaf518c73cd2854ce86ba476dd8de' }, index.h("tr", { key: '1ac2c0ebbe47021d2ab97d7aa1209418322c76d0', style: { fontSize: '12px' } }, index.h("td", { key: 'ca9b7ca6d7f21df9449daa0538c2de0d7f3f7962', colSpan: 2 }), index.h("td", { key: '87c216dfbd0221f35f40a9c98b83c28f19e75b5c', style: { width: '250px' } }, index.h("div", { key: '835802f5f07edc100376345fd84d76b8aee647ce', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, index.h("div", { key: 'ed2f99b96ae79ba1fe2a900acbbfad1b283a9589', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '0b9c733e42d59841a966b2e28fa94811ab06fe89', class: "legend bg-primary" }), index.h("p", { key: '5ca1ac9ff2da445e461d6d636f8d13ceed1fc121', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'c3ee3ea1528143c1b6794aaaaa8c02dbf155f180', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '42fb7302df95a9440202c21452607c61fe164c2d', class: "legend secondary" }), index.h("p", { key: '0aa55700eacc8dd49fbc6cf2afb90766e6d0709d', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map