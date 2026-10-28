import { h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
export class IrSalesByChannelFilters {
    isLoading;
    baseFilters;
    allowedProperties;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
        this.applyFilters.emit(this.filters);
    }
    get quickDates() {
        return [
            ...[7, 14, 30, 60, 90].map(days => ({
                label: t('Lcz_DaysAgo', { fallback: '%1 Days Ago', params: [formatCount(days)] }),
                getDate: () => moment().subtract(days, 'days'),
            })),
            {
                label: t('Lcz_YearAgo', { fallback: '%1 Year Ago', params: [formatCount(1)] }),
                getDate: () => moment().subtract(365, 'days'),
            },
        ];
    }
    render() {
        return (h("ir-filter-card", { key: 'c7d3f7e1286b6daf7dac07bc2e6199fec442ffd9' }, h("wa-radio-group", { key: '74ea9f5b3f7f6e607f0692f32578b617ad28dd22', label: t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '0eae4b7eed9f24a7e3d60f0c42fadb1131b7633a', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t('Lcz_Booked', { fallback: 'Booked' })), h("wa-radio", { key: '370b63d6946dba59d32dd34db5b21dbdf5c63d47', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t('Lcz_Stayed', { fallback: 'Stayed' }))), this.allowedProperties.length > 1 && (h("ir-m-combobox", { key: '570f4ffd4252f6ac90b62cb2b85150cc986b7a73', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.map(p => p.id) });
                }
                else {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.filter(p => p.id === Number(value)).map(p => p.id) });
                }
            }, options: [
                { label: t('Lcz_All', { fallback: 'All' }), value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] })), h("wa-select", { key: '475f52912ec8c2ed4fd71a182585155fae1569eb', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'b5f1ac9208522e5a7365be1c77ea82a138208aef', value: "7" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(7)] })), h("wa-option", { key: '99ea8b31ec403929d24b9b9a59914344d2dea49b', value: "14" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(14)] })), h("wa-option", { key: 'c21070af4876e4a6575f8c402904ebb18e1fa2f4', value: "30" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(30)] })), h("wa-option", { key: 'faf7e6bd80213d8327a98d1d076556367642f879', value: "60" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(60)] })), h("wa-option", { key: '45dbd15d8b12e071ea2cd5b9475bdd1d1a1530a1', value: "90" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(90)] })), h("wa-option", { key: 'dc8aa6095e1e89f91777bec32878a0eec896cc6c', value: "365" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(365)] }))), h("div", { key: '7e38675f1a84cd5b87ded87b3a46eca151171e14', class: "or-divider" }, h("span", { key: '0c0a6d46a067cf0563af410abb3228936276db1d', class: "or-divider__line" }), h("span", { key: 'dd1d2d5deec40cf2ceab501325ab7c76edf1f2f4', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: 'c41fd0a2bde8d9f07b026e84967e8b9c8c8aff02', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'c29959b6e43581877de62a38051557021bea9cab', label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '709793e179f84ec1de9395275c37a2530d008363', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'b0a5bcfa01a0d570468f888fc297adedd28cfb7e', slot: "footer" }, h("ir-custom-button", { key: 'e6a8d21402e54cb01bb30098416cb583f32acb5f', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'e198d44b23e4052ff098d880cb96b4fb68092a92', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
                "reflect": false,
                "attribute": "is-loading"
            },
            "baseFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelSaleFilter",
                    "resolved": "{ is_export_to_excel?: boolean; AC_ID?: string; FROM_DATE?: string; TO_DATE?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter",
                            "referenceLocation": "ChannelSaleFilter"
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
                            "path": "@/services/property/types",
                            "id": "src/services/property/types.ts::AllowedProperties",
                            "referenceLocation": "AllowedProperties"
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
                    "resolved": "{ is_export_to_excel?: boolean; AC_ID?: string; FROM_DATE?: string; TO_DATE?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter",
                            "referenceLocation": "ChannelSaleFilter"
                        }
                    }
                }
            }];
    }
}
