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
        return (h(Host, { key: 'f6c6373d477726c4f3cf1d38c9c915af8823febb' }, h("ir-drawer", { key: 'b64317dfb97f2efb81e4afa63b729cc8d58e3c5c', open: this.open, label: "Cleaning Archives (90 days)", class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '4954fc8e89be25aadac050a0495bfab636aec43a', class: "archive-content" }, h("div", { key: 'b0129e2c9f5f45654cf63db820c2b076ad4f79af', class: "filters" }, h("div", { key: '46f0b1e9d3f50ae0245b6ae50a0aff0a8381b06b', class: "filters-row" }, h("wa-select", { key: '83b400b1fd6595a61da8eb66cd0475d53fef6120', size: "s", placeholder: "All units", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: '4424db7e153141a011916628f1a90b0cfa00d18e', value: "000" }, "All units"), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '345d07c81ea8d2ce3866672f793b3dcac3e6d1a1', size: "s", defaultValue: '000', placeholder: "All housekeepers", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '66dc462df87caa527e6e6159b665de3ae0271a17', value: "000" }, "All housekeepers"), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '2274d60772fea825c576b63085fb27d4a32b9467', class: "filters-row" }, h("ir-date-range-filter", { key: 'f55bf3ba975d0ee1626b50bcc9242dac2fe0be16', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'e556c12837e287f0b414b2d04de5adaa57a0eb92', class: "filter-actions" }, h("ir-custom-button", { key: 'e7aa1152bb18a927d34c542e4bd1cbe8485faa2c', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, locales.entries?.Lcz_Search ?? 'Search'), h("ir-custom-button", { key: '6684cb25c0ec4c736bd625a9ae5f916cbb9811e8', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: '73427802b23260b105c8dc9194e89cffe0bcb17f', name: "download", slot: "start" }), locales.entries?.Lcz_ExportToExcel ?? 'Export')))), this.fetchedData && (h("div", { key: '7c47009031c94c29f409836771e3e4dde5521cbe', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: locales.entries?.Lcz_NoResultsFound ?? 'No results found' })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, locales.entries?.Lcz_Period ?? 'Period'), h("th", null, locales.entries?.Lcz_Housekeeper ?? 'Housekeeper'), h("th", null, locales.entries?.Lcz_Unit ?? 'Unit'), h("th", null, locales.entries?.Lcz_BookingNumber ?? 'Booking #'))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (locales.entries?.Lcz_WasVacant))))))))))))), h("ir-booking-details-drawer", { key: '0b850a2f0800630b24b796cab5f53d33744394e4', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
