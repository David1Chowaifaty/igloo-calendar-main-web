import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { E as ExtraServiceSchema } from './booking.dto.js';
import { B as BookingService } from './booking.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { l as libExports } from './utils.js';
import { _ as _formatDate } from './functions.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}";

const IrExtraServiceConfig = /*@__PURE__*/ proxyCustomElement(class IrExtraServiceConfig extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new BookingService();
    }
    // private d1: HTMLDivElement;
    // private d1_0: HTMLDivElement;
    // private d2_0: HTMLDivElement;
    // private d2: HTMLInputElement;
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
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            if (error instanceof libExports.ZodError) {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (h(Host, { key: 'ac3569ee4d14040d703c5973ffc507ca6fc3eaa8', class: 'p-0' }, h("ir-title", { key: 'd3253d6db52b445cbb400d2a8666a8d67fa753af', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'd92be581bb6a4b4ffad49101c5818c39d0fe0aa9', class: 'px-1' }, h("fieldset", { key: '1a145ed9b72dabb2a900f752b80c1bb0f1d2b06a', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: 'accd6ab64ed755d50c97fb19e601b6a6c486813b', class: "input-group-prepend" }, h("span", { key: '763375155faab3d148aad3c4d0f50e68609a9cfa', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '134693d1e5f97792121b14aedc8a4ad09de88c4f', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'c857bdeaf460c244d722b522a806b6610ee5f9b0', class: 'row-group mb-1' }, h("div", { key: '8d7bcfa43ad383ea0048e7dee2eca92dff11f362', class: "input-group" }, h("div", { key: 'af7b9312d161b0d65d02b4a404a8e395e8069b91', class: "input-group-prepend" }, h("span", { key: '6e709d47d9ed1bd64e876679274b240a799e242d', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '40153e8321b363945e5290cc5e1f0f4923cda0d6',
            // ref={el => (this.d1_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'baa2a549e6c00cb14e70ebaf3a526b287dab18dc', class: "service-date-container" }, h("ir-date-picker", { key: 'a0baa62c6e0fe4e6b1afa407dc63559a59e094e8',
            // onDatePickerFocus={() => {
            //   this.d1?.classList.add('date-focused');
            //   this.d1_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d1?.classList.remove('date-focused');
            //   this.d1_0?.classList.remove('date-focused');
            // }}
            // customPicker
            emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, h("input", { key: '33c9cf4c90cedd7ec3028ef7fc94a56a15d7e08a',
            // ref={el => (this.d1 = el)}
            type: "text", slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? _formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%', borderRadius: '0' }, class: "text-center w-100 form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: '88f0f3ce0405653811a19d37d8b6b7c77e2e62e5', class: "btn-container" }, h("ir-button", { key: 'a3071210d71301bac6ab4d2dc5c945872b04934f', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: '9bf05c9fd25abbddf0505f4eb8aa317535a200e0', class: "input-group" }, h("div", { key: 'dc7f37b073797fbf57d6001e2ef78c6c9c4f2ad0', class: "input-group-prepend " }, h("span", { key: 'f129e6268a9e7d6616e9b2d5d5bf00f9f70394fb', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: 'ecd319b5b7a36879fca987c5be1496f08e41b10f',
            // ref={el => (this.d2_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '4f7d6e9c3287ffe13df18730d556344a72e82ac5', class: "service-date-container" }, h("ir-date-picker", { key: 'ca105377a655d4bfc0c7b4a7d74462a124a22a2b',
            // onDatePickerFocus={() => {
            //   this.d2?.classList.add('date-focused');
            //   this.d2_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d2?.classList.remove('date-focused');
            //   this.d2_0?.classList.remove('date-focused');
            // }}
            emitEmptyDate: true, date: (_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date, minDate: (_h = (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.start_date) !== null && _h !== void 0 ? _h : this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'ed4fcbfe705a6b0f1d5064c35edee1999324ddb3',
            // ref={el => (this.d2 = el)}
            slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? _formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: 'c4d58f5f47d776e4b8ccd6fbc038a81ada22b353', class: "btn-container" }, h("ir-button", { key: '62b53398900d9bba395d6445750b5c2c64d0c17e', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: 'd79345fef848fc8a5626b94c06946cb511bd99c4', class: 'row-group' }, h("ir-price-input", { key: '89dce12747134d93018e89c8c02c2f6bee68de4a', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '399428c8976a0f06b647459bc5bcf2b2cc46f0a5', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: 'cb50a333a62d2092766f4bed304b9c398bce22b0', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '710d538d9c95b2ed26ad0531209cea56413d03a0', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '3be02b467ab1f33520e41a0b4186764f5bfd55a2', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
    }
    static get style() { return irExtraServiceConfigCss; }
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

//# sourceMappingURL=ir-extra-service-config2.js.map