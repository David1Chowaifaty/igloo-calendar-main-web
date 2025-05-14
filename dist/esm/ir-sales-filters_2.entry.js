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
        return (h("div", { key: '212ae0103d707ef021ff20a8fb3e99c75c7f4a42', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'a7ab9f377860e164927591509c429060457a8349', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'f3c50a7b90e2f1a630ce6d18f49eb3f41c11a09b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6ff787a43320b240b01a9328ab200e2d5d885be4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '58ddb7d86bdeaa012718b2f055380fe7a00b04e2', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '4b1dd5127b10b2652e382d2370b181b33ca0462a', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'c1e71f8faefcc6910087341e4e270153281d1862', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '88ac50862e77a76739baef80d1df21c9dd03af9d', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '52a58a6a72867d6cc8bbda92990f6390c72b6a4c', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'cdbe187a4d4e72c879597cdd926418e5e5e71055', class: "pt-1 filter-group" }, h("label", { key: '35dbebc82fbb98faf5ae64a356b8dd71e70ea95b', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '43585bf54cf3ec7423670bdeb507cc91aec31e57', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '1301d85135c934c6a0000447ff5699aa720e06ef', class: "pt-1 filter-group" }, h("label", { key: 'da35231ccf018b7100640152c6c4fc6061efcf4f', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: 'e20760c5c5814253db3dabca6410df6819363739', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'b450491173dca81b465791444adcee633c8a4204', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: 'e1d16730f6170a8bdb495fd65a7a3494d134e8b3', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '63d2c1399a680bede7afd2ddf89c7b01a3ac1625', withOverlay: false }))), h("div", { key: '7c661cbe3636c79177595ff2cf55a516a36cf2e6', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '5184e03db37f3705077081927047d10472c1e224', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'fe50788fa2564f366b40fa790bcb2594ec11069c', checkboxId: "compare-prev-year" })), h("div", { key: '0928278ece8d2fbc1fe4dedc5dc4320a1657e42e', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8376f6c3866c18ea718189a3abc80d98288f8f44', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'caffb9ec8bd77ddd0a7a7eb028762e116c7ab60c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '0ab505ea636b2f3506dbc69002b62b87a73bee3a', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '1ceac9a3c08e3d31fe509688180a3146c902ff46', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e6f275ae9ce9197017d4eafbf00b6012dc6490dd', class: "table-header" }, h("tr", { key: '4da9d0dddb9b40b0328c3a2d7fb3d57a2b43e2d6' }, h("th", { key: 'e5cae59e4da2bb8fe4216f868e84a2c708a3a2f5', class: "text-left" }, "Country"), h("th", { key: 'f34e17b288b048f70a889930418ecbecc74dc6ab', class: "" }, "Room nights"), h("th", { key: '6d2248a04f30b6ffae2589e2190990d60f0560b9', class: "" }))), h("tbody", { key: '4da19b88449865befefc97f55039e12e3620488d' }, this.records.length === 0 && (h("tr", { key: '8da16657b0f479d8e7b544e95846f0e6ef051153' }, h("td", { key: '5e5a25f7a430eb0e363320077bbad3c415c20284', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, record.country), h("td", null, record.nights), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '251b3b405664be3fa379dc965979ed9671aa4fcf' }, h("tr", { key: 'c584144a5926c231be22be1eb91513d1e411e5b4', style: { fontSize: '12px' } }, h("td", { key: '3c993f60641824f731bd939c03cc8a4a200bc46e', colSpan: 2 }), h("td", { key: '26645ecffd6e7da787a09cc966aa2695f7aa40a3', style: { width: '250px' } }, h("div", { key: '5dca2ba24f9e00cc5a1eb8597b619ad2b19c0207', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'ed8fdb172fb36aaa969f2244eb722b3cbf2c6d6a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '903cb7fa74fd46a3aa2d5203a71daaf27c189c98', class: "legend bg-primary" }), h("p", { key: '1c76de2bce5daa5c507ad1dc6703ff809413dd88', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ae09dde9c62955f0b5ec2d68432ceda1f3b56123', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a8ffe607453863f5727339756909f9115a42f350', class: "legend secondary" }), h("p", { key: '0d7c087369fc33dd6700862caec788707ad50b70', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrSalesTable.style = IrSalesTableStyle0 + IrSalesTableStyle1;

export { IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };

//# sourceMappingURL=ir-sales-filters_2.entry.js.map