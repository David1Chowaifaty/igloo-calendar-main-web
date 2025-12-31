import locales from "../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrBookingNewForm {
    ticket;
    propertyid;
    language;
    bookingItem = null;
    handleTriggerClicked() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
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
            TITLE: locales?.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (h(Host, { key: '96c903a73fcaa52dccc9ef968392857bfaf8d49f' }, h("div", { key: '962d9a5a7ad307fef569e1867b4c68a001b6062a', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'b757ea30c3bd8c5aecec9fc13630ea4162f71564', name: "trigger" }, h("ir-custom-button", { key: '6a4b234104a2b6178916282b903d848ef9cfea39', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'cca9f94ee6260007c07226cd1617a37583f4f1e5', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'ccb773a3d7ec3d9baf2a6969f4313920cc395686', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
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
                "attribute": "ticket",
                "reflect": false
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
                "attribute": "propertyid",
                "reflect": false
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "bookingItem": {}
        };
    }
}
//# sourceMappingURL=ir-booking-new-form.js.map
