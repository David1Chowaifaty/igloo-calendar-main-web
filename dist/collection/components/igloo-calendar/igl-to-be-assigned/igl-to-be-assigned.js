import { Host, h } from "@stencil/core";
import { UnassignedUnitsService } from "../../../services/unassigned-units/index";
import { groupIntoCategories } from "../../../services/unassigned-units/utils";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { getUnassignedUnitsDateKeys, getUnassignedUnitsForDate, removeUnassignedRoom, replaceUnassignedUnitsRange } from "../../../stores/unassigned-units.store";
import { formatDate } from "../../../utils/date/index";
export class IglToBeAssigned {
    propertyid;
    calendarData;
    selectedDate = null;
    isLoading = true;
    optionEvent;
    /** `data` is the `YYYY-MM-DD` day to scroll to. */
    showBookingPopup;
    addToBeAssignedEvent;
    highlightToBeAssignedBookingEvent;
    unassignedUnitsService = new UnassignedUnitsService();
    categoriesCache = null;
    refreshToken = 0;
    componentWillLoad() {
        this.selectedDate = getUnassignedUnitsDateKeys()[0] ?? null;
        this.verifySelectedDate();
    }
    handleGotoDate(event) {
        this.selectDate(event.detail.data);
    }
    /** A card was highlighted: scroll the calendar to that booking's first night. */
    handleBookingHighlight(event) {
        const fromDate = event.detail?.data?.fromDate;
        if (fromDate) {
            this.showBookingPopup.emit({ key: 'calendar', data: fromDate, noScroll: false });
        }
    }
    /** Re-reads one date from the API and makes the store match it, in case a realtime update was missed. Owns the panel's loader, so every caller shows one. */
    async refreshDate(date) {
        const token = ++this.refreshToken;
        this.isLoading = true;
        try {
            const entries = await this.unassignedUnitsService.getAggregatedUnAssignedRoomsByDateRange({
                propertyid: this.propertyid,
                from_date: date,
                to_date: date,
            });
            // A newer refresh started while this one was in flight — let it own the store and the loader.
            if (token !== this.refreshToken) {
                return;
            }
            replaceUnassignedUnitsRange(date, date, entries);
        }
        catch (error) {
            console.error('Unassigned units refresh failed:', error);
        }
        finally {
            if (token === this.refreshToken) {
                this.isLoading = false;
            }
        }
    }
    /** One single-day refresh on open; every later date switch reads the store only. */
    async verifySelectedDate() {
        const date = this.selectedDate;
        if (!date) {
            this.isLoading = false;
            return;
        }
        await this.refreshDate(date);
        const dates = getUnassignedUnitsDateKeys();
        this.selectDate(dates.includes(date) ? date : (dates[0] ?? null));
    }
    selectDate(date) {
        this.selectedDate = date;
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        if (date) {
            this.showBookingPopup.emit({ key: 'calendar', data: date, noScroll: false });
        }
    }
    /** Memoized on the store entry's identity (and the property's, since names come from it): unrelated re-renders skip the grouping. */
    categoriesFor(date) {
        const source = getUnassignedUnitsForDate(date);
        const { property } = calendar_data;
        const cache = this.categoriesCache;
        if (cache && cache.source === source && cache.property === property) {
            return cache.value;
        }
        const value = groupIntoCategories(source);
        this.categoriesCache = { source, property, value };
        return value;
    }
    handleDateChange = (event) => {
        this.selectDate(event.target.value || null);
    };
    /**
     * Fired by `igl-tba-category-view` only after `assignUnit` succeeded. The room is dropped right away so the
     * card disappears without waiting, then the day is re-read — behind the panel's loader — so the panel matches
     * the server even if the realtime update for this assignment never arrives.
     */
    handleAssignUnit = (event) => {
        event.stopPropagation();
        removeUnassignedRoom(event.detail.identifier);
        if (this.selectedDate) {
            this.refreshDate(this.selectedDate);
        }
    };
    handleClose = () => {
        this.highlightToBeAssignedBookingEvent.emit({ key: 'highlightBookingId', data: { bookingId: '----' } });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key: 'closeSideMenu' });
    };
    renderEmptyState(message, subtitle) {
        return (h("div", { class: "tba-panel__empty" }, h("ir-empty-state", { message: message }, h("span", { slot: "icon", class: "tba-panel__empty-icon" }, h("wa-icon", { name: "circle-check" })), subtitle && h("span", { class: "tba-panel__empty-subtitle" }, subtitle))));
    }
    renderBody(hasDates, categories) {
        if (this.isLoading) {
            return (h("div", { class: "tba-panel__loading" }, h("ir-spinner", null)));
        }
        if (!hasDates) {
            return this.renderEmptyState(t('Lcz_AllBookingsAreAssigned'));
        }
        if (categories.length === 0) {
            return this.renderEmptyState(t('Lcz_AllAssignForThisDay'), formatDate(this.selectedDate, 'ddd, DD MMM YYYY'));
        }
        return categories.map((category, index) => (h("igl-tba-category-view", { key: category.roomTypeId, calendarData: this.calendarData, selectedDate: this.selectedDate, category: category, categoryIndex: index, onAssignUnitEvent: this.handleAssignUnit })));
    }
    render() {
        const dates = getUnassignedUnitsDateKeys();
        // Once its last room is assigned the selected date leaves the store; keep it listed so the
        // dropdown doesn't go blank under the user. It drops off as soon as another date is picked.
        const options = this.selectedDate && !dates.includes(this.selectedDate) ? [...dates, this.selectedDate].sort() : dates;
        const categories = this.selectedDate ? this.categoriesFor(this.selectedDate) : [];
        return (h(Host, { key: '0891c9cbcad0698d102f82a9bfb5a4e17ec29bf0' }, h("div", { key: 'e02a69b0d1048c8692072be4b4f838fca6492c76', class: "tba-panel" }, h("div", { key: '8bed99ad39ad30dfc6341ee56261fa0178346198', class: "tba-panel__head" }, h("header", { key: 'a957a4ef051c8d77c2a40650f1897fd171273fec', class: "tba-panel__header" }, h("h2", { key: 'a0ca460b65c37ea6dd656195d4ed6cb8f0ac0263', class: "tba-panel__title", id: "to-be-assigned-title" }, t('Lcz_Assignments')), h("ir-custom-button", { key: '03c1599f01f37182400107cf3fd4a7556fea9762', size: "m", appearance: "plain", variant: "neutral", onClickHandler: this.handleClose }, h("wa-icon", { key: '0eaea331b870f3d639905b448e82edaa0ab076d4', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), options.length > 0 && (h("div", { key: '6c0c4a1dcefb7ce4671eee686e7eb1fa81e12311', class: "tba-panel__toolbar" }, h("wa-select", { key: '2ddbd3ca0b9a97332b73348fe79fa6350ef00465', size: "s", "aria-label": t('Lcz_Assignments'), value: this.selectedDate ?? '', defaultValue: this.selectedDate ?? '', onchange: this.handleDateChange }, options.map(date => (h("wa-option", { key: date, value: date }, formatDate(date, 'ddd, DD MMM YYYY')))))))), h("div", { key: 'fb54c6d5c6b1c325e34913cb3225ce02c831d097', class: "tba-panel__body" }, this.renderBody(dates.length > 0, categories)))));
    }
    static get is() { return "igl-to-be-assigned"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-to-be-assigned.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-to-be-assigned.css"]
        };
    }
    static get properties() {
        return {
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
            }
        };
    }
    static get states() {
        return {
            "selectedDate": {},
            "isLoading": {}
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
                    "original": "{ key: string; data?: unknown }",
                    "resolved": "{ key: string; data?: unknown; }",
                    "references": {}
                }
            }, {
                "method": "showBookingPopup",
                "name": "showBookingPopup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "`data` is the `YYYY-MM-DD` day to scroll to."
                },
                "complexType": {
                    "original": "{ key: 'calendar'; data: string; noScroll: boolean }",
                    "resolved": "{ key: \"calendar\"; data: string; noScroll: boolean; }",
                    "references": {}
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
                    "original": "{ key: 'tobeAssignedEvents'; data: [] }",
                    "resolved": "{ key: \"tobeAssignedEvents\"; data: []; }",
                    "references": {}
                }
            }, {
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
                    "original": "{ key: 'highlightBookingId'; data: { bookingId: string } }",
                    "resolved": "{ key: \"highlightBookingId\"; data: { bookingId: string; }; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "gotoToBeAssignedDate",
                "method": "handleGotoDate",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "highlightToBeAssignedBookingEvent",
                "method": "handleBookingHighlight",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
