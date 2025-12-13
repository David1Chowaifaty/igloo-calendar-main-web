import { getVisibleInventory } from "../../../../../stores/booking.store";
import { Host, h } from "@stencil/core";
export class IglRoomType {
    roomType;
    bookingType = 'PLUS_BOOKING';
    dateDifference;
    ratePricingMode = [];
    roomInfoId = null;
    currency;
    initialRoomIds;
    isBookDisabled;
    selectedRooms = [];
    totalRooms;
    roomsDistributions = [];
    dataUpdateEvent;
    validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: 'dfcec7d589967cab61474f9acc81c42d7d6992f4' }, isValidBookingType && this.roomType.rateplans?.length > 0 && h("h5", { key: '2237daac0a7033f74d5373dc7e6b94828a59bea0', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                // let roomId = -1;
                // if (shouldBeDisabled && this.initialRoomIds) {
                //   roomId = this.initialRoomIds.roomId;
                // }
                const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                return (h("igl-rate-plan", {
                    // is_bed_configuration_enabled={this.roomType.is_bed_configuration_enabled}
                    // index={index}
                    isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency,
                    // dateDifference={this.dateDifference}
                    ratePlan: ratePlan, roomTypeId: this.roomType.id,
                    // totalAvailableRooms={this.roomsDistributions[index]}
                    bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled
                }));
            }
            return null;
        })));
    }
    static get is() { return "igl-room-type"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-room-type.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-room-type.css"]
        };
    }
    static get properties() {
        return {
            "roomType": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType",
                    "resolved": "RoomType",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RoomType"
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
            "bookingType": {
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
                "attribute": "booking-type",
                "reflect": false,
                "defaultValue": "'PLUS_BOOKING'"
            },
            "dateDifference": {
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
                "attribute": "date-difference",
                "reflect": false
            },
            "ratePricingMode": {
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
                "setter": false,
                "defaultValue": "[]"
            },
            "roomInfoId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
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
                "attribute": "room-info-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "currency": {
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
                "attribute": "currency",
                "reflect": false
            },
            "initialRoomIds": {
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
                "attribute": "initial-room-ids",
                "reflect": false
            },
            "isBookDisabled": {
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
                "attribute": "is-book-disabled",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedRooms": {},
            "totalRooms": {},
            "roomsDistributions": {}
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
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-room-type.js.map
