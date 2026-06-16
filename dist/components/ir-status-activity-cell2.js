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
        return (h(Host, { key: '5d615c1d35cab18db00d865ab15e19ba544d4dd7' }, h("ir-booking-status-tag", { key: '3f35cd9ac1e502f0e863b732114509a8ec960d83', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: 'b38e709b6467e1324b8b7f760d6aa6e0f42cf2eb', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: 'f5594067f034dc1358bd94acb200ab0781ec05a8' }, h("wa-tooltip", { key: 'b3c614bbd6492dd0c284e096182fe4d2eb7b205e', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '1aab1593463aa3c54b750f0fa48940dcc9c0c819', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
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