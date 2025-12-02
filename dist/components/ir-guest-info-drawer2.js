import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { T as Token } from './Token.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { g as guestInfoFormSchema, d as defineCustomElement$6 } from './ir-guest-info-form2.js';
import { d as defineCustomElement$a } from './ir-country-picker2.js';
import { d as defineCustomElement$9 } from './ir-custom-button2.js';
import { d as defineCustomElement$8 } from './ir-custom-input2.js';
import { d as defineCustomElement$7 } from './ir-drawer2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-mobile-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irGuestInfoDrawerCss = ":host{display:block}.drawer-form{margin:0}.drawer-loading{display:flex;align-items:center;justify-content:center;padding:2rem 1rem}.drawer-footer{display:flex;gap:0.5rem}.loading-container{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}";
const IrGuestInfoDrawerStyle0 = irGuestInfoDrawerCss;

const IrGuestInfoDrawer = /*@__PURE__*/ proxyCustomElement(class IrGuestInfoDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.guestInfoDrawerClosed = createEvent(this, "guestInfoDrawerClosed", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guest = null;
    countries = [];
    isLoading = true;
    autoValidate = false;
    guestInfoDrawerClosed;
    resetBookingEvt;
    toast;
    get hostElement() { return this; }
    bookingService = new BookingService();
    roomService = new RoomService();
    token = new Token();
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
        if (this.open && !!this.token.getToken()) {
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    openChanged(newValue) {
        if (!newValue) {
            return;
        }
        if (!!this.token.getToken() && (!this.guest || !this.countries.length)) {
            this.init();
        }
    }
    async init() {
        if (!this.open) {
            return;
        }
        try {
            this.isLoading = true;
            const [guest, countries, fetchedLocales] = await Promise.all([
                this.bookingService.fetchGuest(this.email),
                this.bookingService.getCountries(this.language),
                !locales || !locales.entries || Object.keys(locales.entries).length === 0 ? this.roomService.fetchLanguage(this.language) : Promise.resolve(null),
            ]);
            if (fetchedLocales) {
                locales.entries = fetchedLocales.entries;
                locales.direction = fetchedLocales.direction;
            }
            this.countries = countries;
            this.guest = guest ? { ...guest, mobile: guest.mobile_without_prefix } : null;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleGuestChanged = (event) => {
        this.guest = event.detail;
    };
    handleDrawerHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.guestInfoDrawerClosed.emit({ source: event.detail?.source ?? this.hostElement });
    };
    handleCancel = () => {
        this.guestInfoDrawerClosed.emit({ source: this.hostElement });
    };
    async editGuest() {
        try {
            this.autoValidate = true;
            guestInfoFormSchema.parse(this.guest);
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr ?? null);
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
            this.resetBookingEvt.emit(null);
            this.guestInfoDrawerClosed.emit({ source: this.hostElement });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        const drawerLabel = locales?.entries?.Lcz_GuestDetails || 'Guest info';
        return (h("ir-drawer", { key: 'b4334369657981b73abffd318fd9c5171ed2a8b6', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.isLoading ? (h("div", { class: 'loading-container' }, h("wa-spinner", { style: { fontSize: '2rem' } }))) : (h("ir-guest-info-form", { guest: this.guest, countries: this.countries, language: this.language, autoValidate: this.autoValidate, onGuestChanged: this.handleGuestChanged })), h("div", { key: '2f4f7f675b291a1d606baf8a8dc248d172788a85', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'fc198fe1c191ead362b3dbb5a1b727524677f14e', size: "medium", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, locales.entries?.Lcz_Cancel || 'Cancel'), h("ir-custom-button", { key: 'e20fa9320cea714353918c235a4cb43d648877d2', size: "medium", variant: "brand", onClick: () => this.editGuest(), loading: isRequestPending('/Edit_Exposed_Guest'), disabled: this.isLoading }, locales.entries?.Lcz_Save || 'Save'))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"],
        "open": ["openChanged"]
    }; }
    static get style() { return IrGuestInfoDrawerStyle0; }
}, [1, "ir-guest-info-drawer", {
        "open": [4],
        "language": [1],
        "email": [1],
        "booking_nbr": [1],
        "ticket": [1],
        "guest": [32],
        "countries": [32],
        "isLoading": [32],
        "autoValidate": [32]
    }, undefined, {
        "ticket": ["ticketChanged"],
        "open": ["openChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-info-drawer", "ir-country-picker", "ir-custom-button", "ir-custom-input", "ir-drawer", "ir-guest-info-form", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestInfoDrawer);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGuestInfoDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-info-drawer2.js.map