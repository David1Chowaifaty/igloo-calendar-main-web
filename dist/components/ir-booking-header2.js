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
        return (h("div", { key: '4c79ba0b1210b865d8882e11ba2fcbca892f8e03', class: "booking-header" }, h("div", { key: 'f67f2fbf481acc1a6d29b5ca44030223845460ab', class: "booking-header__row" }, h("div", { key: 'd7bc579e55f8a4ff04f9220579d1138cd5e5749e', class: "booking-header__info" }, h("div", { key: 'd8ad7c5f5b398b5d14434b137662293563194e67', class: "booking-header__title" }, h("div", { key: '6ec7d79855dc4d6817a7ae93c87628c7f0184e8e', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '814234c566eee4d4057153b6cadc196df4322455' }, h("wa-tooltip", { key: '21092f891afa7dbf9910a71a5b099f2f4a72dc0f', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'a1e167052759ff82769ca456c7ff28cf3cf39316', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '41c16fe604357851763107c4749fc4e8da2a00e4', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: 'd36cc1bfbca51d90edfa0736b0ff327b2b75e220', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'eb4049cdcc83e44489887ae3f11f3cb9426db4ae', class: "booking-header__identity" }, h("div", { key: 'd9f3439adfbf51271dd1d88f309442f81f127dc7', class: 'booking-header__label' }, h("h4", { key: 'b1182eb10c0b7ac48cbb12339ed9db49c412f47a', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '0972e50299cad7b2a1b3e563157a125319bad816', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '3efd2ef2dfac67de1c11edbc4bfbe06a64970bcb', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '5726616df4c323d20fb8e6234a34173f24327140', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: 'b3b58bd0b738b4cdcda03eeca55d9bdbb76871bb', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: 'e44126b093347369a20d741c06c112a8c0add110', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: 'e04caaed6883deadf6ce3e332d8a7dedff130d8c' }, h("p", { key: '9083cae33b975353f8a84292043c8b84ed98faa0', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '405d44048325394af0edf737e7b621a3bb425318', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'a99bbf9e9738c0b66ae2b3658f916d79cd56eef5' }, h("p", { key: '2e0a32e36b78f9facfd7663ad56f972d10fe29ce', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: 'ad3a233b567dec57c8b0496acb4dec7ad30637af', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'e22d2603c125ffe48e9fb9495bb096fa8d655ef3', class: "booking-header__actions" }, h("div", { key: '4cacf94d0c3ba123f06b88b5db750307dc4a20c0' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'f772985bc06ce562ee32f144309a74bca6a6e51f' })), h("ir-custom-button", { key: '78d0006baefc8c87bd4aca95603bba4dd053d379', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '9426d12c29672c857dc2854ad072a55082be7a39', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '91e10e06b2f7df13667eb4251654b3abdbcb113e' }, h("ir-custom-button", { key: 'd045e27afa833fd1b1b13788c114edc1a6e1c16b', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '91ae17b0377b193068f88bc7bbeb665108384cc0' }, h("wa-tooltip", { key: 'ecb79e03c6868774e60264c4a1ee8569a8b740d4', for: "print" }, "Print booking"), h("ir-custom-button", { key: '45e6436b0f594b230725d7d802d0cb855383b674', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '858e82b06977f2b77a7d3573b1dae42d7d31fc8f', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '62a130838cdb5d35eb2c6c6fee14689020d55f48' }, h("wa-tooltip", { key: '200002d15b09ea8bae84fbb8d86730729dd1fb59', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '9ab0c2faf542884ce5c0d4e4268c4c16861dbda9', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '9ac539ba5bca96d654a05e0ace7b7376e6eaccf7', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '8675afa0a02147b722a12b24ddf8c6beaf21ae86' }, h("wa-tooltip", { key: '8fa46ee7fe329f5f44ee086eb772f993374288de', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: 'fb47ee10f82a7c42992c23070e33662c2c2fe607', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '1176eab73df4d1b3a06007966243d7864c7f7ebe', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'e54945fa49bef6341e27fe758d54b203a60e08df', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '03fdf722bee5aaa7df820d4ec907f0ee7d42e3ae', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '98944b49c82ce25d9362257d44f952ce1b20a743', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '79a7225284e71ad0d37cda06807d292f6cd2c839', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'd41433772e25ab160e51c7a02d2dafc6e8d39046' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '5ae22409cbcfa7a9d0611be5990971e9308b55a7', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'f332a27b00175add862593bcf8b3ee022735aeca', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '3819833bf8b3c5e34ea6df07e6909e636921011b', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'f874403acc9726f768fc0b3c12d5621a8bdc0a19', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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