import { formatAmount } from "../../../utils/utils";
import { h } from "@stencil/core";
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
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0);
        return filteredData?.map((d, index) => {
            const amount = (this.room.total * d.pct) / 100;
            return (h("div", { key: `direct_room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", formatAmount(this.currency, amount))));
        });
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (h("section", { key: '20fdfffd2d6640c81f09c5d9dafbfa9247220e68', class: "ir-print-room" }, h("header", { key: '95702519f9b0f2a40218c51b28794d4e18d1335c', class: "ir-print-room__header" }, h("p", { key: '09952ec4dd9e651b84428089a5a0bc8d2c3c4ef6', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: '681cbc0f260078f583117aced519ef73d18c74af', class: "ir-print-room__unit" }, "(unit ", room.roomtype.id, ")"), h("p", { key: '3dca19c6623fa026fd88028aae50f98afb9970e3', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: '32bb7898ecb0d99b05e75f4767e572b7140265f8', class: "ir-print-room__body" }, h("div", { key: 'dee651053e1529124120a89f560eeff107e8aeae', class: "ir-print-room__details" }, h("div", { key: '5a92fae22d143ea454f251b1815ef42d05c680ad', class: "ir-print-room__row" }, h("ir-printing-label", { key: '4af2d012bfc68cc324db68130b9e7f0b95f95f9b', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: 'd94842d6a854dbc9022a34d40fa84979b88cbe38', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: '378bee4acbea195a25f32b530b05901eaaffb2b1', class: "ir-print-room__row" }, h("div", { key: 'fc24d3c93b9a82206289b38314e1eeac0e5a0039', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '82f5f312527293d1250a08f91d6572c062bb24a6', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: '049f4b883b56c5f0a221bb30eac3281477a1cb24', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: 'a5b3ed3a4bbd2d9716e0056ea806b6761002bae3', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: 'cccfff8898fa261400d472cf6e14e63d3db12855', class: "ir-print-room__policies" }, h("ir-printing-label", { key: 'faac6519644077cbae02ed213925a639994ab7af', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: '76c7cd6521947e2495cf1edf3e7c24238388b241', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: 'bddd2b4b521281913aec802aca58e55ae82d71bb', class: "ir-print-room__totals" }, h("ir-printing-label", { key: '264e97da678e0e6e5cc855652a8ba627909c17e9', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: '2dc40f15601770ae0b708a103aa4a438c6acbe25', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: 'acddc4fb063f4afa51444553d9ae5349fe8cd358', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '17f0ce3af9b29e7acd1707cf14c9b5b82f673abb', class: {
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
