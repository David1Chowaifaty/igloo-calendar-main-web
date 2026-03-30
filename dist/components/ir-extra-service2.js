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
        return (h(Host, { key: 'f84c0a8f812e7970f0b9a7d6757c6d67a15c5836' }, h("div", { key: 'ce2ebede908b88d868edef2221eb7671fa86d3aa' }, h("div", { key: 'ff316db2f1fecfd728ad4a419b5b1188124bf700', class: 'extra-service-container' }, h("p", { key: '6a25a8a957253ed257ab1bfb0b80426899cdb984', class: "extra-service-description" }, this.description), h("div", { key: 'c7be8d734f5c17a49b7fd48b07e5443a2491327f', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: '4c551645cf984c44186f1151e6aa44dcaa01408b', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("wa-dropdown", { key: 'b5e0617d37c9835572b89cdf3a0597fe57f5dfce', "onwa-show": e => {
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
            } }, h("ir-custom-button", { key: '12bb2bbd1c20ce371463ae42e1e2088a229219d6', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, style: { marginBottom: '4px' }, variant: "neutral" }, h("wa-icon", { key: '0fc48f7e4f8f984d199c6f1d4e4bb8f718667e99', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '8f206cfdbe8ff5646dff793f42df9843cf33be65', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: 'abd2f3cc5981aa402cb8d9d0ed72d0fbad41000f', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: 'bcc70709c79056e73e0f87b4bc8e216c15878781', value: "delete", variant: "danger" }, "Delete")))), h("div", { key: '01f118a54d5334e401c2323c7c1c35a64354d86f', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-assignment-toggle-dialog", { key: '846404eeb5377573304f4892e6527d613c96a048', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: 'cc2190dcf617e7e390f2781cbdff75996f929627', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '9e258d5b210b19204be24b314283450a8948353c' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '50c4a2eca6b399000a39eb68c18ad4152345efc3' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: 'fac2461fa275f6418785ef14d16d9a16b190a9fc', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: 'a90141df0ed34cbea03f591ad45ce68dcf1d3fdb', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e7cd7f68bfdcf6003d5468d1bf78e6ab945e58be', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '4391abbe089cc7a9eb15c650f30d81c857fdd33c', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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