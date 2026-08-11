import { HouseKeepingService } from "../../../../services/housekeeping.service";
import calendar_data from "../../../../stores/calendar-data";
import housekeeping_store from "../../../../stores/housekeeping.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { downloadFile } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { v4 } from "uuid";
export class IrHkArchiveDrawer {
    propertyId;
    language = 'en';
    ticket;
    open = false;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking = null;
    drawerClosed;
    minSelectableDate = moment().subtract(90, 'days').format('YYYY-MM-DD');
    maxSelectableDate = moment().format('YYYY-MM-DD');
    houseKeepingService = new HouseKeepingService();
    units = [];
    componentWillLoad() {
        this.setUpUnits();
    }
    handleCloseBookingDetails(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    setUpUnits() {
        const units = [];
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    updateFilters(props) {
        this.filters = { ...this.filters, ...props };
    }
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({
            property_id: Number(this.propertyId),
            ...this.filters,
            is_export_to_excel: export_to_excel,
        });
        this.data = [...(res?.tasks || [])].map(t => ({ ...t, id: v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
    }
    async searchArchive() {
        try {
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive() {
        try {
            this.isLoading = 'excel';
            const { url } = await this.getArchivedTasks(true);
            downloadFile(url);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        return (h(Host, { key: '3a408b3f9fea0e9b52d7f9058de0612515eeacf4' }, h("ir-drawer", { key: '99280338378ea8506ee82c9d689424c974e14998', open: this.open, label: "Cleaning Archives (90 days)", class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '8563d3ae179185a973e3e92f605363248c4592ba', class: "archive-content" }, h("div", { key: '9b1cbd3bee51d44e792fcf1f9cf22165ece6bb2e', class: "filters" }, h("div", { key: '96bbf799094a49f34c95515ac77d7cf807727148', class: "filters-row" }, h("wa-select", { key: 'bf65f16fa159d361e3d9de3a1a19d711415152c7', size: "s", placeholder: "All units", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'b0a15dc9e9de40168b6507aa7f95bdbcd7d77df8', value: "000" }, "All units"), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '066253f9ae047dd846924ed05ddb34c4c296c692', size: "s", defaultValue: '000', placeholder: "All housekeepers", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: 'e1806e463a38c358991d4c3ec91db3ac6178d744', value: "000" }, "All housekeepers"), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '8b8318bd3a049aa0d7d09e06299abc99c6606a02', class: "filters-row" }, h("ir-date-range-filter", { key: 'ef77e5a05c1c4c0a709f073356480658ebc1cee9', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'd25d6e469ae3bc8758301a47d2208cab6cf1c750', class: "filter-actions" }, h("ir-custom-button", { key: '5147b6f90df7fe54a537e307ae15d87536804221', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, locales.entries?.Lcz_Search ?? 'Search'), h("ir-custom-button", { key: 'e9ffd92b6f5fdafc75dd77fed7b0a99eaf4baa85', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: 'dbc7934d4432150720f7a57aacc926f195a49686', name: "download", slot: "start" }), locales.entries?.Lcz_ExportToExcel ?? 'Export')))), this.fetchedData && (h("div", { key: 'b5db19c4460914dbf73806e671dca627b69397eb', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: locales.entries?.Lcz_NoResultsFound ?? 'No results found' })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, locales.entries?.Lcz_Period ?? 'Period'), h("th", null, locales.entries?.Lcz_Housekeeper ?? 'Housekeeper'), h("th", null, locales.entries?.Lcz_Unit ?? 'Unit'), h("th", null, locales.entries?.Lcz_BookingNumber ?? 'Booking #'))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (locales.entries?.Lcz_WasVacant))))))))))))), h("ir-booking-details-drawer", { key: '3223f4fce8885c0d855d501b1d369fde2b087d88', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
    }
    static get is() { return "ir-hk-archive-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-archive-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-archive-drawer.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
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
                "attribute": "property-id"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "ticket"
            },
            "open": {
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
                "attribute": "open",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "data": {},
            "isLoading": {},
            "fetchedData": {},
            "selectedBooking": {}
        };
    }
    static get events() {
        return [{
                "method": "drawerClosed",
                "name": "drawerClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "closeSideBar",
                "method": "handleCloseBookingDetails",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
