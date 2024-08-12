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
        return (h(Host, { key: '281261bd1b8f6ad5883d7896a71bb6e5aa96893a' }, h("div", { key: '48d6d1eebc8de1ff7ebbda0d174c2a3b8322b7d0', class: "flex  items-center  justify-between gap-2.5 py-4" }, h("h2", { key: '4084cf043fab2af1f89e30824d124ad65d1ae6c1', class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings"), this.mode === 'multi' && (h("div", { key: '25d95bc4e4511526cfc30963c56e5fcb1a4e57bf', class: "flex items-center gap-2.5" }, h("button", { key: '31f257b9b87e48cec178f1e92ec6e2d166ed4368', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'single_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('single_booking') }, "Booking #", this.bookingNumber), h("button", { key: '0036ce80794cfdb779c8370dcd2fee957c3e1088', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'all_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('all_booking') }, "All Bookings"))))));
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
