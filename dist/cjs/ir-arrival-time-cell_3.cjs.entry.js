'use strict';

var index = require('./index-CQkpA5n3.js');
var functions = require('./functions-B3fUkdt1.js');
var irDate = require('./ir-date-BLb2Vxrk.js');
require('./moment-CdViwxPQ.js');
var t = require('./t-C54QV4_c.js');
var number = require('./number-BmMUYhE5.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (index.h(index.Host, { key: 'c4658c06ccb266b43688de0aff1933d71957ea6d' }, index.h("div", { key: '0c6be98c11d188e61833b79543fa4d7787b1ccb2', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '9d8fd483e3c8d45de585f86e6480c4aeee919a34', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '557b884402ac911855e7727ce513a37090fa953b' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = irArrivalTimeCellCss();

const irBookedOnCellCss = () => `.sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}`;

const IrBookedOnCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    bookedOn;
    label;
    showTime = true;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (index.h(index.Host, { key: 'a72a157710d7d65d386ac37e5f78e77a63bc1c84' }, this.label && index.h("p", { key: '9c54713bc153203c750a0eaae74593c82fed3e24', class: "cell-label" }, this.label, ":"), index.h("p", { key: '0a8a84e3444b273c8604b6e72ef176fe939a8686', class: "booked-on-cell__date" }, irDate.formatDate(date, 'DD MMM YYYY')), this.showTime && index.h("p", { key: '12bd5a1c253d315eabae83b6a2de18c7a5aa93bd', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

const irStatusActivityCellCss = () => `.sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}`;

const IrStatusActivityCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (index.h(index.Host, { key: '47bb67a35667aecf4033cf8b7c0014f9ddf92d86' }, index.h("ir-booking-status-tag", { key: '6c4d31e491e66dc131af7e7b537e3f8fb719768d', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: 'da8b5918bfc69ae83e04a7f420df3a8148557c19', class: "status-activity__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (index.h(index.Fragment, { key: '7f213beb9059c68da854baf51edad1e27bcbaf0a' }, index.h("wa-tooltip", { key: '44e1dba241d1a1f0db6730ab391f0fcfa365682e', for: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                irDate.formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: 'c319264fd20bed80a7146d2e77d1a798ba5b35f2', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;
