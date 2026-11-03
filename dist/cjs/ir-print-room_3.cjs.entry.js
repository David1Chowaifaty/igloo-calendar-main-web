'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CMx8s-oW.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var functions = require('./functions-CaNAUyCw.js');
require('./locale-scope-Cch-vf1R.js');
require('./type-DxODN41W.js');
require('./types-BVJQZ50e.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irPrintRoomCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;}.ir-print-room__header{display:flex;align-items:center;gap:0.625rem;font-weight:bold;font-size:1rem;line-height:1.5rem;margin-bottom:0.375rem}.ir-print-room__body{display:flex;align-items:center;gap:0.625rem;flex-wrap:wrap}.ir-print-room__details{flex:1 1 0%}.ir-print-room__row{display:flex;align-items:center;gap:1rem}.ir-print-room__daily-amounts{display:flex}.room_amount{min-width:4.38rem}.room_amount_container{display:flex;font-weight:600;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.ir-print-room__daily-amounts--with-divider{padding-bottom:1rem}p,div,section,span{margin:0;padding:0;box-sizing:border-box}body{display:block;font-size:0.88rem;font-weight:600;box-sizing:border-box}.main-container{max-width:56.25rem;margin-inline-start:auto;margin-inline-end:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-inline-start:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-inline-end:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-inline-start:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:start}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-inline-end:0.62rem}.pickup-details .label-title{padding-inline-end:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.ir-print-room__tax-row{display:flex;font-size:0.875rem;font-weight:700}.ir-print-room__totals{display:flex;gap:0.25rem;flex-direction:column}.ir-print-room__header{font-size:1.1rem}.ir-print-room__dates{display:flex;align-items:center;gap:0.5rem;font-weight:600}.ir-print-room__body{flex-direction:column}.ir-print-room__body{align-items:flex-start;margin-top:1rem}@media (min-width: 640px){.ir-print-room__totals{align-items:flex-end}.room_amount_container{flex-direction:column}.ir-print-room__body{flex-direction:row}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}.ir-print-room__label--capitalize::part(label){text-transform:capitalize}.ir-print-room__label--lowercase::part(content){text-transform:lowercase}`;

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
        const dayMonth = irDate.formatDate(m, 'DD/MM');
        let dayOfWeekAbbr = irDate.formatDate(m, 'ddd'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
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
        const adultLabel = adultCount > 1 ? t.t('Lcz_Adults', { fallback: 'adults' }) : t.t('Lcz_Adult', { fallback: 'adult' });
        const childLabel = childCount > 1 ? t.t('Lcz_Children', { fallback: 'Children' }) : t.t('Lcz_Child', { fallback: 'Child' });
        const infantLabel = infantCount > 1 ? t.t('Lcz_InfantsLabel', { fallback: 'infants' }) : t.t('Lcz_InfantSingular', { fallback: 'infant' });
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
        return irDate.formatDate(date, 'DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index$1) => (index.h("div", { key: `room_${d.name}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? t.t('Lcz_Excluding', { fallback: 'Excluding' }) : t.t('Lcz_Including', { fallback: 'Including' }), " ", d.name), index.h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (index.h(index.Fragment, null, filteredData?.map((d, index$1) => {
            const amount = (this.room.total * d.pct) / 100;
            return (index.h("div", { key: `direct_room_${d.name}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? t.t('Lcz_Excluding', { fallback: 'Excluding' }) : t.t('Lcz_Including', { fallback: 'Including' }), " ", d.name), index.h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", number.formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index$1) => (index.h("div", { key: `direct_room_${d.TAX_NAME}_${index$1}`, class: "ir-print-room__tax-row" }, index.h("p", { class: "ir-print-room__tax-label" }, t.t('Lcz_Including', { fallback: 'Including' }), " ", d.TAX_NAME), index.h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", number.formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (index.h("section", { key: '69a12635853cfc6709702e62561bcf561c148e61', class: "ir-print-room" }, index.h("header", { key: '40c96bf0a632425f7cb8d0d2cdd61cd816f2e7de', class: "ir-print-room__header" }, index.h("p", { key: 'eee8cd75e3ac622c0c9a6fb5fb9dfb779520a96a', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && index.h("p", { key: '9d38b3aa9730bdd3acd22c057fd8bbe2a68165b8', class: "ir-print-room__unit" }, t.t('Lcz_UnitLabel', { fallback: '(unit %1)', params: [room.unit.name] })), index.h("p", { key: 'f1d4c92ef3573add56a6e196563f73c65fdc96cb', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), index.h("div", { key: 'fa74fd3a39ff6b16b950957f4e5ab590671d431c', class: "ir-print-room__body" }, index.h("div", { key: 'cdba33373f663116e89a0d535c979cadfecc3c9f', class: "ir-print-room__details" }, index.h("div", { key: '9d9df3e979531fef4e157669c18a5c414848bd01', class: "ir-print-room__row" }, index.h("ir-printing-label", { key: 'd4009f3fa146f284421f710253a408507725059b', class: "ir-print-room__label--capitalize", label: `${t.t('Lcz_GuestName', { fallback: 'Guest name' })}:`, content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), index.h("ir-printing-label", { key: 'a2701dcbc4cf8b66411462b352ce1d6bfbd4a777', class: "ir-print-room__label--lowercase", "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), index.h("div", { key: 'cc502604c0ae734a5a38be3aa895305b9c2af72f', class: "ir-print-room__row" }, index.h("div", { key: 'ec95bd2809db1fab2b5c4246a034cca93f7ce3cb', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), index.h("span", { key: 'f9ab711de635802bd259fcad93ac85f942897b32', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && (index.h("p", { key: '17bc499c65361cc03fbf438913fe08f96f57d34b', class: "ir-print-room__departure-time" }, "(", t.t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ": ", room.departure_time.description, ")"))), index.h("ir-printing-label", { key: 'a730d4e02fc1e59d7f951015281287a5b2b80fdf', label: t.t('Lcz_SmokingOptionsLabel', { fallback: 'Smoking options:' }), display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (index.h("div", { key: '1e955a58021b6d1dfbe8c1ee2de3ad54aa333d52', class: "ir-print-room__policies" }, index.h("ir-printing-label", { key: '501fe99075694ae493c0d28a73f89336be2df9da', label: t.t('Lcz_CancellationLabel', { fallback: 'Cancellation:' }), display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), index.h("ir-printing-label", { key: '3f2cea69f543bf51e5f6cbc50a23d1924e3578e6', label: t.t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' }), display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), index.h("aside", { key: '25d8df0716f33a9789210e0b82d2bb5232004cd2', class: "ir-print-room__totals" }, index.h("ir-printing-label", { key: '90146899432d22f647975b1a778f3be83b912a12', label: `${t.t('Lcz_Total', { fallback: 'Total' })}:`, content: number.formatAmount(currency, room?.total) }), this.renderTaxSection(), index.h("ir-printing-label", { key: '9c4a4cf1a81bc7a2e01487c0be53b2fe8c5238ac', label: t.t('Lcz_GrandTotalLabel', { fallback: 'Grand total:' }), content: number.formatAmount(currency, room?.gross_total) }), booking?.is_direct && (index.h("ir-printing-label", { key: 'aad448f5fd50314b88c1f853768cee91e42a3314', label: t.t('Lcz_DueUponBookingLabel', { fallback: 'Due upon booking:' }), content: number.formatAmount(currency, Number(room?.gross_guarantee)) })))), index.h("div", { key: 'd70fa2b3a7e4ed3debae145fadb5e6d44b99c32e', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (index.h("div", { class: "room_amount_container", key: d.date }, index.h("p", { class: "room_amount date" }, this.formatDate(d.date)), index.h("p", { class: "room_amount amount", style: { paddingInlineEnd: '0.375rem' } }, number.formatAmount(currency, d.amount))))))));
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
        return (index.h("section", { key: '9d8babac9416cbd11717a39c3c9bde74c05335a6', class: "ir-print-extra-services" }, index.h("h3", { key: 'ed96a3b5bd740f90bba3394101d9c8df4d5a3001', class: "ir-print-extra-services__title" }, t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })), index.h("div", { key: 'a6811a1324f7514ae74011bab640a566fde0f2be', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (index.h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, index.h("div", { class: "ir-print-extra-services__details" }, index.h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (index.h("div", { class: "ir-print-extra-services__dates" }, index.h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && index.h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: irDate.formatDate(service.start_date, 'dddd, DD MMM YYYY') }), service.end_date && (index.h(index.Fragment, null, index.h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), index.h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: irDate.formatDate(service.end_date, 'dddd, DD MMM YYYY') }))), ")")))), index.h("div", { class: "ir-print-extra-services__price" }, number.formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
};
IrPrintingExtraService.style = irPrintingExtraServiceCss();

const irPrintingPickupCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}.main-container{max-width:56.25rem;margin-inline-start:auto;margin-inline-end:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-inline-start:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-inline-end:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-inline-start:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:start}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-inline-end:0.62rem}.pickup-details .label-title{padding-inline-end:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}@media only screen and (min-width: 768px){.room_amount_container{flex-direction:column}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}:host{display:block}.ir-print-pickup{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-pickup__title{font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.625rem}.ir-print-pickup__content{display:flex;flex-direction:column;gap:0.5rem}.ir-print-pickup__row{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.ir-print-pickup__row--secondary{margin-top:0.375rem}.ir-print-pickup__vehicle{font-weight:500;white-space:nowrap}.ir-print-pickup__vehicle-separator{margin:0 0.25rem}`;

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
        return (index.h("section", { class: "ir-print-pickup" }, index.h("p", { class: "ir-print-pickup__title" }, t.t('Lcz_PickupConfirmedFrom', { fallback: 'Yes, from %1', params: [this.pickup.selected_option.location.description] })), index.h("div", { class: "ir-print-pickup__content" }, index.h("div", { class: "ir-print-pickup__row" }, index.h("ir-printing-label", { label: t.t('Lcz_ArrivalDateLabel', { fallback: 'Arrival date:' }), content: irDate.formatDate(this.pickup.date, 'dddd, DD MMM YYYY') }), index.h("ir-printing-label", { label: `${t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' })}:`, content: functions._formatTime(this.pickup.hour.toString(), this.pickup.minute.toString()) }), index.h("ir-printing-label", { label: t.t('Lcz_FlightDetailsLabel', { fallback: 'Flight details:' }), content: this.pickup.details })), index.h("div", { class: "ir-print-pickup__row ir-print-pickup__row--secondary" }, index.h("p", { class: "ir-print-pickup__vehicle" }, this.pickup.selected_option.vehicle.description, index.h("span", { class: "ir-print-pickup__vehicle-separator" }, " \u2013 "), number.formatAmount(this.pickup.selected_option.currency.symbol, this.pickup.selected_option.amount)), index.h("ir-printing-label", { label: t.t('Lcz_NumberOfVehiclesLabel', { fallback: 'Number of vehicles:' }), content: this.pickup.nbr_of_units?.toString() }), index.h("ir-printing-label", { label: t.t('Lcz_DueUponBookingLabel', { fallback: 'Due upon booking:' }), content: number.formatAmount(this.pickup.currency.symbol, this.pickup.total) })))));
    }
};
IrPrintingPickup.style = irPrintingPickupCss();

exports.ir_print_room = IrPrintRoom;
exports.ir_printing_extra_service = IrPrintingExtraService;
exports.ir_printing_pickup = IrPrintingPickup;
