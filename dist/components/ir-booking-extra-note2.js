import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { B as BookingService } from './booking.service.js';
import { e as getPrivateNote } from './booking.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-textarea2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = /*@__PURE__*/ proxyCustomElement(class IrBookingExtraNote extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetbooking = createEvent(this, "resetbooking", 7);
        this.bookingService = new BookingService();
        this.booking = undefined;
        this.isLoading = false;
        this.note = '';
    }
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
            this.resetbooking.emit(res);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '3ecadc52a20cb8c614e7891e3ca3ef5ee34ebee3', class: 'px-0' }, h("ir-title", { key: '6c402e3fef0ed3d0b1a869169f65ad067125b5d6', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), h("form", { key: 'f269b808cb87acaacfd8e831937c5ece1872fd09', class: 'px-1', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, h("ir-textarea", { key: '655aa9f57a6ee8506140941f5348ece96029f6b1', placeholder: locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) }), h("div", { key: '54d987c69f17f2a71290eff8b0a98893ba4c451f', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '1704455f9b6c110cee40f3c14c5412d53bf647d5', onClickHandler: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '0cf19c8d068eebc8bf4fe97451c9a58677423ac1', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', icon: "", isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
    static get style() { return IrBookingExtraNoteStyle0; }
}, [2, "ir-booking-extra-note", {
        "booking": [16],
        "isLoading": [32],
        "note": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-extra-note", "ir-button", "ir-icon", "ir-icons", "ir-textarea", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingExtraNote);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingExtraNote as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-extra-note2.js.map