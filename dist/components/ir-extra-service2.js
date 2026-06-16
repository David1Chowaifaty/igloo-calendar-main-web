import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { z as getEntryValue, f as formatAmount } from './utils.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { i as isAgentMode } from './functions.js';
import { m as mapClTxToFolioRow } from './types3.js';
import { d as defineCustomElement$5 } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$4 } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-text-quiet, #27272a);word-break:break-word}.es-category-badge.sc-ir-extra-service{display:inline-block;font-size:0.6875rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);background:var(--wa-color-primary-50, #eff6ff);border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:middle;white-space:nowrap}.es-date.sc-ir-extra-service{display:flex;align-items:center;gap:4px;margin-top:5px;font-size:var(--wa-font-size-s)}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:right}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-text-quiet, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet, #71717a);white-space:nowrap}.es-action-trigger.sc-ir-extra-service::part(base){height:auto;width:var(--wa-space-s)}.es-action-trigger-icon.sc-ir-extra-service{font-size:1rem}";
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
    clTransactions = [];
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
    get matchedTx() {
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === this.service.system_id) ?? null;
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        return (h(Host, { key: 'e6e47586c575ce604b847fbc2d40d04369759e0e' }, h("div", { key: '9056dcefba9f076103cdf23886b0617f15410808', class: "es-row" }, h("div", { key: '5631495ee1f89412dbe70cba9bb999115f102f27', class: "es-content" }, h("p", { key: '447fbf9e889432421331b18b697c38f20a9782cd', class: "es-description" }, this.description), this.service.start_date ? (h("div", { class: "es-date" }, this.service.end_date ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", null, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))), statusTag)) : (statusTag)), h("div", { key: '9acfc79242f795be547806c97068533a49fe02bf', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'c9d73e3518c7ee6422a75582debf973d624d619f', class: "es-pricing" }, h("p", { key: '9400d89fb5cf914a0cd5b120f4a1a82bc2d1f5db', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: 'be505246e5ec43a72cc4b967f1867a250810dafa', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: '42d0059c68add6e6c6fa985e6933f2f021da97ab', "onwa-show": e => {
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
            } }, h("wa-button", { key: 'baa50acf420b44e78c52ec784d3cd9a532c964a7', class: "es-action-trigger", slot: "trigger", size: "small", appearance: "plain", id: `actions-room-${this.service.system_id}`, variant: "neutral" }, h("wa-icon", { key: '9a8538d00f7dee535157e5f16f3c6cc04b3fcf75', class: "es-action-trigger-icon", label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '7a43a9c93c97f3a9317697d0c2b44c93788b6ab8', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: 'a17c0cfdd73a4d6af97479df5fe2110ade32da6d', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '18b5249517b07eb88bdf42ca34389ef4b0834e09', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'cb1771e498f2eb56a403dad41a941d65d5d2fd1c', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '9fed1a3054b26d3bbfe56606c567c9aded79b9f9', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '0a08a7ecfdcf67362d90388db7792148715d6604' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '7e1561cd1bc61efc7d07f0a406623dd163f344b3' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '9a9eda02107ae2b7d17dbf95887c9fbfc5286476', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '6d7596d7c472fc6801c12d7cc87d605b76db31f5', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '9052185c1c4a357ad13f2a06bbda212017607b21', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '8569152512250b498e4f3baa4dd85c846c2f55e9', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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
        "clTransactions": [16],
        "isToggling": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service", "ir-assignment-toggle-dialog", "ir-cl-status-tag", "ir-custom-button", "ir-date-view", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraService);
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-cl-status-tag":
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