import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.store.js';
import { g as getReleaseHoursString } from './utils.js';
import { d as defineCustomElement$4 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-drawer2.js';

const iglBlockedDateDrawerCss = ".sc-igl-blocked-date-drawer-h{display:block;text-align:start}";
const IglBlockedDateDrawerStyle0 = iglBlockedDateDrawerCss;

const IglBlockedDateDrawer = /*@__PURE__*/ proxyCustomElement(class IglBlockedDateDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.blockedDateDrawerClosed = createEvent(this, "blockedDateDrawerClosed", 7);
    }
    /**
     * Controls whether the blocked date drawer is open or closed.
     * Reflected to the DOM so it can be styled or toggled externally.
     */
    open;
    /**
     * Label text displayed at the top of the drawer.
     * Typically used as the drawer title.
     */
    label;
    /**
     * Start date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    fromDate;
    /**
     * End date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    toDate;
    /**
     * Identifier of the unit being blocked.
     * Used when sending block requests to the booking service.
     */
    unitId;
    isLoading = false;
    blockDatesData = {
        from_date: '',
        to_date: '',
        NOTES: '',
        pr_id: null,
        STAY_STATUS_CODE: null,
        DESCRIPTION: null,
        BLOCKED_TILL_DATE: null,
        BLOCKED_TILL_HOUR: null,
        BLOCKED_TILL_MINUTE: null,
    };
    blockedDateDrawerClosed;
    bookingService = new BookingService();
    async handleBlockDate() {
        try {
            this.isLoading = true;
            const props = (() => {
                const releaseData = getReleaseHoursString(this.blockDatesData.RELEASE_AFTER_HOURS !== null ? Number(this.blockDatesData.RELEASE_AFTER_HOURS) : null);
                return {
                    from_date: this.fromDate,
                    to_date: this.toDate,
                    NOTES: this.blockDatesData.OPTIONAL_REASON || '',
                    pr_id: this.unitId.toString(),
                    STAY_STATUS_CODE: this.blockDatesData.OUT_OF_SERVICE ? '004' : this.blockDatesData.RELEASE_AFTER_HOURS === 0 ? '002' : '003',
                    DESCRIPTION: this.blockDatesData.RELEASE_AFTER_HOURS || '',
                    ...releaseData,
                };
            })();
            await this.bookingService.blockUnit(props);
            this.closeDrawer();
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    closeDrawer() {
        this.blockedDateDrawerClosed.emit();
        this.blockDatesData = {
            from_date: '',
            to_date: '',
            NOTES: '',
            pr_id: null,
            STAY_STATUS_CODE: null,
            DESCRIPTION: null,
            BLOCKED_TILL_DATE: null,
            BLOCKED_TILL_HOUR: null,
            BLOCKED_TILL_MINUTE: null,
        };
    }
    render() {
        return (h("ir-drawer", { key: '0ab28f352f7bee5617954f33fe7ca5d2c3b69c3f', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (h("igl-block-dates-view", { key: '42b44501f2c063814326bedbd21b967661e02c37', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), h("div", { key: '775899a0247f17199d0c17e644581e7e9756ecd2', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '8a60c6fa11cd4dc853ac2a72d1aaf58202616a86', "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: 'bd2ba17e17c8ab8f3b6f75cd0e94708e83be2f6b', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "medium", appearance: "accent", variant: "brand" }, "Save"))));
    }
    static get style() { return IglBlockedDateDrawerStyle0; }
}, [2, "igl-blocked-date-drawer", {
        "open": [516],
        "label": [1],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "unitId": [2, "unit-id"],
        "isLoading": [32],
        "blockDatesData": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-blocked-date-drawer", "igl-block-dates-view", "ir-custom-button", "ir-date-view", "ir-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-blocked-date-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBlockedDateDrawer);
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBlockedDateDrawer as I, defineCustomElement as d };

//# sourceMappingURL=igl-blocked-date-drawer2.js.map