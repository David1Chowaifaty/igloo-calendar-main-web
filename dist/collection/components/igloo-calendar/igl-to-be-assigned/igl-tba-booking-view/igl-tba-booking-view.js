import { Host, h } from "@stencil/core";
import { UnassignedUnitsService } from "../../../../services/unassigned-units/index";
import { clampToLoadedRange, guestName, toCalendarAssignedEvent, toCalendarPreviewEvents } from "../../../../services/unassigned-units/utils";
import { t } from "../../../../services/locale/t";
import { formatBookingNumber } from "../../../../utils/number";
import { canCheckIn } from "../../../../utils/utils";
function formatOccupancy({ adult_nbr, children_nbr, infant_nbr }) {
    const parts = [
        [adult_nbr, t('Lcz_AdultAbbreviation', { fallback: 'A' })],
        [children_nbr, t('Lcz_ChildAbbreviation', { fallback: 'C' })],
        [infant_nbr, t('Lcz_InfantAbbreviation', { fallback: 'I' })],
    ];
    return parts
        .filter(([count]) => count > 0)
        .map(([count, label]) => `${count}${label}`)
        .join('-');
}
export class IglTbaBookingView {
    calendarData;
    room;
    roomTypeId;
    roomTypeName;
    selectedDate;
    categoryIndex;
    eventIndex;
    isHighlighted = false;
    selectedUnitId = null;
    pendingAction = null;
    highlightToBeAssignedBookingEvent;
    openCalendarSidebar;
    addToBeAssignedEvent;
    scrollPageToRoom;
    assignRoomEvent;
    unassignedUnitsService = new UnassignedUnitsService();
    componentDidLoad() {
        // The first card opens highlighted so its unit previews are on the calendar as soon as the panel appears.
        if (this.categoryIndex === 0 && this.eventIndex === 0) {
            setTimeout(() => this.highlight(), 100);
        }
    }
    handleSelectedDateChange() {
        this.isHighlighted = false;
        this.selectedUnitId = null;
    }
    /** Keep the picked unit only while this card still shows the same room, and while that room still offers the unit. */
    handleRoomChange(next, prev) {
        if (next.room_identifier !== prev?.room_identifier) {
            this.selectedUnitId = null;
            return;
        }
        if (this.selectedUnitId !== null && !(next.assignable_units ?? []).some(unit => unit.pr_id === this.selectedUnitId)) {
            this.selectedUnitId = null;
        }
    }
    handleHighlightChange(event) {
        const isThisCard = event.detail.data.bookingId === this.room.room_identifier;
        if (!isThisCard) {
            this.selectedUnitId = null;
        }
        this.isHighlighted = isThisCard;
    }
    get eventContext() {
        return {
            roomsInfo: this.calendarData.roomsInfo,
            legendData: this.calendarData.formattedLegendData,
            roomTypeId: this.roomTypeId,
            roomTypeName: this.roomTypeName,
        };
    }
    highlight = () => {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            // Scroll to the first drawn night, which may be later than the stay's start if that is before the loaded range.
            data: { bookingId: this.room.room_identifier, fromDate: clampToLoadedRange(this.room.from_date, this.room.to_date).from },
        });
        if (!this.selectedDate) {
            return;
        }
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: toCalendarPreviewEvents(this.room, this.eventContext) });
        this.scrollPageToRoom.emit({ key: 'scrollPageToRoom', id: this.roomTypeId, refClass: `category_${this.roomTypeId}` });
    };
    handleClose = (event) => {
        event.stopPropagation();
        this.selectedUnitId = null;
        this.highlightToBeAssignedBookingEvent.emit({ key: 'highlightBookingId', data: { bookingId: '----' } });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
    };
    handleUnitChange = (event) => {
        event.stopPropagation();
        const value = event.target.value;
        this.selectedUnitId = value ? Number(value) : null;
    };
    handleAssign = (event) => this.assign(event, false);
    handleAssignAndCheckIn = (event) => this.assign(event, true);
    async assign(event, checkIn) {
        event.stopPropagation();
        if (this.selectedUnitId === null || this.pendingAction) {
            return;
        }
        this.pendingAction = checkIn ? 'checkin' : 'assign';
        try {
            const booking = await this.unassignedUnitsService.assignUnit({
                booking_nbr: this.room.booking_nbr,
                identifier: this.room.room_identifier,
                pr_id: this.selectedUnitId,
                check_in: checkIn,
            });
            if (checkIn) {
                this.openRoomGuests(booking);
            }
            const assigned = toCalendarAssignedEvent(this.room, this.selectedUnitId, this.eventContext);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [assigned] });
            this.assignRoomEvent.emit(assigned);
        }
        catch (error) {
            console.error('Assigning unit failed:', error);
        }
        finally {
            this.pendingAction = null;
        }
    }
    openRoomGuests(booking) {
        const bookedRoom = booking.rooms.find(r => r.identifier === this.room.room_identifier);
        if (!bookedRoom) {
            return;
        }
        const { adult_nbr, children_nbr, infant_nbr } = bookedRoom.occupancy;
        this.openCalendarSidebar.emit({
            type: 'room-guests',
            payload: {
                identifier: this.room.room_identifier,
                bookingNumber: this.room.booking_nbr,
                checkin: false,
                roomName: typeof bookedRoom.unit === 'object' && bookedRoom.unit ? bookedRoom.unit.name : '',
                sharing_persons: bookedRoom.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    render() {
        const { booking_nbr, occupancy, from_date, to_date } = this.room;
        const occupancyLabel = occupancy ? formatOccupancy(occupancy) : '';
        const canCheckInNow = canCheckIn({ from_date: from_date, to_date: to_date });
        const selectedValue = this.selectedUnitId === null ? '' : String(this.selectedUnitId);
        const actionsDisabled = this.selectedUnitId === null || this.pendingAction !== null;
        return (h(Host, { key: 'e4c4d52a110e84ccb9c8331bfbbdc21227f00244' }, h("wa-card", { key: 'e9990d81ad083a14a7a5cec384f9d98099630be2', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, h("div", { key: '5d2ce5daa4d7dcaa9567997e3691b3f9c781fba0', slot: "header", class: "tba__header", title: t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, h("p", { key: 'f6bd22a39c266d518de14b464c66fc64824064a7', class: "tba__booking-number" }, formatBookingNumber(booking_nbr)), h("span", { key: 'bacdb6d713ee7b9ccfb8194c7797cc1873103618', class: "tba__separator" }, "-"), h("p", { key: 'cf683127de7322b2850c0c76ac3c9bc7e511a5da', class: "tba__guest-name" }, guestName(this.room)), occupancyLabel && (h("p", { key: '2cdafc653e3f5bf9083a9945fa37584dfb89920b', class: "tba__occupancy" }, h("span", { key: '7a6e72736d4de7b9975be73a32a73a061ea95d19', class: "tba__occupancy-paren" }, "( "), h("span", { key: 'b4de3bb96132fb92897bd8d3691f15ce32a5d1ef', class: "tba__occupancy-values" }, occupancyLabel), h("span", { key: '54077eecc39b869fea2a10a7a80c8713f58d1433', class: "tba__occupancy-paren" }, " )")))), h("div", { key: '81e67c685288063db07a579efcd9a50d67343225', class: "tba__actions" }, h("wa-select", { key: '36a885234387a73cbfd8797d91a7070d2ffbbfc2', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, h("wa-option", { key: '795ea5d90b375594090b92791dcd1fda6d2a833f', value: "" }, t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (h("div", { key: '3ed612a86667d8b8aa60816b2d37eaf1ad518296', class: "tba__close" }, h("wa-button", { key: '70b642ec0841c9bed728ffbfb92660a9bd8f3091', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, h("wa-icon", { key: '9da944beb64b24764f5c5425f3e1c781fd27c289', name: "xmark" }))))), h("div", { key: '499d7d42999bfdde85de88420af173642fe64a87', class: "tba__assign" }, h("wa-button", { key: 'de34404ff9887b5aaaab7c355f5da9e03affeee4', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (h("wa-button", { key: '6d10b28adbc56d0d422f9e16e6eeb13356b6aead', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t('Lcz_AssignedAndChecIn')))))));
    }
    static get is() { return "igl-tba-booking-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-tba-booking-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-tba-booking-view.css"]
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
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "UnassignedRoomEntry",
                    "resolved": "UnassignedRoomEntry",
                    "references": {
                        "UnassignedRoomEntry": {
                            "location": "import",
                            "path": "@/services/unassigned-units/types",
                            "id": "src/services/unassigned-units/types.ts::UnassignedRoomEntry",
                            "referenceLocation": "UnassignedRoomEntry"
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
            "roomTypeId": {
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
                "attribute": "room-type-id"
            },
            "roomTypeName": {
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
                "attribute": "room-type-name"
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
            },
            "eventIndex": {
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
                "attribute": "event-index"
            }
        };
    }
    static get states() {
        return {
            "isHighlighted": {},
            "selectedUnitId": {},
            "pendingAction": {}
        };
    }
    static get events() {
        return [{
                "method": "highlightToBeAssignedBookingEvent",
                "name": "highlightToBeAssignedBookingEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: 'highlightBookingId'; data: { bookingId: string; fromDate?: string } }",
                    "resolved": "{ key: \"highlightBookingId\"; data: { bookingId: string; fromDate?: string; }; }",
                    "references": {}
                }
            }, {
                "method": "openCalendarSidebar",
                "name": "openCalendarSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarSidebarState",
                    "resolved": "{ type: \"split\" | \"room-guests\" | \"booking-details\" | \"add-days\" | \"bulk-blocks\" | \"reallocate-drawer\" | \"rectifier\"; payload: any; }",
                    "references": {
                        "CalendarSidebarState": {
                            "location": "import",
                            "path": "@/components/igloo-calendar/igloo-calendar",
                            "id": "src/components/igloo-calendar/igloo-calendar.tsx::CalendarSidebarState",
                            "referenceLocation": "CalendarSidebarState"
                        }
                    }
                }
            }, {
                "method": "addToBeAssignedEvent",
                "name": "addToBeAssignedEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: 'tobeAssignedEvents'; data: (CalendarUnitPreviewEvent | CalendarAssignedEvent)[] }",
                    "resolved": "{ key: \"tobeAssignedEvents\"; data: (CalendarUnitPreviewEvent | CalendarAssignedEvent)[]; }",
                    "references": {
                        "CalendarUnitPreviewEvent": {
                            "location": "import",
                            "path": "@/services/unassigned-units/types",
                            "id": "src/services/unassigned-units/types.ts::CalendarUnitPreviewEvent",
                            "referenceLocation": "CalendarUnitPreviewEvent"
                        },
                        "CalendarAssignedEvent": {
                            "location": "import",
                            "path": "@/services/unassigned-units/types",
                            "id": "src/services/unassigned-units/types.ts::CalendarAssignedEvent",
                            "referenceLocation": "CalendarAssignedEvent"
                        }
                    }
                }
            }, {
                "method": "scrollPageToRoom",
                "name": "scrollPageToRoom",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: 'scrollPageToRoom'; id: number | null; refClass: string }",
                    "resolved": "{ key: \"scrollPageToRoom\"; id: number; refClass: string; }",
                    "references": {}
                }
            }, {
                "method": "assignRoomEvent",
                "name": "assignRoomEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarAssignedEvent",
                    "resolved": "CalendarAssignedEvent",
                    "references": {
                        "CalendarAssignedEvent": {
                            "location": "import",
                            "path": "@/services/unassigned-units/types",
                            "id": "src/services/unassigned-units/types.ts::CalendarAssignedEvent",
                            "referenceLocation": "CalendarAssignedEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "selectedDate",
                "methodName": "handleSelectedDateChange"
            }, {
                "propName": "room",
                "methodName": "handleRoomChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "highlightToBeAssignedBookingEvent",
                "method": "handleHighlightChange",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
