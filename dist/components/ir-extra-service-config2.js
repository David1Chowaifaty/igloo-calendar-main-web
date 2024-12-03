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
        return (h(Host, { key: '4aee1f5059a287da0ae8da6c14296626ba0f964b', class: 'p-0' }, h("ir-title", { key: '996998602d7a6a05a14460c6b5b1e9bf36de9dff', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'c964e32a23656d78a8f652d2f8aab887bb1bdc90', class: 'px-1' }, h("fieldset", { key: '06ce4736456773bee3514092d69f6b6e62b1ab5e', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '7818fc79b9e807a52ba0c55a47845d61a11618a3', class: "input-group-prepend" }, h("span", { key: '6263194987959529df4691f78446a5570472861d', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: 'd8b911726b6c32fd7566c4141bae469f6396253c', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'cb9219da8e12a3b79645ff6af091622167b5189b', class: 'row-group mb-1' }, h("div", { key: '0046db189c31edbe0c8bd9cb3b95ffe63c26cc3c', class: "input-group" }, h("div", { key: 'a5d2d24702ff1375209b0a21a15229e06f23e36c', class: "input-group-prepend" }, h("span", { key: '30e15cedf105d32c349c005313d9be61baecb744', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: 'ae14cbd2465bedda61cd1b2f9f67933ce50decf1', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'adb5fc99fcedb5acb1c0284628aa1fb3a5736b95', class: "service-date-container" }, h("ir-date-picker", { key: 'a6398f240af347590603abf788ca739fe72d99c9', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: 'f20ec6e06e165902e803d9f7d10a447dbdc27a4d', class: "btn-container" }, h("ir-button", { key: 'f7ecf1113386dde7b2ba1e751fda525e12c41f5a', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHanlder: () => this.updateService({ start_date: null }) })))))), h("div", { key: 'dde085e979b2c309adb56bbc211db8fa50997cc6', class: "input-group" }, h("div", { key: '65323ef24ac1e0ddc7ebeefaebab0c0da00b8b7a', class: "input-group-prepend " }, h("span", { key: '3cec4689721c2a8151844de605705b0e28dfc06e', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: 'd77c317ea67c7a9a1952b81a816c22150ef7082c', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: 'ec034d559ce6d34c6cf8860791ac9c297e548912', class: "service-date-container" }, h("ir-date-picker", { key: '5d4d4784ab69b9666d24110a2cd05c4fdd1db22f', date: ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date) ? new Date((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) : new Date(this.booking.to_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) && (h("div", { key: '92d44193ee87ddbb28ad3512aaf07d2dd625584a', class: "btn-container" }, h("ir-button", { key: '1ee903a2610d26c6da485a67b0ecb4a914ce6afe', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHanlder: () => this.updateService({ end_date: null }) }))))))), h("div", { key: '526f9629708f55399e98e4ab248a0061e7c6ac39', class: 'row-group' }, h("ir-price-input", { key: '36b4a7ccea32265a8a7e95f3b6657231454865e5', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_k = (_j = this.s_service) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '14ee1e09bbfa0f811a004b6daad5a298189b51d8', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.cost) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: 'b8cca970129fa71c277a5184a52eb04714265147', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '104d7f9133960c8a4c521d20f35c9978c73d8e13', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '22d5706c71915d56cf2545550821641cff8c1997', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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