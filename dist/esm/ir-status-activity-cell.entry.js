import { r as registerInstance, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import './moment-Mki5YqAR.js';
import { c as formatNumber } from './number-0UrU_yO2.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irStatusActivityCellCss = () => `.sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__modified.sc-ir-status-activity-cell{color:var(--wa-color-danger-fill-loud) !important}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}`;

const IrStatusActivityCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: 'd83157e870d4fd800511832f59c4b949ee10a590' }, h("ir-booking-status-tag", { key: '986abecd553b48c66f3458c2afe4f9d86d9e9833', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '1d9bf30f904cb5a419bb10b18b8a1f7ba7a23187', class: "status-activity__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (h(Fragment, { key: '26ecfc36e334d314e55640293eca43d023ed7ef7' }, h("wa-tooltip", { key: '29998e3cfb725aa0cf0ecb265b379a032f653b02', for: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: '199297d8fe01d3cd51510210a05d72c0fa980e69', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrStatusActivityCell as ir_status_activity_cell };
