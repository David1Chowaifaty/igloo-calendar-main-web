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
        return (h(Host, { key: '6c698343a19352742d6d66b04a5fc465f536cd84' }, h("div", { key: '417d424ef2402d7db8dbf96339e65fc8f922dfc6', class: "tba-category" }, h("h5", { key: '7d20168dc97072c704bcc91e87892692ed36687f', class: "tba-category__title" }, roomTypeName), rooms.map((room, index) => (h("igl-tba-booking-view", { key: room.room_identifier, calendarData: this.calendarData, selectedDate: this.selectedDate, room: room, roomTypeId: roomTypeId, roomTypeName: roomTypeName, categoryIndex: this.categoryIndex, eventIndex: index, onAssignRoomEvent: this.handleAssignRoom }))))));
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
