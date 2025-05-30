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
        return (h("div", { key: 'a0747c56959849336e4de3c97eb14277abdc209c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ef947f770015769a2f879b89c54cf717988d318a', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4a972197759ceb9ba28106f23b0dfdccb63e1c5a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '2b61b4fe70d5056db2c91971b9e4a66aa2ddb47b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '03a2036af14dce406c1ffdb61e41327e1c1d3f91', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'ffa430d3c8096e837ed1ce3d3c285e6d076dd54e', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '8ac9b9286ceb996f2f387a3736721e7a01ebc229', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '2eed0a13460ee8b4aeb680efed081e04fb6aba88', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '5f92b7eff5ea46eebfcee2594c244af1b5b08203', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '057dba05f146eeb0fa025c53a80ba4b24465d9f0', class: "pt-1 filter-group" }, h("label", { key: '5275189c23ce34e25b94f6c822ad35c801841d78', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '2b387dda42a27e66a01dc5375ad3db448614297b', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '20af2040c81aa886797ca86a98373cf23463afc9', class: "pt-1 filter-group" }, h("label", { key: 'cf2ed7ac4d7db8ae43b9e438d8d3863a142fc490', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: 'c7172f901e5196980803bb83345d6fd2a9e1bbe1', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '058d08bc8aa681f883b1c748e0c718cfa13b4369', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '08b3a2edf5360e035098f4adbfb0199ef4561d45', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '8d9f98a0ca2423e56bf710b9681ace8a14a5aa85', maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '1764ad6bd6d84b0338ac1522e65c33fe74acb667', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '65761014af470a30c022bc542dd3d45c53109f31', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '9a7a3063a450c7c21b427a80a930c5e602bc1f42', checkboxId: "compare-prev-year" })), h("div", { key: 'f5971be8d176fd5382e649fac0fd063e8a3ccd8a', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'c1565768d00ecdd660b64b46b5113aae233d3e8c', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7eadd8958f273cf521651c079d64bc894bb85692', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
