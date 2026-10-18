import { formatAmount } from "../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
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
        const dayMonth = formatDate(m, 'DD/MM');
        let dayOfWeekAbbr = formatDate(m, 'ddd'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
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
        const adultLabel = adultCount > 1 ? t('Lcz_Adults', { fallback: 'adults' }) : t('Lcz_Adult', { fallback: 'adult' });
        const childLabel = childCount > 1 ? t('Lcz_Children', { fallback: 'Children' }) : t('Lcz_Child', { fallback: 'Child' });
        const infantLabel = infantCount > 1 ? t('Lcz_InfantsLabel', { fallback: 'infants' }) : t('Lcz_InfantSingular', { fallback: 'infant' });
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
        return formatDate(date, 'DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index) => (h("div", { key: `room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (h(Fragment, null, filteredData?.map((d, index) => {
            const amount = (this.room.total * d.pct) / 100;
            return (h("div", { key: `direct_room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? t('Lcz_Excluding', { fallback: 'Excluding' }) : t('Lcz_Including', { fallback: 'Including' }), " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index) => (h("div", { key: `direct_room_${d.TAX_NAME}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, t('Lcz_Including', { fallback: 'Including' }), " ", d.TAX_NAME), h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (h("section", { key: '6486f7e6a32df0ac7c01016142a5c787be9a2431', class: "ir-print-room" }, h("header", { key: '1cdae00202c08f2a4a80d2ccb5056c440cea7eda', class: "ir-print-room__header" }, h("p", { key: '8104a2afc39996e8cf6df55b0e2e1a06f22c6131', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: '8b4baada7c36e74a0252830ca43cfcd07a99307d', class: "ir-print-room__unit" }, t('Lcz_UnitLabel', { fallback: '(unit %1)', params: [room.unit.name] })), h("p", { key: 'f0037d520e072dcaee1e53f52a5a8041104b8cbd', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: '395a18247b36a300bdd86cac1dcbb82696c85d3d', class: "ir-print-room__body" }, h("div", { key: 'b5a306c0d6507d28b631360c25e43ed5e83cabfb', class: "ir-print-room__details" }, h("div", { key: '40eacdc42011ffb940197df9f5981be67ced03ed', class: "ir-print-room__row" }, h("ir-printing-label", { key: '653f86d163ad9ebb57726dcc7689a479a3cdf5ee', class: "ir-print-room__label--capitalize", label: `${t('Lcz_GuestName', { fallback: 'Guest name' })}:`, content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: 'd02c7f33b239641378bcb4da3c794cadd08571e2', class: "ir-print-room__label--lowercase", "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: '28002714136e87049dfde4fb255425d71622cb2e', class: "ir-print-room__row" }, h("div", { key: '4630bf4b422268651c6a5bc8f062e026887eccd8', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '45daf95db5a7a94bb405ccc5eee3facb6dc759d3', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && (h("p", { key: '74eac30cd5de4c446954c4f962216ab6baa2226a', class: "ir-print-room__departure-time" }, "(", t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ": ", room.departure_time.description, ")"))), h("ir-printing-label", { key: '78e793a622de8e5745395e783361ec5727107cc5', label: t('Lcz_SmokingOptionsLabel', { fallback: 'Smoking options:' }), display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: 'e21b00fef619aa54caaca6f511506279df59381e', class: "ir-print-room__policies" }, h("ir-printing-label", { key: '28f70f8e1cfeeaa3b2257cb26ed11971e50d8ca6', label: t('Lcz_CancellationLabel', { fallback: 'Cancellation:' }), display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: 'eeb78d63864fb48ed66eedee49f72f049c6c68ef', label: t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' }), display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: 'bbf02a75cfedbbaa308cef871650e115ef9c0f91', class: "ir-print-room__totals" }, h("ir-printing-label", { key: '0d5ab8701fbb5dabdbd53ab743060a604b752437', label: `${t('Lcz_Total', { fallback: 'Total' })}:`, content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: '0446b638c8f965cc867647e93a73fb3ea08c3386', label: t('Lcz_GrandTotalLabel', { fallback: 'Grand total:' }), content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && (h("ir-printing-label", { key: 'd320b421467b0fde120724dd54011baa512404c9', label: t('Lcz_DueUponBookingLabel', { fallback: 'Due upon booking:' }), content: formatAmount(currency, Number(room?.gross_guarantee)) })))), h("div", { key: 'ee0579d5318ca62938f20dc552e96f9b778959b6', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (h("div", { class: "room_amount_container", key: d.date }, h("p", { class: "room_amount date" }, this.formatDate(d.date)), h("p", { class: "room_amount amount", style: { paddingInlineEnd: '0.375rem' } }, formatAmount(currency, d.amount))))))));
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
