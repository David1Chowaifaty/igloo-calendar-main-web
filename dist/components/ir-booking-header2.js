import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
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
        return (h("div", { key: '0d31cfced3e10e3c9296e74de3da0bd0f85dce62', class: "fluid-container px-1" }, h("div", { key: 'beee0303afe5de6164bead0edce74385b08e670c', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: 'e7404e737d4ceec7b5a315943f2a38146703adfc', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: 'caa28cade2d55bb9dfd234f4695d810cdf681e91', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: '39c69f82014019a8d19604d41daefc1ba5177a28', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '030ac8af890c0c7964fc67177d953460ce75aa4e', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: 'a8100a836a316e1e4dd92f1e96afbe26cea9dce7', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '80fe68fe0ba22f5649171b45a6c27216b91b724c', class: "d-flex flex-column align-items-center" }, h("ir-booking-status-tag", { key: 'e127da340314bb48f416ef33ef3de377852c1bb6', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), lastManipulation && (h("ir-popover", { key: 'e8eb9b0e51446550fd5513f87c6b42d6828dbcce', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: '1d58d4c86ff46a1d113225e008e1ad3a4e36c081', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: '2ec2505c3dbbdf5503bde0c0e67388fb43d88302' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '66a1f8137499912ad53d43f90036934606da76a4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("wa-select", { key: '23dcb5a1a7cdae14b3e1bc18d83d00bd03244487', onchange: e => {
                this.bookingStatus = e.target.value;
            }, style: { width: '120px' }, size: "small", placeholder: "Select...", value: this.bookingStatus ?? '' }, h("wa-option", { key: '4dd7f297f8089ce25ca2308a17ee7914f1eac6f4', value: "" }, "Select..."), this.booking.allowed_actions.map(option => (h("wa-option", { value: option.code }, option.description)))), h("ir-custom-button", { key: '0db301916fd02c35b704c969f776f1618582f128', onClickHandler: () => {
                if (!this.booking.is_direct) {
                    this.modalEl.openModal();
                    return;
                }
                this.updateStatus();
            }, loading: isRequestPending('/Change_Exposed_Booking_Status'), appearance: 'accent', size: "small", variant: "brand" }, "Update"))), h("ir-custom-button", { key: '37448c1b6c42ee121fb7d15bfba828143f0d2420', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), h("ir-custom-button", { key: '8f4d2ba6c141d9977266f14b639760342cb8a51b', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS"), this.hasReceipt && (h(Fragment, { key: 'dfbcde2a388c655d99a59af033ccd6c817a63c7d' }, h("wa-tooltip", { key: 'a99094158038316893b2188aa4357f3c67e6c342', for: "invoice" }, "Print invoice"), h("ir-custom-button", { key: '4796f3d9288a712b2f9ee7a55b403ff7a8b45bdc', id: "invoice", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '93542e3dca20c02e9c9ba9660b67ba32f29edea0', name: "file-invoice", label: "invoice", style: { fontSize: '1.65rem' } })))), this.hasPrint && (h(Fragment, { key: '27b3e0c55ee904ac81ed8c7299cec725a83db20f' }, h("wa-tooltip", { key: '331b88ee1d4c0490f62e8f5b04feb9db8ac3c8b1', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'f6b2b0cf420a192a65449807b3045a984122dab8', id: "print", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'd9d8924b4251a5a144479e062287da7ae0dc4447', label: "Print", name: "print", style: { fontSize: '1.65rem' } })))), this.hasEmail && (h(Fragment, { key: '351b7cbc93bf161243b056514ddc924f05ea9269' }, h("wa-tooltip", { key: '87edcddc0a1c1e9fc67c55cc869d1baf6de84c9b', for: "email" }, "Email this booking"), h("ir-custom-button", { key: '3708b4c5ac2c4b3c7c10e8982f45ba54f8fa1857', id: "email", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'e40fdce74b40c25780e8fea65a5f3f40a60f50a6', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'a71e13f137f5954fa14318f54f01600799abe419' }, h("wa-tooltip", { key: 'b7c945c8333d389b68c2c58f493f7ec5cd6a0183', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '8c7aabed3dd378d5e076bbb8473dd3da58a217c8', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '94b0e31e81ef0b97578b9160d567a716df04988f', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasMenu && (h(Fragment, { key: 'db1048a787d951ddc277d8597615c08230ed9586' }, h("wa-tooltip", { key: '086992e87fd35a694488d3cc0bb834b5367775bb', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'b6de9290251e6bf367ae7f81bf3e0ed757f22886', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'e80ed6fc2425dc0e04625e8309b3abf8c5f3df7b', name: "list", style: { fontSize: '1.65rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '87e2f4d0c66b5c19aca9a7220ca63ebba06f0920', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '1a778b2b55edcb849a24ed3f82b187a58805efcd', name: "xmark", style: { fontSize: '1.65rem' }, label: "Go back" }))))), h("ir-dialog", { key: 'db1688abba2f2e3cf9a57f06f50eecb54234cd19', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '15cf0ae3afc8ad46233a9aafa2e2ccdf37b93388', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: 'a134717fc1e2a4ccfc94a28a9e73db7aedba6f7f' }, locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '517698011ab48875ecd33226833e4dec79d38eed', class: "ir-dialog__footer" }, h("ir-custom-button", { key: '68cfd348f9c4f2fff7a3db2e3a9bf92dbb85e3ec', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'c0f5033e29174308e69e052e2925eee86b7b8e4b', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "danger", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm)))));
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