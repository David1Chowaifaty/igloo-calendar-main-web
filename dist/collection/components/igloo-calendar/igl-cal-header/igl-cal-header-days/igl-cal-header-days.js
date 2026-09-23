import { Host, h } from "@stencil/core";
import { isWeekend } from "../../../../utils/utils";
import { formatDate } from "../../../../utils/date/index";
import { formatCount, formatPercent } from "../../../../utils/number";
/** Entrance stagger: 30ms per cell of distance from today, capped so the far tail lands within ~450ms. */
const REVEAL_STEP_MS = 30;
const REVEAL_MAX_STEPS = 15;
const REVEAL_DURATION_MS = 220;
/** The count-up starts once the pill has mostly landed and ticks 0 → N. */
const REVEAL_COUNT_DELAY_MS = 120;
const REVEAL_COUNT_DURATION_MS = 320;
/** How long the reveal gate stays open once the badges are settled: longest delay + pill + count-up + slack. */
const REVEAL_TOTAL_MS = REVEAL_STEP_MS * REVEAL_MAX_STEPS + Math.max(REVEAL_DURATION_MS, REVEAL_COUNT_DELAY_MS + REVEAL_COUNT_DURATION_MS) + 130;
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
    /** Days (keyed by `dayInfo.day`) whose unassigned-units fetch is still in flight; their badges breathe. */
    loadingDays = {};
    /**
     * Gates the badge entrance cascade so it plays once per screen open. Stays open from mount until
     * `REVEAL_TOTAL_MS` after the initial unassigned-units fetch settles — the calendar snapshot often
     * has no counts, so most badges only mount when that fetch lands, well after the first paint.
     */
    revealing = true;
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked;
    revealTimer;
    componentDidLoad() {
        // A fetch may already be in flight on the first render; then the idle transition starts the countdown.
        if (!this.hasLoadingDays(this.loadingDays)) {
            this.scheduleRevealEnd();
        }
    }
    disconnectedCallback() {
        clearTimeout(this.revealTimer);
    }
    /**
     * A fetch in flight keeps the gate open; the countdown restarts when it goes idle. The parent
     * builds a fresh map every render, so only busy/idle transitions count — not reference changes.
     */
    handleLoadingDaysChange(loadingDays, previous = {}) {
        const busy = this.hasLoadingDays(loadingDays);
        const wasBusy = this.hasLoadingDays(previous);
        if (!this.revealing || busy === wasBusy) {
            return;
        }
        if (busy) {
            clearTimeout(this.revealTimer);
            this.revealTimer = undefined;
        }
        else {
            this.scheduleRevealEnd();
        }
    }
    hasLoadingDays(loadingDays) {
        return Object.keys(loadingDays).length > 0;
    }
    scheduleRevealEnd() {
        clearTimeout(this.revealTimer);
        this.revealTimer = setTimeout(() => {
            this.revealing = false;
        }, REVEAL_TOTAL_MS);
    }
    handleBadgeClick(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.day] || 0) {
            this.dayBadgeClicked.emit({ day: dayInfo.day, currentDate: dayInfo.currentDate });
        }
    }
    /** Stagger radiates outward from today's cell, where the user is looking after the initial scroll. */
    getRevealDelay(index, todayIndex) {
        return Math.min(Math.abs(index - todayIndex), REVEAL_MAX_STEPS) * REVEAL_STEP_MS;
    }
    render() {
        const todayIndex = Math.max(this.days.findIndex(dayInfo => dayInfo.day === this.today), 0);
        return (h(Host, { key: '3524180eee10d70ec81a8ca98343f72243859e62' }, h("div", { key: '632e5c0a341ff93b87b054f55171873621400247', class: { 'stickyCell': true, 'headersContainer': true, 'is-revealing': this.revealing } }, h("div", { key: 'ce4a505c67b01b5cef0af2b88c2d7533553691f4', class: "monthsContainer" }, this.monthsInfo.map(monthInfo => {
            return (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, formatDate(monthInfo.firstDayValue, 'MMM YYYY'))));
        })), this.days.map((dayInfo, index) => {
            const count = this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr;
            const revealDelay = this.getRevealDelay(index, todayIndex);
            return (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.isVacationRental && (h("div", { class: { 'preventPageScroll': true, 'is-loading': !!this.loadingDays[dayInfo.day] }, onClick: () => this.handleBadgeClick(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (h("button", { class: 'fd-header__badge-btn', style: this.revealing ? { animationDelay: `${revealDelay}ms` } : undefined }, h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, this.revealing ? (
            /* Digits are drawn by CSS (`counter()` over the animated `--fd-count`) until the gate closes. */
            h("span", { class: "fd-header__badge-count", style: { '--fd-count-target': String(count), 'animationDelay': `${revealDelay + REVEAL_COUNT_DELAY_MS}ms` } })) : (formatCount(count))))) : (h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', formatCount(this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))))), h("div", { class: { dayTitle: true, weekend: isWeekend(dayInfo.value) } }, formatDate(dayInfo.value, 'ddd D')), h("div", { class: "dayCapacityPercent" }, formatPercent(dayInfo.occupancy))));
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
            },
            "loadingDays": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: boolean }",
                    "resolved": "{ [key: string]: boolean; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Days (keyed by `dayInfo.day`) whose unassigned-units fetch is still in flight; their badges breathe."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{}"
            }
        };
    }
    static get states() {
        return {
            "revealing": {}
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
    static get watchers() {
        return [{
                "propName": "loadingDays",
                "methodName": "handleLoadingDaysChange"
            }];
    }
}
