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
        return (h(Host, { key: 'e8936bebd7a9981613346250a5c179e9626be6b5' }, h("div", { key: 'c02fce42e58dfb8714285bdd20298b8accdc0c7d', class: "tba-category" }, h("h5", { key: 'ab89960eba8f62aa217bed2757af2b8ad9325941', class: "tba-category__title" }, roomTypeName), rooms.map((room, index) => (h("igl-tba-booking-view", { key: room.room_identifier, calendarData: this.calendarData, selectedDate: this.selectedDate, room: room, roomTypeId: roomTypeId, roomTypeName: roomTypeName, categoryIndex: this.categoryIndex, eventIndex: index, onAssignRoomEvent: this.handleAssignRoom }))))));
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
