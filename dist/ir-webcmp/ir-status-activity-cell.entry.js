import { r as registerInstance, h, e as Host, F as Fragment } from './index-7b3961ed.js';

const irStatusActivityCellCss = ".sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}";

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
        return (h(Host, { key: 'c3882ddf423b27b22c46fd6c0ad16871de0ff598' }, h("ir-booking-status-tag", { key: '2b2dcebf19cc2e186895b69df02622b50637d898', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '29a43b31563ca6fda0ccaf49d820bbbb5d9588ec', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '0d8992de8bdeb24043f8f96bd96f67df476991f3' }, h("wa-tooltip", { key: '954f04dde3df13af60b2b96e010cc02fffffb9fb', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '3c9084a8a129f785e87d724b8265f6be49479f84', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss;

export { IrStatusActivityCell as ir_status_activity_cell };

//# sourceMappingURL=ir-status-activity-cell.entry.js.map