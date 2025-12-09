import { h } from "@stencil/core";
import housekeeping_store from "../../../../stores/housekeeping.store";
import locales from "../../../../stores/locales.store";
import calendar_data from "../../../../stores/calendar-data";
export class IrTasksFilters {
    isLoading;
    filters = {
        cleaning_periods: {
            code: '',
        },
        housekeepers: '000',
        cleaning_frequencies: { code: '' },
        dusty_units: { code: '' },
        highlight_check_ins: { code: '' },
    };
    collapsed = false;
    applyFilters;
    baseFilters;
    componentWillLoad() {
        this.baseFilters = {
            cleaning_periods: housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
        };
        this.filters = { ...this.baseFilters, housekeepers: '000' };
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters, housekeepers: '000' };
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    render() {
        return (h("div", { key: '22db431928f9090929657967a5ab8f7cd145b596', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '8f22223b51770934dbe15449efc8610d6aefc942', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'f840eaee95a1fae9951506b1ab94c8433d2a6c12', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'fd360a4b5cf3519f7648a0ae5d58b1765326a2a2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cc3a7c4ed9ad86d6dd935ad8b46609db09cc3558', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3b2bf2918116cbb99f0d37a4a6f41668121e491b', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '8e462a8fc86d0b48da7a23dfbee5e54b6959aa97', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ed5167f30217adbedcd36e4d33566d6aadf55ea7', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '7e183a8b07fc6aa85e3c815518c1efd845ce42ae', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6f68537ee3fba935536d8535e5c2a5fe078427cb', class: "pt-1" }, h("p", { key: '6b793c36f22ed931ae7845def55b314b194e8477', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Period), h("ir-select", { key: '7201d1eef306d628ce6870f5a489545c868b174c', testId: "period", selectedValue: this.filters?.cleaning_periods?.code, showFirstOption: false, data: housekeeping_store?.hk_criteria?.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: 'bd9593809103ce94e8740459d226541c36627c5b' }, h("p", { key: '2dd295e33a83ee53c65c5820b4feebc23667364e', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries.Lcz_Housekeepers), h("ir-select", { key: 'd29149e01431a7af4dbeff3b9d12688a1a30820a', testId: "housekeepers", selectedValue: this.filters?.housekeepers, showFirstOption: false, data: [
                { text: locales.entries.Lcz_Allhousekeepers, value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } }))), h("fieldset", { key: '376c9d10f632664b776b726b67632f46dacea089' }, h("p", { key: 'e2b84ff57402699914fedf3b8228a4e6657216ab', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, "Include dusty units"), h("ir-select", { key: '6db4e93f60e7fd29bbdb544efe63f41c5b68bb84', testId: "dusty_units", showFirstOption: false, selectedValue: this.filters?.dusty_units?.code, data: housekeeping_store.hk_criteria?.dusty_periods?.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'a1d5a0ca24698409483a187d2ca594fcd6db4be6', class: "mb-1" }, h("p", { key: 'ace876d08d77484506eb40366a9c88b2e43cec61', class: "m-0 pt-0 px-0", style: { paddingBottom: '0.25rem' } }, locales.entries['Lcz_HighlightCheck-insFrom']), h("ir-select", { key: 'bd0462040cbce79240b43a72953b3e2a24a64473', testId: "highlight_check_ins", selectedValue: this.filters?.highlight_check_ins?.code, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '76b769a7fdd57b9eff6a84811c2a711afbbd5feb', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '248c5e7b5927099dfddbca529fb7ddaa6fe4094a', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '67da0e8113729435f09251e493a9291b8aa00cf5', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get is() { return "ir-tasks-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-filters.css"]
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
                    "original": "TaskFilters",
                    "resolved": "{ cleaning_periods: { code: string; }; housekeepers: { id: number; }[]; cleaning_frequencies: { code: string; }; dusty_units: { code: string; }; highlight_check_ins: { code: string; }; }",
                    "references": {
                        "TaskFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-housekeeping/ir-hk-tasks/types.ts::TaskFilters"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-tasks-filters.js.map
