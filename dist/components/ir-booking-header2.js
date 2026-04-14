import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isAgentMode } from './functions.js';
import { C as CityLedgerService } from './index6.js';
import { d as defineCustomElement$h } from './ir-air-date-picker2.js';
import { d as defineCustomElement$g } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$f } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$e } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$d } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$c } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$b } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$a } from './ir-custom-button2.js';
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
        return (h("div", { key: 'edd079b4f2b8000bd8d5d4de6d5d78e945f0fa5b', class: "booking-header" }, h("div", { key: '663e14efb34bb372e5e674c4256b1ff3d5d0f319', class: "booking-header__row" }, h("div", { key: '3d37438222867502a8233ea1980e6798c76d844e', class: "booking-header__info" }, h("div", { key: '8abafb09b0f4f5c9281b45435b708838aacabee6', class: "booking-header__title" }, h("div", { key: '38cfff1e8024a03f343c76f0df46422a1312f3d1', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '1a0869cc686c4a40bc702fb30ff0797884896bec' }, h("wa-tooltip", { key: '1810e34519f6cad8370c8942b98f9d4e73b98a2a', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'c4ee3ff580e1eea344346e9c70c92ae423c08f0d', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'd1f035e5f587468f5338fd35b469b3ff9cb863df', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '31d9241c7773c0984054bbed25e9d44ff8872c69', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '6bf5a249c9b520ecde3540fd60ba0027d7baef34', class: "booking-header__identity" }, h("div", { key: '0d391d5c76165f1017065f9e9c94566c2345a495', class: 'booking-header__label' }, h("h4", { key: '1b0a14985fd953e40af55366fc1efc656c9f5581', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '9ca7cf64da5207522e43634d72b0aa42e4eba0f4', class: "booking-header__meta" }, h("p", { key: '4f8a7d4dbaec12cbf7ce0081c7d55a4cf3954d14', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '100px', display: 'inline-flex' } }, this.booking.agent.name))) : (this.booking.origin.Label)), !this.booking.is_direct && h("p", { key: 'af00e73712c0da344499ae148c0b7f03c6ecca63', class: "booking-header__channel-number" }, this.booking.channel_booking_nbr), h("ir-custom-button", { key: '6c0e6c61c7c9ad544512e3481cbfdff766987765', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source"), lastManipulation && (h(Fragment, { key: '237634c93c8ba1c2027131f01be2738b28340bbf' }, h("p", { key: '4f5db5512616dee357e9e2eeee04555e517f8ebc', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '78f2b821ee5b3522385d7126522c24644de0010d', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '3c9d9b35d78d432e887386a28adaa402a797d0fc' }, h("p", { key: 'e2d59cd8b9f5e5daf62728da9edee28c365daf6d', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: 'c5ca3c59c18575fb589a13b0d2d3fd48a676d7cc', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '65c85794447d29806745e5212c3062b81a767066', class: "booking-header__actions" }, h("div", { key: '66157885a4d9120df50121ef3ac657c28fbc9c71' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.booking) && (h(Fragment, { key: '1c4324cf2f2add90c66a5ad87d3f74157dc80e21' }, h("ir-custom-button", { key: '36235d1041d9bdbcfe9f28ae0554950b13524c67', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cityLedgerService.syncBookingToCityLedger({
                    booking_nbr: +this.booking.booking_nbr,
                    is_force_post: true,
                });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "warning" }, "Force city ledger"), h("ir-custom-button", { key: '5b67ed85f6641b43f8050b6533dd5df8e54c3686', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Invoice to agent"))), h("ir-custom-button", { key: '131b3a51d80eb111b1f048748b5e58eadb02aea3', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '555c7185c7bfa0bcd499db0facd6293456734b63', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '4712dd80e79b047a3e1f6c1d294d6bee097dbd58' }, h("ir-custom-button", { key: 'e92d8e852b03fd169e0bab477e9b66f509da3e47', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '853a05691a0e0b80c887f1baef9ea0f74888108d' }, h("wa-tooltip", { key: '1880d72615304bd1a234a293de03daedb9ed0871', for: "print" }, "Print booking"), h("ir-custom-button", { key: '50b219c67fc0c0742ebaff08c9957d4aa0f7cb34', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '88262957c0f28f76d5d1d583253fb6218775f0fc', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '39ddc4c686ff6829ada472b9aca0830c85464313' }, h("wa-tooltip", { key: '5379fffb8df72dc2852c81e33d91dbf75f68fd75', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '80b5df28822a22b4f0d0c6a022c2f2e8d4db1ee2', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '60f28c534d21527aea13c6259313e47e58969bfd', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'b971ce37063c338d99043ee523cef26f41db26bd' }, h("wa-tooltip", { key: 'db3c22dfaf604ef436abdafadcc750ef95c53325', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '8e192e460c81f2810ce482f378dbcafe50a360e7', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '17d718fe645cde411f5af91cbc2857534c1e9d39', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'e1e1009889495771b7933f32616d39eee28dd59f', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '1dcd1035a57619da5f752d18fc4404ea24bce554', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '0e0fb2647e56b30326e30553bdb51655a36a5221', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '5315886f6d66a831663d352bd72c52e6811afcab', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'ef1ba29a91e6a3e2d340af46a446b46f9fc5227b' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'afdfd58652c5346d5ec0d179b0aa363e719f630f', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'c1b8f589593018ce53d3400f98ac3b8667b531ac', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'c70e864aa551213db0cfa2440ed08bbc4b8e6bc3', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: '2610d9c9e9ed0ff7106c8018514d60cf57ebb94f', booking: this.booking, ref: el => (this.bookingSourceEditor = el) }), h("ir-cl-invoice-dialog", { key: 'd26b811752137955b4413e8203c8f698a8235976', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: +this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
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
    const components = ["ir-booking-header", "ir-air-date-picker", "ir-booking-assign-items", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dialog", "ir-events-log", "ir-input", "ir-pms-logs", "ir-spinner", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingHeader);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-custom-button":
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