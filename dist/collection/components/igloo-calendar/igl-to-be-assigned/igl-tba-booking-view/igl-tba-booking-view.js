import { Host, h } from "@stencil/core";
import { ToBeAssignedService } from "../../../../services/toBeAssigned.service";
import { v4 } from "uuid";
import locales from "../../../../stores/locales.store";
import { canCheckIn } from "../../../../utils/utils";
export class IglTbaBookingView {
    calendarData;
    selectedDate;
    eventData = {};
    categoriesData = {};
    categoryId;
    categoryIndex;
    eventIndex;
    renderAgain = false;
    selectedRoom = -1;
    isLoading = null;
    highlightSection = false;
    allRoomsList = [];
    toBeAssignedService = new ToBeAssignedService();
    highlightToBeAssignedBookingEvent;
    openCalendarSidebar;
    addToBeAssignedEvent;
    scrollPageToRoom;
    assignRoomEvent;
    componentShouldUpdate(newValue, oldValue, propName) {
        if (propName === 'selectedDate' && newValue !== oldValue) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            return true;
        }
        else if (propName === 'eventData' && newValue !== oldValue) {
            this.selectedRoom = -1;
            return true;
        }
        return true;
    }
    componentWillLoad() {
        if (this.categoryIndex === 0 && this.eventIndex === 0) {
            setTimeout(() => {
                this.handleHighlightAvailability();
            }, 100);
        }
    }
    highlightBookingEvent(event) {
        let data = event.detail.data;
        if (data.bookingId != this.eventData.ID) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            this.renderView();
        }
        else {
            this.highlightSection = true;
            this.renderView();
        }
    }
    onSelectRoom(evt) {
        if (evt.stopImmediatePropagation) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
        }
        this.selectedRoom = parseInt(evt.target.value);
    }
    async handleAssignUnit(event, check_in = false) {
        try {
            event.stopImmediatePropagation();
            event.stopPropagation();
            if (this.selectedRoom) {
                this.isLoading = check_in ? 'checkin' : 'default';
                const booking = await this.toBeAssignedService.assignUnit({
                    booking_nbr: this.eventData.BOOKING_NUMBER,
                    identifier: this.eventData.ID,
                    pr_id: this.selectedRoom,
                    check_in,
                });
                const room = booking.rooms.find(r => r.identifier === this.eventData.identifier);
                console.log('room=>', room);
                if (room && check_in) {
                    // TODO:enable this when applying the check in module
                    const { adult_nbr, children_nbr, infant_nbr } = room.occupancy;
                    window.dispatchEvent(new CustomEvent('openCalendarSidebar', {
                        detail: {
                            type: 'room-guests',
                            payload: {
                                identifier: this.eventData.ID,
                                bookingNumber: this.eventData.BOOKING_NUMBER,
                                checkin: false,
                                roomName: room.unit?.name ?? '',
                                sharing_persons: room.sharing_persons,
                                totalGuests: adult_nbr + children_nbr + infant_nbr,
                            },
                        },
                        bubbles: true,
                        composed: true,
                    }));
                    console.log('event emitted directly to window 🔥');
                }
                let assignEvent = { ...this.eventData, PR_ID: this.selectedRoom };
                this.addToBeAssignedEvent.emit({
                    key: 'tobeAssignedEvents',
                    data: [assignEvent],
                });
                this.assignRoomEvent.emit({ key: 'assignRoom', data: assignEvent });
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    handleHighlightAvailability() {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: this.eventData.ID, fromDate: this.eventData.FROM_DATE },
        });
        if (!this.selectedDate) {
            return;
        }
        let filteredEvents = [];
        let allRoomsList = [];
        filteredEvents = this.eventData.availableRooms.map(room => {
            allRoomsList.push({
                calendar_cell: null,
                id: room.PR_ID,
                name: room.roomName,
            });
            return {
                ...room,
                defaultDateRange: this.eventData.defaultDateRange,
                identifier: this.eventData.identifier,
            };
        });
        this.allRoomsList = allRoomsList;
        this.addToBeAssignedEvent.emit({
            key: 'tobeAssignedEvents',
            data: filteredEvents,
        });
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: this.categoryId,
            refClass: 'category_' + this.categoryId,
        });
        this.renderView();
    }
    handleCloseAssignment(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.highlightSection = false;
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.onSelectRoom({ target: { value: '' } });
        this.selectedRoom = -1;
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.renderView();
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    canCheckIn() {
        // if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
        //   return false;
        // }
        // const now = moment();
        // if (
        //   (moment().isSameOrAfter(new Date(this.eventData.FROM_DATE), 'days') && moment().isBefore(new Date(this.eventData.TO_DATE), 'days')) ||
        //   (moment().isSame(new Date(this.eventData.TO_DATE), 'days') &&
        //     !compareTime(now.toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour)))
        // ) {
        //   return true;
        // }
        // return false;
        return canCheckIn({
            from_date: this.eventData.FROM_DATE,
            to_date: this.eventData.TO_DATE,
        });
    }
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = 'A';
        const childLabel = 'C';
        const infantLabel = 'I';
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount}${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount}${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount}${infantLabel}`);
        }
        return parts.join('-');
    }
    render() {
        return (h(Host, { key: 'df6ebec8d278e6a91db651f69330468ebc199ba8' }, h("div", { key: '61bb069707b7973e5594ff6e7f84312443c7bb9a', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, h("div", { key: '5817828cc60813073b799998533924f3b40f0f47', class: `guestTitle booking-guest-title tba-guest-title pointer font-small-3 ${this.highlightSection ? 'selectedOrder is-active' : ''}`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, h("p", { key: '2c2f8d866b91826effac789eeb89304cabee3e95', class: "guest-booking-number" }, this.eventData.BOOKING_NUMBER), h("span", { key: '311a37ad1d3e667cc801fe7d503c1d8d1555f9fa', class: "guest-separator" }, "-"), h("p", { key: '86fb4d97a1694b79ce8e12b166f8b1859fdeeb0d', class: "guest-name truncate" }, this.eventData.NAME), this.eventData.occupancy && (h("p", { key: '02e901ae898937420dc5dd25e9f6804c7785f820', class: "guest-occupancy" }, h("span", { key: 'ad97361f6fe3cc85d91e7b24d1b3c09f6f75708a', class: "guest-occupancy-wrapper" }, "( "), h("span", { key: '1adeb83e2e29ca3c7f39b4e0cdfae4b76a9bcb8d', class: "guest-occupancy-values", innerHTML: this.formatVariation(this.eventData.occupancy) }), h("span", { key: '1b44815b91b0c039a9455f57414763f6f7a0d591', class: "guest-occupancy-wrapper" }, " )")))), h("div", { key: '41f5088900b7c741cfd725bc42c82245fd8aecb3', class: "row m-0 p-0 actionsContainer" }, h("select", { key: '6879485a21fe7e77fd3344ba9fe81400e94f066b', class: "form-control input-sm room-select flex-grow-1", id: v4(), onChange: evt => this.onSelectRoom(evt) }, h("option", { key: 'c523ae8da248672e14aa9aaa161313d0b42603c3', value: "", selected: this.selectedRoom == -1 }, locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (h("div", { class: "buttonsContainer bg-red" }, h("button", { type: "button", class: "btn btn-secondary btn-sm mx-0", onClick: evt => this.handleCloseAssignment(evt) }, h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))) : null), h("div", { key: '9c5839230fefb09640d8dcfee301edb7d642c658', class: "d-flex align-items-center ", style: { gap: '0.5rem', paddingInline: '5px' } }, h("ir-button", { key: '8f90d6c1236d7e0952392f3d12529595be44ae0f', isLoading: this.isLoading === 'default', size: "sm", class: "flex-grow-1", text: locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }), this.canCheckIn() && (h("ir-button", { key: '80f0af6bcbabb1efef0eda5275328bf094faa467', isLoading: this.isLoading === 'checkin', size: "sm", class: "flex-grow-1", text: locales.entries.Lcz_AssignedAndChecIn, onClickHandler: evt => this.handleAssignUnit(evt, true), btn_disabled: this.selectedRoom === -1 }))), h("hr", { key: '643bce5a412eec8f55c5ae6dcce6ade47b25eaf1' }))));
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
            "selectedDate": {
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
                "attribute": "selected-date",
                "reflect": false
            },
            "eventData": {
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
                "setter": false,
                "defaultValue": "{}"
            },
            "categoriesData": {
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
                "setter": false,
                "defaultValue": "{}"
            },
            "categoryId": {
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
                "attribute": "category-id",
                "reflect": false
            },
            "categoryIndex": {
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
                "attribute": "category-index",
                "reflect": false
            },
            "eventIndex": {
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
                "attribute": "event-index",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {},
            "selectedRoom": {},
            "isLoading": {}
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
                    "original": "any",
                    "resolved": "any",
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
                    "resolved": "{ type: \"split\" | \"room-guests\" | \"booking-details\" | \"add-days\" | \"bulk-blocks\" | \"reallocate-drawer\"; payload: any; }",
                    "references": {
                        "CalendarSidebarState": {
                            "location": "import",
                            "path": "@/components/igloo-calendar/igloo-calendar",
                            "id": "src/components/igloo-calendar/igloo-calendar.tsx::CalendarSidebarState"
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
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
                    "original": "any",
                    "resolved": "any",
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
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "highlightToBeAssignedBookingEvent",
                "method": "highlightBookingEvent",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-tba-booking-view.js.map
