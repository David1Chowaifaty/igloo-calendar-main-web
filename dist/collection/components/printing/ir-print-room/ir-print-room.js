import { formatAmount } from "../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
export class IrPrintRoom {
    /** Room data */
    room;
    /** Booking context */
    booking;
    /** Property context */
    property;
    /** Currency code (e.g. USD, EUR) */
    currency;
    /** Room index */
    idx;
    getSmokingLabel() {
        const { booking, room, property } = this;
        if (booking?.is_direct) {
            if (!room?.smoking_option)
                return null;
            const currRT = property?.roomtypes?.find(rt => rt.id === room?.roomtype?.id);
            const smokingOptions = currRT?.smoking_option?.allowed_smoking_options;
            return smokingOptions?.find(s => s.code === room.smoking_option)?.description ?? null;
        }
        return room?.ota_meta?.smoking_preferences ?? null;
    }
    formatDate(date) {
        const m = moment(date, 'YYYY-MM-DD');
        const dayMonth = m.format('DD/MM');
        let dayOfWeekAbbr = m.format('ddd'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
        if (['Thu', 'Sun', 'Sat'].includes(dayOfWeekAbbr)) {
            dayOfWeekAbbr = dayOfWeekAbbr.slice(0, 2);
        }
        else {
            dayOfWeekAbbr = dayOfWeekAbbr.charAt(0);
        }
        return `${dayMonth} ${dayOfWeekAbbr}`;
    }
    formatGuestName({ first_name, last_name }) {
        if (!last_name) {
            return first_name;
        }
        return `${first_name} ${last_name}`;
    }
    formatGuestAvailability({ adult_nbr, children_nbr, infant_nbr }) {
        // Adjust child number based on infants
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        // Define labels based on singular/plural rules
        const adultLabel = adultCount > 1 ? 'adults' : 'adult';
        const childLabel = childCount > 1 ? 'children' : 'child';
        const infantLabel = infantCount > 1 ? 'infants' : 'infant';
        // Construct parts with the updated child number
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    formatBookingDates(date) {
        return moment(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index) => (h("div", { key: `room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (h(Fragment, null, filteredData?.map((d, index) => {
            const amount = (this.room.total * d.pct) / 100;
            return (h("div", { key: `direct_room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index) => (h("div", { key: `direct_room_${d.TAX_NAME}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, "Including ", d.TAX_NAME), h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (h("section", { key: 'c2d18243510db6a854d7f1e527e911c0b4bf7282', class: "ir-print-room" }, h("header", { key: '9c062d5e0f02aaf7a010faa7ac168a4b4fdd64e3', class: "ir-print-room__header" }, h("p", { key: '4b92ce5e20fcf50d134cd91ca051e313c0c64c00', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: 'dd043562537bab64d4f3b41669c0af4c07e921d6', class: "ir-print-room__unit" }, "(unit ", room.unit.name, ")"), h("p", { key: '0b69e9a66f37892de326f3f346d9fd158b4372da', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: 'c63bd48dffd40196487913a532575defa66a39f4', class: "ir-print-room__body" }, h("div", { key: '064ed43929badad6fa7eca9f1bab476647694125', class: "ir-print-room__details" }, h("div", { key: 'bdc3e92ad41a00166a91e6e7a93299eba625f304', class: "ir-print-room__row" }, h("ir-printing-label", { key: '77f38cc9793316e2c0c2c009fbdeb7f3803677ca', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: 'd0df83b3c265f174e96882c91c38d4428ad3b3a5', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: '225102c4f80e8d798b82207e2e2cc2cbe0bcd3cf', class: "ir-print-room__row" }, h("div", { key: 'c531a3f828b61fd8d9c6f1424ec328490e8105b3', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '16607cca34ec4275ca60cd5df592eea2e2d3379d', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: '1254f8bcf41513c65ea3002875edf7957ff58b82', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: 'b08103bddf80b2a7be8e9ffc11410b3b0e4a2a7f', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: '77b2a5899557f47b4bba5b9a7f4c9b3caa16e91a', class: "ir-print-room__policies" }, h("ir-printing-label", { key: 'da5bd5c41bb81199e4b048bd1137199164976905', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: '0aaaa8a0a5b9a02e294a358abfc7af50eb663ddf', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: '07640abb95816bdcca07e1cde0cd6bc0c367a9b7', class: "ir-print-room__totals" }, h("ir-printing-label", { key: '50f7382beb3dccb8241b31e89a6f6df953a8ed52', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: '6a9a7714973903e41ecc0eca4080eeff3c84256f', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: 'be6b3ea4fab1adcb68b840ba8b3149b2db7c2c47', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '9a05ec1dfc98dda378fa530c8e4bfefd648e5b54', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (h("div", { class: "room_amount_container", key: d.date }, h("p", { class: "room_amount date" }, this.formatDate(d.date)), h("p", { class: "room_amount amount", style: { paddingRight: '0.375rem' } }, formatAmount(currency, d.amount))))))));
    }
    static get is() { return "ir-print-room"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-print-room.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-print-room.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['rooms'][0]",
                    "resolved": "Room",
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
                    "text": "Room data"
                },
                "getter": false,
                "setter": false
            },
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
                    "text": "Booking context"
                },
                "getter": false,
                "setter": false
            },
            "property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Property",
                    "resolved": "Property",
                    "references": {
                        "Property": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Property"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Property context"
                },
                "getter": false,
                "setter": false
            },
            "currency": {
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
                    "text": "Currency code (e.g. USD, EUR)"
                },
                "getter": false,
                "setter": false,
                "attribute": "currency",
                "reflect": false
            },
            "idx": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Room index"
                },
                "getter": false,
                "setter": false,
                "attribute": "idx",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-print-room.js.map
