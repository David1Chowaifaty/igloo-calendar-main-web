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

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:0.875rem;line-height:1.5;color:var(--wa-color-neutral-800, #27272a);word-break:break-word}.es-category-badge.sc-ir-extra-service{display:inline-block;font-size:0.6875rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);background:var(--wa-color-primary-50, #eff6ff);border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:middle;white-space:nowrap}.es-date.sc-ir-extra-service{display:flex;align-items:center;gap:4px;margin-top:5px;font-size:0.75rem}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:right}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-neutral-900, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:0.6875rem;color:var(--wa-color-neutral-500, #71717a);white-space:nowrap}";
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
    agent;
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
        const category = this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
        if (category) {
            return (h("span", null, h("span", null, getEntryValue({ entry: category, language: this.language }), ": "), this.service.description));
        }
        return this.service.description;
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        return (h(Host, { key: 'd1d28cf5dda9c888ce6121e9ab1c91e26d7278f5' }, h("div", { key: 'e1044d0695cc98e82af6f06c0539f0fb32472bb5', class: "es-row" }, h("div", { key: '3962a3e6ee9138657939c0159b6d000400774cc8', class: "es-content" }, h("p", { key: '0a9e6308cfd4654a68492ffffa077ae6bc0210c5', class: "es-description" }, this.description), this.service.start_date && (h("div", { key: 'cb31a41650a7b7449f0466b03c34117077e6efdd', class: "es-date" }, this.service.end_date ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", null, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY')))))), h("div", { key: 'cc7adabd4a7827c63ef2a5f7def038ad7ee790d3', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'e4d79ed62d26e2de87649c30d5af219cf39a4c01', class: "es-pricing" }, h("p", { key: 'd2a6723ddf28bdbaf6dc0bdcdb4c3960a09cfabe', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: '352dca2a0b12bc713cf0b3537e58c32f7049be01', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: 'd61221ceeebaf29c7cf89750ec32363c042beca1', "onwa-show": e => {
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
            } }, h("ir-custom-button", { key: 'f4fd031a42f550345fc4bfe5413b4be309841030', slot: "trigger", size: "small", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, variant: "neutral" }, h("wa-icon", { key: '4d7a6063f21ce7a572f46c503ec3ae3e2b1f6042', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '553ff8fb105ea09ca69edb1e3ac183c0fc44232b', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: '6b18e0030bfa6cb060fe1ccc595400ec21a4ace9', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '1066c9b16913b13263ee2af64dd7e30366483341', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'e3bcb81927dcb07c6c4911582de1688e9cc42ff8', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '9de0c1c99ed3b3af6c276303493e5174ac9885e8', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: 'f78696452b8e4b2eba1059f909cf2443fe7393ff' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '6a5e1003430e1baaeca82cf2d858581468e415ca' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '7513fc766d84350921f140c9bea682dce34f6a7f', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '4bb66bb67f67a729edd0bbfe73b0494f0534f9cc', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1cab51dce3c919463281ef7d8cacd37a868ccbcf', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'ad4f353733cbdc493edd92096c8c6d9b9525c0e1', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
    }
    static get style() { return IrExtraServiceStyle0; }
}, [2, "ir-extra-service", {
        "service": [16],
        "booking": [16],
        "agent": [16],
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