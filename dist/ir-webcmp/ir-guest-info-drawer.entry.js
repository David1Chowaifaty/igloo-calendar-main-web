import { r as registerInstance, a as createEvent, i as getElement, h } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import { v as v4 } from './index-05b40732.js';
import './index-17663a35.js';

const irGuestInfoDrawerCss = ".sc-ir-guest-info-drawer-h{display:block}";

const IrGuestInfoDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestInfoDrawerClosed = createEvent(this, "guestInfoDrawerClosed", 7);
        this.guestChanged = createEvent(this, "guestChanged", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guestInfoDrawerClosed;
    guestChanged;
    resetBookingEvt;
    toast;
    get hostElement() { return getElement(this); }
    handleDrawerHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.guestInfoDrawerClosed.emit({ source: event.detail?.source ?? this.hostElement });
    };
    handleCancel = () => {
        this.guestInfoDrawerClosed.emit({ source: this.hostElement });
    };
    _formId = `guest-details-form_${v4()}`;
    render() {
        const drawerLabel = locales?.entries?.Lcz_GuestDetails || 'Guest info';
        return (h("ir-drawer", { key: 'be5eaf9ba36f82360bfd141e9c2382f61223096f', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (h("ir-guest-info-form", { key: '65f6e2be056f2c75404baaf1759c571cc8ab1508', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), h("div", { key: '8c9faf510614c7d9949af59ed7eba29206cb9ef1', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '4c178a30501d72a04e8e7b6ea7453b018e8c8ee6', size: "medium", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, locales.entries?.Lcz_Cancel || 'Cancel'), h("ir-custom-button", { key: '4e4ccfcd17419234cca3c484b980316d7e31600c', type: "submit", form: this._formId, size: "medium", variant: "brand", loading: isRequestPending('/Edit_Exposed_Guest') }, locales.entries?.Lcz_Save || 'Save'))));
    }
};
IrGuestInfoDrawer.style = irGuestInfoDrawerCss;

export { IrGuestInfoDrawer as ir_guest_info_drawer };

//# sourceMappingURL=ir-guest-info-drawer.entry.js.map