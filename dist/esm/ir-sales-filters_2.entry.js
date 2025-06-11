import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-c1c77241.js';

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.filters = {
            from_date: hooks().add(-7, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
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
        return (h("div", { key: '448eba54eababb530c9ad565e9e50136385ba4c8', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'cee83c232f397f7e9bcc186af89376aadb5110f1', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '7a84cce106101da65e11a3fad181eae3c9932368', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6584b5609bf7b816e47f7621a801369e0ddc641a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0c6ba1fc927e817d39c251c01fc9175edec393be', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3171c169f300ac8e2f17b226c8548b840bc96c3f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '90af633464c9d8ab8ac77d9c4736e0e959d49f5e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'b811c5adf48190ef41b35cf657384215bb4c83ed', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '157d20a9ef233a388d8e2e1906a573e6ad8a0698', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '81f544006136b841d5c8de220934f1a32bf9712b', class: "pt-1 filter-group" }, h("label", { key: '9dc254b3e90e2f304e17f9c2407135809a66cf3c', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: 'f7d543766b6eaf615037bbe70a2933ede3a20f7a', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '19a91b5f0360d472bce2610502d51995b050a8dd', class: "pt-1 filter-group" }, h("label", { key: '916c4b74d4e13096565cb73640b0ff1c618a214b', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '31256baefbdb712cfb15bde612cefe4f567ac679', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '550b4a537505eb3d714f72c87e0450f14dc87bbc', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '27a4eaf7eb60b267f2181b437a1f1b1f76938eed', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'd4d422bcefecebeabeca6e0bd2104aff31902abd', maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '64d5ba764e9ebc02852ea7405885a469014ae810', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'c9a5e87d8d3d8ed68766c19e0f6acf675b525f14', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'e51de613a85183601a841b0623b894f3f574acf8', checkboxId: "compare-prev-year" })), h("div", { key: '56e5128f50e3dd52597be6aada801d96f7e087f3', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'eaf5d44bd9103ab66b766b50b492405eeeecd875', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '623d7b7d5315fc0b3d2710a941b58e07cce2c735', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        registerInstance(this, hostRef);
        this.records = sampleSalesData;
    }
    render() {
        return (h("div", { key: '5b3a50e56a8b5ec3e600e8f7d574749cd0b5a3c4', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'e09abc009fbb537780765a484ded17bbf4253b35', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '595a2de7571a97cab2ddd1414cf1c6a995ba35a4', class: "table-header" }, h("tr", { key: 'ffb244aa125ed404b3c8d72378e32e87c7494857' }, h("th", { key: '6374eb672e40d6c15778ebc517e653a373ea9aa2', class: "text-left" }, "Country"), h("th", { key: 'dc39245265f452fb1b9efa79fdc87bf710b9cd40', class: "" }, "Room nights"), h("th", { key: '9a6ed4f58f78c0f0d36c45af6d9d67d44ef0494a', class: "" }))), h("tbody", { key: '34202f5ec6b9bf0b7dd827e37c434f4fb6950f07' }, this.records.length === 0 && (h("tr", { key: '91fc54453555fda9ec8ed1b2176cdb062a2a8461' }, h("td", { key: '64f8709bc99d834ee332eb75ca2c0878964263f9', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, record.country), h("td", null, record.nights), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '07ec7d387b5eaf518c73cd2854ce86ba476dd8de' }, h("tr", { key: '1ac2c0ebbe47021d2ab97d7aa1209418322c76d0', style: { fontSize: '12px' } }, h("td", { key: 'ca9b7ca6d7f21df9449daa0538c2de0d7f3f7962', colSpan: 2 }), h("td", { key: '87c216dfbd0221f35f40a9c98b83c28f19e75b5c', style: { width: '250px' } }, h("div", { key: '835802f5f07edc100376345fd84d76b8aee647ce', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'ed2f99b96ae79ba1fe2a900acbbfad1b283a9589', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0b9c733e42d59841a966b2e28fa94811ab06fe89', class: "legend bg-primary" }), h("p", { key: '5ca1ac9ff2da445e461d6d636f8d13ceed1fc121', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c3ee3ea1528143c1b6794aaaaa8c02dbf155f180', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '42fb7302df95a9440202c21452607c61fe164c2d', class: "legend secondary" }), h("p", { key: '0aa55700eacc8dd49fbc6cf2afb90766e6d0709d', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map