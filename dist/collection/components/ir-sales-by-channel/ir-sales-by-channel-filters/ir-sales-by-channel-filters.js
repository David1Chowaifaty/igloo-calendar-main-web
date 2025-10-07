import { h } from "@stencil/core";
import moment from "moment";
export class IrSalesByChannelFilters {
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
        this.window = this.baseFilters.WINDOW;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c;
        console.log(this.filters);
        return (h("ir-filters-panel", { key: '58aeea7f41bf6de9653fafc1f0b5de13f98ce0a0', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = Object.assign({}, this.baseFilters);
                this.applyFilters.emit(this.filters);
            } }, h("fieldset", { key: '1bf62d9de00f7dfdcca20533b5f24bcae3d9be37', class: "pt-1 filter-group" }, h("label", { key: '90d9b8d78851cf42c8de70e873838f4f893b6179', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'd8645c65bb193741366960e9db2ad2ab3db13f11', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (h("fieldset", { key: '9a442d0d6cf506577fdcf24b92623f249df28d0a', class: "filter-group" }, h("label", { key: '06691f7b9b14e19b8457927efb21628e3a97e876', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), h("ir-select", { key: '64bbe2cabbb587997f88a62a05ea778af0d049d4', selectedValue: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => {
                const value = e.detail;
                if (value === 'all') {
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.map(p => p.id),
                    });
                }
                else
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.filter(e => e.id === Number(value)).map(p => p.id),
                    });
            }, data: [
                { text: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    text: p.name,
                    value: p.id.toString(),
                })),
            ] }))), h("fieldset", { key: '682dbf6b381f6d8fd7de9af66b52e3f9586f37f9', class: "filter-group" }, h("label", { key: 'c462a4377c2c51f9b1eb5a03de0b618d54ac0cf9', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'c648d14a87128b324085a1425fb3155f0c056718', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'dba8fd319752a23218156ed23cdc5825f98bb57d', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '2dfcd9733368948ca746c3a94b0a4610e0224eba', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '51beaa4b024d301011ae144577f103baba63dbc9', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = null;
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '5bf6bcc86e88aca5db77d585ed91230d7f1bf022', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '299c0b416a69d8d20b173452732c67d46979bd1d', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '32a3b32d86c3d862016d6bc7e392886fc047db82', checked: (_c = this.filters) === null || _c === void 0 ? void 0 : _c.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
    static get is() { return "ir-sales-by-channel-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel-filters.css"]
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
            },
            "baseFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelSaleFilter",
                    "resolved": "{ FROM_DATE?: string; TO_DATE?: string; AC_ID?: string; BOOK_CASE?: string; WINDOW?: number; is_export_to_excel?: boolean; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "allowedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedProperties",
                    "resolved": "{ name?: string; id?: number; }[]",
                    "references": {
                        "AllowedProperties": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::AllowedProperties"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "window": {}
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
                    "original": "ChannelSaleFilter",
                    "resolved": "{ FROM_DATE?: string; TO_DATE?: string; AC_ID?: string; BOOK_CASE?: string; WINDOW?: number; is_export_to_excel?: boolean; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-sales-by-channel-filters.js.map
