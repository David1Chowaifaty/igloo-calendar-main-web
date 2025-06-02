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
        return (h("div", { key: 'ba17ca17e7bb1e5566679fc6d8db50a697bf46ce', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9c5d5af0658129652e922056b6ae7d8e9100b1ff', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '44b16118e2f29c741aaf46a417c3fa2b54020d70', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'e8cd7b2488baf60027d8d55afb0500a977a942aa', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1a0ff8013e685fea2772bbc43c5dc49cb321f0d6', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a54e0a203060517067a0819348616c8a6e7ea02f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '577321388fa46ad9b0184d1280605f8c110d5520', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '6a667c90fdbe0ac251dfa3b87b61de2a816201d4', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: 'bcf300b8acaa8882e5beea6a15c1c70d08a0bd21', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '8a10373de7aaeaab157c65d0e6a3dc0b9c012aef', class: "pt-1 filter-group" }, h("label", { key: 'bbfde8523a5c72eda214c79ef3697c789637c818', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '8285bba837e1db96aedc40f28af63d3dd9be1303', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '80cdf72e6d409915193e3d15ac17e6dcbd054632', class: "pt-1 filter-group" }, h("label", { key: '51385b64408c9310c3aa05bc0fe55063e2c49aa0', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '1e073e327f715ca8198514aa239fc12a4ea8faac', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '05cb28678078d058943d28f6a018f92cdffa0e71', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '97b931ef759b6e3ca11e95fe8ce8c407637785f8', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '1c6a586d18d35b7bf4ec4314e80f56c473a48010', maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '8e3fa9039999fbd99b8ff7fd5145be57d068a3b0', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'dde60b544635d66b1dc52232942b3f29b5bbbfe1', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '62e31ed9e698f2737fea07d9c09cf824715585e1', checkboxId: "compare-prev-year" })), h("div", { key: '7074ca0f01312df666e41175ea593bb496e60352', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f37167e93a5c42475bf3e048570f06ab71a51dc5', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '23e9111eaf9b361797f0c557e31cd102514903b7', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
