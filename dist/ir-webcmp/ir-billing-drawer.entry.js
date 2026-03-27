import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';

const irBillingDrawerCss = ".sc-ir-billing-drawer-h{display:block}.billing__drawer.sc-ir-billing-drawer::part(footer){display:none}";

const IrBillingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.billingClose = createEvent(this, "billingClose", 7);
    }
    /**
     * Controls whether the billing drawer is open or closed.
     *
     * When `true`, the drawer becomes visible.
     * When `false`, it is hidden.
     *
     * This prop is reflected to the host element.
     *
     * @type {boolean}
     */
    open;
    /**
     * The booking object containing reservation and guest details
     * that will be used to populate the billing view.
     *
     * @type {Booking}
     */
    booking;
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (h("ir-drawer", { key: '0be4fdd9ba065053c71e9af3de91307fd930550a', style: {
                '--ir-drawer-width': '50rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "billing__drawer", onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: 'f75dd39c4f535f14935be6a9e5dcedecf20f6f11', booking: this.booking })));
    }
};
IrBillingDrawer.style = irBillingDrawerCss;

export { IrBillingDrawer as ir_billing_drawer };

//# sourceMappingURL=ir-billing-drawer.entry.js.map