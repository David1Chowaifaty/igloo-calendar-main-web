import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$4 } from './ir-icons2.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-dialog2.js';
import { d as defineCustomElement$6 } from './ir-events-log2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-pms-logs2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}";
const IrBookingHeaderStyle0 = irBookingHeaderCss;

const IrBookingHeader = /*@__PURE__*/ proxyCustomElement(class IrBookingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.closeSidebar = createEvent(this, "closeSidebar", 7);
        this.resetbooking = createEvent(this, "resetbooking", 7);
        this.openSidebar = createEvent(this, "openSidebar", 7);
        this.confirmationBG = {
            '001': 'bg-ir-orange',
            '002': 'bg-ir-green',
            '003': 'bg-ir-red',
            '004': 'bg-ir-red',
        };
        this.bookingService = new BookingService();
        this.booking = undefined;
        this.hasReceipt = undefined;
        this.hasPrint = undefined;
        this.hasDelete = undefined;
        this.hasMenu = undefined;
        this.hasCloseButton = undefined;
        this.bookingStatus = undefined;
        this.currentDialogStatus = undefined;
    }
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.bookingStatus = target.selectedValue;
    }
    async updateStatus() {
        if (this.bookingStatus !== '' && this.bookingStatus !== null) {
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
                this.resetbooking.emit(null);
            }
            catch (error) {
                console.log(error);
            }
            finally {
            }
        }
        else {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
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
                return h("ir-events-log", { slot: "modal-body", bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        return (h("div", { key: '92114ea1b8ea2a652a2f9fd9115ad4af6e85f76c', class: "fluid-container p-1" }, h("div", { key: 'a6c857788aabd74f0e8b93092d84d09acf193f45', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, h("div", { key: 'c4d9c66be5994088345208157bca4e432a81e1c5', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: 'fb73dd80b90cbb4fb6c8b2d35cb63f1f826ff3cf', class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: '825163ff7daf9950bcfc347563520aec8de37047', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '0d862885e8d34f7bf9a17fc4e0d44e9cf84472f1', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '5758a7a7ddd1ea6141811fae65e7dd7d295dd8a7', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("span", { key: '7da6a8825b8b79e5b7ec936c0ea223ec77e23082', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.status.code]}` }, this.booking.status.description), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '1790845bfaa58392a19755be2c597565aff1ce65', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("ir-select", { key: 'f60a0a520d0e777d2f473aacad95e0db2066fcb5', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 " }), h("ir-button", { key: 'e9f77ceee830be6b32e0b38c53eb11e0c0365b4c', onClickHandler: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), h("ir-button", { key: '1a8e88c5073dd4966abf26287f8dab26763d8bf3', size: "sm", btn_color: "outline", text: locales.entries.Lcz_EventsLog, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            } }), calendar_data.is_pms_enabled && (h("ir-button", { key: '01e52e9fd2d023c497a44ff5f1f19cf1a53e4bf5', size: "sm", btn_color: "outline", text: locales.entries.Lcz_pms, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            } })), this.hasReceipt && h("ir-button", { key: 'd48700823ce94c03a4eb7c29caa62265d0fa82fd', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && h("ir-button", { key: 'ef9c7a758f5d1c8140452440d844b7dba5bf0791', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && h("ir-button", { key: 'fa4e5333900f6a6f307ee33b91569d2b25133895', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && h("ir-button", { key: 'ce3d779125540da2d5619a05df412b6063c09022', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (h("ir-button", { key: 'd2d034589a666bcd12425b1f8a9ebb6c35666e5b', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), h("ir-dialog", { key: 'c4265b614bca6b2e06426abed209b974cbac1e59', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': '400px' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
    static get style() { return IrBookingHeaderStyle0; }
}, [2, "ir-booking-header", {
        "booking": [16],
        "hasReceipt": [4, "has-receipt"],
        "hasPrint": [4, "has-print"],
        "hasDelete": [4, "has-delete"],
        "hasMenu": [4, "has-menu"],
        "hasCloseButton": [4, "has-close-button"],
        "bookingStatus": [32],
        "currentDialogStatus": [32]
    }, [[0, "selectChange", "handleSelectChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-header", "ir-button", "ir-dialog", "ir-events-log", "ir-icon", "ir-icons", "ir-pms-logs", "ir-select", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-button":
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
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-pms-logs":
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