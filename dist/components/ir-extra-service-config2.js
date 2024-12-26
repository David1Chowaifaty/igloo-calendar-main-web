import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './utils.js';
import { B as BookingService } from './booking.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const ExtraServiceSchema = z.object({
    booking_system_id: z.number().optional(),
    cost: z.coerce.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.coerce.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}";
const IrExtraServiceConfigStyle0 = irExtraServiceConfigCss;

const IrExtraServiceConfig = /*@__PURE__*/ proxyCustomElement(class IrExtraServiceConfig extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.bookingService = new BookingService();
        this.booking = undefined;
        this.service = undefined;
        this.s_service = undefined;
        this.error = undefined;
        this.fromDateClicked = undefined;
        this.toDateClicked = undefined;
    }
    componentWillLoad() {
        if (this.service) {
            this.s_service = Object.assign({}, this.service);
        }
    }
    async saveAmenity() {
        try {
            ExtraServiceSchema.parse(this.s_service);
            await this.bookingService.doBookingExtraService({
                service: this.s_service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingData.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            if (error instanceof ZodError) {
                this.error = true;
            }
            console.error(error);
        }
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
        this.s_service = Object.assign(Object.assign({}, prevService), params);
    }
    validatePrice() {
        var _a, _b, _c, _d;
        if (((_a = this.s_service) === null || _a === void 0 ? void 0 : _a.price) === undefined || ((_c = (_b = this.s_service) === null || _b === void 0 ? void 0 : _b.price) === null || _c === void 0 ? void 0 : _c.toString()) === '') {
            return false;
        }
        const priceSchema = ExtraServiceSchema.pick({ price: true });
        const result = priceSchema.safeParse({ price: (_d = this.s_service) === null || _d === void 0 ? void 0 : _d.price });
        return result.success;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (h(Host, { key: '32518e7e44e463b5f10ecbf6640941b801391f32', class: 'p-0' }, h("ir-title", { key: 'bda39b92c50a23a19e81345460a6be5c7a05e781', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: '79967aaa10f86bedc154c82f27a26e4529833370', class: 'px-1' }, h("fieldset", { key: 'ca2ec14d4451d77f078f407a8003d060d53a8367', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '17d5dae12157d74b824e010dd97aa291574f8883', class: "input-group-prepend" }, h("span", { key: 'ab148456a69d247900f41d5b3679efe22306fed1', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '6bd0ce8d55ccf9e0cb9ba3be0636250baebd2d81', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'f916d44ecbdb6ed558a2d90df6daffd1c0cbf63a', class: 'row-group mb-1' }, h("div", { key: 'a2057ce59ed0654928a35c3879d4669816947ffe', class: "input-group" }, h("div", { key: '516c0c09c6348e89b0782f59a928438a3192a55f', class: "input-group-prepend" }, h("span", { key: '89f4a579c11e00c7e854e74a23c47d732cf139e4', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '08045e3323ed7f7de1db71b3a9fc4a21cd012c56', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'e047f9cd54090645cf44d13391905a90438b7734', class: "service-date-container" }, h("ir-date-picker", { key: '8a0605191e04bfdb4bd418530603a5f0d8066f54', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: '828a5bea8eb1b89b7e8e3ed06386acfc649db646', class: "btn-container" }, h("ir-button", { key: '8e5d3c37940fb43e225a608bac1f5320f1dd8346', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: () => this.updateService({ start_date: null }) })))))), h("div", { key: 'fcc9fd266692207606ef51523952071b8449d5df', class: "input-group" }, h("div", { key: 'e8ac246784b033e3e73b7a36bd4b458574c04966', class: "input-group-prepend " }, h("span", { key: '51110101b15a2430fa65d65f9f1810e96118712b', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: '822284ff13fa3f04f299b35808a4e4aaed17d0bf', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '952d78643b2354b09defc720522a97eabac6bcc9', class: "service-date-container" }, h("ir-date-picker", { key: 'f030426f7aa2eb3b48d2e3afcf23f2bca93c8ccd', date: ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date) ? new Date((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) : new Date(this.booking.to_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) && (h("div", { key: 'ab884dd6cdee70bd966e449832a5b4e11bec32a0', class: "btn-container" }, h("ir-button", { key: '10e74c9341e1adee877fea2d1351beefa2295ab0', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: () => this.updateService({ end_date: null }) }))))))), h("div", { key: '86e0874ab20f35b99c93a23df25d9e021e0f0ccd', class: 'row-group' }, h("ir-price-input", { key: 'c4eb67d715fe406034a2607966073d7e538a2486', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_k = (_j = this.s_service) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '69bcf65338af69b50465fb20808f137fa6f2e146', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.cost) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: 'c0816e6cd801ff76233e5ac699b05b2b26f42f87', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '0f3cccfb31f2f402f7c2c43b270368b52dc44d85', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: 'dd49089753d3f0e66e6909b00a090b908624d4ef', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
    }
    static get style() { return IrExtraServiceConfigStyle0; }
}, [2, "ir-extra-service-config", {
        "booking": [16],
        "service": [16],
        "s_service": [32],
        "error": [32],
        "fromDateClicked": [32],
        "toDateClicked": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-service-config", "ir-button", "ir-date-picker", "ir-icon", "ir-icons", "ir-price-input", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServiceConfig);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-picker":
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
        case "ir-price-input":
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

export { IrExtraServiceConfig as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-service-config2.js.map