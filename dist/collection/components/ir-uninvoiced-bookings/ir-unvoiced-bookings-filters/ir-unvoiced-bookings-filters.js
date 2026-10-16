import { h } from "@stencil/core";
import moment from "moment";
import uninvoiced_bookings, { updateUninvoicedBookingsFilters } from "../../../stores/uninvoiced_bookings.store";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
export class IrUnvoicedBookingsFilters {
    uninvoicedBookingsFiltersChange;
    get quickDates() {
        return [7, 14, 30, 90].map(days => ({
            label: t('Lcz_DaysAgo', { fallback: '%1 Days Ago', params: [formatCount(days)] }),
            getDate: () => moment().subtract(days, 'days'),
        }));
    }
    handleDatesChanged = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { from, to } = e.detail;
        if (!from || !to) {
            return;
        }
        updateUninvoicedBookingsFilters({ from, to });
    };
    handleSourceChanged = (e) => {
        updateUninvoicedBookingsFilters({ source: e.target.value });
    };
    handleSearch = () => {
        this.uninvoicedBookingsFiltersChange.emit({
            from: uninvoiced_bookings.filters.from,
            to: uninvoiced_bookings.filters.to,
            source: uninvoiced_bookings.filters.source,
        });
    };
    render() {
        return (h("div", { key: '586cba8743e1f8f1af3b0931984981d83c0f2d6e', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: '90461135a7c8e0b79236fa411e76ac655d80119f', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: 'b18740bd1e442e0f30c91ee9670b558e0b0fcf54', class: "uninvoiced-bookings-group" }, h("wa-select", { key: 'aa34372361d5ec6b7f08945f9e47dda6afab43b0', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '4cc3117941dc9927dfcf6a166233a3b10ee24c56', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: '6845d67a5a10d0546950d6a822f6ef57896bb82a', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '6c00cd9c891c112bdff57454e023d0343f35567d', name: "magnifying-glass" }))), h("wa-tooltip", { key: 'aa07765ba2a3894ccc397b02389bb05f3a6282cd', for: "uninvoiced-bookings-search-btn" }, t('Lcz_Search', { fallback: 'Search' }))));
    }
    static get is() { return "ir-unvoiced-bookings-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-filters.css"]
        };
    }
    static get events() {
        return [{
                "method": "uninvoicedBookingsFiltersChange",
                "name": "uninvoicedBookingsFiltersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ from: string; to: string; source: string }",
                    "resolved": "{ from: string; to: string; source: string; }",
                    "references": {}
                }
            }];
    }
}
