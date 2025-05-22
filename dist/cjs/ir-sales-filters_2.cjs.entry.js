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
        return (index.h("div", { key: '74c7fe0545634089dbb4c9bffc3e31e36e29053c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '6c93cd61dc7ba7690f3c45cb991c6c19305835ef', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'b0b6e4466aa568ba737575f7b956ecdbbf6ff2e7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '7a58e7e7b86ec741ef18fdf8d72de07e4c27a8f0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'f9f8a1a9e57a82ce299796470c101a4393720a00', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'ca3c3eb71b6d0387c1595026b55fac80a76f9d4e', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '34523b054d6b2054cd1ae531e10fe805cb84cd6b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '4e882097873c54956c2f436b7e78ccb2aff602bf', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("div", { key: 'b05c9fbbf83dbaea75297781f94630061c47a83a', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'cda4e424fc17f2c141b6d2c868518fb470f4adc1', class: "pt-1 filter-group" }, index.h("label", { key: 'bff64d0de516d404acff601826028b809002dc6b', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), index.h("ir-select", { key: 'ad50dae5e65a07baa00fa470a8ecdda43ef9d22d', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), index.h("fieldset", { key: '1c09037b7adbde1c911cfe2723227ef8288b3313', class: "pt-1 filter-group" }, index.h("label", { key: '52d0037d723f7c7463c5d5789957a719480ebda3', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), index.h("div", { key: 'f62e30d3cb57319797ebd27923803571757116b2', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '0cbc0a0d1989b109bccbd75e98baf985c38d7aa4', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '330c6f8916c51344db00798190f9e0964af32b28', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'e111aedf59c1a1fa1f6b5cadd28f0a0b362b22c1', withOverlay: false }))), index.h("div", { key: 'ba0c67b48aec9c83e8c74ca62b46e0eb5a3aeaf2', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'c7d636f2795bb441d2077760e9bdab0e3f85c054', htmlFor: "compare-prev-year" }, "Compare with previous year"), index.h("ir-checkbox", { key: 'f643f2797829b896d52dc4b7143533b1d9c79727', checkboxId: "compare-prev-year" })), index.h("div", { key: 'ed26afadd6c69df32b9740d42f54aeb559c213d9', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '3ff21c0606eeecdb38e7fe1402a1eaae2f61a444', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '9a6b7e8f11d3b7d52783101b50a45ac2dee3eb93', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '1d6c5ee57fff0efcdbbcbee84c6f3d4a9213ce7c', class: "table-container h-100 p-1 m-0 table-responsive" }, index.h("table", { key: '4fbca8ce67e80200ba3698f12d3766a07e765115', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '72175fc2e753f099d0c3ec23d9844466e1c7c708', class: "table-header" }, index.h("tr", { key: '38a7870beae6984e33270f3319a2b54a6ec864ff' }, index.h("th", { key: '276a2930af87caf8fe4c2a578f3d42d9f20cc37e', class: "text-left" }, "Country"), index.h("th", { key: 'd31f4444ad45c3993f9b5f624752acda783b8560', class: "" }, "Room nights"), index.h("th", { key: 'f9cc8a77d4c2c8f30e3824e2f7921013b95571c8', class: "" }))), index.h("tbody", { key: '34965a68deb120173ed726c67ee8e96af3a2d7da' }, this.records.length === 0 && (index.h("tr", { key: 'd5ce079a12a8bef6f8c600fc9c760c9c0ea508ba' }, index.h("td", { key: '881af8cb3d94b8b7a1361a755e1938f22b211d16', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "text-left" }, record.country), index.h("td", null, record.nights), index.h("td", null, index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, mainPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (index.h("div", { class: "progress-main" }, index.h("span", { class: "progress-totle" }, secondaryPercentage), index.h("div", { class: "progress-line" }, index.h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), index.h("tfoot", { key: '1a30ce6cf24c8bb3e0c6a2272a15c40f1414a553' }, index.h("tr", { key: '89b24fbe5aab5e9eb2db0d758a3072e3a5e4c085', style: { fontSize: '12px' } }, index.h("td", { key: '2b508b104e3f37a9c3cc48a1e8f343bb1b230a9f', colSpan: 2 }), index.h("td", { key: '9465074188c0afb7a090a24bb312c54150ff6d65', style: { width: '250px' } }, index.h("div", { key: '51bcf2def6249dcf9bd95ae5a9aea2d813b1f289', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, index.h("div", { key: '305a3e3a00b1ae60907e80f652b69473904b80a6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '8bb7ad3d8713a589951c01d95d07ed0aea6e2cba', class: "legend bg-primary" }), index.h("p", { key: 'db8e19f4eb1e190f6eb26d1e6b919487afb5077b', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '7ae1dd4e6ffc2ab07fc611936c9aa26ec6d75a8c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '53a5b979d44604630ea13a8c87ed7a76a6964421', class: "legend secondary" }), index.h("p", { key: 'd00749f3c97a719449753885b637b0f568f7a941', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;

//# sourceMappingURL=ir-sales-filters_2.cjs.entry.js.map