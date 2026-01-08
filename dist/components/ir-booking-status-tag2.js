import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irBookingStatusTagCss = ".sc-ir-booking-status-tag-h{display:block}";
const IrBookingStatusTagStyle0 = irBookingStatusTagCss;

const IrBookingStatusTag = /*@__PURE__*/ proxyCustomElement(class IrBookingStatusTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    status;
    isRequestToCancel;
    badgeVariant = {
        '001': 'warning',
        '002': 'success',
        '003': 'danger',
        '004': 'danger',
    };
    render() {
        return (h("wa-badge", { key: 'f0f3a84cfd8bc4af98d8dd478f53c8e54a60424e', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
    static get style() { return IrBookingStatusTagStyle0; }
}, [2, "ir-booking-status-tag", {
        "status": [16],
        "isRequestToCancel": [4, "is-request-to-cancel"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-status-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingStatusTag);
            }
            break;
    } });
}

export { IrBookingStatusTag as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-status-tag2.js.map