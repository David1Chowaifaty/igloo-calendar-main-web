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
        return (h(Host, { key: 'ecf3bbfb37ae825742b0ca4a1a916dbe18a392af' }, h("wa-card", { key: 'dcc29ffb4fbe6906a191669ded65fe224d5d4003', appearance: "filled", class: this.isHighlighted ? 'tba --active' : 'tba', onClick: this.highlight }, h("div", { key: '4a12515ba7ee766af2ec81f970dea98e5c626637', slot: "header", class: "tba__header", title: t('Lcz_ClickToAssignUnit', { fallback: 'Click to assign unit' }) }, h("p", { key: 'cd8c7fbaa96b769edba9dbdf14569f6c13567c3a', class: "tba__booking-number" }, formatBookingNumber(booking_nbr)), h("span", { key: '2c384b18b3dc4653c481826069934580863cb25d', class: "tba__separator" }, "-"), h("p", { key: '0e5229457f83887814e493709398fa3c14afd62b', class: "tba__guest-name" }, guestName(this.room)), occupancyLabel && (h("p", { key: '7facf81e82562e24ab4607af975d08f0bece1af2', class: "tba__occupancy" }, h("span", { key: 'cf2dff6c90b31a16176956dc7e03245cebe4d958', class: "tba__occupancy-paren" }, "( "), h("span", { key: '9dcf0b070795d180e7d04a3163a0c75ec7a36624', class: "tba__occupancy-values" }, occupancyLabel), h("span", { key: 'bbd069ed31a79cf76964d655a3223723a2d88690', class: "tba__occupancy-paren" }, " )")))), h("div", { key: 'aabdd3c7c9ae5f009fe408902d477760fe9de83d', class: "tba__actions" }, h("wa-select", { key: '4a6659253215c7542d840a38b44174c7b82a2be1', class: "tba__select", size: "s", value: selectedValue, defaultValue: selectedValue, onchange: this.handleUnitChange }, h("wa-option", { key: '7bc27a3cd9138d1a99488020c6433c728cd7a5c7', value: "" }, t('Lcz_AssignUnit')), (this.room.assignable_units ?? []).map(unit => (h("wa-option", { key: unit.pr_id, value: String(unit.pr_id) }, unit.name)))), this.isHighlighted && (h("div", { key: 'b0bfcb07f1435373b291dd96551295269f1f91ab', class: "tba__close" }, h("wa-button", { key: 'd9b02779a630d568f94ce78116f0f380ec7e261b', type: "button", appearance: "plain", size: "s", class: "tba__close-btn", onClick: this.handleClose }, h("wa-icon", { key: 'fa02ea739734fe899e01eb55500c4e75e752812a', name: "xmark" }))))), h("div", { key: '3f067414ea46ce95c05446a06e9dc92fd16e0b2d', class: "tba__assign" }, h("wa-button", { key: '8b401cb133776fc4c68341838bd0847afc3fee7a', class: "tba__assign-btn", size: "s", variant: "brand", appearance: canCheckInNow ? 'outlined' : 'accent', loading: this.pendingAction === 'assign', disabled: actionsDisabled, onClick: this.handleAssign }, t('Lcz_Assign', { fallback: 'Assign' })), canCheckInNow && (h("wa-button", { key: '7b49a2c33c7ebe233a4e492908f35180cf1427fb', class: "tba__assign-btn", size: "s", variant: "brand", loading: this.pendingAction === 'checkin', disabled: actionsDisabled, onClick: this.handleAssignAndCheckIn }, t('Lcz_AssignedAndChecIn')))))));
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
