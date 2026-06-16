import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.store.js';
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
                agent: this.booking.agent,
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
        return (h("ir-dialog", { key: '0d94780505196959615970b6151b9f27714a8616', label: "Private Note", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-textarea", { key: '9d3640c1d07fb73bee5c805edbfd11429e30aa7c', size: "small", placeholder: locales.entries.Lcz_PrivateNote_MaxChar, defaultValue: this.note, onchange: e => this.setNote(e.target.value), value: this.note }), h("div", { key: '5cbce33ed3e359df187fa854f01b5780b88cd58d', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '4db6dbba9ae006cca6d0934d7083a425aad388e1', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.closeModal.emit(null), class: `flex-fill'}` }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '2898829f69732dd6cd664550c240530f663b0162', size: "medium", onClickHandler: () => this.savePrivateNote(), variant: "brand", loading: this.isLoading }, locales.entries.Lcz_Save))));
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