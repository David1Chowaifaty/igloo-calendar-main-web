import { h, Host } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import locales from "../../../stores/locales.store";
export class IglPagetwo {
    constructor() {
        this.showPaymentDetails = undefined;
        this.currency = undefined;
        this.isEditOrAddRoomEvent = undefined;
        this.dateRangeData = undefined;
        this.bookingData = undefined;
        this.showSplitBookingOption = undefined;
        this.language = undefined;
        this.bookedByInfoData = undefined;
        this.propertyId = undefined;
        this.bedPreferenceType = undefined;
        this.selectedRooms = undefined;
        this.isLoading = undefined;
        this.countryNodeList = undefined;
        this.selectedGuestData = undefined;
        this.defaultGuestData = undefined;
        this.selectedBookedByData = undefined;
        this.guestData = undefined;
        this.selectedUnits = {};
    }
    componentWillLoad() {
        this.initializeGuestData();
        this.selectedBookedByData = this.bookedByInfoData;
    }
    initializeGuestData() {
        let total = 0;
        const newSelectedUnits = Object.assign({}, this.selectedUnits);
        const getRate = (rate, totalNights, isRateModified, preference) => {
            if (isRateModified && preference === 2) {
                return rate * totalNights;
            }
            return rate;
        };
        this.selectedUnits = newSelectedUnits;
        this.guestData = [];
        this.selectedRooms.forEach((room, key) => {
            room.forEach(rate_plan => {
                newSelectedUnits[key] = rate_plan.selectedUnits;
                total += rate_plan.totalRooms * getRate(rate_plan.rate, this.dateRangeData.dateDifference, rate_plan.isRateModified, rate_plan.rateType);
                for (let i = 1; i <= rate_plan.totalRooms; i++) {
                    this.guestData.push(Object.assign({ guestName: '', roomId: '', preference: '' }, rate_plan));
                }
            });
        });
        this.bookingData.TOTAL_PRICE = total;
    }
    handleOnApplicationInfoDataUpdateEvent(event, index) {
        const opt = event.detail;
        const categoryIdKey = `c_${opt.data.roomCategoryId}`;
        const updatedUnits = [...(this.selectedUnits[categoryIdKey] || [])];
        updatedUnits[index] = opt.data.roomId;
        this.selectedUnits = Object.assign(Object.assign({}, this.selectedUnits), { [categoryIdKey]: updatedUnits });
        this.dataUpdateEvent.emit({
            key: 'applicationInfoUpdateEvent',
            value: event.detail,
        });
    }
    handleEventData(event, key, index) {
        if (key === 'application-info') {
            this.handleOnApplicationInfoDataUpdateEvent(event, index);
        }
        else {
            this.selectedBookedByData = event.detail.data;
            this.dataUpdateEvent.emit({
                key: 'propertyBookedBy',
                value: event.detail,
            });
        }
    }
    isGuestDataIncomplete() {
        if (this.selectedGuestData.length !== this.guestData.length) {
            return true;
        }
        for (const data of this.selectedGuestData) {
            if (data.guestName === '' || data.preference === '' || data.roomId === '') {
                return true;
            }
        }
        return false;
    }
    isButtonDisabled(key) {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.selectedGuestData) {
                return this.isGuestDataIncomplete();
            }
            // const isCardDetails = ['cardNumber', 'cardHolderName', 'expiryMonth', 'expiryYear'].includes(key);
            // if (!this.showPaymentDetails && isCardDetails) {
            //   return false;
            // }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (this.isLoading === key ||
            isValidProperty(this.selectedGuestData, 'guestName', '') ||
            isValidProperty(this.selectedBookedByData, 'isdCode', '') ||
            isValidProperty(this.selectedBookedByData, 'contactNumber', '') ||
            isValidProperty(this.selectedBookedByData, 'firstName', '') ||
            isValidProperty(this.selectedBookedByData, 'lastName', '') ||
            isValidProperty(this.selectedBookedByData, 'countryId', -1) ||
            isValidProperty(this.selectedBookedByData, 'selectedArrivalTime', '') ||
            isValidProperty(this.selectedBookedByData, 'email', ''));
    }
    render() {
        return (h(Host, { key: '31e002672954d89d9f11fceb6d05c028f00ffeb8' }, h("div", { key: '819fc3abb3b5a6f2b56823b68f59721e2eb8ac17', class: "d-flex flex-wrap" }, h("ir-date-view", { key: 'bd6af801f149914a4c1d4a2d8ffe33b2ccf49a1c', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: this.dateRangeData.fromDateStr, to_date: this.dateRangeData.toDateStr, dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (h("div", { key: 'f23d70bed4f780721513fdc2259705a40f5a1d92', class: "mt-1 mt-md-0 text-right" }, locales.entries.Lcz_TotalPrice, " ", h("span", { key: 'ace47b4c8affd5e53788a8bcca8d2715a9e136d6', class: "font-weight-bold font-medium-1" }, formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), this.guestData.map((roomInfo, index) => {
            return (h("igl-application-info", { dateDifference: this.dateRangeData.dateDifference, defaultGuestPreference: this.defaultGuestData.bed_preference, defaultGuestRoomId: this.defaultGuestData.PR_ID, currency: this.currency, bedPreferenceType: this.bedPreferenceType, index: index, selectedUnits: this.selectedUnits[`c_${roomInfo.roomCategoryId}`], guestInfo: roomInfo, guestRefKey: index, bookingType: this.bookingData.event_type, roomsList: roomInfo.physicalRooms, onDataUpdateEvent: event => this.handleEventData(event, 'application-info', index) }));
        }), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (h("igl-property-booked-by", { propertyId: this.propertyId, countryNodeList: this.countryNodeList, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => {
                console.log('user info details', event.detail);
                this.handleEventData(event, 'propertyBookedBy', 0);
            } })), this.isEditOrAddRoomEvent ? (h("div", { class: "d-flex p-0 mb-1 mt-2" }, h("div", { class: "flex-fill mr-2" }, h("ir-button", { icon: "", text: locales.entries.Lcz_Back, class: "full-width", btn_color: "secondary", btn_styles: "justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'back' }) })), h("div", { class: "flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'save', onClickHanlder: () => this.buttonClicked.emit({ key: 'save' }), btn_styles: "full-width align-items-center justify-content-center", text: locales.entries.Lcz_Save })))) : (h("div", { class: "d-flex flex-column flex-md-row p-0 mb-1 mt-2 justify-content-md-between align-items-md-center" }, h("div", { class: "flex-fill mr-md-1" }, h("ir-button", { icon_name: "angles_left", btn_color: "secondary", btn_styles: "full-width align-items-center justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'back' }), text: locales.entries.Lcz_Back, style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })), h("div", { class: "mt-1 mt-md-0 flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'book', btn_styles: "full-width align-items-center justify-content-center", onClickHanlder: () => this.buttonClicked.emit({ key: 'book' }), text: locales.entries.Lcz_Book }))))));
    }
    static get is() { return "igl-pagetwo"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-pagetwo.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-pagetwo.css"]
        };
    }
    static get properties() {
        return {
            "showPaymentDetails": {
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
                "attribute": "show-payment-details",
                "reflect": false
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency",
                    "resolved": "ICurrency",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/calendarData",
                            "id": "src/models/calendarData.ts::ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "isEditOrAddRoomEvent": {
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
                "attribute": "is-edit-or-add-room-event",
                "reflect": true
            },
            "dateRangeData": {
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
                }
            },
            "bookingData": {
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
                }
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
                "attribute": "show-split-booking-option",
                "reflect": false
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
                "attribute": "language",
                "reflect": false
            },
            "bookedByInfoData": {
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
                }
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
                "attribute": "property-id",
                "reflect": false
            },
            "bedPreferenceType": {
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
                "attribute": "bed-preference-type",
                "reflect": false
            },
            "selectedRooms": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Map<string, Map<string, any>>",
                    "resolved": "Map<string, Map<string, any>>",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "isLoading": {
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
                "attribute": "is-loading",
                "reflect": true
            },
            "countryNodeList": {
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
                "attribute": "country-node-list",
                "reflect": false
            },
            "selectedGuestData": {
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
                "attribute": "selected-guest-data",
                "reflect": false
            },
            "defaultGuestData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IglBookPropertyPayloadEditBooking",
                    "resolved": "IglBookPropertyPayloadEditBooking",
                    "references": {
                        "IglBookPropertyPayloadEditBooking": {
                            "location": "import",
                            "path": "../../../models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::IglBookPropertyPayloadEditBooking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "selectedBookedByData": {},
            "guestData": {},
            "selectedUnits": {}
        };
    }
    static get events() {
        return [{
                "method": "dataUpdateEvent",
                "name": "dataUpdateEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPageTwoDataUpdateProps",
                    "resolved": "IPageTwoDataUpdateProps",
                    "references": {
                        "IPageTwoDataUpdateProps": {
                            "location": "import",
                            "path": "@/models/models",
                            "id": "src/models/models.ts::IPageTwoDataUpdateProps"
                        }
                    }
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
                    "original": "{\r\n    key: TPropertyButtonsTypes;\r\n    data?: CustomEvent;\r\n  }",
                    "resolved": "{ key: TPropertyButtonsTypes; data?: CustomEvent<any>; }",
                    "references": {
                        "TPropertyButtonsTypes": {
                            "location": "import",
                            "path": "../../../models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::TPropertyButtonsTypes"
                        },
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=igl-pagetwo.js.map
