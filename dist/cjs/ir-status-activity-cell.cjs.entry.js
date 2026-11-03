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
        return (index.h(index.Host, { key: '10a8e342ea5dd55566613b693e234f5fab8c89dc' }, index.h("ir-booking-status-tag", { key: '69ee260980287b0dac90b8c5ffd0a4e363bf7bc9', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: 'de63de09bd35bc7fb1e501601d112ffae3948695', class: "status-activity__modified" }, t.t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (index.h(index.Fragment, { key: '92767a9df1adfbb757e5eee310aa64b86d4e06af' }, index.h("wa-tooltip", { key: 'd0f15c51aade4e4bdf6cdbd7996ce8c7c1e62d3a', for: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                irDate.formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                number.formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                number.formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), index.h("p", { key: 'c3d9a843f3c2dd17ee7d9a1758641da45f2fa693', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t.t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_status_activity_cell = IrStatusActivityCell;
