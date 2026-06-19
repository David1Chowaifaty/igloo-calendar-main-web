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
        return (h("ir-filter-card", { key: '43cbf38228b196ed0d25a8990e8ee8c5ae925fda' }, h("fieldset", { key: '449dc62cf46807760f4161852ae2b179b6a73d6b' }, h("wa-select", { key: 'a46e9999c550f72ca54f22f2d6db77037cfcbdad', label: locales.entries.Lcz_Period, size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '0f61b29551224e5fc7113ad30bff2eda427e8a19' }, h("wa-select", { key: '0ec51f55ebcf0ff8118efb1998b1f6e4f2c6c1b7', label: locales.entries.Lcz_Housekeepers, size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '204755f62e347d0b318ccae755d59ee0aed6ab6e', value: "000" }, locales.entries.Lcz_Allhousekeepers), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: 'f9d2cb50f15ac33acc06206f0bcd305bca38a14a' }, h("wa-select", { key: '93fd837a9e1ea34779acfb6277a33019a6137e34', label: "Include dusty units", size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: '9d787d0cd5da2439d2406ce79e3429529f4e1d6e' }, h("wa-select", { key: 'e442d6c93cd2cf41f470b1f62c739a46f305f557', label: locales.entries['Lcz_HighlightCheck-insFrom'], size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: 'f464a455b286e62414c6d72815ee6a194855c46e', slot: "footer" }, h("ir-custom-button", { key: 'b4f5d095ea64e569fd3a9ec90b64a636100b5cbd', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales.entries.Lcz_Reset), h("ir-custom-button", { key: '6fcf1dc404a20d4dc6a505b876db388aa3aa1293', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries.Lcz_Apply))));
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
                "reflect": false,
                "attribute": "is-loading"
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
                            "id": "src/components/ir-housekeeping/ir-hk-tasks/types.ts::TaskFilters",
                            "referenceLocation": "TaskFilters"
                        }
                    }
                }
            }];
    }
}
