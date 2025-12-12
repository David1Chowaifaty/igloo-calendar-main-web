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
        return (h(Host, { key: '1c51e445077fb07055b8ffba1e3f3a8557227bca' }, h("div", { key: 'aecbf742e5572496e33ab624d8286c25361a87a4' }, h("div", { key: '770b18af60b5b6d113ba7379b7263dea98f5e6a9', class: 'extra-service-container' }, h("p", { key: '1e7aa0d9133af987dc314ee987fc41a040831762', class: "extra-service-description" }, this.service.description), h("div", { key: '6dcca82cc212114f1a4fe0c31e0adda6796ada57', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: 'a22a47867da52afbb81e568991b1381f05632d08', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("div", { key: '834771e437091a1f14f88735777d58d29fe536ca', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '1dbc7d6e3487171269723f5c035f2f3295688189', for: `edit-extra-service-${this.service.booking_system_id}` }, "Edit service"), h("ir-custom-button", { key: '4ecb15e554282e1754474b030a01f2c0a7402d70', id: `edit-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editExtraService.emit(this.service);
            }, iconBtn: true, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'effdedf0791dd3d972bbcee45dbd14719446832a', name: "edit", label: "Edit", style: { fontSize: '1rem' } })), h("wa-tooltip", { key: 'ba313fbc11a8d977c72faecebc583a5d197be29d', for: `delete-extra-service-${this.service.booking_system_id}` }, "Delete service"), h("ir-custom-button", { key: '3198c23d727242b99c0ae8193cbfac7bd359d659', iconBtn: true, id: `delete-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irModalRef.openModal();
            }, appearance: 'plain', variant: 'danger' }, h("wa-icon", { key: '3cd241da1f0db9a941146ecc533857976390235a', name: "trash-can", label: "Edit", style: { fontSize: '1rem' } }))))), h("div", { key: 'c5e9e938b442bc36b0f88bc9411c0a59d3cd83cd', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-dialog", { key: 'd946a535ddec4154848b605214bc2dee41edb90a', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: 'aee1d312794db4267dede1e4990e6ab42bd854d7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c5caa69e0eab2bb11880b1fa3978512cd9536ae5', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '034919f68e6d8deffc00efe6122537e37763ea85', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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