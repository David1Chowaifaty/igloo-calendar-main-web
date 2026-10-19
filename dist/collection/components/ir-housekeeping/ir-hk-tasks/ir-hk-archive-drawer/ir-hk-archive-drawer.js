import { HouseKeepingService } from "../../../../services/housekeeping/index";
import calendar_data from "../../../../stores/calendar-data";
import housekeeping_store from "../../../../stores/housekeeping.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { downloadFile } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { v4 } from "uuid";
import { t } from "../../../../services/locale/t";
import { formatDate } from "../../../../utils/date/index";
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
        return (h(Host, { key: '0e47c8ce0980f85db57589b29a1b429fed7a992a' }, h("ir-drawer", { key: 'fc3814259cfc023a6c46da99906f285184099505', open: this.open, label: t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '18360cdce25f792edabd9ff6f3825dc111e3db04', class: "archive-content" }, h("div", { key: '6d1a9cf65df0637a0dd730e996a6e722ff57df27', class: "filters" }, h("div", { key: 'defee4fc07b92cc775238444448f18604236c74c', class: "filters-row" }, h("wa-select", { key: '84c32c0116431dd512fa506af87b39987021d750', size: "s", placeholder: t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'b5338fd94c74a5e9d9256d920f4bc65a007d9a5e', value: "000" }, t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '5387de6272ae0024ead4e1f4c391134d7f80fb42', size: "s", defaultValue: '000', placeholder: t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '5fb49d061ce7d60bdf86c918f92845c5c8fe89ee', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '7c9093c8a71e3418c635edefe37708d2a945c6fd', class: "filters-row" }, h("ir-date-range-filter", { key: '537737e84de1fc69296adca7bb041d9792da5a07', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'e8914b5cbf332f1a6512e28a310e5fd519ee6a7b', class: "filter-actions" }, h("ir-custom-button", { key: '3099a04f50446921e5a77c0b684456fc0e251bd4', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '0dee83f134d9189d5e3998d8aaa2be8cd32530ce', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: 'd4bc04b4066edbf7c97acc5689ed6f61d078cf02', name: "download", slot: "start" }), t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (h("div", { key: 'a067da376fc5c1da8af41a2afac2f9944229c19b', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_Period', { fallback: 'Period' })), h("th", null, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("th", null, t('Lcz_Unit', { fallback: 'Unit' })), h("th", null, t('Lcz_BookingNumber', { fallback: 'Booking #' })))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, formatDate(d.date, 'MMM DD, YYYY')), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), h("ir-booking-details-drawer", { key: '818d6b47990d1865f5f1645ae7e6419e517d067b', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
