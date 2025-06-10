import { BookingService } from "../../../services/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { ReloadInterceptor } from "../../../utils/ReloadInterceptor";
import { h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
export class IglBulkStopSale {
    constructor() {
        this.maxDatesLength = 8;
        this.selectedRoomTypes = [];
        this.dates = [{ from: null, to: null }];
        this.selectedWeekdays = new Set(Array(7)
            .fill(null)
            .map((_, i) => i));
        this.dateRefs = [];
        this.minDate = moment().format('YYYY-MM-DD');
        this.bookingService = new BookingService();
        this.datesSchema = z.array(z.object({
            from: z
                .any()
                .refine((val) => moment.isMoment(val), {
                message: "Invalid 'from' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
            to: z
                .any()
                .refine((val) => moment.isMoment(val), {
                message: "Invalid 'to' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
        }));
    }
    getDayIndex(dateStr) {
        return moment(dateStr, 'YYYY-MM-DD').day();
    }
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    handleBeforeSidebarClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (window.confirm('Do you really want to proceed?')) {
            this.deactivate();
            this.sidebar.toggleSidebar();
        }
    }
    async addBlockDates() {
        const generatePeriodsToModify = periods => {
            const p = [];
            for (const period of periods) {
                let current = period.from;
                const lastDay = moment(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = moment(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                    if (!this.selectedWeekdays.has(this.getDayIndex(current))) {
                        current = nextDay;
                        continue;
                    }
                    for (const selectedRoom of this.selectedRoomTypes) {
                        p.push({
                            room_type_id: selectedRoom.id,
                            night: current,
                        });
                    }
                    current = nextDay;
                }
            }
            return p;
        };
        // const updateCalendarCells = (
        //   payloads: {
        //     is_closed: boolean;
        //     restrictions: {
        //       night: string;
        //       room_type_id: number;
        //     }[];
        //   }[],
        // ) => {
        //   const prevDisabledCells = new Map(calendar_dates.disabled_cells);
        //   for (const payload of payloads) {
        //     for (const restrictions of payload.restrictions) {
        //       const roomType = calendar_data.roomsInfo.find(rt => rt.id === restrictions.room_type_id);
        //       if (roomType) {
        //         const dayIndex = calendar_dates.days.findIndex(r => r.value === restrictions.night);
        //         if (dayIndex === -1) {
        //           console.warn(`Couldn't find date ${restrictions.night}`);
        //           continue;
        //         }
        //         const day = calendar_dates.days[dayIndex];
        //         const rp = day.rate.find(r => r.id === restrictions.room_type_id);
        //         if (!rp) {
        //           console.warn(`Couldn't find room type ${restrictions.room_type_id}`);
        //           continue;
        //         }
        //         const haveAvailability = (rp.exposed_inventory as any).rts === 0;
        //         for (const room of roomType.physicalrooms) {
        //           const key = `${room.id}_${restrictions.night}`;
        //           prevDisabledCells.set(key, {
        //             disabled: payload.is_closed ? true : haveAvailability,
        //             reason: payload.is_closed ? 'stop_sale' : haveAvailability ? 'inventory' : 'stop_sale',
        //           });
        //         }
        //       }
        //     }
        //   }
        //   calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
        // };
        const updateCalendarCells = (payloads) => {
            console.log(payloads);
            // const prevDisabledCells = new Map(calendar_dates.disabled_cells);
            // // Caches
            // const roomsInfoById = new Map(calendar_data.roomsInfo.map((rt,i) => [rt.id, {roomType:rt,index:i}]));
            // const dayIndexByValue = new Map(calendar_dates.days.map((day, i) => [day.value, i]));
            // const rateByRoomTypeAndDate = new Map<string, any>();
            // const days = [...calendar_dates.days];
            // for (const payload of payloads) {
            //   for (const restriction of payload.restrictions) {
            //     const { night, room_type_id } = restriction;
            //     const {roomType,index} = roomsInfoById.get(room_type_id);
            //     if (!roomType) continue;
            //     const dayIndex = dayIndexByValue.get(night);
            //     if (dayIndex === undefined) {
            //       console.warn(`Couldn't find date ${night}`);
            //       continue;
            //     }
            //     const day = calendar_dates.days[dayIndex];
            //     const updatedRateplans = roomType.rateplans.map((rp) => (i === ratePlanIdx ? { ...rp, is_available_to_book: sale.is_available_to_book } : rp));
            //     const is_available_to_book = updatedRateplans.some(rp => rp.is_available_to_book);
            //     days[dayIndex].rate[index] = {
            //       ...roomType,
            //       rateplans: updatedRateplans,
            //       // overall room availability = true if any rateplan is bookable
            //       is_available_to_book,
            //     };
            //     const rateKey = `${room_type_id}_${night}`;
            //     let rp = rateByRoomTypeAndDate.get(rateKey);
            //     if (!rp) {
            //       rp = day.rate.find(r => r.id === room_type_id);
            //       if (!rp) {
            //         console.warn(`Couldn't find room type ${room_type_id}`);
            //         continue;
            //       }
            //       rateByRoomTypeAndDate.set(rateKey, rp);
            //     }
            //     const haveAvailability = (rp.exposed_inventory as any).rts === 0;
            //     for (const room of roomType.physicalrooms) {
            //       const key = `${room.id}_${night}`;
            //       prevDisabledCells.set(key, {
            //         disabled: payload.is_closed ? true : haveAvailability,
            //         reason: payload.is_closed ? 'stop_sale' : haveAvailability ? 'inventory' : 'stop_sale',
            //       });
            //     }
            //   }
            // }
            // calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
        };
        try {
            this.errors = null;
            this.isLoading = true;
            const periods = this.datesSchema.parse(this.dates);
            if (this.selectedRoomTypes.length === 0) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            if (this.selectedWeekdays.size === 0) {
                this.weekdaysSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'weekdays';
                return;
            }
            this.activate();
            const periods_to_modify = generatePeriodsToModify(periods);
            const isAllOpen = this.selectedRoomTypes.every(e => e.result === 'open');
            const isAllClosed = this.selectedRoomTypes.every(e => e.result === 'closed');
            if (isAllClosed || isAllOpen) {
                const payload = {
                    is_closed: isAllClosed,
                    restrictions: periods_to_modify,
                };
                await this.bookingService.setExposedRestrictionPerRoomType(payload);
                updateCalendarCells([payload]);
            }
            else {
                const payloads = [];
                for (const room of this.selectedRoomTypes) {
                    const periods = periods_to_modify.filter(f => f.room_type_id === room.id);
                    payloads.push({
                        is_closed: room.result === 'closed',
                        restrictions: periods,
                    });
                }
                await Promise.all(payloads.map(p => this.bookingService.setExposedRestrictionPerRoomType(p)));
                updateCalendarCells(payloads);
            }
            this.deactivate();
            this.toast.emit({
                type: 'success',
                title: 'Request was submitted successfully. Your changes have been queued and will be applied shortly.',
                description: '',
            });
            this.isLoading = false;
            this.closeModal.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'end' });
                this.errors = 'dates';
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    activate() {
        this.reloadInterceptor.activate();
        if (this.sidebar)
            this.sidebar.preventClose = true;
    }
    deactivate() {
        this.reloadInterceptor.deactivate();
        if (this.sidebar)
            this.sidebar.preventClose = false;
    }
    handleDateChange({ index, date, key }) {
        var _a, _b;
        // 1) clone and set the new date
        const dates = [...this.dates];
        dates[index] = Object.assign(Object.assign({}, dates[index]), { [key]: date });
        // 1a) if they just changed the “from”, always clear that row’s “to”
        if (key === 'from' && ((_a = dates[index].to) === null || _a === void 0 ? void 0 : _a.isBefore(date, 'dates'))) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose “from” is on or before the changed date
        for (let i = index + 1; i < dates.length; i++) {
            const rowFrom = (_b = dates[i]) === null || _b === void 0 ? void 0 : _b.from;
            if (rowFrom && rowFrom.isSameOrBefore(date, 'day')) {
                dates[i] = { from: null, to: null };
            }
        }
        // 3) commit
        this.dates = dates;
        // 4) open the appropriate picker
        setTimeout(() => {
            var _a, _b;
            if (key === 'from') {
                (_a = this.dateRefs[index]) === null || _a === void 0 ? void 0 : _a.to.openDatePicker();
            }
            else {
                const nextFrom = dates.findIndex(d => d.from === null);
                if (nextFrom > -1) {
                    (_b = this.dateRefs[nextFrom]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
                }
            }
        }, 100);
    }
    addDateRow() {
        const last_dates = this.dates[this.dates.length - 1];
        if (!last_dates.from || !last_dates.to) {
            this.errors = 'dates';
            return;
        }
        this.errors = null;
        this.dates = [...this.dates, { from: null, to: null }];
        setTimeout(() => {
            var _a;
            (_a = this.dateRefs[this.dates.length - 1].to) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
    render() {
        return (h("form", { key: 'dc430e242a61d1afbf773352b3e4dfdac388d8d4', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'e22d33cad3a591efa98cfcd6ec900c888cd05e30', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: '3fbbd6752adc8b44f24c0482925138cda9d71efd', onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (this.isLoading) {
                    return;
                }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0", label: "Bulk Stop/Open Sale", displayContext: "sidebar" })), h("div", { key: 'fe12f6ef01fb765d251c95ffc8ecaef9da68d50d', class: "sheet-body px-1" }, h("div", { key: '83b6173efa73fe454fdfd812447e560584bbc056', class: "text-muted text-left py-0 my-0" }, h("p", { key: 'e30cbbf3635df03a59751d47a17afa7d4a8b0f0e' }, "Select the affected unit(s). ", h("span", { key: 'e51020743b8f4c2a89433e0b89a3f2d2d21d70a4', class: "text-warning" }, "This operation might require several minutes."))), h("div", { key: '4b758eacdfaf7b7cd12d52dc3b3beda77f1278a2' }, this.errors === 'rooms' && (h("p", { key: 'fa217d9844e411be0ba698c9a8c672c52922b669', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, "Please select at least one ", calendar_data.is_vacation_rental ? 'listing' : 'unit')), h("table", { key: '4aead1ed9ad9f975d9e41cae8a87657dafc34e74', ref: el => (this.unitSections = el) }, h("thead", { key: '16bc5e6c0eb3a44baa01174fa719b51e19066153' }, h("tr", { key: 'c860a7b68222a1a2b662ef6a878f770e5290f494' }, h("th", { key: 'e173a93de80339a3afad5cbd15a4f4c23cc11cf7', class: "sr-only" }, "choice"), h("th", { key: '3136c361f2c175c16591d016565e5ddd920897b4', class: "sr-only" }, "room type"))), h("tbody", { key: '1ca66d69ed8ccb415d2fb83d6aed31e5dc3e33f6' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("ir-select", { LabelAvailable: false, data: [
                    { value: 'open', text: 'Open' },
                    { value: 'closed', text: 'Stop sale' },
                ], onSelectChange: e => {
                    const choice = e.detail;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                } }))), h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), h("p", { key: 'edbfe33155335ef4b9596e94adcc2ca89b769708', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: '12c08d9514109f4776bfa95f807deb3722f2f0ba', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '4f7beed71414a74a14e895b44d44b3dcf8203712', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: 'c21d329a0b427009dbd4dd4333af0c2e8e76951b', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: '76aff3f8006ea476ee347a4c33dd8e1c12aa05a5' }, h("tr", { key: 'f70d2a21565a3bc36706b1bb41650ccc13a305eb' }, h("th", { key: 'dd345d64097b357a924cd0dd2b33945b5e2b8b3b', class: "text-left" }, "From"), h("th", { key: '0ac32326adf2a21acd052f87f7e2754b709b7748', class: "text-left" }, "to (inclusive)"), h("td", { key: '8efb9202b3e6bbc60d7d86e0fcfefc8ca12f42c2' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '5fb0df1d5a74549b72f9c0750a424d17824e3f7a', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '9e7c0709455f82e224f8de7ffe3dd2dec8bf379a' }, this.dates.map((d, i) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (_c = (_b = (_a = this.dates[i - 1]) === null || _a === void 0 ? void 0 : _a.to.clone().add(1, 'days')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD')) !== null && _c !== void 0 ? _c : this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? (_e = (_d = this.dates[i]) === null || _d === void 0 ? void 0 : _d.from.clone().add(1, 'days')) === null || _e === void 0 ? void 0 : _e.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { ref: el => {
                    this.dateRefs[i].from = el;
                }, forceDestroyOnUpdate: true, minDate: fromDateMinDate, "data-testid": "pickup_arrival_date", date: (_f = d.from) === null || _f === void 0 ? void 0 : _f.format('YYYY-MM-DD'), emitEmptyDate: true, "aria-invalid": String(this.errors === 'dates' && !d.from), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'from' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (i === 0) {
                        return;
                    }
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
                        return;
                    }
                    if (!((_c = this.dates[index]) === null || _c === void 0 ? void 0 : _c.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: (_g = d.to) === null || _g === void 0 ? void 0 : _g.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c, _d;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_c = (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from) === null || _c === void 0 ? void 0 : _c.openDatePicker();
                        return;
                    }
                    if (!((_d = this.dates[index]) === null || _d === void 0 ? void 0 : _d.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (h("td", { class: "pb-1" }, h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), h("div", { key: '5a4356eb00e23814c9d84f1975300fdec8c28913', class: 'sheet-footer' }, h("ir-button", { key: '09aebbb6e5e495e6aeb4d8e150e5aaa1f1551fba', text: "Cancel", btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '2e0a587f2e295a43768bf7bc81ec8b540269acff', isLoading: this.isLoading, text: "Save", btn_type: "submit", class: "flex-fill" }))));
    }
    static get is() { return "igl-bulk-stop-sale"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "maxDatesLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "max-dates-length",
                "reflect": false,
                "defaultValue": "8"
            }
        };
    }
    static get states() {
        return {
            "selectedRoomTypes": {},
            "errors": {},
            "isLoading": {},
            "dates": {},
            "selectedWeekdays": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "beforeSidebarClose",
                "method": "handleBeforeSidebarClose",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-bulk-stop-sale.js.map
