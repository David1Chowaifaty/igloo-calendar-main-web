import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-booking-status-tag2.js';

const irStatusActivityCellCss = ".sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}";
const IrStatusActivityCellStyle0 = irStatusActivityCellCss;

const IrStatusActivityCell = /*@__PURE__*/ proxyCustomElement(class IrStatusActivityCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: 'df38acb8551dd6de814dfb33915c202ad2adb57a' }, h("ir-booking-status-tag", { key: '1695f36070e0fe498c2a918665da7149100c1de4', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '07179d4e4383da478f814af2a317add350344cee', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '73e7844814f0742b9464788d38021e89ef2ea15c' }, h("wa-tooltip", { key: '58da51bcf403489c6bad00cd6de81a7118720435', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'd5cfcd063a2bf40f605ad939d04b9228e3036899', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
    static get style() { return IrStatusActivityCellStyle0; }
}, [2, "ir-status-activity-cell", {
        "isRequestToCancel": [4, "is-request-to-cancel"],
        "status": [16],
        "showModifiedBadge": [4, "show-modified-badge"],
        "showManipulationBadge": [4, "show-manipulation-badge"],
        "lastManipulation": [16],
        "bookingNumber": [1, "booking-number"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-status-activity-cell", "ir-booking-status-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-status-activity-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrStatusActivityCell);
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrStatusActivityCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-status-activity-cell2.js.map