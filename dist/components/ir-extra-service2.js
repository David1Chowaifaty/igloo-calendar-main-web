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
        return (h(Host, { key: '3cd11052d56bc7a8a5081229dea192fe5ed63f80' }, h("div", { key: '6702e5585f30d0d3298d5b59145c0c9fb0f5feea', class: "es-row" }, h("div", { key: '3e7780451f7f2eabed1b1e72074a62259cb2ecc8', class: "es-content" }, h("p", { key: 'e9af45f40256d0595ee207bed63358eeaa14392a', class: "es-description" }, this.description), this.service.start_date && (h("div", { key: 'abb3a6212e82ce941a74aef56821a91db8b04d21', class: "es-date" }, this.service.end_date ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", null, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY')))))), h("div", { key: '1efd87e9717e285a82052597f527cc4d2d63ed86', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'c8280d2d1b3f1b5f3d7dcbfe668e9991f628da55', class: "es-pricing" }, h("p", { key: 'd14d10ebbcea1b5cbbf732de3a2ef603fec70547', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: '610072904537b8782051d02e9d242d431d21b540', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: '4fea760b11e180973ee0b98f3d5e763b51b110d2', "onwa-show": e => {
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
            } }, h("ir-custom-button", { key: '69fdb4f5d91585717a4c10de88cf2fe21f38b6c4', slot: "trigger", size: "small", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, variant: "neutral" }, h("wa-icon", { key: 'dff7e151bb7b4ff4230178293fda13d7d60cdba8', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: 'b0b774ae780d999d5bbec245e4f5c3130c13d868', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: '1a2b3ad9afe595e757e290ff027b569616e99845', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '531f9a9c8b35aa7d407ef47fd2729aba2bbc7298', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'ba3397d182224d2ad4a095bbec21365758cf9a9a', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: 'cda7eb1b65f5ecc25b0effd56dc9012336ca4534', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '5ad22a80de7a22e72f8374fd63ff0d4849a4948d' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '7e7a89c9b368249fa0081f0b07a52722a68511a1' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '92274cbaf2bbe1beddfd52b4bc286682d9ed3e99', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '27cc4f5e6a5943205c157ff8f25ae970898d1cd7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'f5c06e9b11ade3a9a15b226560ed155cd6c67ea1', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '8866aa0f2b7cf55ac640d3ca081b95533eb3d4c2', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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