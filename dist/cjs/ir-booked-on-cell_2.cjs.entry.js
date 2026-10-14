'use strict';

var index = require('./index-IDeZZwEK.js');
var functions = require('./functions-BsloxeNr.js');
var irDate = require('./ir-date-Bjy8vNGm.js');
require('./moment-CdViwxPQ.js');
var t = require('./t-sd8HJHNy.js');
var number = require('./number-D6oFwIUn.js');
require('./locales.store-D6DJIhoZ.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

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
        return (index.h(index.Host, { key: 'e6f2e26fac306fb7dfc01828915ef5060ee4c38c' }, this.label && index.h("p", { key: '50ab0fc1b2286c2893873c0194402d4b1b78c8e9', class: "cell-label" }, this.label, ":"), index.h("p", { key: 'f267d17d3bb65f2fcf0a6b84464db429444f8595', class: "booked-on-cell__date" }, irDate.formatDate(date, 'DD MMM YYYY')), this.showTime && index.h("p", { key: '0737450de3bc957ae3261fa2cc3c29f8ca2a4001', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

const irStatusActivityCellCss = () => `.sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__modified.sc-ir-status-activity-cell{color:var(--wa-color-danger-fill-loud) !important}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}`;

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
        return (index.h(index.Host, { key: '12f6b04a2545ec2b861555e72263000734ca38d0' }, index.h("ir-booking-status-tag", { key: '76eb6e1373adddc6fc36f7dfbb72c52ff85b8a57', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '4d2e85c2378a95bf2524a22cf7c853cfe3195f63', class: "status-activity__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (index.h(index.Fragment, { key: 'c20f961fbbded497c563c30287b1b69c6bd20a5e' }, index.h("wa-tooltip", { key: 'c7877f4eca23f2d6c94645981074f25535ca70a6', for: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                irDate.formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: '5c792dcc4e99441d9ad5595adf92f254ad0d09a9', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;
