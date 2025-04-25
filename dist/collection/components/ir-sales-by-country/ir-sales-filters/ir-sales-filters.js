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
        return (h("div", { key: '93f3f243d31ad64df67e9c11d7e6b4aada226ce5', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'f793917e7c855ef93891604f42a786ba220a5eb7', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '5bbcec1aac3985d2e0b28f69fe9ae71111cc7b8a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '7cc748784e0b70d7cc8b5b119cae84a33e70e9d0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '87485ffe8e17fc4cc240424048c9abb14f0b80a0', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '2c28be10a223733910d74c7fd1b883aead82618f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '10700b472af921bffb683288885a5579b640173f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c7508163987c98b3a7873f23e9551da6a0eb600c', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '1026c02f08d13b911293a536331f5792c448196e', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'ec3c38e43da150559676455713deca1b5f68a694', class: "pt-1 filter-group" }, h("label", { key: 'db579edc05745d9f8e7224ee8aa8f216f6a1ff14', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: 'bbd1a6f01dec1b1dd0e1552855b2a5b5def530a5', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '34c4b8ab6f3df23b686ce8fd8e241e9c372a857e', class: "pt-1 filter-group" }, h("label", { key: 'b4ffd99d3d27093d588ff479797bdfef0ae7deb6', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '19959a21fab3891b296a467e2da0555cb71bd6a8', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'b6e2c0416b233b4ef6ca71d1dc5ae39a779ca1d8', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '334c9d48af994398e2da204986d9c45927deff45', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '101db193c58ac8a6f967278ae31d1d3051896dcd', withOverlay: false }))), h("div", { key: '3ca6d83f132c3cc8dab6dc518b00a7f3eb8c05ec', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '0259af917db5417b5be6d1163b87367c844d76be', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '60cfdb32347e42eb820ed8d0fbb53246d3c68480', checkboxId: "compare-prev-year" })), h("div", { key: 'c9396dac2d7e982118df40b3271173fb071f83e4', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '07ea453c5e1b7f0695fe9dfce05f147caa890d36', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'eb909e51b78f02facf96bc795a7caa78dbccb51a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
