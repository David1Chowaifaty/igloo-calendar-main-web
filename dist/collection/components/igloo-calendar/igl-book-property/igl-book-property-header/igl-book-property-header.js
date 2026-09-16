import { Host, h, Fragment } from "@stencil/core";
import moment from "moment";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import calendar_data from "../../../../stores/calendar-data";
import booking_store, { setBookingDraft } from "../../../../stores/booking.store";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { z } from "zod";
import { showToast } from "../../../../utils/utils";
import { formatDate } from "../../../../utils/date/index";
import { formatBookingNumber, formatCount } from "../../../../utils/number";
import { t } from "../../../../services/locale/t";
export class IglBookPropertyHeader {
    splitBookingId = '';
    bookingData = '';
    minDate;
    message;
    bookingDataDefaultDateRange;
    showSplitBookingOption = false;
    adultChildConstraints;
    splitBookings;
    dateRangeData;
    bookedByInfoData;
    defaultDaterange;
    propertyId;
    wasBlockedUnit;
    isLoading;
    bookings = [];
    splitBookingDropDownChange;
    checkClicked;
    buttonClicked;
    spiltBookingSelected;
    animateIrSelect;
    autoValidate;
    bookingService = new BookingService();
    adultAnimationContainer;
    async fetchExposedBookings(value) {
        this.isLoading = true;
        this.bookings = await this.bookingService.fetchExposedBookings(value, this.propertyId, moment(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), moment(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'));
        this.isLoading = false;
    }
    getSplitBookingList() {
        return (h("ir-picker", { mode: "select-async", class: "sourceContainer", debounce: 300, "onText-change": e => {
                this.fetchExposedBookings(e.detail);
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${t('Lcz_Tobooking', { fallback: 'To booking' })}#`, placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })));
    }
    getSourceNode() {
        const { sources } = booking_store.selects;
        return (h("wa-select", { size: "s", placeholder: t('Lcz_Source', { fallback: 'Source' }), value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: evt => {
                setBookingDraft({ source: sources.find(s => s.id === evt.target.value) });
            } }, sources.map(option => {
            if (option.type === 'LABEL') {
                return h("small", null, option.description);
            }
            return h("wa-option", { value: option.id?.toString() }, option.description);
        })));
    }
    getAdultChildConstraints() {
        const { adults, children } = booking_store.bookingDraft.occupancy;
        return (h(Fragment, null, h("ir-validator", { value: adults, schema: z.number().min(1), autovalidate: this.autoValidate }, h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: t('Lcz_Adults', { fallback: 'adults' }), size: "s" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, formatCount(option)))))), this.adultChildConstraints.child_max_nbr > 0 && (h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "s" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, formatCount(option))))))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = t('Lcz_Years', { fallback: 'years' });
        if (maxAge === 1) {
            years = t('Lcz_Year', { fallback: 'year' });
        }
        return `${t('Lcz_ChildCaption', { fallback: 'Child.' })} ${formatCount(0)} - ${formatCount(this.adultChildConstraints.child_max_age)} ${years}`;
    }
    handleButtonClicked() {
        const { occupancy } = booking_store.bookingDraft;
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            showToast({
                type: 'error',
                title: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = moment(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = moment(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = moment(new Date(this.dateRangeData.fromDate));
            const selectedToDate = moment(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                showToast({
                    type: 'error',
                    title: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'), formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY')] })}  `,
                });
                return;
            }
            else if (Number(occupancy.adults) === 0) {
                showToast({ type: 'error', title: t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }) });
                // this.adultAnimationContainer.play = true;
                this.autoValidate = true;
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        // else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
        //   showToast({
        //     type: 'error',
        //     title: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.' }).replace(
        //       '%1',
        //       formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'),
        //     ).replace('%2', formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY'))}  `,
        //     description: '',
        //   });
        // }
        else if (Number(occupancy.adults) === 0) {
            // this.adultAnimationContainer.play = true;
            this.autoValidate = true;
            showToast({ type: 'error', title: t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }), description: '' });
        }
        else {
            this.buttonClicked.emit({ key: 'check' });
        }
    }
    isEventType(key) {
        return this.bookingData.event_type === key;
    }
    getMinDate() {
        if (this.isEventType('PLUS_BOOKING')) {
            return moment().add(-1, 'months').startOf('month').format('YYYY-MM-DD');
        }
        if (this.wasBlockedUnit) {
            return this.bookingData?.block_exposed_unit_props.from_date;
        }
        return this.minDate;
    }
    getMaxDate() {
        if (!this.bookingData?.block_exposed_unit_props) {
            // if (this.isEventType('PLUS_BOOKING')) {
            //   return moment().add(60, 'days').format('YYYY-MM-DD');
            // }
            return undefined;
        }
        return this.bookingData?.block_exposed_unit_props.to_date;
    }
    render() {
        console.log(this.bookingData.event_type);
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (h(Host, { key: 'b47bfbb711c72a0b13c8c2963e221e75b9a03b21' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), h("div", { key: 'c86b79a38fcb615395eb7d755d4c396f93c02255', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), h("ir-date-range", { key: '3bd944508a8ac4e9a59afc2702769bc18fbcecb9', "data-testid": "date_picker", variant: "booking", dateLabel: t('Lcz_Dates', { fallback: 'Dates' }), maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints(), h("ir-custom-button", { key: '1b9dda389313d2058a9ea8cfe74f17d2311f6c1f', loading: isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, t('Lcz_Check', { fallback: 'Check' }))), h("p", { key: '2e3d45bc1b590e9a1f7ab01e07a6b66c4eccda0b', class: "ir-text-end message-label" }, calendar_data.tax_statement)));
    }
    static get is() { return "igl-book-property-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-book-property-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-book-property-header.css"]
        };
    }
    static get properties() {
        return {
            "splitBookingId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "split-booking-id",
                "defaultValue": "''"
            },
            "bookingData": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "booking-data",
                "defaultValue": "''"
            },
            "minDate": {
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
                "attribute": "min-date"
            },
            "message": {
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
                "attribute": "message"
            },
            "bookingDataDefaultDateRange": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
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
            "showSplitBookingOption": {
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
                "attribute": "show-split-booking-option",
                "defaultValue": "false"
            },
            "adultChildConstraints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TAdultChildConstraints",
                    "resolved": "{ adult_max_nbr: number; child_max_nbr: number; child_max_age: number; }",
                    "references": {
                        "TAdultChildConstraints": {
                            "location": "import",
                            "path": "../../../../models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::TAdultChildConstraints",
                            "referenceLocation": "TAdultChildConstraints"
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
            "splitBookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
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
            "dateRangeData": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "date-range-data"
            },
            "bookedByInfoData": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "booked-by-info-data"
            },
            "defaultDaterange": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from_date: string; to_date: string }",
                    "resolved": "{ from_date: string; to_date: string; }",
                    "references": {}
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
            "propertyId": {
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
                "reflect": false,
                "attribute": "property-id"
            },
            "wasBlockedUnit": {
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
                "attribute": "was-blocked-unit"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "bookings": {},
            "autoValidate": {}
        };
    }
    static get events() {
        return [{
                "method": "splitBookingDropDownChange",
                "name": "splitBookingDropDownChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "checkClicked",
                "name": "checkClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "buttonClicked",
                "name": "buttonClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: TPropertyButtonsTypes }",
                    "resolved": "{ key: TPropertyButtonsTypes; }",
                    "references": {
                        "TPropertyButtonsTypes": {
                            "location": "import",
                            "path": "../../../../models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::TPropertyButtonsTypes",
                            "referenceLocation": "TPropertyButtonsTypes"
                        }
                    }
                }
            }, {
                "method": "spiltBookingSelected",
                "name": "spiltBookingSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: string; data: unknown }",
                    "resolved": "{ key: string; data: unknown; }",
                    "references": {}
                }
            }, {
                "method": "animateIrSelect",
                "name": "animateIrSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
