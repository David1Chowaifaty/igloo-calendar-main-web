import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import { ZodError } from "zod";
import { _formatDate } from "../../functions";
export class IrExtraServiceConfig {
    constructor() {
        this.bookingService = new BookingService();
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
            this.resetBookingEvt.emit(null);
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
        return (h(Host, { key: '502b91242959a1d096d76cc7f79050f1430f5cf5', class: 'p-0' }, h("ir-title", { key: '932131117dc95212aa8511c74b551ebda8667305', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'd32c6c02cf6889a2dd2fc212372095935e632210', class: 'px-1' }, h("fieldset", { key: '6d707ce2de3a3ca4fd225379857327c8ce0b18b0', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: 'aeae4c5b06248bb78a147cf79f8ce1f0a4795d9c', class: "input-group-prepend" }, h("span", { key: 'e9c02ed59d90f25462dc7cf87990f54c08411efa', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: 'bc164b4063aa575a1d0cfa6bae90e50162c36971', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'df5b4f7cc4c644af479e1fa92fc05e5731b455a2', class: 'row-group mb-1' }, h("div", { key: 'fd498f02a1814ef508f8835ed6716dbd88bf2e10', class: "input-group" }, h("div", { key: 'deae5e6d0ae4d2f0e267de1072750a92474b8f6f', class: "input-group-prepend" }, h("span", { key: 'cca8a1cde898a7124a3d3c21e64abcf2b2b09712', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '9dbda1cd14b3f1513bf3dba7884f3c259805a630', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'c56dfba14d2e3d9be9c1b0fe8c2cd8c12afb10e4', class: "service-date-container" }, h("ir-date-picker", { key: 'b650a5df393ae1087e2439af055d617e41e3e50b', emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, h("input", { key: '861321608ee1e7fdadafe138519ee8304ebc366a', slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? _formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: 'a6f0bdcaa84d2a0a264a2fd604bde4570f95f79e', class: "btn-container" }, h("ir-button", { key: '0f8acdab83aa4255e61f2809ea7b62b6dc80de13', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: '8b0ce81bb295b731f49fc96f1d1da001c522b0b7', class: "input-group" }, h("div", { key: 'c12fbfbc1647b06bfbf3898bca92046ae1b7c80b', class: "input-group-prepend " }, h("span", { key: 'ccad0182d54b6a7dcaba1186a2e361b0e184b9c3', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: 'b4e8c6af8fa0ee6d664eaba0ffb66048f53be924', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '93174bdbdbc03a4580e6c63ae6bf7b10d01c7db1', class: "service-date-container" }, h("ir-date-picker", { key: '9a681a85287e0af957e5d2a6ae87318485f0adb8', emitEmptyDate: true, date: (_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date, minDate: (_h = (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.start_date) !== null && _h !== void 0 ? _h : this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '472eb0373e2f2edde58033d68981ef073a3ebeef', slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? _formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: '7018b7e5334b73280b6c3be02d91b8c9af216b32', class: "btn-container" }, h("ir-button", { key: '421a77838199cb9bb0afb5e793095ba13bfc4824', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: '0b076d534170467ed0151a0620cb044ab08466fc', class: 'row-group' }, h("ir-price-input", { key: 'd6d8c984d9de422cca9f72a42bc6eeeec152ccbb', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '2b4dc1081ab2b0cc57d2bb270d29b3bd1dc65cbf', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: '0f7bda1759ec1c61e9c0105ae3a57f6f3ec534f2', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'c8cf4d1283b35210412a6dd28e8538dcc1be1473', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '74e26fd137a88ce4fb2e552ac1f385c61766e9da', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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
                },
                "getter": false,
                "setter": false
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
                },
                "getter": false,
                "setter": false
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
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
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
