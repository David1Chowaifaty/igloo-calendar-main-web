'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

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
        return (index.h(index.Host, { key: 'd83157e870d4fd800511832f59c4b949ee10a590' }, index.h("ir-booking-status-tag", { key: '986abecd553b48c66f3458c2afe4f9d86d9e9833', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '1d9bf30f904cb5a419bb10b18b8a1f7ba7a23187', class: "status-activity__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (index.h(index.Fragment, { key: '26ecfc36e334d314e55640293eca43d023ed7ef7' }, index.h("wa-tooltip", { key: '29998e3cfb725aa0cf0ecb265b379a032f653b02', for: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                irDate.formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: '199297d8fe01d3cd51510210a05d72c0fa980e69', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_status_activity_cell = IrStatusActivityCell;
