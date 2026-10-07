import { Host, h } from "@stencil/core";
import { addDaysISO, todayISO } from "../../../utils/calendar-dates";
import moment from "moment";
import locales from "../../../stores/locales.store";
import { getUnassignedUnitsCountForDate, isUnassignedUnitsDateLoading } from "../../../stores/unassigned-units.store";
import { t } from "../../../services/locale/t";
import { isRtlDirection } from "../../../utils/direction";
export class IglCalHeader {
    optionEvent;
    gotoRoomEvent;
    gotoToBeAssignedDate;
    calendarData;
    /** `YYYY-MM-DD` */
    today;
    propertyid;
    to_date;
    highlightedDate;
    dayUseBookings = [];
    renderAgain = false;
    roomsList = [];
    componentWillLoad() {
        try {
            this.initializeRoomsList();
        }
        catch (error) {
            console.error('Error in componentWillLoad:', error);
        }
    }
    initializeRoomsList() {
        this.roomsList = [];
        this.calendarData.roomsInfo.forEach(category => {
            this.roomsList = this.roomsList.concat(...category.physicalrooms);
        });
    }
    /** Reads the unassigned-units store live (auto-subscribes on render), keyed by `dayInfo.value` (`YYYY-MM-DD`). */
    getUnassignedRoomsNumberMap() {
        const map = {};
        (this.calendarData.days ?? []).forEach((dayInfo) => {
            const count = getUnassignedUnitsCountForDate(dayInfo.value);
            if (count > 0) {
                map[dayInfo.value] = count;
            }
        });
        return map;
    }
    /** Days (`YYYY-MM-DD`) whose unassigned-units fetch is still in flight — same store subscription as the count map. */
    getUnassignedLoadingDaysMap() {
        const map = {};
        (this.calendarData.days ?? []).forEach((dayInfo) => {
            if (isUnassignedUnitsDateLoading(dayInfo.value)) {
                map[dayInfo.value] = true;
            }
        });
        return map;
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    getNewBookingModel() {
        const from_date = todayISO();
        const to_date = addDaysISO(from_date, 1);
        return {
            ID: '',
            NAME: '',
            EMAIL: '',
            PHONE: '',
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: from_date,
            TO_DATE: to_date,
            roomsInfo: this.calendarData.roomsInfo,
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
            event_type: 'PLUS_BOOKING',
            legendData: this.calendarData.formattedLegendData,
            defaultDateRange: {
                fromDate: from_date,
                toDate: to_date,
                dateDifference: 0,
                editabled: true,
                message: '',
            },
        };
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    handleToolbarAction = (e) => {
        const { key, data } = e.detail;
        if (key === 'bulk') {
            this.handleOptionEvent('bulk', this.getNewBookingModel());
        }
        else {
            this.handleOptionEvent(key, data);
        }
    };
    handleRoomSelected = (e) => {
        this.gotoRoomEvent.emit({ key: 'gotoRoom', roomId: e.detail.roomId });
    };
    handleDayBadgeClicked = (e) => {
        this.handleOptionEvent('showAssigned');
        setTimeout(() => {
            this.gotoToBeAssignedDate.emit({
                key: 'gotoToBeAssignedDate',
                data: e.detail.date,
            });
        }, 100);
    };
    render() {
        return (h(Host, { key: '86d99401346655cd78e7aa1debc681773488bd7d', dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("igl-cal-header-toolbar", { key: '60c61be4775a5cadc70661292bc7ab203e72692c', isVacationRental: this.calendarData.is_vacation_rental, showDayUseButton: !this.calendarData.is_vacation_rental && this.dayUseBookings?.length > 0, minDate: moment().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), roomsList: this.roomsList, onActionSelected: this.handleToolbarAction, onRoomSelected: this.handleRoomSelected }), h("igl-cal-header-days", { key: 'a8abc49f891c074f2c44c1583afc6ca83716f6d1', isVacationRental: this.calendarData.is_vacation_rental, today: this.today, highlightedDate: this.highlightedDate, monthsInfo: this.calendarData.monthsInfo, days: this.calendarData.days, unassignedRoomsNumber: this.getUnassignedRoomsNumberMap(), loadingDays: this.getUnassignedLoadingDaysMap(), onDayBadgeClicked: this.handleDayBadgeClicked })));
    }
    static get is() { return "igl-cal-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-header.css"]
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
            "today": {
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
                    "text": "`YYYY-MM-DD`"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "today"
            },
            "propertyid": {
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
                "attribute": "propertyid"
            },
            "to_date": {
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
                "attribute": "to_date"
            },
            "highlightedDate": {
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
                "attribute": "highlighted-date"
            },
            "dayUseBookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DayUseBookings[]",
                    "resolved": "DayUseBookings[]",
                    "references": {
                        "DayUseBookings": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::DayUseBookings",
                            "referenceLocation": "DayUseBookings"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {}
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
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
            }, {
                "method": "gotoRoomEvent",
                "name": "gotoRoomEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "gotoToBeAssignedDate",
                "name": "gotoToBeAssignedDate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
