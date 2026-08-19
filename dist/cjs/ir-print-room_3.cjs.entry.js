'use strict';

var index = require('./index-DgHWBwDV.js');
var utils = require('./utils-BHTfkyQu.js');
var moment = require('./moment-CdViwxPQ.js');
var functions = require('./functions-mvRDRfzA.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CgquPLci.js');
require('./index-daCuTVuG.js');
require('./locales.store-CqlNSy6z.js');
require('./type-Dy9pVS4V.js');

const irPrintRoomCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;}.ir-print-room__header{display:flex;align-items:center;gap:0.625rem;font-weight:bold;font-size:1rem;line-height:1.5rem;margin-bottom:0.375rem}.ir-print-room__body{display:flex;align-items:center;gap:0.625rem;flex-wrap:wrap}.ir-print-room__details{flex:1 1 0%}.ir-print-room__row{display:flex;align-items:center;gap:1rem}.ir-print-room__daily-amounts{display:flex}.room_amount{min-width:4.38rem}.room_amount_container{display:flex;font-weight:600;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.ir-print-room__daily-amounts--with-divider{padding-bottom:1rem}p,div,section,span{margin:0;padding:0;box-sizing:border-box}body{display:block;font-size:0.88rem;font-weight:600;box-sizing:border-box}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.ir-print-room__tax-row{display:flex;font-size:0.875rem;font-weight:700}.ir-print-room__totals{display:flex;gap:0.25rem;flex-direction:column}.ir-print-room__header{font-size:1.1rem}.ir-print-room__dates{display:flex;align-items:center;gap:0.5rem;font-weight:600}.ir-print-room__body{flex-direction:column}.ir-print-room__body{align-items:flex-start;margin-top:1rem}@media (min-width: 640px){.ir-print-room__totals{align-items:flex-end}.room_amount_container{flex-direction:column}.ir-print-room__body{flex-direction:row}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}`;

const IrPrintRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const m = moment.hooks(date, 'YYYY-MM-DD');
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
        return moment.hooks(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index$1) => (index.h("div", { key: `room_${d.name}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), index.h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (index.h(index.Fragment, null, filteredData?.map((d, index$1) => {
            const amount = (this.room.total * d.pct) / 100;
            return (index.h("div", { key: `direct_room_${d.name}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), index.h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", utils.formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index$1) => (index.h("div", { key: `direct_room_${d.TAX_NAME}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, "Including ", d.TAX_NAME), index.h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", utils.formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (index.h("section", { key: 'e53e6601dda1d11c6eaea42b2744bcf90781d78e', class: "ir-print-room" }, index.h("header", { key: '7976315e4a3ba7417a1b725599d76551a8e87257', class: "ir-print-room__header" }, index.h("p", { key: 'a10853c42e4a7ed9103b179d10c3ef62d0cab7ef', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && index.h("p", { key: '98b5fe90d36e7e0b37b071abc37f1d11f4b85cc1', class: "ir-print-room__unit" }, "(unit ", room.unit.name, ")"), index.h("p", { key: 'f906228837b8d0b346d108c760344757f963cb49', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), index.h("div", { key: 'baf78e40e2938ca7570bd510ec0871ff02c65541', class: "ir-print-room__body" }, index.h("div", { key: '97fcebb2eebb184b8eff86d0c66c29a232649826', class: "ir-print-room__details" }, index.h("div", { key: '67c174caf3b9559ddeed36a7128a662b488cfb9a', class: "ir-print-room__row" }, index.h("ir-printing-label", { key: '1d195fc5b7200545ab03bc621f167df35028ba62', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), index.h("ir-printing-label", { key: 'c105269775cf620c4661108f1f6f81d820f4c9a2', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), index.h("div", { key: '0611ee0f8a97cac8f7b300031807bb46d7591239', class: "ir-print-room__row" }, index.h("div", { key: 'ef6a34a38e877956cdeafd3fb2d9acb5e2f0f87f', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), index.h("span", { key: '3503feac5d2340449ef0de8818851e3251e9408a', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && index.h("p", { key: 'e3794e7b11204f457cb221a340f470243d6da3d3', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), index.h("ir-printing-label", { key: '52d4eaf8fffd2a4471f6d892dd6abe8eb9c84c74', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (index.h("div", { key: '91ebb0fcc82bf8f18ae9e4c16e8644e34b832cc2', class: "ir-print-room__policies" }, index.h("ir-printing-label", { key: '73a6b0ba74492f0d8c3445df990760a07c724adc', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), index.h("ir-printing-label", { key: '0811e6ab8cd67d58b9c851d4ce49627212a564c6', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), index.h("aside", { key: '6435a196954e23b3952aebe7a73e52ec4aa13617', class: "ir-print-room__totals" }, index.h("ir-printing-label", { key: '2328a1faae39d3b25121a3f7528866874ac36c3c', label: "Total:", content: utils.formatAmount(currency, room?.total) }), this.renderTaxSection(), index.h("ir-printing-label", { key: '635e9748c55b9ea035348702d01505a49d07ea54', label: "Grand total:", content: utils.formatAmount(currency, room?.gross_total) }), booking?.is_direct && index.h("ir-printing-label", { key: '73a27ae279ebbcc173b46f6a57603f813ffcad5c', label: "Due upon booking:", content: utils.formatAmount(currency, Number(room?.gross_guarantee)) }))), index.h("div", { key: '265ec77ad470fe9107e7fcee8a45f4aa83822f32', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (index.h("div", { class: "room_amount_container", key: d.date }, index.h("p", { class: "room_amount date" }, this.formatDate(d.date)), index.h("p", { class: "room_amount amount", style: { paddingRight: '0.375rem' } }, utils.formatAmount(currency, d.amount))))))));
    }
};
IrPrintRoom.style = irPrintRoomCss();

const irPrintingExtraServiceCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}.ir-print-extra-services{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-extra-services__title{font-weight:600;font-size:1.125rem ;line-height:1.75rem ;color:#111827;margin-bottom:0.625rem}.ir-print-extra-services__list{display:flex;flex-direction:column;gap:0.75rem}.ir-print-extra-services__item{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.ir-print-extra-services__details{display:flex;flex-direction:column;gap:0.25rem;max-width:80%}.ir-print-extra-services__description{word-break:break-word}.ir-print-extra-services__dates{font-size:0.75rem;color:#374151}.ir-print-extra-services__date-wrapper{display:inline-flex;align-items:center;gap:0.25rem}.ir-print-extra-services__date{white-space:nowrap}.ir-print-extra-services__date-separator{margin:0 0.25rem}.ir-print-extra-services__date::part(content){font-size:0.875rem}.ir-print-extra-services__price{font-weight:700;white-space:nowrap}`;

const IrPrintingExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Extra services attached to the booking */
    extraServices;
    /** Booking currency */
    currency;
    invocableKeys;
    render() {
        return (index.h("section", { key: '868f97a21d1e329b9599a602fa2a2b605bb2f73c', class: "ir-print-extra-services" }, index.h("h3", { key: '50f0ef09f4a8fbdca1784483b50eb6b71f6d09aa', class: "ir-print-extra-services__title" }, "Extra services"), index.h("div", { key: 'a8b3d0b1193510f9b5d4e28d382248f2224fbe7e', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (index.h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, index.h("div", { class: "ir-print-extra-services__details" }, index.h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (index.h("div", { class: "ir-print-extra-services__dates" }, index.h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && (index.h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: moment.hooks(service.start_date).format('dddd, DD MMM YYYY') })), service.end_date && (index.h(index.Fragment, null, index.h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), index.h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: moment.hooks(service.end_date).format('dddd, DD MMM YYYY') }))), ")")))), index.h("div", { class: "ir-print-extra-services__price" }, utils.formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
};
IrPrintingExtraService.style = irPrintingExtraServiceCss();

const irPrintingPickupCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}@media only screen and (min-width: 768px){.room_amount_container{flex-direction:column}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}:host{display:block}.ir-print-pickup{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-pickup__title{font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.625rem}.ir-print-pickup__content{display:flex;flex-direction:column;gap:0.5rem}.ir-print-pickup__row{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.ir-print-pickup__row--secondary{margin-top:0.375rem}.ir-print-pickup__vehicle{font-weight:500;white-space:nowrap}.ir-print-pickup__vehicle-separator{margin:0 0.25rem}`;

const IrPrintingPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Pickup information attached to the booking */
    pickup;
    render() {
        if (!this.pickup) {
            return null;
        }
        return (index.h("section", { class: "ir-print-pickup" }, index.h("p", { class: "ir-print-pickup__title" }, "Yes, from ", this.pickup.selected_option.location.description), index.h("div", { class: "ir-print-pickup__content" }, index.h("div", { class: "ir-print-pickup__row" }, index.h("ir-printing-label", { label: "Arrival date:", content: moment.hooks(this.pickup.date).format('dddd, DD MMM YYYY') }), index.h("ir-printing-label", { label: "Arrival time:", content: functions._formatTime(this.pickup.hour.toString(), this.pickup.minute.toString()) }), index.h("ir-printing-label", { label: "Flight details:", content: this.pickup.details })), index.h("div", { class: "ir-print-pickup__row ir-print-pickup__row--secondary" }, index.h("p", { class: "ir-print-pickup__vehicle" }, this.pickup.selected_option.vehicle.description, index.h("span", { class: "ir-print-pickup__vehicle-separator" }, " \u2013 "), utils.formatAmount(this.pickup.selected_option.currency.symbol, this.pickup.selected_option.amount)), index.h("ir-printing-label", { label: "Number of vehicles:", content: this.pickup.nbr_of_units?.toString() }), index.h("ir-printing-label", { label: "Due upon booking:", content: utils.formatAmount(this.pickup.currency.symbol, this.pickup.total) })))));
    }
};
IrPrintingPickup.style = irPrintingPickupCss();

exports.ir_print_room = IrPrintRoom;
exports.ir_printing_extra_service = IrPrintingExtraService;
exports.ir_printing_pickup = IrPrintingPickup;
