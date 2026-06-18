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
        return (h("section", { key: '9e82474e8c60f1c4ace6b0a7a1be4adb90d410b9', class: "ir-print-room" }, h("header", { key: 'a08b84717f1387253bdeb5bf4b1ef7f67d222759', class: "ir-print-room__header" }, h("p", { key: '1f7f2217509e0048ae27efe8df89e305a2e7282c', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: '7e488273cdba09a3c0046f0fc20cab9d1f54427c', class: "ir-print-room__unit" }, "(unit ", room.unit.name, ")"), h("p", { key: '2ce14bbd1fcd11c088c735919695a35b5a740e3b', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: '5a5d73278aec5c71486ed5a140b4021d7e18c2d1', class: "ir-print-room__body" }, h("div", { key: '207fb540ed981b73440c4dada6c966e2363ea446', class: "ir-print-room__details" }, h("div", { key: '7ad23cce6a59dfb0b04c3b7e840b8e77bf9dfb2f', class: "ir-print-room__row" }, h("ir-printing-label", { key: 'e13caf4c1ebf17a612f704e3aa8ad868672dfe35', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: '6e37cd5891ca812cbb7ad4b069e73ac5445bcc9a', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: 'd809b048695a94bd6e1e544e150ade129f374def', class: "ir-print-room__row" }, h("div", { key: 'b5b78e8cc1fbee6a18ff22c53dba489cd810f7bd', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '889e4232bb8be415556e8d83bc65f540bfeb396f', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: '9e426a06466da1431398ca8aad38a6e1c6052350', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: '052904f8565f5b1e4fb69edf4b4ccb65937850dc', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: '76d23e8fef0250132e8825fa281cf7cf2370fad1', class: "ir-print-room__policies" }, h("ir-printing-label", { key: 'fa4d5101d01d98885cffb32207ac596e7ca87add', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: '471f7063ac827cbcc85baea2bdb740df88c8c4c5', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: '1db0ec16adbcbb50f8e87756b97d74dcaaf5e506', class: "ir-print-room__totals" }, h("ir-printing-label", { key: '96bd8e91ba9053be36de6f056a69c11d95539e2a', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: 'f928108cfaf064eef60432bad7bd36a3311a0e70', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: '5d9f6b1a0e77b75e71a6a155d5cf0c683c9a1445', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '5ae4c7a629025c347a49e73c12b7d0e17947cb5f', class: {
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                            "id": "src/models/booking.dto.ts::Property",
                            "referenceLocation": "Property"
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
                "reflect": false,
                "attribute": "currency"
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
                "reflect": false,
                "attribute": "idx"
            }
        };
    }
}
