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
        return (h(Host, { key: '2b11edda3e48ddabb324b5959e18c83dc71a52cf' }, h("div", { key: '020919cb42c84ac81d41563a06d3e1cffab2865e', class: "flex  items-center  justify-between gap-2.5 py-4" }, h("h2", { key: 'dcd075399d8bb7ae01c902860317442db20bf072', class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings"), this.mode === 'multi' && (h("div", { key: 'e4eae0e72b031d8b4fb94f93ca45baa4055eb85b', class: "flex items-center gap-2.5" }, h("button", { key: '304ed2c783a536c953347a6385ebaf7f2485a65e', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'single_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('single_booking') }, "Booking #", this.bookingNumber), h("button", { key: 'a7632405caddc9bfa0666891fb00c27c5458c3a5', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'all_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('all_booking') }, "All Bookings"))))));
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
