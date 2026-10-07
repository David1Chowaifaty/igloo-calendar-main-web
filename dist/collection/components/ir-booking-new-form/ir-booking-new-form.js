import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
import { addDaysISO, todayISO } from "../../utils/calendar-dates";
export class IrBookingNewForm {
    ticket;
    propertyid;
    /**
     * Language for the form and the editor it opens, independent of the page's. Reflected as `lang`
     * on the host, which makes this subtree its own locale scope (see `locale-scope.ts`).
     */
    language;
    bookingItem = null;
    handleTriggerClicked() {
        const today = todayISO();
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: today,
                toDate: addDaysISO(today, 1),
                dateDifference: 0,
                message: '',
            },
            TO_DATE: undefined,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (h(Host, { key: 'd648758960e7f06a671376c0ebd5524d3283d7ae', lang: this.language || undefined }, h("div", { key: 'e6cea2aed5ea32aee4f4af25ce2abbb572ca6b6f', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '78b692cfab0797590d79718415747b25576a08f7', name: "trigger" }, h("ir-custom-button", { key: '1e92ad102b8a996406ddff1c46bb317f53933490', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'ebb0b0872d5064059108013d2113a4b608b8d104', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'e999ba868fa3b475ba37571b5fa19d2efe170851', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
    static get is() { return "ir-booking-new-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-new-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-new-form.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                "attribute": "ticket"
            },
            "propertyid": {
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
                "attribute": "propertyid"
            },
            "language": {
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
                    "text": "Language for the form and the editor it opens, independent of the page's. Reflected as `lang`\non the host, which makes this subtree its own locale scope (see `locale-scope.ts`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language"
            }
        };
    }
    static get states() {
        return {
            "bookingItem": {}
        };
    }
}
