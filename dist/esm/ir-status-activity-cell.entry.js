import { r as registerInstance, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import { c as formatNumber } from './number-B8waOzTO.js';
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
        return (h(Host, { key: 'e677b7b7bb8f5171e6dca82c05ab67f5e9fd9db7' }, h("ir-booking-status-tag", { key: '61b98f9a95e9e153ef15e06bf6de5867cd00d4a6', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '893e5218e0ba390f77844ca78ee1a025cd4a73cd', class: "status-activity__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (h(Fragment, { key: '857f96a347eca74d56529676cd4b31b4ed232cbc' }, h("wa-tooltip", { key: '5cd203078eb1611fb07f65454a3eba7b47b49dbb', for: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: 'b6c24657bf06954dbc5e1f110bee4b4426aefab2', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrStatusActivityCell as ir_status_activity_cell };
