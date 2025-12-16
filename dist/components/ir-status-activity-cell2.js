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
        return (h(Host, { key: '9c623c9f243f3106b60e04e71eb12a04c2e525b8' }, h("ir-booking-status-tag", { key: '42cba21b364b20161665ee8dca4fe1ae085721df', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '7bb15f8a89abcd7c85ec0c533858c3093fb6238f', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '11f3f9b0fae3cc236fe7080762a02262dc9a5b6e' }, h("wa-tooltip", { key: 'fb6a224bbaf3c3a31227973ff77f8fbdbd05e93b', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '3715ef435e56c9c41ac20115c43f39dd53bcf2a8', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
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