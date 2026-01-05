import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:start;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service{padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}.extra-service-price.sc-ir-extra-service{white-space:nowrap}.extra-service-description.sc-ir-extra-service{word-break:break-all}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = /*@__PURE__*/ proxyCustomElement(class IrExtraService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editExtraService = createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    service;
    bookingNumber;
    currencySymbol;
    editExtraService;
    resetBookingEvt;
    irModalRef;
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
    render() {
        return (h(Host, { key: '20afb5ac52001ba4b55b5d430a968d4be34e2f07' }, h("div", { key: '40441c957ecf004b4b897b7609c0e502ddd0d68b' }, h("div", { key: '5e7f24206c3bd9c93545fc0a9129c980ece6e838', class: 'extra-service-container' }, h("p", { key: 'c11c58d575fb3021b246dd4ac06390f75dac8fe8', class: "extra-service-description" }, this.service.description), h("div", { key: '7ebbd6693e534789a2617a1c57eaf12172bff576', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: 'ffc0fe07025bb711d7930dbdb293b2464a6b7139', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("div", { key: '726009476adbbc862f904fbb84230bce5e86f3ef', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '07f2c10d28148b969ef4919c898f8a8c5612d0f1', for: `edit-extra-service-${this.service.booking_system_id}` }, "Edit service"), h("ir-custom-button", { key: 'baa885e442a8bd77216d6e7130f8467bebb3bd12', id: `edit-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editExtraService.emit(this.service);
            }, iconBtn: true, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'e5457def42d229acff371c7b8f7934186f52d48e', name: "edit", label: "Edit", style: { fontSize: '1rem' } })), h("wa-tooltip", { key: 'd4144a22cf4f61da71a3796cde5410b0b976c0a7', for: `delete-extra-service-${this.service.booking_system_id}` }, "Delete service"), h("ir-custom-button", { key: '88d5220dc2f078069ad41e2173e364b64e2e8abf', iconBtn: true, id: `delete-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irModalRef.openModal();
            }, appearance: 'plain', variant: 'danger' }, h("wa-icon", { key: 'c160e28199a236d2c3f76ee4686c942c6c3faec3', name: "trash-can", label: "Edit", style: { fontSize: '1rem' } }))))), h("div", { key: '0fe136824dc89c0b501cc4a02b5a66c5ba833f94', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-dialog", { key: '3475978f82dd193540348819e7044352376b4a75', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '83be2534391950bc13293874449bfe581bdb7cdf', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'f9c9e22383b0bf120f9171feae2ad8a7d30be1ce', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '7896a9bb426eae9d45f26ac391ea5a4c6c0f4f00', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
    }
    static get style() { return IrExtraServiceStyle0; }
}, [2, "ir-extra-service", {
        "service": [16],
        "bookingNumber": [1, "booking-number"],
        "currencySymbol": [1, "currency-symbol"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service", "ir-custom-button", "ir-date-view", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraService);
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