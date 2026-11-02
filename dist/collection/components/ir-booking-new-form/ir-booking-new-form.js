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
        return (h(Host, { key: '161db24913f57cafe250c57998b8badf7da8886a', lang: this.language || undefined }, h("div", { key: '7daac618105c459ed691dbeda4de5f819775102f', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'e854bbffc7d1f1746f48e0888fc6387fa9f89287', name: "trigger" }, h("ir-custom-button", { key: '43ccf313ecad251f734572229056e0e490863d7d', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'f18921ffc5389751ed5472e2db02c6794b035415', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '057674116881069c0a4ebfccc598496a14638b51', onBookingEditorClosed: e => {
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
