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
        return (h("div", { key: '74c7fe0545634089dbb4c9bffc3e31e36e29053c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '6c93cd61dc7ba7690f3c45cb991c6c19305835ef', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'b0b6e4466aa568ba737575f7b956ecdbbf6ff2e7', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '7a58e7e7b86ec741ef18fdf8d72de07e4c27a8f0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f9f8a1a9e57a82ce299796470c101a4393720a00', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'ca3c3eb71b6d0387c1595026b55fac80a76f9d4e', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '34523b054d6b2054cd1ae531e10fe805cb84cd6b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '4e882097873c54956c2f436b7e78ccb2aff602bf', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: 'b05c9fbbf83dbaea75297781f94630061c47a83a', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'cda4e424fc17f2c141b6d2c868518fb470f4adc1', class: "pt-1 filter-group" }, h("label", { key: 'bff64d0de516d404acff601826028b809002dc6b', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: 'ad50dae5e65a07baa00fa470a8ecdda43ef9d22d', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '1c09037b7adbde1c911cfe2723227ef8288b3313', class: "pt-1 filter-group" }, h("label", { key: '52d0037d723f7c7463c5d5789957a719480ebda3', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: 'f62e30d3cb57319797ebd27923803571757116b2', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '0cbc0a0d1989b109bccbd75e98baf985c38d7aa4', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '330c6f8916c51344db00798190f9e0964af32b28', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'e111aedf59c1a1fa1f6b5cadd28f0a0b362b22c1', withOverlay: false }))), h("div", { key: 'ba0c67b48aec9c83e8c74ca62b46e0eb5a3aeaf2', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'c7d636f2795bb441d2077760e9bdab0e3f85c054', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'f643f2797829b896d52dc4b7143533b1d9c79727', checkboxId: "compare-prev-year" })), h("div", { key: 'ed26afadd6c69df32b9740d42f54aeb559c213d9', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '3ff21c0606eeecdb38e7fe1402a1eaae2f61a444', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '9a6b7e8f11d3b7d52783101b50a45ac2dee3eb93', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
