import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isAgentMode } from './functions.js';
import { E as ExtraServiceSchema } from './utils.js';
import { B as BookingService } from './booking.store.js';
import { t as taxationModes } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { Z as ZodError } from './index2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-service-assignee-select2.js';
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
    agent;
    service;
    svcCategories = [];
    language;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (isAgentMode(this.agent)) {
            this.assignee = 'agent';
        }
        this.assignService();
    }
    handleServiceChange() {
        this.assignService();
    }
    assignService() {
        if (this.service) {
            this.s_service = { ...this.service };
            if (!this.service.agent) {
                this.assignee = 'guest';
            }
        }
    }
    get categories() {
        const taxPctByCode = Object.fromEntries(calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code !== taxationModes.NOT_APPLICABLE).map(c => [c.category.code, c.pct]));
        return this.svcCategories.filter(cat => taxPctByCode[cat.CODE_NAME]).map(cat => ({ ...cat, pct: taxPctByCode[cat.CODE_NAME] }));
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            const service = { ...(this.s_service ?? {}), agent: this.assignee === 'agent' ? this.booking.agent : null };
            ExtraServiceSchema.parse(service);
            await this.bookingService.doBookingExtraService({
                service,
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
    assignmentChanged(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.assignee = event.detail;
    }
    render() {
        return (h("form", { key: '3e47dc98ef9be1837a4cba3fc5df2b59d8daf38a', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (h("ir-validator", { key: 'c9b6b8b6879fa670696c53c0b9fda57c0bd8e85d', value: this.s_service?.category, schema: ExtraServiceSchema.shape.category }, h("wa-select", { key: '53b9fe0b9d969acdf7453b2e3c6f07fa14a39201', size: "small", label: "Service category", value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.updateService({ category: { code: e.target.value } });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.categories?.map(category => {
            const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
            const label = (category[langKey] ?? category.CODE_VALUE_EN ?? '') + ` (VAT ${category.pct}%)`;
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), h("ir-validator", { key: 'd19bef728d314f46975be4b8f9a767ac83edd4ea', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: '61788176add7395a0f5c08d36559cbc4abc3180a', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), h("ir-validator", { key: 'c2374b219c003cb1c9637167f84216e4faf769bf', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-custom-date-picker", { key: '27119c056a13b18d06823ead749efcaabeac5e0a', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) })), h("ir-custom-date-picker", { key: '07673a69ea5b6be92036435c4eee80bf74a7403a', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), h("ir-validator", { key: '8e6cc95463df1cf6eb821cb09c8417e33029a4d4', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: 'b149d7e830e5d1755ee99fbfde5b238804b4610f', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: `${locales.entries.Lcz_Price} (including tax)` }, h("span", { key: '53150c7107a52a4fa15d60e23d322634f93a1906', slot: "start" }, this.booking.currency.symbol))), h("ir-validator", { key: 'aa5b34a3051d4a9989b792a9c7f90414397e40cc', value: this.s_service?.cost ?? null, schema: ExtraServiceSchema.shape.cost }, h("ir-input", { key: '9f4b92ceac813ade9f9aebec3eda410e231624dc', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: `${locales.entries.Lcz_Cost} (optional)` }, h("span", { key: '56d5ff422e606ccbec9ca0b236369bbea0dcc23c', slot: "start" }, this.booking.currency.symbol))), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: '87a1b841f89fc809f2dbb9917b74f7cea617172b', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get watchers() { return {
        "service": ["handleServiceChange"]
    }; }
    static get style() { return IrExtraServiceConfigFormStyle0; }
}, [2, "ir-extra-service-config-form", {
        "booking": [16],
        "agent": [16],
        "service": [16],
        "svcCategories": [16],
        "language": [1],
        "s_service": [32],
        "error": [32],
        "fromDateClicked": [32],
        "toDateClicked": [32],
        "autoValidate": [32],
        "assignee": [32]
    }, undefined, {
        "service": ["handleServiceChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service-config-form", "ir-custom-date-picker", "ir-input", "ir-service-assignee-select", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServiceConfigForm);
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-service-assignee-select":
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