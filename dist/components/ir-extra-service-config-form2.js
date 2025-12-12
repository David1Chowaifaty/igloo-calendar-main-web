import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { E as ExtraServiceSchema } from './booking.dto.js';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { Z as ZodError } from './index3.js';
import { d as defineCustomElement$3 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irExtraServiceConfigFormCss = ".sc-ir-extra-service-config-form-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-form-h .input-group-text.sc-ir-extra-service-config-form{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config-form{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config-form{height:70px !important}.service-description.sc-ir-extra-service-config-form .input-group-prepend.sc-ir-extra-service-config-form{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config-form{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config-form .btn-container.sc-ir-extra-service-config-form{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config-form .input-group-text.sc-ir-extra-service-config-form{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form,.cost-input-group.sc-ir-extra-service-config-form:focus-within .currency-ph.sc-ir-extra-service-config-form{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config-form{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config-form:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config-form{background-image:none !important}.price-input.sc-ir-extra-service-config-form,.cost-input.sc-ir-extra-service-config-form{border-left:0}.row-group.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:0.5rem}.extra-service-config__container.sc-ir-extra-service-config-form{display:flex;flex-direction:column;gap:1rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config-form{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config-form{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config-form,.cost-input-placeholder.sc-ir-extra-service-config-form{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config-form,.price-input.sc-ir-extra-service-config-form{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config-form{border-color:#1e9ff2}";
const IrExtraServiceConfigFormStyle0 = irExtraServiceConfigFormCss;

const IrExtraServiceConfigForm = /*@__PURE__*/ proxyCustomElement(class IrExtraServiceConfigForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    service;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.service) {
            this.s_service = { ...this.service };
        }
    }
    handleServiceChange() {
        if (this.service) {
            this.s_service = { ...this.service };
        }
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            ExtraServiceSchema.parse(this.s_service ?? {});
            await this.bookingService.doBookingExtraService({
                service: this.s_service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingEvt.emit(null);
            this.closeDialog();
        }
        catch (error) {
            if (error instanceof ZodError) {
                this.error = true;
            }
            console.error(error);
        }
    }
    closeDialog() {
        this.closeModal.emit();
    }
    updateService(params) {
        let prevService = this.s_service;
        if (!prevService) {
            prevService = {
                cost: null,
                description: null,
                end_date: null,
                start_date: null,
                price: null,
                currency_id: this.booking.currency.id,
            };
        }
        this.s_service = { ...prevService, ...params };
    }
    render() {
        return (h("form", { key: '1fdc27901bcae1b3cd1d470cb10069fd607760dc', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, h("ir-validator", { key: 'a3d355e341b26a35cb5a133b54083ae8d39a4924', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: 'b78daaf7a446b4937d5d994b128fd53fa9cb96ef', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), h("ir-custom-date-picker", { key: 'f34e458dd72ce49f132a7b23244582dd5e9c9f21', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) }), h("ir-custom-date-picker", { key: '62fd151c5bd7a4985591d4758e5609303cdac845', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), h("ir-validator", { key: '4ae492f6bed79dfeac0c8a7411640ee16fbceede', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '47d53a3f57933095d07baf7b13de4be8537a08e5', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: locales.entries.Lcz_Price }, h("span", { key: 'ae1975ce8083e9b422e1824df694bdb3308978ea', slot: "start" }, this.booking.currency.symbol))), h("ir-validator", { key: '6fd9880b590fab23b399d61ff7c0b8a5bbf3972d', value: this.s_service?.cost ?? null, schema: ExtraServiceSchema.shape.cost }, h("ir-input", { key: '201e59acc6e98a88e8775b58db83e117f44584fa', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: locales.entries.Lcz_Cost }, h("span", { key: 'b0177abdfb36d6680d9e18b732b842528ce8de06', slot: "start" }, this.booking.currency.symbol)))));
    }
    static get watchers() { return {
        "service": ["handleServiceChange"]
    }; }
    static get style() { return IrExtraServiceConfigFormStyle0; }
}, [2, "ir-extra-service-config-form", {
        "booking": [16],
        "service": [16],
        "s_service": [32],
        "error": [32],
        "fromDateClicked": [32],
        "toDateClicked": [32],
        "autoValidate": [32]
    }, undefined, {
        "service": ["handleServiceChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service-config-form", "ir-custom-date-picker", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServiceConfigForm);
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrExtraServiceConfigForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-service-config-form2.js.map