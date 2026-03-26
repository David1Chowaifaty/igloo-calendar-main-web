import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { w as getEntryValue, f as formatAmount } from './utils.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { i as isAgentMode } from './functions.js';
import { d as defineCustomElement$4 } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:start;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service:not(wa-dropdown-item){padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}.extra-service-price.sc-ir-extra-service{white-space:nowrap}.extra-service-description.sc-ir-extra-service{word-break:break-all}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = /*@__PURE__*/ proxyCustomElement(class IrExtraService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editExtraService = createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    service;
    booking;
    bookingNumber;
    currencySymbol;
    language = 'en';
    svcCategories;
    editExtraService;
    resetBookingEvt;
    isToggling = false;
    irModalRef;
    toggleDialogRef;
    bookingService = new BookingService();
    async deleteService() {
        try {
            await this.bookingService.doBookingExtraService({
                service: this.service,
                is_remove: true,
                booking_nbr: this.bookingNumber,
            });
            this.irModalRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleServiceAgent() {
        try {
            this.isToggling = true;
            await this.bookingService.doBookingExtraService({
                service: { ...this.service, agent: this.service.agent ? null : this.booking?.agent },
                is_remove: false,
                booking_nbr: this.bookingNumber,
            });
            this.toggleDialogRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isToggling = false;
        }
    }
    get description() {
        let category = this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
        if (category) {
            return (h("span", null, h("b", null, getEntryValue({ entry: category, language: this.language })), ": ", this.service.description));
        }
        return this.service.description;
    }
    render() {
        const agentMode = isAgentMode(this.booking);
        return (h(Host, { key: 'ea595a4234c9e346587127b45cd97ecee4dc7dac' }, h("div", { key: '86a726eee3e68deab60baa5737bd00ad5b89b8b7' }, h("div", { key: '4c2747535671ab84eb2e1d7fcefbf032bb0c7e3b', class: 'extra-service-container' }, h("p", { key: '5025e331b2c8f244a83db1d5e1a9d1ad62dc2b34', class: "extra-service-description" }, this.description), h("div", { key: 'bd5856d277a5963015305c9dfbb9dd01844393df', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: '15e13f8af6ff5fb2ff8f92c81e96359a2ea11b0a', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("wa-dropdown", { key: '689e861812c9df7372c701c6688a66c24cfedc4b', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editExtraService.emit(this.service);
                        break;
                    case 'delete':
                        this.irModalRef.openModal();
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, h("ir-custom-button", { key: 'c4a37a48521099c243ab391800dfa312b078d5ff', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, style: { marginBottom: '4px' }, variant: "neutral" }, h("wa-icon", { key: '2e431563d13332674e9a85b3c95187bbe1f95cc7', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: 'b14526219190c52a705d14b98b48c170845e4bf2', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: 'a8e50dbaa8dbad595039cd70d7bac01073613da6', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '4acbaf42ac632d851b2aeb1c8937767a94539f89', value: "delete", variant: "danger" }, "Delete")))), h("div", { key: '3e7e8fd666607363b9de7f2d8c4858a4802fb5d4', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-assignment-toggle-dialog", { key: 'a7ba6d279186a9a8e5bfdcce8276153027702f6f', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: 'a79f1ad3bff83eacafcb0a7587c0242caeeeb426', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '9d44165ac078b37208991112cb36f8ba03c1a22d' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '5e9d81b2843dccc286ac25ddbad3fcb34c699c3e' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: 'b3e0209b34efd4ee0ffbb3ff0cefe553e0e40d81', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '5d940dc01d09ae72ff85a0bef3dec267cf4ffaa2', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'a791a77a38f16788d209f86eff1d77b20dc3f1cd', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'fb3052bd7c2ab4c53f612d67988889463dd630e0', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
    }
    static get style() { return IrExtraServiceStyle0; }
}, [2, "ir-extra-service", {
        "service": [16],
        "booking": [16],
        "bookingNumber": [1, "booking-number"],
        "currencySymbol": [1, "currency-symbol"],
        "language": [1],
        "svcCategories": [16],
        "isToggling": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service", "ir-assignment-toggle-dialog", "ir-custom-button", "ir-date-view", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraService);
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrExtraService as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-service2.js.map