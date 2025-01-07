import { Host, h } from "@stencil/core";
import booking_store, { calculateTotalCost } from "../../../stores/booking";
import app_store, { onAppDataChange } from "../../../stores/app.store";
import { cn, formatAmount, getDateDifference } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
export class IrBookingPage {
    constructor() {
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.ages = undefined;
        this.childrenCount = undefined;
        this.selectedLocale = undefined;
        this.property = undefined;
        this.currencies = undefined;
        this.languages = undefined;
    }
    componentWillLoad() {
        this.property = Object.assign({}, app_store.property);
        onAppDataChange('property', (newValue) => {
            this.property = Object.assign({}, newValue);
        });
    }
    handleBookingAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.checkoutContainerRef) {
            this.checkoutContainerRef.classList.add('bounce-twice');
            this.checkoutContainerRef.addEventListener('animationend', () => {
                this.checkoutContainerRef.classList.remove('bounce-twice');
            });
        }
    }
    // @Listen('scrollToRoomType')
    // handleScrolling(e: CustomEvent) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   const header: HTMLIrNavElement | null = document.querySelector('ir-be').shadowRoot.querySelector('ir-nav');
    //   this.availabilityHeaderRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //   setTimeout(() => {
    //     window.scrollTo({
    //       top: this.availabilityHeaderRef.getBoundingClientRect().top + window.scrollY - (header !== null ? header.getBoundingClientRect().height + 5 : 80),
    //       behavior: 'smooth',
    //     });
    //   }, 100);
    // }
    handleScrolling(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const header = (_a = document.querySelector('ir-be')) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('ir-nav');
        if (this.availabilityHeaderRef) {
            const headerHeight = (header === null || header === void 0 ? void 0 : header.getBoundingClientRect().height) || 0;
            const targetPosition = this.availabilityHeaderRef.getBoundingClientRect().top + window.scrollY - (headerHeight + 5);
            const currentPosition = window.scrollY;
            const tolerance = 10;
            if (currentPosition === 0 || Math.abs(currentPosition - targetPosition) > tolerance) {
                this.availabilityHeaderRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    window.scrollTo({
                        top: this.availabilityHeaderRef.getBoundingClientRect().top + window.scrollY - (header !== null ? header.getBoundingClientRect().height + 5 : 80),
                        behavior: 'smooth',
                    });
                }, 100);
            }
        }
    }
    renderTotalNights() {
        var _a, _b;
        const diff = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        return `${diff} ${diff > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night}`;
    }
    // private checkMaxAmount() {
    //   if (!booking_store.enableBooking) {
    //     return;
    //   }
    //   return booking_store.roomTypes.some(rt => {
    //     return rt?.rateplans.some(rp =>
    //       rp?.variations.some(v => {
    //         console.log(v.total_before_discount); // Debugging line
    //         return v.total_before_discount.toString().length > 8;
    //       }),
    //     );
    //   });
    // }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.property) {
            return null;
        }
        // console.log(this.checkMaxAmount());
        const { totalAmount } = calculateTotalCost();
        const isInjected = app_store.app_data.injected;
        return (h(Host, null, h("div", { class: "space-y-5 " }, isInjected && app_store.app_data.view === 'default' ? null : (h("div", { ref: el => (this.propertyGalleryRef = el) }, h("ir-property-gallery", null))), isInjected && app_store.app_data.view === 'extended' && h("p", { innerHTML: (_b = (_a = this.property) === null || _a === void 0 ? void 0 : _a.description) === null || _b === void 0 ? void 0 : _b.location_and_intro, class: "py-2" }), h("div", null, h("ir-availability-header", { ages: this.ages, ref: el => (this.availabilityHeaderRef = el), fromDate: this.fromDate, toDate: this.toDate, adultCount: this.adultCount, childrenCount: this.childrenCount })), h("section", { class: app_store.app_data.displayMode === 'default' ? 'relative justify-between gap-4 rounded-md ' : '', ref: el => (this.roomTypeSectionRef = el) }, h("div", { class: app_store.app_data.displayMode === 'default' ? ' flex-1 py-2' : 'grid-container' }, (_c = booking_store.roomTypes) === null || _c === void 0 ? void 0 : _c.map(roomType => {
            if (!roomType.is_active ||
                (app_store.app_data.roomtype_id && roomType.id !== app_store.app_data.roomtype_id) ||
                !roomType.rateplans.some(rp => rp.is_booking_engine_enabled) ||
                (!!booking_store.bookingAvailabilityParams.agent && roomType.rateplans.filter(rp => rp.is_targeting_travel_agency).length === 0)) {
                return null;
            }
            return h("ir-roomtype", { display: app_store.app_data.displayMode, roomtype: roomType, key: roomType.id });
        }))), h("section", { class: cn('text-sm', { 'pb-5': isInjected }) }, h("h2", { class: "mb-5 text-lg font-medium" }, localizedWords.entries.Lcz_FacilitiesAndServices), h("ir-facilities", null), !isInjected && h("p", { innerHTML: (_e = (_d = this.property) === null || _d === void 0 ? void 0 : _d.description) === null || _e === void 0 ? void 0 : _e.location_and_intro, class: "px-6 py-8" }))), booking_store.enableBooking && totalAmount > 0 && (h("div", { ref: el => (this.checkoutContainerRef = el), class: "sticky bottom-2 z-40 mt-14 flex w-full items-center justify-end gap-4 rounded-md bg-gray-700/80 text-base text-gray-200 md:text-lg lg:gap-10  lg:text-2xl" }, h("p", null, this.renderTotalNights()), totalAmount > 0 && (h("div", { class: "total-amount-container" }, h("span", null, formatAmount(totalAmount, app_store.userPreferences.currency_id, 0)), ((_f = booking_store.childrenAges) === null || _f === void 0 ? void 0 : _f.some(age => Number(age) < app_store.childrenStartAge)) && (h("ir-tooltip", { class: "infant-tooltip", message: localizedWords.entries.Lcz_PriceDrop })))), h("ir-button", { onButtonClick: () => this.routing.emit('checkout'), label: localizedWords.entries.Lcz_BookNow, size: "lg", class: "w-auto lg:w-60", disabled: isRequestPending('/Check_Availability'), buttonStyles: {
                height: '64px',
                borderRadius: '0',
                borderTopRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderBottomRightRadius: app_store.dir === 'RTL' ? '0px' : '6px',
                borderTopLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
                borderBottomLeftRadius: app_store.dir === 'RTL' ? '6px' : '0px',
            } })))));
    }
    static get is() { return "ir-booking-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-page.css"]
        };
    }
    static get properties() {
        return {
            "fromDate": {
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
                "attribute": "from-date",
                "reflect": false
            },
            "toDate": {
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
                "attribute": "to-date",
                "reflect": false
            },
            "adultCount": {
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
                "attribute": "adult-count",
                "reflect": false
            },
            "ages": {
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
                "attribute": "ages",
                "reflect": false
            },
            "childrenCount": {
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
                "attribute": "children-count",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedLocale": {},
            "property": {},
            "currencies": {},
            "languages": {}
        };
    }
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\" | \"user-profile\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "animateBookingButton",
                "method": "handleBookingAnimation",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "scrollToRoomType",
                "method": "handleScrolling",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-page.js.map
