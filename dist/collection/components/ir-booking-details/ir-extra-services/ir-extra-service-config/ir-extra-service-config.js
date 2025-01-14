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
        return (h(Host, { key: '844769c4f5f02fdf5b9af6ba9fa360926abbfeaa', class: 'p-0' }, h("ir-title", { key: 'a5f757aac1a098a4560aa62de78f1a16ec3423f0', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'fd4c12b5db4338eab0aab0e6b6749e5fa001fb60', class: 'px-1' }, h("fieldset", { key: '129d78c4435a8348a93eb5784f78c691b581cd3b', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: 'd12f56a2ad1d3cb81dcdc224554fcd78ec3d5c66', class: "input-group-prepend" }, h("span", { key: 'dc9b6b50d2b71e70d6271e91a24f96554f19b218', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: 'e83ba20be246ee63be81c511f1f8e92caac8e748', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '197d0619c3a3a8c5e0446de0bf49e1889093e42e', class: 'row-group mb-1' }, h("div", { key: '4f02d5e664cc4efe59abfc0d0d2ebd5701859a61', class: "input-group" }, h("div", { key: 'f88bdd70a48ddf2570d5de9b022c57838b15494a', class: "input-group-prepend" }, h("span", { key: '4f092bafeaeb2b7800d4b4eff0530b8a2392a12b', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: 'd95ba231e4ddfe11bbe3e129763b95adce83e67b', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'c4ebb296a0a4a666773050fcd17d9b579b1f96d6', class: "service-date-container" }, h("ir-date-picker", { key: '2541ac8ff2eac379fd879d7fa7c9f0d688f3f659', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: `hidden-date-picker ${!((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) ? 'hidden-date s' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.start_date) && (h("div", { key: 'c1564de6adcf80136c2a28b32b4cbdd1405c5982', class: "btn-container" }, h("ir-button", { key: 'e899e312c839a1f9845d5974158096099c24e011', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: 'c07319be0c50fbff189d5f182e9ddc8dd5d80456', class: "input-group" }, h("div", { key: 'e525bd9f04e370dc282c281a56a70b5a1c9b6185', class: "input-group-prepend " }, h("span", { key: 'd0e4d6f20e55385968bacb881c65c9cd8cfde3b7', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: '4ad4f0ed4472ce4e00550c706e034d1dc5406162', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: 'ee92b0ebadef278cd736114b28bfea4d26bc3681', class: "service-date-container" }, h("ir-date-picker", { key: '3cd5948020b86e6fe714bfca1edcdafa89ee568d', date: ((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) ? new Date((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) : new Date(this.booking.to_date), class: `hidden-date-picker ${!((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? 'hidden-dates' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: 'd2d0feea0ac74dddb13671ff6167914f0afd6261', class: "btn-container" }, h("ir-button", { key: '7a6a9653f0a96cdf7edd17c5c77cdaa4e6e6c286', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: '30ca724405bdc3bde5cb72d454ae314c040e8ec3', class: 'row-group' }, h("ir-price-input", { key: '769c12e34a19b98e30e9ba9faec347cbb9350a42', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '75822979e4ef4485fe157ef1bb6b32f8cfe3dcd8', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: 'a212b4859b27aa7ee19899debd5544fdf8e5725b', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'b8588de7bc42357ba76af0d40395915d56b27edd', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '70cf94d9cab30daace5c57e13014628f13663017', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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
