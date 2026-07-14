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
            TITLE: 'New Booking',
        };
    }
    render() {
        return (h(Host, { key: '931528d14740f49b3519d7fe096cd4628ca56740' }, h("div", { key: 'e014b0027d7ebf944d77952198943a87c1aba5f3', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'ad6492b4bd4dc7edc815865418b8624658b781fa', name: "trigger" }, h("ir-custom-button", { key: '6ec48dbc5f7d1518fcb9ee6eb4682635ca45bc5a', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'eaec6118cdc0c25807e8e0d5ea7fba893dd7130a', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '76be0f98616979ff195bcb081866e77c6ea21121', onBookingEditorClosed: e => {
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
                    "text": ""
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
