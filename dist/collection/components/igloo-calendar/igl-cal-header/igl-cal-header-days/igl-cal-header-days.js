import { Host, h } from "@stencil/core";
import { isWeekend } from "../../../../utils/utils";
import { formatDate } from "../../../../utils/date/index";
import { formatCount, formatPercent } from "../../../../utils/number";
/**
 * The `.headersContainer` sticky bar of `igl-cal-header`: the month row plus the per-day header
 * cells (unassigned-units badge, day title, occupancy percent). `.headersContainer`/`.headerCell`
 * and each cell's `data-day` attribute are read directly by `igloo-calendar.tsx`'s drag-bounds
 * calculation (`document.querySelectorAll('.headersContainer .headerCell')`) — do not rename them.
 */
export class IglCalHeaderDays {
    isVacationRental;
    today;
    highlightedDate;
    monthsInfo = [];
    days = [];
    /** Unassigned-unit counts keyed by `dayInfo.day`, falling back to `dayInfo.unassigned_units_nbr` per cell. */
    unassignedRoomsNumber = {};
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked;
    handleBadgeClick(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.day] || 0) {
            this.dayBadgeClicked.emit({ day: dayInfo.day, currentDate: dayInfo.currentDate });
        }
    }
    render() {
        return (h(Host, { key: 'ea100561156e61209623aba2cb9d14c198f805ce' }, h("div", { key: '2393bb2a6d40df480701983394dbddfaad81e29c', class: "stickyCell headersContainer" }, h("div", { key: 'bf6425a397e83817a735d0e48aaf09556ffb5401', class: "monthsContainer" }, this.monthsInfo.map(monthInfo => {
            return (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, formatDate(monthInfo.firstDayValue, 'MMM YYYY'))));
        })), this.days.map(dayInfo => {
            return (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.isVacationRental && (h("div", { class: "preventPageScroll", onClick: () => this.handleBadgeClick(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (h("button", { class: 'fd-header__badge-btn' }, h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, formatCount(this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr)))) : (h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', formatCount(this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))))), h("div", { class: { dayTitle: true, weekend: isWeekend(dayInfo.value) } }, formatDate(dayInfo.value, 'ddd D')), h("div", { class: "dayCapacityPercent" }, formatPercent(dayInfo.occupancy))));
        }))));
    }
    static get is() { return "igl-cal-header-days"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-header-days.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-header-days.css"]
        };
    }
    static get properties() {
        return {
            "isVacationRental": {
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
                "reflect": false,
                "attribute": "is-vacation-rental"
            },
            "today": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "String",
                    "resolved": "String",
                    "references": {
                        "String": {
                            "location": "global",
                            "id": "global::String"
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
            "monthsInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MonthInfo[]",
                    "resolved": "MonthInfo[]",
                    "references": {
                        "MonthInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/igl-cal-header/types.ts::MonthInfo",
                            "referenceLocation": "MonthInfo"
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
            },
            "days": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DayInfo[]",
                    "resolved": "DayInfo[]",
                    "references": {
                        "DayInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/igl-cal-header/types.ts::DayInfo",
                            "referenceLocation": "DayInfo"
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
            },
            "unassignedRoomsNumber": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: number }",
                    "resolved": "{ [key: string]: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unassigned-unit counts keyed by `dayInfo.day`, falling back to `dayInfo.unassigned_units_nbr` per cell."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{}"
            }
        };
    }
    static get events() {
        return [{
                "method": "dayBadgeClicked",
                "name": "dayBadgeClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted only when a badge with a non-zero count is clicked \u2014 a zero-count badge is inert."
                },
                "complexType": {
                    "original": "{ day: string; currentDate: any }",
                    "resolved": "{ day: string; currentDate: any; }",
                    "references": {}
                }
            }];
    }
}
