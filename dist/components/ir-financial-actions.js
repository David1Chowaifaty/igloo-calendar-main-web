import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { l as locales } from './locales.store.js';
import { R as RoomService } from './room.service.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$1h } from './igl-application-info2.js';
import { d as defineCustomElement$1g } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1f } from './igl-book-property2.js';
import { d as defineCustomElement$1e } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1d } from './igl-book-property-header2.js';
import { d as defineCustomElement$1c } from './igl-booking-form2.js';
import { d as defineCustomElement$1b } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1a } from './igl-date-range2.js';
import { d as defineCustomElement$19 } from './igl-property-booked-by2.js';
import { d as defineCustomElement$18 } from './igl-rate-plan2.js';
import { d as defineCustomElement$17 } from './igl-room-type2.js';
import { d as defineCustomElement$16 } from './ir-applicable-policies2.js';
import { d as defineCustomElement$15 } from './ir-autocomplete2.js';
import { d as defineCustomElement$14 } from './ir-billing2.js';
import { d as defineCustomElement$13 } from './ir-billing-drawer2.js';
import { d as defineCustomElement$12 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$11 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$10 } from './ir-booking-details2.js';
import { d as defineCustomElement$$ } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$_ } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$Z } from './ir-booking-header2.js';
import { d as defineCustomElement$Y } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$X } from './ir-button2.js';
import { d as defineCustomElement$W } from './ir-combobox2.js';
import { d as defineCustomElement$V } from './ir-country-picker2.js';
import { d as defineCustomElement$U } from './ir-custom-button2.js';
import { d as defineCustomElement$T } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$S } from './ir-custom-input2.js';
import { d as defineCustomElement$R } from './ir-date-picker2.js';
import { d as defineCustomElement$Q } from './ir-date-range2.js';
import { d as defineCustomElement$P } from './ir-date-view2.js';
import { d as defineCustomElement$O } from './ir-dialog2.js';
import { d as defineCustomElement$N } from './ir-drawer2.js';
import { d as defineCustomElement$M } from './ir-events-log2.js';
import { d as defineCustomElement$L } from './ir-extra-service2.js';
import { d as defineCustomElement$K } from './ir-extra-service-config2.js';
import { d as defineCustomElement$J } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$I } from './ir-extra-services2.js';
import { d as defineCustomElement$H } from './ir-financial-filters2.js';
import { d as defineCustomElement$G } from './ir-financial-table2.js';
import { d as defineCustomElement$F } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$E } from './ir-guest-info-form2.js';
import { d as defineCustomElement$D } from './ir-icon2.js';
import { d as defineCustomElement$C } from './ir-icons2.js';
import { d as defineCustomElement$B } from './ir-input-text2.js';
import { d as defineCustomElement$A } from './ir-interceptor2.js';
import { d as defineCustomElement$z } from './ir-invoice2.js';
import { d as defineCustomElement$y } from './ir-invoice-form2.js';
import { d as defineCustomElement$x } from './ir-label2.js';
import { d as defineCustomElement$w } from './ir-loading-screen2.js';
import { d as defineCustomElement$v } from './ir-mobile-input2.js';
import { d as defineCustomElement$u } from './ir-otp2.js';
import { d as defineCustomElement$t } from './ir-otp-modal2.js';
import { d as defineCustomElement$s } from './ir-payment-details2.js';
import { d as defineCustomElement$r } from './ir-payment-folio2.js';
import { d as defineCustomElement$q } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$p } from './ir-payment-item2.js';
import { d as defineCustomElement$o } from './ir-payment-summary2.js';
import { d as defineCustomElement$n } from './ir-payments-folio2.js';
import { d as defineCustomElement$m } from './ir-phone-input2.js';
import { d as defineCustomElement$l } from './ir-picker2.js';
import { d as defineCustomElement$k } from './ir-picker-item2.js';
import { d as defineCustomElement$j } from './ir-pickup2.js';
import { d as defineCustomElement$i } from './ir-pickup-form2.js';
import { d as defineCustomElement$h } from './ir-pickup-view2.js';
import { d as defineCustomElement$g } from './ir-pms-logs2.js';
import { d as defineCustomElement$f } from './ir-popover2.js';
import { d as defineCustomElement$e } from './ir-price-input2.js';
import { d as defineCustomElement$d } from './ir-reservation-information2.js';
import { d as defineCustomElement$c } from './ir-room2.js';
import { d as defineCustomElement$b } from './ir-room-guests2.js';
import { d as defineCustomElement$a } from './ir-room-guests-form2.js';
import { d as defineCustomElement$9 } from './ir-select2.js';
import { d as defineCustomElement$8 } from './ir-sidebar2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-tooltip2.js';
import { d as defineCustomElement$4 } from './ir-unit-tag2.js';
import { d as defineCustomElement$3 } from './ir-validator2.js';
import { d as defineCustomElement$2 } from './ota-label2.js';

const irFinancialActionsCss = ".sc-ir-financial-actions-h{display:block}.financial-actions__meta.sc-ir-financial-actions{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-financial-actions{flex:1 1 0%}@media (min-width: 768px){.financial-actions__meta.sc-ir-financial-actions{flex-direction:row}}";
const IrFinancialActionsStyle0 = irFinancialActionsCss;

const IrFinancialActions$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialActions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isLoading;
    isPageLoading = true;
    property_id;
    sideBarEvent;
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentEntries;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    handleSidebarClose = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = null;
    };
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            case 'payment':
                return (h("ir-payment-folio", { bookingNumber: this.sideBarEvent.payload?.bookingNumber?.toString(), paymentEntries: this.paymentEntries, slot: "sidebar-body", payment: this.sideBarEvent.payload.payment, mode: 'new', onCloseModal: this.handleSidebarClose }));
            default:
                return null;
        }
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    async getFinancialAction(isExportToExcel = false) {
        console.log(isExportToExcel);
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getFinancialAction(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Payment Actions"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getFinancialAction(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "financial-actions__meta" }, h("ir-financial-filters", { isLoading: this.isLoading === 'filter' }), h("ir-financial-table", { class: 'financial-actions__table card  w-100' }))), h("ir-sidebar", { sidebarStyles: {
                width: this.sideBarEvent?.type === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.sideBarEvent?.type === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrFinancialActionsStyle0; }
}, [2, "ir-financial-actions", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isLoading": [32],
        "isPageLoading": [32],
        "property_id": [32],
        "sideBarEvent": [32]
    }, [[0, "financialActionsOpenSidebar", "handleOpenSidebar"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-financial-actions", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-applicable-policies", "ir-autocomplete", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-drawer", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-financial-filters", "ir-financial-table", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-select", "ir-sidebar", "ir-spinner", "ir-toast", "ir-tooltip", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-financial-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFinancialActions$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-financial-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-financial-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrFinancialActions = IrFinancialActions$1;
const defineCustomElement = defineCustomElement$1;

export { IrFinancialActions, defineCustomElement };

//# sourceMappingURL=ir-financial-actions.js.map