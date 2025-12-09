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
        return (h(Host, { key: 'e2e03ccd5dd38998f46e482fb12ba238ee4b753b' }, h("div", { key: '792b5c8ed86345157e7c68f874fd1cca9394fb40' }, h("div", { key: 'c522335963b19b8cf4a3cc9f53af394e0cd20cb7', class: 'extra-service-container' }, h("p", { key: '59cf325c741c452eb0e93e46312b4ba7115a7ee9', class: "extra-service-description" }, this.service.description), h("div", { key: 'a8a8f64d0e0bcbcb100afd67b44f6aa90c839df6', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: 'dc002f071434925d4d5afad7e71a4e376a10f712', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("div", { key: '1a3f39c33fa58a278aad67263f1ca61019d8b24e', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'a87322219bca1c75a21d04362e343f27a0f172b7', for: `edit-extra-service-${this.service.booking_system_id}` }, "Edit service"), h("ir-custom-button", { key: 'c451adfac9f413987c8b303bb467e909d8c25f4d', id: `edit-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editExtraService.emit(this.service);
            }, iconBtn: true, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '241bc9a5f62fd99787300ef69340dfcc66287baf', name: "edit", label: "Edit", style: { fontSize: '1rem' } })), h("wa-tooltip", { key: '018a0110a788412b974e264c4426670aef34fb42', for: `delete-extra-service-${this.service.booking_system_id}` }, "Delete service"), h("ir-custom-button", { key: '2000635bc6cbea9216be5bf05e5ed73b7d42e536', iconBtn: true, id: `delete-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irModalRef.openModal();
            }, appearance: 'plain', variant: 'danger' }, h("wa-icon", { key: 'ed5107cece96338f544bdaaade8716220d722259', name: "trash-can", label: "Edit", style: { fontSize: '1rem' } }))))), h("div", { key: 'f438678c9cf6138a456ae49e77fdd9ae370c45ed', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-dialog", { key: '208799762bef578f758d21be7720ee85c922a751', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: 'bea579d4b3f8601617241b3cdc1680b6e21c1437', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6c172f4c325bde67fd8a199ccab202549ce9fe4d', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'c744e9c4a9282108eb6f99e6693e62e21dcb9417', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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