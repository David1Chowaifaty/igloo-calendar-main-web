import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './utils.js';
import { B as BookingService } from './booking.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icon2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const ExtraServiceSchema = z.object({
    booking_system_id: z.number().optional(),
    cost: z.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid #cacfe7;border-bottom:1px solid #cacfe7;border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{display:flex;align-items:center}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}";
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
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h(Host, { key: '013af59563d228bfa670198338d29a5b8aaf4a16', class: 'p-0' }, h("ir-title", { key: '4eb9d7915f53658f48ca3e89fbeb744a91d00fea', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: 'Extra Services', displayContext: "sidebar" }), h("section", { key: 'd5650a90e595f244b4871c1c5b18132817903676', class: 'px-1' }, h("div", { key: 'c00cf9ab145690566381d7450459b890b04845f3', class: "input-group mb-1 mt-3" }, h("div", { key: '5db3884bd619981ed74aae4caf0cd6616ea95886', class: "input-group-prepend" }, h("span", { key: '120a5aaad63f36dd26097fa123b7f5f1d36164e2', class: "input-group-text" }, "Description")), h("textarea", { key: '85318ee7045e141c3ce1c0bb92e8510c0f500f49', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '4ab7f30f020b3f302d283e2e10b3971cb3c3c932', class: 'row-group mb-1' }, h("div", { key: 'bc6ed27670da3c2a5e0ba5e64a15a8af946f2fe4', class: "input-group mb-1 mb-sm-0" }, h("div", { key: 'a37ed6e53a330da0f9b9711b51b72bd4178f175c', class: "input-group-prepend" }, h("span", { key: 'c0367551a0d8544b350b78e6945b1b5a99d26e11', class: "input-group-text", id: "basic-addon1" }, "Dates on")), h("div", { key: 'a2a005399b936bb58965280708ac3bd579ff1cd6', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("ir-date-picker", { key: 'c2da2a13fb3525e7ea52269a26e8e7503b7bd439', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }))), h("div", { key: '05fc6bdc46044856d749761c42cf80c47bb5586f', class: "input-group mb-1 mb-sm-0 " }, h("div", { key: '57d0a6ec80a85bb492d3577efa310c1150718ed5', class: "input-group-prepend " }, h("span", { key: '0d63dc474644ee4704b3f8e0d87ddcceac51ae27', class: "input-group-text until-prepend", id: "basic-addon1" }, "and until")), h("div", { key: '5be828477c3867735080f5dbc0bd12f77da4e9a6', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("ir-date-picker", { key: 'cbb0c362d9763d34516143a243488236d580f743', date: ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.end_date) ? new Date((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date) : new Date(this.booking.to_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } })))), h("div", { key: '3093f9a675c52d1cf2a745acd3004a71a8a5b7a6', class: 'row-group' }, h("div", { key: 'f28a058a71bab0e7d218deab971ed3a10f442567', class: "input-group price-input-group  mb-1 mb-sm-0" }, h("div", { key: '8b062dc649bfcfd20951000c3c7853bdbd8cf542', class: "input-group-prepend" }, h("span", { key: '069e8206b9cf19001988b567ba12a42ff317a293', class: "input-group-text" }, "Price")), h("span", { key: '8e4504ba89af5fe944c14d7509d1259743070d8b', class: "currency-ph", "data-state": this.error && this.s_service.price === null ? 'error' : '' }, this.booking.currency.symbol), h("input", { key: 'ce7fed2e5a7ac883e5dbe2563f09bdfc35aaeacf', class: `form-control price-input ${this.error && this.s_service.price === null ? 'is-invalid' : ''}`, onInput: e => this.updateService({ price: Number(e.target.value) }), type: "number", "aria-label": "Price", "aria-describedby": "amenity price", value: (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.price })), h("div", { key: '4b6187e60d8fe21b0f8a8f48ba131ba209885e5d', class: "input-group cost-input-group  mb-1 mb-sm-0" }, h("div", { key: '72bb76594167745bd1123a4b3c6cf6537c5584d6', class: "input-group-prepend " }, h("span", { key: '776fc918bb68ca18dfb069a86854061d687b0f74', class: "input-group-text cost-input-placeholder" }, "Cost")), h("span", { key: '710613becd5b7590e9f82f246e1e8d92d0221933', class: "currency-ph" }, this.booking.currency.symbol), h("input", { key: '0c7652e0a1ba652f78e65ea733ba44de13493ee0', type: "number", onInput: e => this.updateService({ cost: Number(e.target.value) }), class: "form-control cost-input", "aria-label": "Cost", "aria-describedby": "amenity cost", value: (_h = this.s_service) === null || _h === void 0 ? void 0 : _h.cost }))), h("div", { key: '01d2a6a933a3b0de528a400a37ab90ff7145c37d', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '70f9e8a79acdbd8f2b513834c818001b1aa0d059', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '7cd2a41eb8ef76a6f9b996368f02126ab9563d61', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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
    const components = ["ir-extra-service-config", "ir-button", "ir-date-picker", "ir-icon", "ir-icons", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServiceConfig);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
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