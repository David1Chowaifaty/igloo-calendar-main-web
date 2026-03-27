import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { h as formatAmount } from './utils-7eaed9ad.js';
import { l as locales } from './locales.store-daef23cc.js';
import { h as hooks } from './moment-ab846cee.js';
import { B as BookingService } from './booking.service-cc6e87c3.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './index-5ba472df.js';
import './IBooking-9fbd40d1.js';
import './booking-2b94eb2b.js';

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:start;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service{padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}.extra-service-price.sc-ir-extra-service{white-space:nowrap}.extra-service-description.sc-ir-extra-service{word-break:break-all}";

const IrExtraService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'eb08bc9ae62e5ba5b09ac94b2e6919987bd754e8' }, h("div", { key: '059ccd7ff840c5e6326ac4749ba1655feee46b21' }, h("div", { key: '4dc710d27013340e8b5a0fdedcf7f4828154fbed', class: 'extra-service-container' }, h("p", { key: '44240fdf2be5d48740f175012f9f607a4463f8df', class: "extra-service-description" }, this.service.description), h("div", { key: 'bb36e850e8ee6e3b79cb1f939b32cdf33aade541', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: 'b385b02d9719119fd99fd56735b9ee818d9d67ad', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("div", { key: '869d85492f90a5d630f8ebd6f918efa3eeb754dc', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '08b4d3b1b324ae8523b85bdd8ab8237e163e6f4a', for: `edit-extra-service-${this.service.booking_system_id}` }, "Edit service"), h("ir-custom-button", { key: 'd85dfa72b4d8350a205907409cdb078b659f15c5', id: `edit-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editExtraService.emit(this.service);
            }, iconBtn: true, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '3a8fb274280fd7f5dc6bf7ec41d695ebcde426b1', name: "edit", label: "Edit", style: { fontSize: '1rem' } })), h("wa-tooltip", { key: 'dfe0809f91b4633fb2a0f16346069cf6fe7f2d8f', for: `delete-extra-service-${this.service.booking_system_id}` }, "Delete service"), h("ir-custom-button", { key: '3c1430a73324708fdb23ee8a585171b497511388', iconBtn: true, id: `delete-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irModalRef.openModal();
            }, appearance: 'plain', variant: 'danger' }, h("wa-icon", { key: '492531d6f1f5e611053cc019f300fb07ddf3e1b5', name: "trash-can", label: "Edit", style: { fontSize: '1rem' } }))))), h("div", { key: '4c4c694c5fb297fe91bc87c4dad65aa5bb9b7b0f', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-dialog", { key: 'ae0f762704cf19a6103c9cb55a1254bbd1124ea4', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '601ab6a6126e967379e55014c24871d9999e70cb', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '045675227937953b08c736ebe163928d6d086fc9', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'b4d5d7c096f086c20538469b8700c0f183f82b28', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
    }
};
IrExtraService.style = irExtraServiceCss;

export { IrExtraService as ir_extra_service };

//# sourceMappingURL=ir-extra-service.entry.js.map