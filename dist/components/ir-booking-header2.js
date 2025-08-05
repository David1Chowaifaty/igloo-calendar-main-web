import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$6 } from './ir-icons2.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-dialog2.js';
import { d as defineCustomElement$8 } from './ir-events-log2.js';
import { d as defineCustomElement$7 } from './ir-icon2.js';
import { d as defineCustomElement$5 } from './ir-modal2.js';
import { d as defineCustomElement$4 } from './ir-pms-logs2.js';
import { d as defineCustomElement$3 } from './ir-popover2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
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
        this.hasEmail = true;
        this.bookingStatus = null;
        this.confirmationBG = {
            '001': 'bg-ir-orange',
            '002': 'bg-ir-green',
            '003': 'bg-ir-red',
            '004': 'bg-ir-red',
        };
        this.bookingService = new BookingService();
        this.alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    }
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
                return h("ir-pms-logs", { slot: "modal-body", bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return h("ir-events-log", { booking: this.booking, slot: "modal-body", bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        var _a, _b;
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        return (h("div", { key: '28fc8b63fe4dcbc951444ae78d44fda6e842674a', class: "fluid-container px-1" }, h("div", { key: '1f65c6d16610dbdf411574fb1125b1f8822efeb2', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, h("div", { key: '424552c79a4cca7bb60d1fd59b633a9c4959c972', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: '1068d176c7913bfe96d1777aaaaa92af484b2bf2', class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: '5fb408c5c8a9aa50773209db85323805885560f7', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '4c44c15e972d5139a0cf6df95c2008a5e956f1e6', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: 'd6b726f1ddfed144803e0b7c88c92c0e19f18da4', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: 'b73747de4661e033f25fa42542ad31cf980f2233', class: "d-flex flex-column align-items-center" }, h("span", { key: '3abf8c4d3a02f203d1e2ed6f9548bbfa9b200a75', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.is_requested_to_cancel ? '003' : this.booking.status.code]}` }, this.booking.is_requested_to_cancel ? locales.entries.Lcz_CancellationRequested : this.booking.status.description), lastManipulation && (h("ir-popover", { key: '2b8d1cde11b537052998a2efb38bc2b6c1b07705', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: 'ab44511c6c056fbfb002564986918b05e2c58784', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: '8d1ce352361aed729f87d973026e62bfb664bcff' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: 'bb6d24fa2371ff1fb236373e2f421233b9355507', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("ir-select", { key: 'b2fe223aa9ea1b6cb0507eba7f234afd8aeeab4e', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 ", selectedValue: this.bookingStatus }), h("ir-button", { key: 'cb7e9e20e38078557d9bce2bda132cbb7e34d3b7', onClickHandler: () => {
                if (!this.booking.is_direct) {
                    this.modalEl.openModal();
                    return;
                }
                this.updateStatus();
            }, btn_styles: "h-28", isLoading: isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), h("ir-button", { key: '4d4cb737f48f5d297d387a16c44e4cbda1bc220e', size: "sm", btn_color: "outline", text: locales.entries.Lcz_EventsLog, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            } }), calendar_data.is_pms_enabled && (h("ir-button", { key: '56cc04f00baea6429c86dbb9bd0b5215fa015103', size: "sm", btn_color: "outline", text: locales.entries.Lcz_pms, onClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            } })), this.hasReceipt && h("ir-button", { key: '3d269a1a10087c327a7a777a5bdb1f4ebf24b28d', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && h("ir-button", { key: 'cd7c3f13507efd0a25458156c4b172b352be61bd', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasEmail && h("ir-button", { key: '411706941e13993f20d232be263954b723dc7475', variant: "icon", id: "email", title: "Email this booking", icon_name: "email", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && h("ir-button", { key: '54701dae4c2870854f6b5321c7150c98d88786ad', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && h("ir-button", { key: 'bcb8d8219cb5ff08d2404674c35fb2d5f0e5feb0', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (h("ir-button", { key: '6db53ad60e9575874a886779691340012c6f4fea', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), h("ir-dialog", { key: '7432d3b944ad09394462a5a647706f4aa5bdf947', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-modal", { key: 'e1a6a1f9de9681eef76ffa83765e2bf68e960068', ref: el => (this.modalEl = el), modalTitle: '', leftBtnText: (_a = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Cancel, rightBtnText: (_b = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Confirm, modalBody: locales.entries.Lcz_OTA_Modification_Alter, isLoading: isRequestPending('/Change_Exposed_Booking_Status'), onConfirmModal: this.updateStatus.bind(this) })));
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
    const components = ["ir-booking-header", "ir-button", "ir-dialog", "ir-events-log", "ir-icon", "ir-icons", "ir-modal", "ir-pms-logs", "ir-popover", "ir-select", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
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