import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { y as getEntryValue, f as formatAmount } from './utils.js';
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

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.es-row.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.75rem}.es-content.sc-ir-extra-service{flex:1;min-width:0}.es-description.sc-ir-extra-service{margin:0;font-size:var(--wa-font-size-m);line-height:1.5;color:var(--wa-color-neutral-800, #27272a);word-break:break-word}.es-category-badge.sc-ir-extra-service{display:inline-block;font-size:0.6875rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);background:var(--wa-color-primary-50, #eff6ff);border-radius:4px;padding:1px 6px;margin-right:6px;vertical-align:middle;white-space:nowrap}.es-date.sc-ir-extra-service{display:flex;align-items:center;gap:4px;margin-top:5px;font-size:var(--wa-font-size-s)}.es-aside.sc-ir-extra-service{display:flex;align-items:flex-start;gap:0.25rem;flex-shrink:0}.es-pricing.sc-ir-extra-service{text-align:right}.es-price.sc-ir-extra-service{margin:0;font-weight:700;white-space:nowrap;line-height:1.4;color:var(--wa-color-neutral-900, #18181b)}.es-vat.sc-ir-extra-service{margin:2px 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-neutral-500, #71717a);white-space:nowrap}.es-action-trigger.sc-ir-extra-service::part(base){height:auto;width:var(--wa-space-s)}.es-action-trigger-icon.sc-ir-extra-service{font-size:1rem}";
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
        return (h(Host, { key: 'af720db7c7e23c89566966ec4578c5851f720790' }, h("div", { key: '93aa1f3c3638c6553b2070cd5b3c043ec7a8c247', class: "es-row" }, h("div", { key: '329e87a986c09fe0ef8dad8eade221e48320f9b6', class: "es-content" }, h("p", { key: 'ae66889dbbfb8016d2781731971624fce8597abd', class: "es-description" }, this.description), this.service.start_date ? (h("div", { class: "es-date" }, this.service.end_date ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", null, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))), statusTag)) : (statusTag)), h("div", { key: '690c3fa98dde31c4d1427052501ee629e5b35283', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'cdfb58e7da906056ef5bbefc00881261520ddf5b', class: "es-pricing" }, h("p", { key: '972e0778a4028c46db1880aa639a62873df9eefe', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: 'c5bbb34a737de218a9fbdc97db3dd75161b2d3d2', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: '47fbf07b98a5219bfaf4ac1c02990e62751b8048', "onwa-show": e => {
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
            } }, h("wa-button", { key: 'ea602919dced54c1c342f901e8d0781ff7c0a881', class: "es-action-trigger", slot: "trigger", size: "small", appearance: "plain", id: `actions-room-${this.service.system_id}`, variant: "neutral" }, h("wa-icon", { key: 'eafeceef0dc751c98a681dbcf5482bf081d2bdce', class: "es-action-trigger-icon", label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '7116fbc8aac08d4cac3b166ed0b4459908a18b52', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: '0e3ffb9f478cb9d5f6bf0118a93a99a99c3d6b8c', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '0a9f9c8aa929a5431579a75a38951a9f968cd905', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'd0a688c7be5616a8535e24f63f17e930cd347b6c', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '91ffa2cfaf288f380780c5db7e5bc2fba9aa3dd6', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '7564fac1f81280c9aa5787f8fd193e0759a66da0' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '5aaecb14c3246687a0826f00a4c27240f9773a37' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '52d67f2512ec13de7fab6e625af0792f2a15b783', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '2ed6da2291dc037c2cdcb0e20f2e6605a1a4853b', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '19e10338e6ed63f56e30e22e1a596cc7b68c88b9', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'b86fe5e2650a32066f9a61af42881fe97f6135ca', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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