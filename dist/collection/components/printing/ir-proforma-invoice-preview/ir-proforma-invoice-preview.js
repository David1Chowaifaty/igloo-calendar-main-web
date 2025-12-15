import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { calculateDaysBetweenDates } from "../../../utils/booking";
import { formatAmount } from "../../../utils/utils";
export class IrProformaInvoicePreview {
    /**
     * Booking context used to display property, guest, and folio details.
     */
    booking;
    /**
     * Invoice payload emitted by `ir-invoice-form`.
     * Totals will fall back to booking data when omitted.
     */
    invoice;
    /**
     * Property associated with the booking.
     */
    property;
    /**
     * Optional metadata fetched via `getBookingInvoiceInfo`.
     * Used to display reference numbers (invoice/credit note/etc.).
     */
    invoiceInfo;
    /**
     * Locale used for date formatting.
     */
    locale = 'en';
    /**
     * Optional footer text shown at the end of the preview.
     */
    footerNote;
    invocableKeys;
    componentWillLoad() {
        this.invocableKeys = new Set(this.invoice?.items?.map(i => i.key));
    }
    handleInvoiceChange() {
        this.invocableKeys = new Set(this.invoice?.items?.map(i => i.key));
    }
    get bookingNumber() {
        if (!this.booking.is_direct) {
            return `${this.booking.booking_nbr} | ${this.booking.channel_booking_nbr}`;
        }
        return this.booking.booking_nbr;
    }
    get CompanyLocation() {
        const { company } = this.property;
        const { postal, city, country } = company;
        if (!postal && !city && !country)
            return null;
        const location = [];
        if (postal) {
            location.push(postal);
        }
        if (city) {
            location.push(city);
        }
        if (country) {
            if (postal || city) {
                location.push(`,${country.name}`);
            }
            else {
                location.push(company.name);
            }
        }
        if (location.length === 0) {
            return null;
        }
        return h("p", { class: "invoice-company__location" }, location.join(' '));
    }
    get guestPhoneNumber() {
        const { country_phone_prefix, mobile_without_prefix } = this.booking.guest;
        // if (!is_direct) {
        //     return mobile;
        // }
        if (!country_phone_prefix) {
            return mobile_without_prefix;
        }
        return `+${country_phone_prefix?.replace('+', '')}-${mobile_without_prefix}`;
    }
    formatDisplayDate(value) {
        if (!value) {
            return null;
        }
        const parsedDate = moment(value, ['YYYY-MM-DD', moment.ISO_8601], true);
        if (!parsedDate.isValid()) {
            return null;
        }
        return parsedDate.format('MMMM DD, YYYY');
    }
    get issueDate() {
        return this.formatDisplayDate(this.invoice?.Date) ?? '—';
    }
    renderPropertyCompanyHeader() {
        const { company } = this.property;
        if (!company) {
            return null;
        }
        return (h("div", { class: "invoice-company", "aria-label": "Issuing company details" }, company.name && h("p", { class: "invoice-company__name" }, company.name), company.address && h("p", { class: "invoice-company__address" }, company.address), this.CompanyLocation, company.phone && (h("ir-printing-label", { class: "proforma-invoice__company-details", label: 'Phone:', content: `${company.country?.phone_prefix ?? ''} ${company.phone}`.trim() })), company.tax_nbr && h("ir-printing-label", { class: "proforma-invoice__company-details", label: 'Tax ID:', content: company.tax_nbr })));
    }
    renderPropertyInfo() {
        const propertyLocation = [this.property?.city?.name ?? null, this.property?.country?.name ?? null].filter(f => f !== null).join(', ');
        const propertyLogo = this.property?.space_theme?.logo;
        return (h("section", { class: "property-overview", "aria-label": "Property overview" }, h("div", { class: "property-overview__text" }, h("p", { class: "property-overview__name" }, this.property.name), h("p", { class: "property-overview__location" }, propertyLocation)), propertyLogo && h("img", { src: propertyLogo, alt: `${this.property.name} logo`, class: "property-logo" })));
    }
    formatBookingDates(date) {
        return moment(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderBillToSection() {
        const { guest, company_name, company_tax_nbr } = this.booking;
        const { target, billed_to_name } = this.invoice;
        if (target?.code === '002') {
            return (h("div", { class: "bill-to", "aria-label": "Bill to company" }, company_name && h("p", { class: "bill-to__name" }, company_name), company_tax_nbr && h("p", { class: "bill-to__id" }, company_tax_nbr)));
        }
        return (h("div", { class: "bill-to", "aria-label": "Bill to guest" }, billed_to_name && h("p", null, billed_to_name), h("p", { class: "bill-to__name" }, ' ', billed_to_name && h("b", null, "for"), " ", [guest.first_name ?? '', guest.last_name ?? ''].join(' ').trim()), guest.email && h("p", { class: "bill-to__contact" }, guest.email), this.guestPhoneNumber && h("p", { class: "bill-to__contact" }, this.guestPhoneNumber)));
    }
    renderCancellationPenalty() {
        const cancellationPenalty = this.booking.financial.payments?.find(p => p.payment_type?.code === '013');
        if (!cancellationPenalty) {
            return null;
        }
        const sysId = cancellationPenalty.id;
        if (!this.invocableKeys.has(sysId)) {
            return null;
        }
        return (h("section", { class: "proforma-payment__section" }, h("div", { class: "ir-proforma-invoice__service" }, h("div", { class: 'ir-proforma-invoice__cancellation-info' }, h("p", null, "Cancellation penalty"), h("p", { class: 'ir-proforma-invoice__cancellation-date' }, "( ", this.formatDisplayDate(cancellationPenalty.date), " )")), h("span", { class: "ir-proforma-invoice__checkbox-price" }, formatAmount(this.booking.currency.symbol, cancellationPenalty.amount)))));
    }
    render() {
        if (!this.booking || !this.invoice || !this.property) {
            return;
        }
        const billToContent = this.renderBillToSection();
        const companyDetails = this.renderPropertyCompanyHeader();
        const propertyOverview = this.renderPropertyInfo();
        const totalNights = calculateDaysBetweenDates(this.booking.from_date, this.booking.to_date);
        const invocableRoom = this.booking.rooms.filter(room => this.invocableKeys.has(room.system_id));
        const existInvocableRoom = invocableRoom.length > 0;
        const existInvocableExtraService = this.booking.extra_services?.some(service => this.invocableKeys.has(service.system_id));
        const existInvocablePickup = this.invocableKeys?.has(this.booking.pickup_info?.['system_id']);
        return (h(Host, null, h("article", { class: "invoice", "aria-label": "Pro-forma invoice" }, h("header", { class: "invoice__header" }, h("h3", { class: "invoice__title" }, "Pro-forma Invoice"), h("section", { class: "invoice__layout", "aria-label": "Invoice summary" }, h("div", { class: "invoice__column invoice__column--details" }, h("div", { class: "invoice__details" }, h("ir-printing-label", { label: "Date of issue:", content: this.issueDate }), h("ir-printing-label", { label: "Booking no:", content: this.bookingNumber })), billToContent && (h("section", { class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { class: "section-heading" }, "Bill To"), billToContent))), h("div", { class: "invoice__column invoice__column--property" }, companyDetails && (h("section", { class: "issuer-section", "aria-label": "Issuer" }, companyDetails)), propertyOverview))), h("main", null, existInvocableRoom && (h("section", { style: { marginTop: '2.5rem' } }, h("div", { class: "proforma__accommodation-container" }, h("p", { class: "proforma__accommodation-title" }, "ACCOMMODATION"), h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.from_date)), h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.to_date)), h("p", { class: "number-of-nights" }, totalNights, " ", totalNights === 1 ? 'night' : 'nights'), h("p", { class: "vat-exclusion" }, h("i", null, this.property?.tax_statement))), h("div", null, invocableRoom.map((room, idx) => {
            return (h(Fragment, null, h("ir-print-room", { room: room, idx: idx, booking: this.booking, key: room.identifier, currency: this.booking.currency.symbol, property: this.property })));
        })))), existInvocablePickup && h("ir-printing-pickup", { pickup: this.booking.pickup_info }), existInvocableExtraService && (h("ir-printing-extra-service", { invocableKeys: this.invocableKeys, extraServices: this.booking.extra_services, currency: this.booking.currency })), this.renderCancellationPenalty(), h("section", { class: "proforma-payment__section" }, h("ir-printing-label", { label: "Balance:", content: formatAmount(this.booking.currency.symbol, this.booking.financial.due_amount) }), h("ir-printing-label", { label: "Collected (payments - refunds):", content: formatAmount(this.booking.currency.symbol, this.booking.financial.collected + this.booking.financial.refunds) }))), this.footerNote && (h("footer", { class: "invoice__footer" }, h("p", { class: "invoice__footer-note" }, this.footerNote))))));
    }
    static get is() { return "ir-proforma-invoice-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-proforma-invoice-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-proforma-invoice-preview.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Booking context used to display property, guest, and folio details."
                },
                "getter": false,
                "setter": false
            },
            "invoice": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "InvoicePayload",
                    "resolved": "{ currency?: { id?: number; }; booking_nbr?: string; target?: { code?: string; description?: string; }; Date?: string; nbr?: string; remark?: string; billed_to_name?: string; billed_to_tax?: string; items?: { key?: string | number; amount?: number; type?: string; description?: string; }[]; }",
                    "references": {
                        "InvoicePayload": {
                            "location": "global",
                            "id": "global::InvoicePayload"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Invoice payload emitted by `ir-invoice-form`.\nTotals will fall back to booking data when omitted."
                },
                "getter": false,
                "setter": false
            },
            "property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['property']",
                    "resolved": "Property",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Property associated with the booking."
                },
                "getter": false,
                "setter": false
            },
            "invoiceInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BookingInvoiceInfo",
                    "resolved": "{ invoiceable_items?: { key?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: any; type?: InvoiceableItemType; status?: any; booking_nbr?: string; invoice_nbr?: string; reason?: { code?: InvoiceableItemReasonCode; description?: string; }; is_invoiceable?: boolean; }[]; invoices?: { user?: string; date?: string; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: number; status?: { code?: string; description?: any; }; booking_nbr?: string; target?: any; nbr?: string; remark?: string; billed_to_name?: any; billed_to_tax?: any; items?: { key?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: number; type?: string; status?: { code?: string; description?: any; }; description?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; credit_note?: { user?: string; date?: string; system_id?: string; reason?: string; nbr?: string; }; pdf_url?: any; total_amount?: any; }[]; }",
                    "references": {
                        "BookingInvoiceInfo": {
                            "location": "import",
                            "path": "../../ir-invoice/types",
                            "id": "src/components/ir-invoice/types.ts::BookingInvoiceInfo"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional metadata fetched via `getBookingInvoiceInfo`.\nUsed to display reference numbers (invoice/credit note/etc.)."
                },
                "getter": false,
                "setter": false
            },
            "locale": {
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
                    "text": "Locale used for date formatting."
                },
                "getter": false,
                "setter": false,
                "attribute": "locale",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "footerNote": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional footer text shown at the end of the preview."
                },
                "getter": false,
                "setter": false,
                "attribute": "footer-note",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "invocableKeys": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "invoice",
                "methodName": "handleInvoiceChange"
            }];
    }
}
//# sourceMappingURL=ir-proforma-invoice-preview.js.map
