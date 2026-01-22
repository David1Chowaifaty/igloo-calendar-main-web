import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-printing-label2.js';

const irPrintRoomCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;}.ir-print-room__header{display:flex;align-items:center;gap:0.625rem;font-weight:bold;font-size:1rem;line-height:1.5rem;margin-bottom:0.375rem}.ir-print-room__body{display:flex;align-items:center;gap:0.625rem;flex-wrap:wrap}.ir-print-room__details{flex:1 1 0%}.ir-print-room__row{display:flex;align-items:center;gap:1rem}.ir-print-room__daily-amounts{display:flex}.room_amount{min-width:4.38rem}.room_amount_container{display:flex;font-weight:600;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.ir-print-room__daily-amounts--with-divider{padding-bottom:1rem}p,div,section,span{margin:0;padding:0;box-sizing:border-box}body{display:block;font-size:0.88rem;font-weight:600;box-sizing:border-box}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.ir-print-room__tax-row{display:flex;font-size:0.875rem;font-weight:700}.ir-print-room__totals{display:flex;gap:0.25rem;flex-direction:column}.ir-print-room__header{font-size:1.1rem}.ir-print-room__dates{display:flex;align-items:center;gap:0.5rem;font-weight:600}.ir-print-room__body{flex-direction:column}.ir-print-room__body{align-items:flex-start;margin-top:1rem}@media (min-width: 640px){.ir-print-room__totals{align-items:flex-end}.room_amount_container{flex-direction:column}.ir-print-room__body{flex-direction:row}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}";
const IrPrintRoomStyle0 = irPrintRoomCss;

const IrPrintRoom = /*@__PURE__*/ proxyCustomElement(class IrPrintRoom extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
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
        const m = hooks(date, 'YYYY-MM-DD');
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
        return hooks(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
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
        return (h("section", { key: '52808fb1f10fa8ea3bc4f77d87d561b0516b38e6', class: "ir-print-room" }, h("header", { key: '2363a9953e14377d7355056eb5954f6586d51cca', class: "ir-print-room__header" }, h("p", { key: 'c3bb9a7f14cdc154f91a83c5e5b6c22c7b3a43ea', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: 'ef7c76f1271dea09776b55db8e128cd9776eed8c', class: "ir-print-room__unit" }, "(unit ", room.roomtype.id, ")"), h("p", { key: '64647334e12768dcf177e0c5573178245f99eb76', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: 'd06941e7b4fce32d06d2a2cb1dde59f156bc2868', class: "ir-print-room__body" }, h("div", { key: '35b89a84791ab17765882dc1ff1e34aecd804f79', class: "ir-print-room__details" }, h("div", { key: '4b1c1bc9fb3271e37f85a4a65d355e160ec4b4a4', class: "ir-print-room__row" }, h("ir-printing-label", { key: '89b8c8d2af0b62e790b7ce03b47fb12c0d8c499b', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: '80aa612a09a41ef5833ada6e2011601f741dfd84', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: 'e21acc2fa9253657ad43f3ef2449fa06b8a3d355', class: "ir-print-room__row" }, h("div", { key: '2e750a11cc81ab22afc895f5364b42343c167a48', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '05e1da1a084f2f3fb8e25427a28d62cb8cc17c88', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: 'b08cb2c652759228908abfbaa3aa3171ef9ec2a6', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: '8da6c4d8d2e667b637d7c1871a98f917154c398a', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: '762bf29284dd8a1aebaa945575817af36c69853e', class: "ir-print-room__policies" }, h("ir-printing-label", { key: '3178952d98205fc325ebd06a2c9824c486ba3d4a', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: '84cb81d80eb0a60f8c056d178289bf2c49cbfd4a', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: '24a31f7208be6838e521d2699f2f60b152e75ea9', class: "ir-print-room__totals" }, h("ir-printing-label", { key: 'ad9e290e617944527a701fa8e3f3b8bc38916c9c', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: 'fc7c3ea95cc981f57f6a6b993b29994a1e4eccfd', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: 'c580347b69b369a4b55d5bc83ac9461f09f3ac4d', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '5f2f8e8067ca61ab2d9988c603c55a3100c94d06', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (h("div", { class: "room_amount_container", key: d.date }, h("p", { class: "room_amount date" }, this.formatDate(d.date)), h("p", { class: "room_amount amount", style: { paddingRight: '0.375rem' } }, formatAmount(currency, d.amount))))))));
    }
    static get style() { return IrPrintRoomStyle0; }
}, [1, "ir-print-room", {
        "room": [16],
        "booking": [16],
        "property": [16],
        "currency": [1],
        "idx": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-print-room", "ir-printing-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPrintRoom);
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPrintRoom as I, defineCustomElement as d };

//# sourceMappingURL=ir-print-room2.js.map