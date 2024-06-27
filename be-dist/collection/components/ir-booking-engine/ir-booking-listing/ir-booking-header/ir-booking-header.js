import { Host, h } from "@stencil/core";
export class IrBookingHeader {
    constructor() {
        this.mode = 'multi';
        this.bookingNumber = null;
        this.activeLink = 'single_booking';
    }
    handleButtonClick(link) {
        this.linkChanged.emit(link);
    }
    render() {
        return (h(Host, { key: 'e557a17ad844ac645352ce4250449f4d0b0f18f8' }, h("div", { key: 'a867ddf5388f4f9612228524828d5c32de5ba523', class: "flex  items-center  justify-between gap-2.5 py-4" }, h("h2", { key: '35f086da100b40a3c8c968ceccf63011e1054834', class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings"), this.mode === 'multi' && (h("div", { key: '3baf42990876e6474161c658b388e9c41f824997', class: "flex items-center gap-2.5" }, h("button", { key: 'e37ac50fbf66dbf83f799d35a0a0794180163077', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'single_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('single_booking') }, "Booking #", this.bookingNumber), h("button", { key: '77d92d0f4b4f5d0a6d81a5b3d9721cd600605507', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'all_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('all_booking') }, "All Bookings"))))));
    }
    static get is() { return "ir-booking-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-header.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'single' | 'multi'",
                    "resolved": "\"multi\" | \"single\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'multi'"
            },
            "bookingNumber": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking-number",
                "reflect": false,
                "defaultValue": "null"
            },
            "activeLink": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'single_booking' | 'all_booking'",
                    "resolved": "\"all_booking\" | \"single_booking\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "active-link",
                "reflect": false,
                "defaultValue": "'single_booking'"
            }
        };
    }
    static get events() {
        return [{
                "method": "linkChanged",
                "name": "linkChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'single_booking' | 'all_booking'",
                    "resolved": "\"all_booking\" | \"single_booking\"",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-header.js.map
