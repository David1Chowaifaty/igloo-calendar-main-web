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
        return (h("div", { key: 'b0e1e3ebcb45e5374a88c26803f2e5b8710806d7', class: "fluid-container px-1" }, h("div", { key: '0ac1a1f13848d6b958d8db06e6178ef02a29e65b', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: '56f1898c52d7b60f9ec820cc6fa61d2044cef984', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("div", { key: '33a6e6b067c1cbea97aaa2144ea1e5c12330a242', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { key: '2c68ec8c1eef583482c48728cf9787ae2052e72d', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("wa-dropdown", { key: '2eceec3aeaf81b7781471c86b07672900a46c6c7', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("ir-custom-button", { key: '07f39677515ea324abad681148f0353ed683878e', slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand" }, h("ir-booking-status-tag", { key: 'aa5782b4708df383ed08171e9de8b7e8f6b6ded2', slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", { key: '69a68ad89e09e14c27ff55be687c932effffad1f' }, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))), h("p", { key: 'efb776c0dfa8905d1d96676d3314aef780a68721', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: 'fcd7b9632094ee92d4398d9b513dca48bd89dfac', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: 'd92b7c9ea03e7927424e76bb3dda0c4974692a34', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '7a2d2aab2226b3092498aa2d19c3329d9368097f', class: "d-flex flex-column align-items-center" }, lastManipulation && (h("ir-popover", { key: 'bc69e53f8e983c59f80bf45a662395e5e418da0a', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: '5b8c3170b2dae55a281d554a7b61a49c284ff997', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: 'a8932e06ce0631120e8d1fa6172c1a018a95c64e' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: 'e0356f5a27eb94dbb448dc8032fd296eee61a833', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } })), h("ir-custom-button", { key: '57cd263ae237b332ad15c36274a40ae16bd9b783', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), showPms && (h("ir-custom-button", { key: '4cb10b03f8ba155d447836cd81a1c8bff1e694a6', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: 'ac8b008a33c478eeb851a1fcf8121aaaaaf826ab' }, h("ir-custom-button", { key: 'd87b7bf6719248ed1c1770828aefa0279bad7254', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '70122e8791b8eb099cd997cb4d0e5e9b6b1cdcb3' }, h("wa-tooltip", { key: 'b77841205b1ad8de545b171973790f7603dbc7b1', for: "print" }, "Print booking"), h("ir-custom-button", { key: '0702af4629f91456d429bd6f194419f4ea2993f5', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '4eafae41df7ff1d3c5d561c4ca683515377a7b31', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '763aad0f95bea55a8c4c483183c7b5473369bbd4' }, h("wa-tooltip", { key: 'b7835a048201cc127c1c14a834097048986a73a7', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '468184d3993940d24a68020247fef0530907ae25', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'cde2202e29df373592a0d35cb6928f132c413760', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '8de75719a57ab575c77810c17287f3a33ffe088c' }, h("wa-tooltip", { key: 'ab25f8572530c7e3df413869173ee8a0fb784e33', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '1e7928ff52209341d08930139f370f8f050b8679', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: 'cc81e31f7dc06d1b9140837562d0e781b737b37c', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasMenu && (h(Fragment, { key: 'cdb2943e578fff48b7d9b4dd2cdcb0b362ff0f35' }, h("wa-tooltip", { key: '7a5423e3385e0d364ac3c35fbb99867f379f0806', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'b152899434df5ec4b139a858cee6f9996a489f53', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '1183841f712601d3e5058ff276dd8b4308b3b98d', name: "list", style: { fontSize: '1.2rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '7e9b6cf793dfc12792958d40df0b0c451f0d9276', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'f12a78dfe3aea2fc26403b97d4e8915b41bfeafb', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: 'd4a52c263acd5b1eea7278a83ade0538606cf42d', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '3330305574c893bc3f9bea14c0e010b54ac69f3d', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '76f6a83b6307418f302b59d74607b67ba5a86f95' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '51852ec32c675dd55c1bd544c470686fe0a30202', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '660e3ea11861d9e7f979530e3a5d2100e2f25ff5', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '8bd1e50d56af55f38fcf23650a829c48b069ab76', onClickHandler: e => {
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