import { BookingService } from "../../../services/booking-service/booking.service";
import { getReleaseHoursString } from "../../../utils/utils";
import { h } from "@stencil/core";
export class IglBlockedDateDrawer {
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
        return (h("ir-drawer", { key: '0bc60c0623702e13afb221beac7358e6f23d9d1f', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (h("igl-block-dates-view", { key: 'ced9dcc9ab6d0992f61d4a3e353945202c53a570', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), h("div", { key: 'aac6e7481aeecf0e501ce9ff6a733f580de4a641', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'ae216d782b46bea3b604c8d8a7117f080d390a7e', "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: 'b7b0b8cd49c50916b3b9d8a208cba533fc6472a1', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "medium", appearance: "accent", variant: "brand" }, "Save"))));
    }
    static get is() { return "igl-blocked-date-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-blocked-date-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-blocked-date-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                    "text": "Controls whether the blocked date drawer is open or closed.\nReflected to the DOM so it can be styled or toggled externally."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "label": {
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
                    "text": "Label text displayed at the top of the drawer.\nTypically used as the drawer title."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "fromDate": {
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
                    "text": "Start date of the blocked date range.\nExpected to be an ISO date string (YYYY-MM-DD)."
                },
                "getter": false,
                "setter": false,
                "attribute": "from-date",
                "reflect": false
            },
            "toDate": {
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
                    "text": "End date of the blocked date range.\nExpected to be an ISO date string (YYYY-MM-DD)."
                },
                "getter": false,
                "setter": false,
                "attribute": "to-date",
                "reflect": false
            },
            "unitId": {
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
                    "text": "Identifier of the unit being blocked.\nUsed when sending block requests to the booking service."
                },
                "getter": false,
                "setter": false,
                "attribute": "unit-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "blockDatesData": {}
        };
    }
    static get events() {
        return [{
                "method": "blockedDateDrawerClosed",
                "name": "blockedDateDrawerClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-blocked-date-drawer.js.map
