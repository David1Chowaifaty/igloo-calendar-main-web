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
        return (h(Host, { key: 'aca03bc8b41c6093b8872ed9160201641e8fc95a' }, h("div", { key: 'a72df305720a00b57a2acc029d02a54f77ca5eaf', class: "flex  items-center  justify-between gap-2.5 py-4" }, h("h2", { key: '1f6feab63729b953d6f99cb7f01da5482ea0e741', class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings"), this.mode === 'multi' && (h("div", { key: '9c98d2b0a951cd7fdc6fe29f06af88d8c8819228', class: "flex items-center gap-2.5" }, h("button", { key: '928e604eb3ec5c5fa22d3a8c781777ae87d72fc4', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'single_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('single_booking') }, "Booking #", this.bookingNumber), h("button", { key: 'dc3ca21d68ac184887d64b887e5e4933cc25251f', type: "button", class: `link leading-none tracking-tight ${this.activeLink === 'all_booking' ? 'active' : ''}`, onClick: () => this.handleButtonClick('all_booking') }, "All Bookings"))))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
