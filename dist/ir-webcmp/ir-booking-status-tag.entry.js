import { r as registerInstance, h } from './index-7b3961ed.js';

const irBookingStatusTagCss = ".sc-ir-booking-status-tag-h{display:block}";

const IrBookingStatusTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("wa-badge", { key: 'f4d54465cfc9d757ffff772fdb330cf59aa31821', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
};
IrBookingStatusTag.style = irBookingStatusTagCss;

export { IrBookingStatusTag as ir_booking_status_tag };

//# sourceMappingURL=ir-booking-status-tag.entry.js.map