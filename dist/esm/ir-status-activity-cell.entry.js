import { r as registerInstance, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-Bh8M_fTk.js';
import './moment-Mki5YqAR.js';
import { c as formatNumber } from './number-BguMo00d.js';
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
        return (h(Host, { key: 'd56f7ba047c47f4897d92011b77ecd498d66d8df' }, h("ir-booking-status-tag", { key: '7a9c6737aa80d07a2d6df7889c8d940d9da7b3f0', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '83c5e735443690b7e0e7d0cb8a2c51700353b2c6', class: "status-activity__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (h(Fragment, { key: '52fc640dfee4522675a490c9bc797c82847c5ddf' }, h("wa-tooltip", { key: '101639ef5e7f7577f2c4fcce880d5d8ad1479e66', for: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: '3a566e5e7c4c6187393f95eaf5006efacc6aa7aa', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrStatusActivityCell as ir_status_activity_cell };
