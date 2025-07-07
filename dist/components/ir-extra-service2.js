import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as colorVariants, d as defineCustomElement$2 } from './ir-icons2.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { B as BookingService } from './booking.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-view2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service{padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = /*@__PURE__*/ proxyCustomElement(class IrExtraService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editExtraService = createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new BookingService();
    }
    async deleteService() {
        try {
            await this.bookingService.doBookingExtraService({
                service: this.service,
                is_remove: true,
                booking_nbr: this.bookingNumber,
            });
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: 'ee2482c695c22f309073def3f5f92535243341b3' }, h("div", { key: '5b4094c520c8cd7f25c39784cce046852aa4f978', class: "p-1" }, h("div", { key: '7d1ede3cc3053939d40473d2853427318e7f07be', class: 'extra-service-container' }, h("p", { key: '7c692d44fd6995540c0254b4587d1ecae6c4399d', class: "extra-service-description" }, this.service.description), h("div", { key: '4a1eeda4b5345729a3c2f16b72aa8d9fdf07f481', class: "extra-service-actions" }, this.service.price && h("p", { key: '024d33d67d6f7435124860df0ce99e3990208503', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price)), h("ir-button", { key: '1836a79cfd9bb0ed0fde09ef773009078f710dcf', id: `serviceEdit-${this.service.booking_system_id}`, class: "extra-service-edit-btn m-0 p-0", variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: () => this.editExtraService.emit(this.service) }), h("ir-button", { key: '90d7a3597f39881a4c421ffe3a7e269f1d1f5c9f', class: "extra-service-delete-btn m-0 p-0", variant: "icon", onClickHandler: () => this.irModalRef.openModal(), id: `roomDelete-${this.service.booking_system_id}`, icon_name: "trash", style: colorVariants.danger }))), h("div", { key: '958256c48c3d337bd42307b62af1cd4155b3a4fc', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-modal", { key: 'c779105fdfb17464ef985427ad7d08aaef22ac00', autoClose: false, ref: el => (this.irModalRef = el), isLoading: isRequestPending('/Do_Booking_Extra_Service'), onConfirmModal: this.deleteService.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales.entries.Lcz_Confirmation, modalBody: `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}` })));
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
    const components = ["ir-extra-service", "ir-button", "ir-date-view", "ir-icons", "ir-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraService);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrExtraService as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-service2.js.map