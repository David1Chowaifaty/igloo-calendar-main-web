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
        return (h("div", { key: 'af191548f633fe230d50f255821f51a622f8d05c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '6d62520f0443775ff1d75b15bfaa689b2ffa2b06', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '30f01a406ba1d01c21d826de461b81668340bccf', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'b0137550d918a6caab47ca1b789b55cd2235a4c4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1812aebd54edf38865d34c081e04bd5eed4cbd5b', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '4ba19bb6926513d393f3e198d17930ba36c77403', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'a3ef9700f8f7dfb52c2e237ed7277254ca105dc8', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '66751f611e47920a7e00064fd4829f907c3c9a23', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '12a6f0453e479eadcb7131caec41bcd1413b3fdb', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '23b9ca09f1e831a83b5b80c955645208fb891041', class: "pt-1 filter-group" }, h("label", { key: 'aea637abbf08631be1b30ce13e10216ce9291dc8', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: 'd27957617a2a1bbf8eafa93e8d035ec717862477', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '229994aa78f1cc6301d1ca51cd7a57bf29a1dbee', class: "pt-1 filter-group" }, h("label", { key: '0e37ea5809b45979d5d60c407b1a5eaeedd8acda', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '3a837e1c00e53781bcc485e89dcf178fe0f1b034', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '07335860e1d2894af12da52113d64365778760dc', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: 'c8b44bc60ca2f3588b36817f79a2920ecac91bb4', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '1ed1f1b4c7f2614dd8e74bb459f69a03533ee2ea', withOverlay: false }))), h("div", { key: '47cc9dcba45aa6e65370cc758f00df3ffc4733e0', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'd53eff374d860f547dced3e2330790e300b331e1', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '2c1fd7893d7bc5df25475844d3229e09304333db', checkboxId: "compare-prev-year" })), h("div", { key: 'f9ae37ca9e9e2ba76b5083233b4ed7f53c851f2c', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '4a55cefeb2d0de5b6256a0c7ca2bbd54a5864412', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c9aa5e14f2887713cd74c3d02e4c51b196954716', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
