import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$a } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-dialog2.js';
import { d as defineCustomElement$6 } from './ir-events-log2.js';
import { d as defineCustomElement$5 } from './ir-icons2.js';
import { d as defineCustomElement$4 } from './ir-modal2.js';
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
        return (h("div", { key: '05e51f4bd2cc9352dd46a16842b9f55450ee4ccd', class: "fluid-container px-1" }, h("div", { key: 'dc737de76425fdc7709851a0312cc1de96306132', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: 'f5e23b98343b95d3da3c64ea8b6e3ea99895d378', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: '190ba384dd0a586c012c75ac954e6bcd7b548f47', class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: 'c5d3232402e49cefc67cd6fbf7f13962835807f8', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: 'c69d55fc4c335b60f2a3a43915f5b526a59c62d8', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '6340e651d658872bacc9fb7f00687d256a65bfa5', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: 'c4c8b99d62d3872f9cc817efd2bf612378fb33e4', class: "d-flex flex-column align-items-center" }, h("ir-booking-status-tag", { key: 'd37bd754db3411d27f7f9e6a66c2ce304ee6cfbd', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), lastManipulation && (h("ir-popover", { key: '6ad8f88cf4958a4c821ad5bf471ae471add1cb6c', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: 'cee0a4ebb4b1711ad5ad10a75535e9582ed355d7', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: 'b201aaaa3d459c77341f903a207513519ca5d55c' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: 'a7ff9e5e55acf63243841e536f50cad979325dcd', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("wa-select", { key: 'c56da88234e8f1b6ab0068147d821e451070d44d', onchange: e => {
                this.bookingStatus = e.target.value;
            }, style: { width: '120px' }, size: "small", placeholder: "Select...", value: this.bookingStatus ?? '' }, h("wa-option", { key: 'b953a467a1cd51c95228edfccd3ab5a28e038957', value: "" }, "Select..."), this.booking.allowed_actions.map(option => (h("wa-option", { value: option.code }, option.description)))), h("ir-custom-button", { key: 'f78e15fb2af3ff7a721283cafa34215d428d8bb0', onClickHandler: () => {
                if (!this.booking.is_direct) {
                    this.modalEl.openModal();
                    return;
                }
                this.updateStatus();
            }, loading: isRequestPending('/Change_Exposed_Booking_Status'), appearance: 'accent', size: "small", variant: "brand" }, "Update"))), h("ir-custom-button", { key: 'f4d475f94f3d4475d7ddc601497873d9ee0b0c30', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), h("ir-custom-button", { key: '70bc183cd9ba6868b28f8b8eb7dd2a2e1523ff47', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS"), this.hasReceipt && (h(Fragment, { key: '2f78ed21002a67853051da05035871eae99cc78d' }, h("wa-tooltip", { key: 'fa95381fe4d345941f8963abcb79d67cd91f4ef1', for: "invoice" }, "Print invoice"), h("ir-custom-button", { key: '7f863b72ace90eaf822bd602c3391aa6e67e54d5', id: "invoice", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '883055d4af881d30549633453d123ec01021a6c3', name: "file-invoice", label: "invoice", style: { fontSize: '1.65rem' } })))), this.hasPrint && (h(Fragment, { key: 'c634cf9a196ed352bd56abb49489ff49b4847a0c' }, h("wa-tooltip", { key: '45a76c639a6e4a271fc537a6934bc2cc594de882', for: "print" }, "Print booking"), h("ir-custom-button", { key: '3ed156580c78f700ca6e6842e238b32baf03c9f1', id: "print", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '19de87451cb12fde907023e55d47ee8cdeb28371', label: "Print", name: "print", style: { fontSize: '1.65rem' } })))), this.hasEmail && (h(Fragment, { key: '6d3cffc4cf7057a1a22e9b911167c21cd3a3a045' }, h("wa-tooltip", { key: '0f07ea55915eebd79a622b2a8995332d9e435f5e', for: "email" }, "Email this booking"), h("ir-custom-button", { key: '6615655f37c54e59e6f96529813af74ab2fc09e7', id: "email", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'd319511f1bd056bd7213d399e64eda2e207cd648', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '2447671f7db27d2dbc27db5525e57d08996ef7b4' }, h("wa-tooltip", { key: '8f72bfc7e94de3e32059adfaacb1ece64d28c917', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '13c8dd5db272c60cef4e7c145b81953af4d1e54e', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: 'bd19ba28093e96f6ceae113fa53d2753d748ddee', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasMenu && (h(Fragment, { key: '4d8e9138a1bdc87801c70414bc16d60caea2255c' }, h("wa-tooltip", { key: '3d42c844c870f70e045ed7ac01fa213155d3f02b', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'd706c5179600cee20a61449fd7acc6592defa0b2', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '6cd880ebba0ca73548f7f0fe56a9f192de5ee148', name: "list", style: { fontSize: '1.65rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '6ec26cd79c50dedf159fb3772a5d04f177d2a0e8', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '9c694680afacad535aea8f1ab4a87744d5f3c08c', name: "xmark", style: { fontSize: '1.65rem' }, label: "Go back" }))))), h("ir-dialog", { key: '8a5ff11f1ea0a4b4f3fb35f44eb64e8cf42e4f40', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-modal", { key: 'ef810d60f3cf9ff623a1821cc2741aa80fe855dc', ref: el => (this.modalEl = el), modalTitle: '', leftBtnText: locales?.entries?.Lcz_Cancel, rightBtnText: locales?.entries?.Lcz_Confirm, modalBody: locales.entries.Lcz_OTA_Modification_Alter, isLoading: isRequestPending('/Change_Exposed_Booking_Status'), onConfirmModal: this.updateStatus.bind(this) })));
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
    const components = ["ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-custom-button", "ir-dialog", "ir-events-log", "ir-icons", "ir-modal", "ir-pms-logs", "ir-popover", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-modal":
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