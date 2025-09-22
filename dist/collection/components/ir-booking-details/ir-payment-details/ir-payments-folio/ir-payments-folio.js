import { h } from "@stencil/core";
export class IrPaymentsFolio {
    constructor() {
        this.payments = [];
        this.handleAddPayment = () => {
            this.addPayment.emit();
        };
        this.handleEditPayment = (payment) => {
            this.editPayment.emit(payment);
        };
        this.handleDeletePayment = (payment) => {
            this.deletePayment.emit(payment);
        };
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index) {
        return [
            h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                } }),
            index < this.payments.length - 1 && h("hr", { class: "p-0 m-0" }),
        ];
    }
    renderEmptyState() {
        return (h("div", { class: "text-center p-3" }, h("p", { class: "text-muted" }, "No payments recorded yet")));
    }
    render() {
        return (h("div", { key: 'add6c05b9e229c97e6adf4ca10380ad54f390e37', class: "mt-1" }, h("div", { key: 'f3b11ba4aff593a424f2d605ee4d55106d3998e8', class: "d-flex flex-column rounded payment-container" }, h("div", { key: '76a668a6badcdb30f26dd5e2c597c529a24c9bc8', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'ad132609c334bcd2adb47eddd21b50e7c892772f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '6bbfc4bd980b0428496c155a764113781bd08333', class: "font-size-large p-0 m-0" }, "Guest Folio"), h("style", { key: '98364956f0f5101365b37f1f6e132f49bb5f5f41' }, `.documentation-btn{
                    display:flex;
                    align-items:center;
                    justify-content-center;
                    height:1rem;
                    width:1rem;
                    border:1px solid #6b6f82;
                    color:#6b6f82;
                    padding:0.1rem;
                    border-radius:0.5rem;
                    background:transparent;
                  }
                  .documentation-btn:hover{
                    border-color:#104064;
                    background:transparent;
                    color:#104064 !important;
                  }
                `), h("ir-tooltip", { key: '139b5d31e964624278a4393553691727a109b2f3', customSlot: true, message: "Help" }, h("a", { key: '2b892d0deffc85eb47f67d1309ac85e0ee008a82', slot: "tooltip-trigger", class: "documentation-btn", target: "_blank", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" }, h("svg", { key: '9b2909c2f4585e46afec5587cacbb3370a79101e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'b231f87af0c759edacebc1128168becbb4e4ab0b', fill: "currentColor", d: "M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z" }))))), h("ir-button", { key: '675183166fe58472981dd7ec4d7e81b6aaa2fe3e', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), h("div", { key: '9f16d4617b93de5c4b2ea558faf77bb1a7420415', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
    }
    static get is() { return "ir-payments-folio"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payments-folio.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payments-folio.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPayment[]",
                    "resolved": "IPayment[]",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "addPayment",
                "name": "addPayment",
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
            }, {
                "method": "editPayment",
                "name": "editPayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }, {
                "method": "deletePayment",
                "name": "deletePayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-payments-folio.js.map
