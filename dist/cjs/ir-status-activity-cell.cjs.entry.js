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
        return (index.h(index.Host, { key: 'e677b7b7bb8f5171e6dca82c05ab67f5e9fd9db7' }, index.h("ir-booking-status-tag", { key: '61b98f9a95e9e153ef15e06bf6de5867cd00d4a6', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '893e5218e0ba390f77844ca78ee1a025cd4a73cd', class: "status-activity__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (index.h(index.Fragment, { key: '857f96a347eca74d56529676cd4b31b4ed232cbc' }, index.h("wa-tooltip", { key: '5cd203078eb1611fb07f65454a3eba7b47b49dbb', for: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                irDate.formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: 'b6c24657bf06954dbc5e1f110bee4b4426aefab2', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_status_activity_cell = IrStatusActivityCell;
