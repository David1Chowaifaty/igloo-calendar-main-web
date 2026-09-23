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
        return (h(Host, { key: '60435cc9f93af6a79a6d00398ffbc57e3c7f3092' }, h("ir-drawer", { key: 'c73521f78f704ac56c31cf029bb139c2ac316bd4', open: this.open, label: t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '5bf1d4d3edb2b4b047ceb073d91c54961708674d', class: "archive-content" }, h("div", { key: '6c21571c22721790e1763663e0c7509f076581ab', class: "filters" }, h("div", { key: '7254158553dfd9f78a74c9bbe5678bf968efe5a8', class: "filters-row" }, h("wa-select", { key: '808d86cf2e2bcb3d182e8124e62488217c7ffadb', size: "s", placeholder: t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'b7946fa90ef56efc640d20071b2bd3a6c4b9df6c', value: "000" }, t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '42c163986dc0d5d12d0e846b9043e8a90effe851', size: "s", defaultValue: '000', placeholder: t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '41bba825d8ad23dc12d63b85615ffba151993871', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '4280ab1848ee5eb6fcaf018501ecdb07999915f5', class: "filters-row" }, h("ir-date-range-filter", { key: '44a958e0f4d842f879675f5c16061775f30c1a59', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'f86617ef0afddc85bb7f6ac58eca9c6db628f32f', class: "filter-actions" }, h("ir-custom-button", { key: 'd11e5869593f5ffdf8a58a9720fc99474f50b895', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: 'ce0e1ca7c67b1772c16c4bb98e85421dbd2b4209', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: '6b3aba2ac8132ad6a3685a0436ecdb5f933ce1ae', name: "download", slot: "start" }), t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (h("div", { key: '6500540962e43477e2a09a4e894d8c969a75a957', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_Period', { fallback: 'Period' })), h("th", null, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("th", null, t('Lcz_Unit', { fallback: 'Unit' })), h("th", null, t('Lcz_BookingNumber', { fallback: 'Booking #' })))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, formatDate(d.date, 'MMM DD, YYYY')), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), h("ir-booking-details-drawer", { key: '32bc8dbfcc0020a20280de123b5b158c51159491', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
