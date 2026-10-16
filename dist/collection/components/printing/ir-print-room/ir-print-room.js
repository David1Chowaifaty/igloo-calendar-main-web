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
        return (h("section", { key: 'aafc0e1b0d125f9bfd3307f7fcf8f23a07122dd7', class: "ir-print-room" }, h("header", { key: 'efc69eea816c9906f55510bea97f5888164a2cd8', class: "ir-print-room__header" }, h("p", { key: '39f720618cd7b74835fe18a6d75c01fd1f3aa56f', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: 'f3330016438a929fd1bdbcc50795a107d8326a33', class: "ir-print-room__unit" }, t('Lcz_UnitLabel', { fallback: '(unit %1)', params: [room.unit.name] })), h("p", { key: 'b82eed043f55c8ab6b84ac3ed8b7d606450ab02f', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: 'd14bd4e8b966bfaf409a69c9d0a340ca60833730', class: "ir-print-room__body" }, h("div", { key: '7c7b38b018c0b8d6c61d0b27ee50b2d2211d972f', class: "ir-print-room__details" }, h("div", { key: '9568676b7694483cd1429e480079502cd256fdf3', class: "ir-print-room__row" }, h("ir-printing-label", { key: 'be4ae0784562191ffcc8c81aa6c79ca0f795f0e9', class: "ir-print-room__label--capitalize", label: `${t('Lcz_GuestName', { fallback: 'Guest name' })}:`, content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: '60db1547b4ce74249187bc6caab5aaf2852f9776', class: "ir-print-room__label--lowercase", "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: '3ef5c41596f8dc8cf1791273a3859d384af9fe3f', class: "ir-print-room__row" }, h("div", { key: 'e50acfed61273ccfdc3829701ff2cc0109a0098d', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: 'fffb832281a2af6afa063f694c42c5a52f9b7a42', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && (h("p", { key: '691539f7d7fe713f5aed8be9a01d3b1113d92100', class: "ir-print-room__departure-time" }, "(", t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ": ", room.departure_time.description, ")"))), h("ir-printing-label", { key: '5486b778ffebeecbd89b6778bb59374989df978b', label: t('Lcz_SmokingOptionsLabel', { fallback: 'Smoking options:' }), display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: '6e0926e4a91d233b91fa208b7e4054635d31fc88', class: "ir-print-room__policies" }, h("ir-printing-label", { key: '424a4ebb5ff688e4f7e5e02647d500052c061a7d', label: t('Lcz_CancellationLabel', { fallback: 'Cancellation:' }), display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: 'cc9907c03b04d50f28c651855602a3702bee07a6', label: t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' }), display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: '1f36a4e0ae8445c182e358e55755d40d1262f1ae', class: "ir-print-room__totals" }, h("ir-printing-label", { key: 'b78c664c473835dccb0c06216f525b747c09de9b', label: `${t('Lcz_Total', { fallback: 'Total' })}:`, content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: 'b539e2119750ae14f20044893d8275b66de65299', label: t('Lcz_GrandTotalLabel', { fallback: 'Grand total:' }), content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && (h("ir-printing-label", { key: 'd44bc79b42dd29e09e1d54d9b4991f98b6ff77e0', label: t('Lcz_DueUponBookingLabel', { fallback: 'Due upon booking:' }), content: formatAmount(currency, Number(room?.gross_guarantee)) })))), h("div", { key: '5ef5d10294961d2970b15974da46b51125ab9316', class: {
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
