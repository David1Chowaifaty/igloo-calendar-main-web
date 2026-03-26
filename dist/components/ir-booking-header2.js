import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isAgentMode } from './functions.js';
import { C as CityLedgerService } from './index6.js';
import { d as defineCustomElement$h } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$g } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$f } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$e } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$d } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$c } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$b } from './ir-custom-button2.js';
import { d as defineCustomElement$a } from './ir-custom-date-range2.js';
import { d as defineCustomElement$9 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$8 } from './ir-date-select2.js';
import { d as defineCustomElement$7 } from './ir-date-view2.js';
import { d as defineCustomElement$6 } from './ir-dialog2.js';
import { d as defineCustomElement$5 } from './ir-events-log2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-pms-logs2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base){justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label){flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}}";
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
    dialogRef;
    invoiceDialogRef;
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
    bookingSourceEditor;
    bookingStatus = null;
    currentDialogStatus;
    booking;
    hasReceipt;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
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
    get initials() {
        const { agent } = this.booking;
        if (agent) {
            let c = agent.name.split(' ');
            if (c.length > 1) {
                return c[0][0] + c[1][0];
            }
            return c[0][0] + c[0][1];
        }
        return null;
    }
    get avatarImage() {
        if (this.booking?.agent) {
            return null;
        }
        return this.booking.origin.Icon;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '9a2aa20c86bcea452fc619a307db28b15fe04e5e', class: "booking-header" }, h("div", { key: 'c3334e3c8da89b0545da58c9ee65890e065e282e', class: "booking-header__row" }, h("div", { key: 'c3837e8b515c751e362cf02cb8ce49e105a100a8', class: "booking-header__info" }, h("div", { key: '2d879a6c0c0d6bfec7373c5cb39167b63a41679a', class: "booking-header__title" }, h("div", { key: '8dd90b492314151f2dfff84ff643ad0482eb3b30', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '57e137cc58a7c6210abd9f9d8ffa1324766cb9b3' }, h("wa-tooltip", { key: '905a6135da6cc6022d9b5243c0b2ec72c3c91316', for: "menu" }, "Go back"), h("ir-custom-button", { key: '045f05a5b8e2e68cdc8c0ef40bd1a7de14865d40', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '8f4d7e960f3d489b2befd496f53e050edfdeb991', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '70f11313114174035bb8edeba0eab3a50fa04bf6', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'e0279613e28aff3254e7ae6c3ccad39fb0fcda9f', class: "booking-header__identity" }, h("div", { key: 'e4a401d28f8137d6b53e912b5a34d3c7a17c13f2', class: 'booking-header__label' }, h("h4", { key: 'c2a10d9fbfd426e98bf1278e5d7e1b57395bffff', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '001b33b561444a9d9b7bc6fd418074f425aa040c', class: "booking-header__meta" }, h("p", { key: '21b371ea21c8392f4feec4eab2a849022d0910b6', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '100px', display: 'inline-flex' } }, this.booking.agent.name))) : (this.booking.origin.Label)), !this.booking.is_direct && h("p", { key: 'ca09675576f0750dbd020b1dc5e6bf08775757d2', class: "booking-header__channel-number" }, this.booking.channel_booking_nbr), h("ir-custom-button", { key: '4b4136093d30a06adad12ef5c8b872e290f0e5a2', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source"), lastManipulation && (h(Fragment, { key: '3743c3c62db336fef8acd749e85ca5a829c0c480' }, h("p", { key: '850ae111a6c7ad7d732da1097cf3e146d120335a', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '3a07837d89e672e171958be1adf0c17fe93f5197', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '5cdaec38b57feecb9bb0b9edcb9b318e6282ef1b' }, h("p", { key: '6d984c2983cc873a929119c0b8d2d8f34a02afad', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: 'a1fdcee35d74604b4a8e836dfd30d58aea1f3a6b', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '418b45bc2e0daca6633034325b2e7e3d8048e725', class: "booking-header__actions" }, h("div", { key: '386395307221c4d1b6a15e9fd120553af3c96c00' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("wa-button", { slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.booking) && (h(Fragment, { key: '71dc0d446b7f163db346738c6ef81ad3c6ff0c0c' }, h("ir-custom-button", { key: '777f6faaf5db96d7b834a2a15235bf5615bb567d', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cityLedgerService.syncBookingToCityLedger({
                    booking_nbr: +this.booking.booking_nbr,
                    is_force_post: true,
                });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "warning" }, "Force city ledger"), h("ir-custom-button", { key: '4b2667905a5431ea0ecd27e6d0c9a44df1980bb7', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Invoice to agent"))), h("ir-custom-button", { key: '200d28fdf0d55db39021f013a30aec22e072ebd6', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: 'f47dfe86e2f56969cce6f3cb8eddf42b06f4b925', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '4ffc0df46f7e5c6456b30815d272dcd0d5fcfc00' }, h("ir-custom-button", { key: 'a8a156079ca8a1d71a5646438f84b9d0588250fe', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '19808c093552bcd257b12899094461a12e310141' }, h("wa-tooltip", { key: '36aee5308a65c658263368881c701c614517b303', for: "print" }, "Print booking"), h("ir-custom-button", { key: '21299309d4841b8278c836eb6c501f5662820afa', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'b139919b7506422bd72ae823000773a38c447e25', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'c24b5992a1dc119b3fa1453456709e77bea9a2f1' }, h("wa-tooltip", { key: '41e9581a158020d7378217d01519237e0e3e9916', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: 'c0e0fe6328c60b1f6709262ffa92f5ff1e118973', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'a0df011ec4a1e46d4ba1605428736e0d8f84c086', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '5db271844cd316a3927343b0018b8211dbb938f3' }, h("wa-tooltip", { key: 'd5fd84f0b49fad054284977c9cf51f13a67e2c38', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '4d76f825a1a803dba068e7da9f66080946276e2b', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '8a635d9345d8d858b0da39ba505a3c03d1f2d22c', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'ba68fa19d5608f3ec471dd66162c8584dcbcae93', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '301bde575b8e3e2af0cd6c69825093bfd4680335', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '1838b8eb94dce7642a46e9047df8fa7695c2ff0c', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: 'c8f48e820da47332192e8bc5318a2b5cccc7680d', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'f98e2c214d9dfebe350981601222737cb946bb88' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'ca7f233c7ff24f2846010eecc25974b9eed87f61', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '5c6333181da614bb773af5baf4e9831d2061bdd2', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '5e900a732742f7243116506e939b7f48b83eba41', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'a7b6be467746185042fceec3de1494c1a266092c', booking: this.booking, ref: el => (this.bookingSourceEditor = el) }), h("ir-cl-invoice-dialog", { key: 'db8e3206e612ebed0b2212cb3c63f838a45d4e58', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: +this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
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
    const components = ["ir-booking-header", "ir-booking-assign-items", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dialog", "ir-events-log", "ir-input", "ir-pms-logs", "ir-spinner", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-header2.js.map