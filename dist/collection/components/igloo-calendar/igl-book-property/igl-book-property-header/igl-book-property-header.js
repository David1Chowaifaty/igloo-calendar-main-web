import { Host, h, Fragment } from "@stencil/core";
import moment from "moment";
import locales from "../../../../stores/locales.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import calendar_data from "../../../../stores/calendar-data";
import booking_store, { setBookingDraft } from "../../../../stores/booking.store";
import { BookingService } from "../../../../services/booking-service/booking.service";
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
    toast;
    spiltBookingSelected;
    animateIrSelect;
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
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${locales.entries.Lcz_Tobooking}#`, placeholder: locales.entries.Lcz_BookingNumber, loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })));
    }
    getSourceNode() {
        const { sources } = booking_store.selects;
        return (h("wa-select", { size: "small", placeholder: locales.entries.Lcz_Source, value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
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
        return (h(Fragment, null, h("wa-animation", { iterations: 2, name: "bounce", easing: "ease-in-out", duration: 2000, ref: el => (this.adultAnimationContainer = el) }, h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: locales.entries.Lcz_AdultsCaption, size: "small" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option))))), this.adultChildConstraints.child_max_nbr > 0 && (h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "small" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option))))), h("ir-custom-button", { loading: isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, locales.entries.Lcz_Check)));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = locales.entries.Lcz_Years;
        if (maxAge === 1) {
            years = locales.entries.Lcz_Year;
        }
        return `${locales.entries.Lcz_ChildCaption} 0 - ${this.adultChildConstraints.child_max_age} ${years}`;
    }
    handleButtonClicked() {
        const { occupancy } = booking_store.bookingDraft;
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            this.toast.emit({
                type: 'error',
                title: locales.entries.Lcz_ChooseBookingNumber,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = moment(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = moment(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = moment(new Date(this.dateRangeData.fromDate));
            const selectedToDate = moment(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                this.toast.emit({
                    type: 'error',
                    title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', moment(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                    description: '',
                    position: 'top-right',
                });
                return;
            }
            else if (occupancy.adults === 0) {
                this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
                this.adultAnimationContainer.play = true;
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
            this.toast.emit({
                type: 'error',
                title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', moment(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                description: '',
                position: 'top-right',
            });
        }
        else if (occupancy.adults === 0) {
            this.adultAnimationContainer.play = true;
            this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
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
            return undefined;
        }
        return this.bookingData?.block_exposed_unit_props.to_date;
    }
    render() {
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (h(Host, { key: 'bda8e29b0f8140c78c81ea4526770703ce3580d8' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), h("div", { key: 'a98f0aa40e4ab272ba23335b3fd8c1f1ae9d0ea9', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), h("igl-date-range", { key: '8340c10a293df627849112dcbad23ddd6f05a8f9', "data-testid": "date_picker", variant: "booking", dateLabel: locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), h("p", { key: '7dc3f7264d391d6dfe2e97678970e8055fb4d0c2', class: "text-right message-label" }, calendar_data.tax_statement)));
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
                "attribute": "split-booking-id",
                "reflect": false,
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
                "attribute": "booking-data",
                "reflect": false,
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
                "attribute": "min-date",
                "reflect": false
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
                "attribute": "message",
                "reflect": false
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
                "attribute": "show-split-booking-option",
                "reflect": false,
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
                            "id": "src/models/igl-book-property.d.ts::TAdultChildConstraints"
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
                "attribute": "date-range-data",
                "reflect": false
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
                "attribute": "booked-by-info-data",
                "reflect": false
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
                "attribute": "property-id",
                "reflect": false
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
                "attribute": "was-blocked-unit",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "bookings": {}
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
                            "id": "src/models/igl-book-property.d.ts::TPropertyButtonsTypes"
                        }
                    }
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
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
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
//# sourceMappingURL=igl-book-property-header.js.map
