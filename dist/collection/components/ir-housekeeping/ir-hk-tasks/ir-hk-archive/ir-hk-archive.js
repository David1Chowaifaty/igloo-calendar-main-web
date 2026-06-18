import { HouseKeepingService } from "../../../../services/housekeeping.service";
import calendar_data from "../../../../stores/calendar-data";
import housekeeping_store from "../../../../stores/housekeeping.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { downloadFile } from "../../../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { v4 } from "uuid";
export class IrHkArchive {
    propertyId;
    language = 'en';
    ticket;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking;
    minSelectableDate = moment().subtract(90, 'days').toDate();
    houseKeepingService = new HouseKeepingService();
    units = [];
    handleSideBarToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    componentWillLoad() {
        this.setUpUnits();
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
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { fromDate, toDate } = e.detail;
        this.updateFilters({
            from_date: fromDate ? fromDate.format('YYYY-MM-DD') : null,
            to_date: toDate ? toDate.format('YYYY-MM-DD') : null,
        });
    }
    updateFilters(props) {
        this.filters = { ...this.filters, ...props };
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
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
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
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
        return (h(Host, { key: '4792b3b6caa067f834fb33908decfb5ef15c8c28' }, h("ir-title", { key: 'd34260af8fac195e0b85cf14a0431dfb6c8720c7', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '6c0fc84df089d627b44628678db1033f4dc09ab0', class: "px-1" }, h("div", { key: '82412234ff77b1db8ad2a04c1aeef3cddf5c2660', class: "d-flex" }, h("ir-select", { key: '22397384c3a11063d4709f61580497773f6427c8', class: "w-100", showFirstOption: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...this.units
                    ?.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("ir-select", { key: '5133ad58994f4467a9d4f27eb3b08f5493afb8d5', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } }))), h("div", { key: 'ed4c4964e42ba036fc8d3aecc3b09c6abecc94d9', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '3287375ea3864b6c8f774c7d0b0f2b94355772de', maxDate: moment().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '5d7ea844dbdd3d31345a2d8b30a3fae1cef1b22e', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '825b78dd6dec34930b8a1da7bb29e3c929675372', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '0449d4f08be7f07360b12448a31972a6898553be' }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: 'cab7a0b2f229db93adb7dad5073b11eb022bed3e', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: 'var(--ir-color-muted-background,#f2f3f8)',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '1c3970a259a62802ed33ca78d44d739ec893b1aa', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
    static get is() { return "ir-hk-archive"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
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
    static get listeners() {
        return [{
                "name": "dateRangeChanged",
                "method": "handleDateRangeChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
