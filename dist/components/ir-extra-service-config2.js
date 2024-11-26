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
    cost: z.coerce.number().nullable(),
    currency_id: z.number().min(1),
    description: z.string().min(1),
    end_date: z.string().nullable(),
    price: z.coerce.number(),
    start_date: z.string().nullable(),
    system_id: z.number().optional(),
});

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{display:flex;align-items:center}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}";
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
        return (h(Host, { key: '013af59563d228bfa670198338d29a5b8aaf4a16', class: 'p-0' }, h("ir-title", { key: '4eb9d7915f53658f48ca3e89fbeb744a91d00fea', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: 'Extra Services', displayContext: "sidebar" }), h("section", { key: 'd5650a90e595f244b4871c1c5b18132817903676', class: 'px-1' }, h("fieldset", { key: '63b52ab35bb001bebd3f4f9a28a38704a4e95b1d', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '64e4e2dad320fd36d0109466d63242ec4b4307e2', class: "input-group-prepend" }, h("span", { key: 'b9fbb92c35830ab3889d801554e0dbe801b87169', class: "input-group-text" }, "Description")), h("textarea", { key: '3d52a1b0f356aa36a989cbbb128c2eb506c39ead', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '4af2b4c9dafea0a29cd59ee8f083df89a7a78060', class: 'row-group mb-1' }, h("div", { key: '1852c008b6bc90ec8bb1a993aff02d809ab64170', class: "input-group mb-1 mb-sm-0" }, h("div", { key: '5c5cfe10bc6a578b8c1573cb7f9e1ebd7f000640', class: "input-group-prepend" }, h("span", { key: 'b841f6ff416c0b737b36d05a4a1d9b66ebc50a8e', class: "input-group-text", id: "basic-addon1" }, "Dates on")), h("div", { key: 'bb865f15438980670aa491fca0d2850ba30e7b73', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("ir-date-picker", { key: '143550406e2780a5a85d68dcefaca6c9a5458fab', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }))), h("div", { key: '104ddc34d5027b9a0fa118b578e882cf294718a1', class: "input-group mb-1 mb-sm-0 " }, h("div", { key: '05557356ec08e41be6523a5c5aa77794a1b8c572', class: "input-group-prepend " }, h("span", { key: '0d0a4598533103f604df21d5223558a4ebc90292', class: "input-group-text until-prepend", id: "basic-addon1" }, "and until")), h("div", { key: '631d613cfee081f9a68f54f9f0b4354d7e84b9d3', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("ir-date-picker", { key: '53486f960f9ac5e1be5076bbc1b7baadaa7d0a62', date: ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.end_date) ? new Date((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date) : new Date(this.booking.to_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } })))), h("div", { key: 'bf5e8d9504abf1e9449c8dc6de50d04cc6f56a18', class: 'row-group' }, h("div", { key: '03b9203853aeb9763df246deca43e00940452c15', class: "input-group price-input-group  mb-1 mb-sm-0" }, h("div", { key: '8f9bc32c2aeba3f0e0100cfc0f1d5826f121a0d6', class: "input-group-prepend" }, h("span", { key: 'bb65607d600eb1016da3ee79d23b2b14b001721f', class: "input-group-text" }, "Price")), h("span", { key: 'fd7ffb92fb3243098a0ad53fc384542701c3a283', class: "currency-ph", "data-state": this.error && this.s_service.price === null ? 'error' : '' }, this.booking.currency.symbol), h("input", { key: 'fa9801c4eb904119c8e5cae443ca0951195c1f8d', class: `form-control price-input ${this.error && this.s_service.price === null ? 'is-invalid' : ''}`, onInput: e => this.updateService({ price: parseFloat(e.target.value) }), onBlur: e => {
                const input = e.target;
                const formattedValue = parseFloat(input.value).toFixed(2);
                input.value = formattedValue;
                this.updateService({ price: parseFloat(formattedValue) });
            }, type: "number", step: "0.01", "aria-label": "Price", "aria-describedby": "amenity price", value: (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.price })), h("div", { key: '5e819bf7299642768f672c0fc08e462e4d4731ce', class: "input-group cost-input-group  mb-1 mb-sm-0" }, h("div", { key: '3ca56c9e657f47aace2c546fdaa6fbd8770fa186', class: "input-group-prepend " }, h("span", { key: '4a8e81932b7acb401dc99d1987c197eca2d062df', class: "input-group-text cost-input-placeholder" }, "Cost")), h("span", { key: '1e79d83052b76da985d3053c99904dbd86431bef', class: "currency-ph" }, this.booking.currency.symbol), h("input", { key: '2c431691e61c101a1fd468fa093eeb3275bc9664', type: "number", onInput: e => this.updateService({ cost: parseFloat(e.target.value) }), onBlur: e => {
                const input = e.target;
                const formattedValue = parseFloat(input.value).toFixed(2);
                input.value = formattedValue;
                this.updateService({ cost: parseFloat(formattedValue) });
            }, step: '0.01', class: "form-control cost-input", "aria-label": "Cost", "aria-describedby": "amenity cost", value: (_h = this.s_service) === null || _h === void 0 ? void 0 : _h.cost }))), h("div", { key: 'd0a2fbd3d2b1d6272f867a8356f78eca7c669cf7', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '30e959894b436c4bdad3f209eebbb9161b139e34', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '9456f29604a70b38c862ce376a69b3e2ba18ec15', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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