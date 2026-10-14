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
        return (h(Host, { key: '33828e2bd2187ab0e2a0dcdddde0e8b7df0d5daf' }, h("ir-drawer", { key: '240e211a7d51c5824ee3e4a3c1d56c359199d130', open: this.open, label: t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: 'abca7ca081a9eabd315f8fef962f03611a5b437a', class: "archive-content" }, h("div", { key: '62b22a1c33cca02ae97836e5645e653b348af5b7', class: "filters" }, h("div", { key: '2ebd8d805245b43ef75cd9cf3cb5476c4140db04', class: "filters-row" }, h("wa-select", { key: '5721a5d8007862c0c6644365ed50df22d70d5cfc', size: "s", placeholder: t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'd47d86556bf63840cfe9c026814f7762c72842fc', value: "000" }, t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: 'bdb1893b6ea179ccfc570d5af1b4a344387277f4', size: "s", defaultValue: '000', placeholder: t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '33ed8812fb947b7f714384fbac3fe74d070a3c6d', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '873756b0d2b8ceb36b97d45e64f8d932c14f8ca1', class: "filters-row" }, h("ir-date-range-filter", { key: '1def965cc1b0ea8b332d4edd18e26bfee7b63803', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: '5c1b51d073a0d05c00be0ed37da8294bb82343d7', class: "filter-actions" }, h("ir-custom-button", { key: '2ec63eabcb8434ccb1d977f08619bbecf34def1b', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: 'f508a519530939787e0625aaa0399666ad2f343b', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: '8261fd41cceb5ed90bed21f554900935568e0b3b', name: "download", slot: "start" }), t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (h("div", { key: 'ed2959becdc82c94e5bc61e8307c44d6b50650ce', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_Period', { fallback: 'Period' })), h("th", null, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("th", null, t('Lcz_Unit', { fallback: 'Unit' })), h("th", null, t('Lcz_BookingNumber', { fallback: 'Booking #' })))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, formatDate(d.date, 'MMM DD, YYYY')), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), h("ir-booking-details-drawer", { key: '5af5345120b2cacfa8a53a78721c1aee08427cf8', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
