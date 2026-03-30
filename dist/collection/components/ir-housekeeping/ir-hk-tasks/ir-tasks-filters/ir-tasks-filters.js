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
        return (h("wa-card", { key: 'b44d57a16332f89d8a35f6748abd32d0aaf73a47', class: `filters__card ${this.collapsed ? '--collapsed' : ''}` }, h("div", { key: '1637f9675018c1b7bca24a690066d90f9d980f83', class: "filters__header", slot: "header" }, h("div", { key: 'a7ebe67f9b377b3a4166838116a2d94a32c03c62', class: "filters__title-group" }, h("wa-icon", { key: 'a84e656d5aecc0a466d83909d0e6f46fab5fbc28', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '2c1a6a6f650547af5631084f2203988946ea8171', class: "filters__title" }, locales.entries.Lcz_Filters)), h("ir-custom-button", { key: 'ae5caa0ad0a76da6550dc4dadd888642803f0238', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'd07a78af1286b9690a79930de93b8da3fcc5f389', style: { fontSize: '1rem' }, name: !this.collapsed ? 'eye-slash' : 'eye' }))), h("div", { key: 'ca27b1899f7aae89b55417d87f4b5ad91eb8d27d', class: `filters__body${this.collapsed ? ' filters__body--collapsed' : ''}`, id: "hkTasksFiltersCollapse" }, h("fieldset", { key: '69a65f9f312ab7f0497d90b6d7ff5e6176a799e4' }, h("wa-select", { key: '1a79f14422cc5dcd61cfee1dd39c65c0c80f3a7f', label: locales.entries.Lcz_Period, size: "small", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '678515fc4b53cc3de10c5ab725ca0fd45f5c1ce2' }, h("wa-select", { key: 'a40c39a99cb7025dd862fad024bbc0c8d236e5dc', label: locales.entries.Lcz_Housekeepers, size: "small", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '8cfb9ad8b9c52029d3855bd6ef5e84af19242b93', value: "000" }, locales.entries.Lcz_Allhousekeepers), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: '1bb7662ab3b6aba2eb9c44472550fb2a66c910ca' }, h("wa-select", { key: '7632b7b9415f7651d53de6fb8bf2198e13c900d0', label: "Include dusty units", size: "small", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: '91ffa6a170b96e4a6ae41e880590a2cb82ce6d3a' }, h("wa-select", { key: '41b9339f4064b63f993c787ddd1eea6590349cbb', label: locales.entries['Lcz_HighlightCheck-insFrom'], size: "small", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: 'ea8a91422669abe3f56c4750d5973b02c3220d50', class: "filters__actions" }, h("ir-custom-button", { key: 'de237dfb59e1930264fe394429cc6483c94a4975', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales.entries.Lcz_Reset), h("ir-custom-button", { key: 'b4c18785ac37ecdefde8bef5c28c6623318fea4a', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries.Lcz_Apply)))));
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
