import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$5 } from './ir-icons2.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-dialog2.js';
import { d as defineCustomElement$6 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-pms-logs2.js';
import { d as defineCustomElement$3 } from './ir-revisions2.js';
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
            case 'revisions':
                return h("ir-revisions", { slot: "modal-body", bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        return (h("div", { key: '919fbee301be474002534712fddd4648700024b6', class: "fluid-container p-1" }, h("div", { key: 'cce9c8c44daed887a3655e89962df4186a739a3b', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, h("div", { key: 'cbd47af2cc78158d7c0a37d1de1b4fb6348b2c1d', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: '798885016f6e73092b1799219379d1f2122520b7', class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: 'fa16b2f54423f812eb8b30f2e25d829792bd4c57', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '8e329dac2a8fb17761593db1fdf04c6fa5946ae6', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '820d8d3099e4233a52b28c6346dbc9321cfca107', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("span", { key: '409354ce4ef9863fd08dad7d7e637cb98ed73635', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.status.code]}` }, this.booking.status.description), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: 'd8f0b5b3f29d1da4c52d3ef2a4e0e8cf58dc6dc9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("ir-select", { key: '33ce07bbf0ee71b52ee017bfe041f31b769b0747', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 " }), h("ir-button", { key: '3103175e8bd0f0d6ed89c1e055dd9569712c1932', onClickHanlder: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), h("button", { key: '9ef814ebcbd30f7459eb43b7fbb4411e6bff30fe', type: "button", class: "btn btn-outline btn-sm m-0", onClick: () => this.openDialog({ type: 'revisions' }) }, 'Revisions'), calendar_data.is_pms_enabled && (h("button", { key: 'fa6c9c2e880839f69a60ca15386705ca7ed4fcc3', type: "button", class: "btn btn-outline btn-sm m-0", onClick: () => this.openDialog({ type: 'pms' }) }, locales.entries.Lcz_pms)), this.hasReceipt && h("ir-button", { key: '0ede723b861ad17f8c015d8ee780fc3d8dc40c3f', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && h("ir-button", { key: 'c8a28d4771f7dfe7254eb55f29350cdccf60bc88', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && h("ir-button", { key: '6f4cc13af1cb87645c7f284ddbdfc78dc04eff5b', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && h("ir-button", { key: '665d0259d28cfa5e0b32e4acd0165475c95e95e1', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (h("ir-button", { key: '6684dee1c19d7c24af9ee4820ff701e3b6f16308', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHanlder: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), h("ir-dialog", { key: 'a45e037b622dfe63e255cb0daa554d4df96ec072', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
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
    const components = ["ir-booking-header", "ir-button", "ir-dialog", "ir-icon", "ir-icons", "ir-pms-logs", "ir-revisions", "ir-select", "ir-spinner"];
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
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-revisions":
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