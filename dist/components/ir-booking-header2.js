import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isAgentMode } from './functions.js';
import { d as defineCustomElement$b } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$a } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$9 } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$8 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-date-view2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-events-log2.js';
import { d as defineCustomElement$3 } from './ir-pms-logs2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.booking-header__row.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem;padding:0 var(--wa-space-m);flex-wrap:wrap}.booking-header__actions.sc-ir-booking-header{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:0.5rem}.booking-header__channel-number.--primary.sc-ir-booking-header{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;color:#464855}.booking-header__label-container.sc-ir-booking-header{display:flex;align-items:center}.booking-header__status-trigger.sc-ir-booking-header{width:100%}.booking-header__status-trigger.sc-ir-booking-header::part(base){justify-content:flex-start}.booking-header__status-trigger.sc-ir-booking-header::part(label){flex:1 1 0%;text-align:start}.booking-header__stretched-btn.sc-ir-booking-header{flex:1 1 0%}.booking-header__label.sc-ir-booking-header{padding:0;margin:0}.booking-header__label-container.sc-ir-booking-header{gap:1rem}.booking-header__info.sc-ir-booking-header,.booking-header__title.sc-ir-booking-header{display:flex;flex-direction:column;gap:1rem}.booking-header__label-number.sc-ir-booking-header{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.booking-header__modified.sc-ir-booking-header{padding:0;margin:0;color:var(--wa-color-danger-fill-loud);width:fit-content}.booking-header__channel-number.sc-ir-booking-header{padding:0;margin:0}.booking-header__meta.sc-ir-booking-header{display:flex;align-items:center;gap:1rem;font-size:0.875rem}@media (min-width: 640px){.booking-header__title.sc-ir-booking-header{flex-direction:row;align-items:center}}@media (min-width: 768px){.booking-header__label.sc-ir-booking-header{display:flex;align-items:center;gap:0.5rem}.booking-header__row.sc-ir-booking-header,.booking-header__info.sc-ir-booking-header{flex-direction:row;align-items:center}.booking-header__row.sc-ir-booking-header{justify-content:space-between}}";
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
    bookingService = new BookingService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
    bookingSourceEditor;
    bookingStatus = null;
    currentDialogStatus;
    booking;
    hasReceipt;
    agent;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
    folioRows = [];
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
    get canChangeSource() {
        const folioRows = this.folioRows ?? [];
        if (folioRows?.length > 0) {
            return folioRows.every(f => f._raw.IS_LOCKED === false);
        }
        return true;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: 'd6c66ae7c4a97c9ef9fb68e65d0b49039a8fb3ee', class: "booking-header" }, h("div", { key: '2c90657b729b39b7601656213891d6d95c3261a6', class: "booking-header__row" }, h("div", { key: 'a1bddef0534f445285d025387c91f351ed360577', class: "booking-header__info" }, h("div", { key: '0649ed92fc88470c1b067ccf1f69baa9d612d6b7', class: "booking-header__title" }, h("div", { key: 'fdd666fc0be307941ccb6981ae058367fa4bf061', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: 'fd6c0e01579ede59995da10007901a32f00ce0b1' }, h("wa-tooltip", { key: 'b983e3052dc4752821cd7b42a80bee8daca084a4', for: "menu" }, "Go back"), h("ir-custom-button", { key: '653f0ea6e17fe7f8a2c03a5b624e09ebb76496e0', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '04e8a2350309f118bcda5dcb597e27e60387cdc1', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '55aa28fb16ca8f7d99ab3090631448b5d70f81f4', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'fd1a80daf3ca746bdaa479e6cdcdc860668b8e65', class: "booking-header__identity" }, h("div", { key: '77a6421e86969f519e8a753ee03d4fa216d99ddc', class: 'booking-header__label' }, h("h4", { key: '5eb19c991f47960d639db28c4bf14a2a2c44725e', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '97d44cad9c638444f7c1f467f3597a771609c2e1', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '790da927398166aa6ec7609dcee0b3dd60e9b129', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '3397975cfb748d7c3d7b4f6ba9d6206af3eb8c8f', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: 'dd6af08af17bb252b260a95e10f4920f4c6edb09', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, " ", this.agent.reference))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: 'baea4ea3ade86d2abb7d4889c2f722597b255492', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: '74542659511948c57ff3d36b2bd67c195167e461' }, h("p", { key: '928fa79b6089ff2044b5e86bcf0218ba83197656', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '8c2415b3ad1b483d2a45b25f69653d8baa8209fe', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'ae539f515e414e4a32133fcef6dd230a93f025d8' }, h("p", { key: '7e7ec71dfc7b42e9fda9889a2b5ca5535cace4d4', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '091ea45bc7e16a68b8c48f0f882f14797c7f6adf', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'c02cfca036097122b2b78e8bb59594d4a7ba9ce0', class: "booking-header__actions" }, h("div", { key: 'ee3136064aeaa596925218f0f4fb09ae8c664bb1' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'ac663868b4c4008946b2abf1f28fb998f3ee4166' })), h("ir-custom-button", { key: '2927f238bc3b9f647c09e177b3526b861e3479d3', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: 'caa97e8b09cd5d13bd9d5a85260c0e762282de45', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '5a941559fec72384329186f7efdf81b1bbf76ea1' }, h("ir-custom-button", { key: 'bd237fea81aad3e79286730cfdc5e39b503570ad', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '758a7bcb2ecfccb5f9de5c38de629de886f3faff' }, h("wa-tooltip", { key: '7105859384912087cbedf29f1c63c3dfa5997b81', for: "print" }, "Print booking"), h("ir-custom-button", { key: '05edfb24fb9f1d6bb59b40345ed4e12fd4478ce1', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '04f6450c3d77a7c23ad463ca06b73343ee6a0f96', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'd552e06d0a5cae78dc9fa5d8987d9a0ce10db941' }, h("wa-tooltip", { key: '77fab6ca2e7816a2ad69ab3f82d93595da1f34ec', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '94b3072447eeb135c730fa63bcddba69006ce192', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'bd78391ae0eee198075fe24f0b7ce411dc492aec', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'e4bcd9404038a3596f956fe4c30c3f48c7c4c7c4' }, h("wa-tooltip", { key: '0357aace074b937ca05f052da8099500ae5426ae', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '0d4bdc9022595d098f1e70b4c24d4e82a31ce793', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '235c2ac488954adc46aa931169103f73b2bddc05', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: '7b274550f62bd857204be5766bd625409a7ac8ce', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '58a29c7133a75c4ad45a7f6945f73f6721b3bead', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '7bb145bbf5f2230fef94811a7e9972bea13b72b9', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: 'bd7a47798aa2c57d3bfe36d62de062c74d539bff', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'ff0d2d4a6d640ed3261e62a6297c700c63b6efa9' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'ba853271ee9784545b0df10da5cb77e3e4b50452', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '2c1b3fc2e1ead9c228945bcb7d1976994f63c6c0', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '7e5fb75a50b563514fc7695dc6b83e278ca7392a', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: '433184c1286fec494cbd1c28979f871af96c56b6', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
    }
    static get style() { return IrBookingHeaderStyle0; }
}, [2, "ir-booking-header", {
        "booking": [16],
        "hasReceipt": [4, "has-receipt"],
        "agent": [16],
        "hasPrint": [4, "has-print"],
        "hasDelete": [4, "has-delete"],
        "hasMenu": [4, "has-menu"],
        "hasCloseButton": [4, "has-close-button"],
        "hasEmail": [4, "has-email"],
        "folioRows": [16],
        "bookingStatus": [32],
        "currentDialogStatus": [32]
    }, [[0, "selectChange", "handleSelectChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-header", "ir-booking-assign-items", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-custom-button", "ir-date-view", "ir-dialog", "ir-events-log", "ir-pms-logs", "ir-spinner", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-view":
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