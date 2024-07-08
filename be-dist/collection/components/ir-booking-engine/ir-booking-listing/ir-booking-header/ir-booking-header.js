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
        return (h(Host, { key: '45639825a3b25466919be72ab63e5f673dcb62b7' }, h("div", { key: '2d9086069148fe2088f8af30aa2a91c42964367d', class: "flex  items-center  justify-between gap-2.5 py-4" }, h("h2", { key: '6a14d5e7f9000f34a5a58b7c09f2c6a76303178f', class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings"), this.mode === 'multi' && (h("div", { key: 'ff1e0fd1542ea2384afe1873e4b2ce07b8d0c090', class: "flex items-center gap-2.5" }, h("button", { key: 'f2337a89e7240eaa288531262690a2b9d3429919', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'single_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('single_booking') }, "Booking #", this.bookingNumber), h("button", { key: '8838eaaaf4a7f21b72de7af38be62816604b3bbd', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'all_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('all_booking') }, "All Bookings"))))));
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
