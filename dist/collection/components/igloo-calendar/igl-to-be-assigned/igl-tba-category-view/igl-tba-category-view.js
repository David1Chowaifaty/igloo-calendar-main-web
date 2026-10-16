import { Host, h } from "@stencil/core";
export class IglTbaCategoryView {
    calendarData;
    category;
    selectedDate;
    categoryIndex;
    assignUnitEvent;
    handleAssignRoom = (event) => {
        event.stopPropagation();
        this.calendarData.bookingEvents.push(event.detail);
        this.assignUnitEvent.emit({ identifier: event.detail.identifier });
    };
    render() {
        const { roomTypeId, roomTypeName, rooms } = this.category;
        return (h(Host, { key: '50563fc7a63b3a5f19869dc5bf7a0b06e85e3feb' }, h("div", { key: '094aeae9d7fd5a69bf373dea7678bf48e2bec7b9', class: "tba-category" }, h("h5", { key: 'fdb1fd4baa673205f163af31817c814969ee5011', class: "tba-category__title" }, roomTypeName), rooms.map((room, index) => (h("igl-tba-booking-view", { key: room.room_identifier, calendarData: this.calendarData, selectedDate: this.selectedDate, room: room, roomTypeId: roomTypeId, roomTypeName: roomTypeName, categoryIndex: this.categoryIndex, eventIndex: index, onAssignRoomEvent: this.handleAssignRoom }))))));
    }
    static get is() { return "igl-tba-category-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-tba-category-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-tba-category-view.css"]
        };
    }
    static get properties() {
        return {
            "calendarData": {
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
            "category": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "UnassignedCategory",
                    "resolved": "UnassignedCategory",
                    "references": {
                        "UnassignedCategory": {
                            "location": "import",
                            "path": "@/services/unassigned-units/types",
                            "id": "src/services/unassigned-units/types.ts::UnassignedCategory",
                            "referenceLocation": "UnassignedCategory"
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
            "selectedDate": {
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
                "attribute": "selected-date"
            },
            "categoryIndex": {
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
                "attribute": "category-index"
            }
        };
    }
    static get events() {
        return [{
                "method": "assignUnitEvent",
                "name": "assignUnitEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ identifier: string }",
                    "resolved": "{ identifier: string; }",
                    "references": {}
                }
            }];
    }
}
