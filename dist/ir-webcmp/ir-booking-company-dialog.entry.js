import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { v as v4 } from './index-05b40732.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import './index-17663a35.js';

const irBookingCompanyDialogCss = ".sc-ir-booking-company-dialog-h{display:block}";

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.companyFormClosed = createEvent(this, "companyFormClosed", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    open;
    companyFormClosed;
    resetBookingEvt;
    async openCompanyForm() {
        this.open = true;
    }
    async closeCompanyForm() {
        this.open = false;
        this.companyFormClosed.emit();
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: 'b8f53a65a213077d873b161371176a4d1e6fdbe5', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: 'b758980e8ad96224602d6d3efdc83bfcdb688b5a', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: '31583ef05d70e9371d56c6ee2f6dc5252f3976d6', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '4e298e617374bfcd7de0f0705dfa5c35af1bd130', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'e772c2661d1b6ae6ff363a4b40bd7651cf63831d', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "medium", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = irBookingCompanyDialogCss;

export { IrBookingCompanyDialog as ir_booking_company_dialog };

//# sourceMappingURL=ir-booking-company-dialog.entry.js.map