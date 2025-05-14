import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import moment from "moment";
export class IrSalesFilters {
    constructor() {
        this.filters = {
            from_date: moment().add(-7, 'days').format('YYYY-MM-DD'),
            to_date: moment().format('YYYY-MM-DD'),
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
    static get is() { return "ir-sales-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
        };
    }
    static get properties() {
        return {
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "SalesFilters",
                    "resolved": "{ from_date: string; to_date: string; show_previous_year: boolean; rooms_status: { code: string; }; }",
                    "references": {
                        "SalesFilters": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-sales-by-country/ir-sales-filters/types.ts::SalesFilters"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-sales-filters.js.map
