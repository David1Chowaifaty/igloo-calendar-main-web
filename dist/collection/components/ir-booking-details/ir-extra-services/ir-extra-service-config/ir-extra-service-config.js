import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import { ZodError } from "zod";
export class IrExtraServiceConfig {
    constructor() {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (h(Host, { key: '3f79671811e51823e9bc3c3fb32aaddde3ab798b', class: 'p-0' }, h("ir-title", { key: '453c35acc59be7857d4ad139949831f022dcafcd', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: '4b2b12dca006ab4e2db3c2dffe6e1a04f84e9db2', class: 'px-1' }, h("fieldset", { key: '4ff9d244c60abd0d10ef4ab7299a8e0e22af7dd8', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '897d7a14f7752a7bac3128abfa30c8a25d862aa5', class: "input-group-prepend" }, h("span", { key: 'f87cb983dc43afec09f052facde73ada2e7e8562', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '4c96445d3e0f407384649273b324ab88fe9219f8', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '7f8a11847439c23e19020b1c34ce2f9c6a15bb6e', class: 'row-group mb-1' }, h("div", { key: '79a69e4522d84057e533579bd1eeed650dc62b4c', class: "input-group" }, h("div", { key: 'e80c425ad3103e98e7e968c9f13fc8fd680cf794', class: "input-group-prepend" }, h("span", { key: 'cd25f0c5edb4c3eff4b69591d10eb25fdff76af8', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '5ec6a3a035a858fb303688d4b82bd49179cf04ac', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'ce8957fd24687e6dc24751fdf4d01928bca7f134', class: "service-date-container" }, h("ir-date-picker", { key: '5204e7fb1a9d6d486c807111ee1a6530e978fac9', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: `hidden-date-picker ${!((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) ? 'hidden-date s' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.start_date) && (h("div", { key: 'b400d9a293885d3a7664c9530481ae04dac0f368', class: "btn-container" }, h("ir-button", { key: 'ae9191397469b1b37c22cb667cc4d50d24ec1923', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: 'ddcfd52b7597a4c1961bfca060de05859a0ac006', class: "input-group" }, h("div", { key: '3acebfff0175eb35bd7a89533528b749889eb6c4', class: "input-group-prepend " }, h("span", { key: 'b13c9234d68d8e9c5d3d797eb01a4f8d4479788c', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: 'cff0397d673ea9d10ce97c27f24f676bb1d8b974', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '2718bb3e71ca09844667406323edcd4e5ab24119', class: "service-date-container" }, h("ir-date-picker", { key: 'd3ecea6886378c3f3d154f47d84c36ca71a1d4cc', date: ((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) ? new Date((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) : new Date(this.booking.to_date), class: `hidden-date-picker ${!((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? 'hidden-dates' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: '407ffaa31516fcd22a8c9b4ece1aeb18d26a02cc', class: "btn-container" }, h("ir-button", { key: '03231ee5d7c188a421904d6f1b577defe6a935fe', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: 'bf8b74254487d2e0dfc59c4b058dc024a8203d9a', class: 'row-group' }, h("ir-price-input", { key: '8b44b90e09e6de7b4321cf85610c7fd302e6eb75', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '93b6d28be1a3b99688780b0f9a4898d60142ff73', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: '321fe0de56ba448a5624e19fd7b5c816ee90e46d', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'a839f5f822887b3ad84f3064f8cedcba3d9166d0', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '94316a7f80c06c19f54740ad0450a733cd90e3c6', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
    }
    static get is() { return "ir-extra-service-config"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-config.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-config.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>",
                    "resolved": "{ from_date: string; to_date: string; currency: Currency; booking_nbr: string; }",
                    "references": {
                        "Pick": {
                            "location": "global",
                            "id": "global::Pick"
                        },
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ description?: string; booking_system_id?: number; cost?: number; currency_id?: number; end_date?: string; price?: number; start_date?: string; system_id?: number; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "s_service": {},
            "error": {},
            "fromDateClicked": {},
            "toDateClicked": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetBookingData",
                "name": "resetBookingData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-extra-service-config.js.map
