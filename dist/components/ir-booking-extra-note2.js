import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { o as getPrivateNote } from './booking.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = /*@__PURE__*/ proxyCustomElement(class IrBookingExtraNote extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    open;
    booking;
    isLoading = false;
    note = '';
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingEvt.emit(res);
            this.closeDialog();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async openDialog() {
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    render() {
        return (h("ir-dialog", { key: 'dc309d991244b9f6208f94a81ce4ab9b6423cd12', label: "Private note", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: '3f9f6fab1cc0c6a91e465bfd2ab7f43ab6130bf0', size: "small", placeholder: locales.entries.Lcz_PrivateNote_MaxChar, defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: 'f3da6423b43ef5d5d6655bf5f9d9961d786fe9e4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0af1d922be2049ca3f1a0d006d1271894b20cdcb', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '6d62efdaee4ae62d166db6c2b2acaca8701bdaf3', size: "medium", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, locales.entries.Lcz_Save))));
    }
    static get style() { return IrBookingExtraNoteStyle0; }
}, [2, "ir-booking-extra-note", {
        "open": [1540],
        "booking": [16],
        "isLoading": [32],
        "note": [32],
        "openDialog": [64],
        "closeDialog": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-extra-note", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingExtraNote);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingExtraNote as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-extra-note2.js.map