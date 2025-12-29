import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$7 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-events-log2.js';
import { d as defineCustomElement$3 } from './ir-pms-logs2.js';
import { d as defineCustomElement$2 } from './ir-popover2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.confirmed.sc-ir-booking-header{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-header{background:#629a4c;padding:0.2rem 0.3rem}.bg-ir-red.sc-ir-booking-header{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-header{background:#ff9149;padding:0.2rem 0.3rem}";
const IrBookingHeaderStyle0 = irBookingHeaderCss;

const IrBookingHeader = /*@__PURE__*/ proxyCustomElement(class IrBookingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.closeSidebar = createEvent(this, "closeSidebar", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.openSidebar = createEvent(this, "openSidebar", 7);
    }
    booking;
    hasReceipt;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
    bookingStatus = null;
    currentDialogStatus;
    toast;
    closeSidebar;
    resetBookingEvt;
    openSidebar;
    // private confirmationBG = {
    //   '001': 'bg-ir-orange',
    //   '002': 'bg-ir-green',
    //   '003': 'bg-ir-red',
    //   '004': 'bg-ir-red',
    // };
    dialogRef;
    bookingService = new BookingService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.bookingStatus = target.selectedValue;
    }
    async updateStatus() {
        if (!this.bookingStatus || this.bookingStatus === '-1') {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: locales.entries.Lcz_StatusUpdatedSuccessfully,
                position: 'top-right',
            });
            this.bookingStatus = null;
            this.modalEl.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    openDialog(e) {
        const { type } = e;
        this.currentDialogStatus = type;
        this.dialogRef.openModal();
    }
    renderDialogBody() {
        switch (this.currentDialogStatus) {
            case 'pms':
                return h("ir-pms-logs", { bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return h("ir-events-log", { booking: this.booking, bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = calendar_data.property?.linked_pms?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '3881e8d49d56d180b77022d9e949230c20b0725b', class: "fluid-container px-1" }, h("div", { key: 'd4b8ef4d644983cb6613eb3d9fb82f1647144c34', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: 'f684a8d0eef2ee4cb8cad62bdf96cb9c1c340ec7', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("div", { key: '18df36de5b362a89514f6877044105a5e4650fdd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { key: '034a8faab27d9cdbceb2e8ddb32e645f6eeebd5a', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("wa-dropdown", { key: '44727f03d3e017ac00f80f21ad044be012bc6e64', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("ir-custom-button", { key: 'd87f4c4977ca450bbf48ec0d13a2914a1ef7e72f', slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand" }, h("ir-booking-status-tag", { key: '7a3b634a221e9ed2b98913260dfb204f53766863', slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", { key: 'a948c195b23b123ad5156bcb701da010f163233d' }, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))), h("p", { key: '4f604704976653a40e184ba193e65792c4ae29b4', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '97c5441f016d983ea409e44209416494d15b726c', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '9555eddecafed01bf81415ac970b402920f87155', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '4d55535a85276fca77c91381ab66cbc420439eb6', class: "d-flex flex-column align-items-center" }, lastManipulation && (h("ir-popover", { key: '733f0e39eca49c190c33b207047521bc20943255', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: '57fbc3e4e32b7391e1d781de611f1e56e2b0d59f', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: '1399ed3bbd52e47546e19bf85c507ec40a048067' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '29dfaff66e53f0f8bdc6ecc0b249a8df3e954a04', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } })), h("ir-custom-button", { key: 'b19a64f1fadfdc32eb0bf09120a73d7eec82df65', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), showPms && (h("ir-custom-button", { key: '85fdf6b5fc54f4e6e71954c8dc0c1850085fdc97', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '8b25b6d36daabe4a7a174ab046230b57ae60d099' }, h("ir-custom-button", { key: '05be6f74e28cf6c4d30f84de79b8f622c537d6f6', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '15ca3deb7cfb7028592942ed8997eeba1d54d2b9' }, h("wa-tooltip", { key: '6463fa2b91ae7998b212e77380f5aedafa88bc8f', for: "print" }, "Print booking"), h("ir-custom-button", { key: '8e7bdf606aaf17d38efb827e004bd88bc6d43d7d', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '98835f484d0033991f74edfe7aa3e91bfdc73349', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '3564c5fbcec599ecaa20a5cd8b463a0092c1d8f8' }, h("wa-tooltip", { key: '1f22df3de5c7e6e318b789e56904fb5ae54307d3', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: 'e06abd2f32643c2ac3fa75ac21f9f8ce6f1f68aa', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '8a99bcc58c7196dec4d01cf73e1c289db94906c6', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '30dc8f51f258f46663d1fcdce495ddc25b758f42' }, h("wa-tooltip", { key: 'aa086a5a497c1bfb1ea64e28d93ffea66d0efb19', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '55236fbcfa780836b9a20e38d69bc9bf983cd411', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: 'dfadf96d4c749077b2678364f53b2fb43e1528e2', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasMenu && (h(Fragment, { key: 'a2024753b5004bf25bd0221568969ca471b669ec' }, h("wa-tooltip", { key: '3d2bc59c83dc29a1e542e3ac9aee0dfb975e3844', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'fcee46683638ceaff26f3e632be55ed9da9a67c3', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '7591198fa680ccfdd288a3d3821b4838304356d6', name: "list", style: { fontSize: '1.2rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '9fe4aa9ed4a2ef8505bc9a03f7ec9e6c6f948f7a', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'd6fb759814ee7989c99c36b8ac65c027641948d3', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '8e3dfe94241ecdb78cf3f6f49fa92f760bad7ccd', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '28aca60f79eabdcc44e2848a6b6fcbeabf4137ff', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'e1e6e3a302aa5b6848a9c2f49d31e69a5cd6588e' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'ca0e4c3f118d292ff98a4e9b96d5b34459cd30dc', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'a6b14de1041e3ff214ed38e98f89fe68f14e4ad2', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '98909f972c74e0edf3ba098bf25d724559cc71e0', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm)))));
    }
    static get style() { return IrBookingHeaderStyle0; }
}, [2, "ir-booking-header", {
        "booking": [16],
        "hasReceipt": [4, "has-receipt"],
        "hasPrint": [4, "has-print"],
        "hasDelete": [4, "has-delete"],
        "hasMenu": [4, "has-menu"],
        "hasCloseButton": [4, "has-close-button"],
        "hasEmail": [4, "has-email"],
        "bookingStatus": [32],
        "currentDialogStatus": [32]
    }, [[0, "selectChange", "handleSelectChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-header", "ir-booking-status-tag", "ir-custom-button", "ir-dialog", "ir-events-log", "ir-pms-logs", "ir-popover", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-header2.js.map