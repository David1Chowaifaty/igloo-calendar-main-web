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
        return (h(Host, { key: 'b7c53a58fb9b4e5dd5697869ffdbadbd3f01b8a6', class: 'p-0' }, h("ir-title", { key: '09867431a99ca27cc1768f76cb87936bf0cef673', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: '366ca1044ce95aad86ec959663816d471b633264', class: 'px-1' }, h("fieldset", { key: '224d14f04201c66182fe8386cc7cd0cff6f92b1c', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '358bbf259e44405e5f8db8e4372f8433db938fe7', class: "input-group-prepend" }, h("span", { key: '70ed373ab5bb2daac2666ffaeb5075b71a093d3f', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '4c9b1a3af52742291cbaf169a3f4d3c7fc57a160', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'ef57a70305fc1409899b4015c2575542ed0972d0', class: 'row-group mb-1' }, h("div", { key: '0c021227b294d7cad1c87955f506b9603eb5de84', class: "input-group" }, h("div", { key: '2105d3d52a05e5af942a0e9660940714e6e3bd50', class: "input-group-prepend" }, h("span", { key: 'e76323c07a5a85fabfc7a9df4d6e4047654fda77', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: 'c35c6c053477d42af3a24aabb47599b26458cd74', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: '26db6c3483762df89ce7f25ef89dc302d0774657', class: "service-date-container" }, h("ir-date-picker", { key: '142b957a719fc88a6733e798277ade72c4b9bdab', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: `hidden-date-picker ${!((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) ? 'hidden-date s' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.start_date) && (h("div", { key: 'b9e32827aeaaf1086f5a9bdcf413bfc40b830643', class: "btn-container" }, h("ir-button", { key: '016d179a8c3a3ec38ab1a78a987decccd2c246bf', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: '15f764bfb4497989ff8efd8d825085b5dc6c8926', class: "input-group" }, h("div", { key: '483b00646a42bd66713962facfab17f5d60c6278', class: "input-group-prepend " }, h("span", { key: 'c5581b5dfea71045c2c329795c70b7e92dbea504', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: 'd3a5779831d5278b1ea488ca47462edcd779c143', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: 'f2c8e26f7129bcb09230cf3b0e55fbb095e750e1', class: "service-date-container" }, h("ir-date-picker", { key: '5a115b1e68240f4161441917abdac5c329af2fb0', date: ((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) ? new Date((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) : new Date(this.booking.to_date), class: `hidden-date-picker ${!((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? 'hidden-dates' : ''}`, autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: '0292c9af40db9b481735dfaa8f54a20ca7bd2f9f', class: "btn-container" }, h("ir-button", { key: '92ace825fa49c4a13d73647a871d450200647abb', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: 'e7286513ea8943991c2c93275f43d8189dcdb304', class: 'row-group' }, h("ir-price-input", { key: 'c3701c1d2342ddb61bc94cbebc7e076b3c595399', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '821378219adaa40d64649b960f45a20dd3d7014e', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: 'befe3c0ebb91ad470f6f48bc64ac457a1a8d5af0', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'c8ef1f2d3713e46ed0c222f43c09846cda422a1e', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: 'd6f099c40430cef12ac0404d3e8598a88901e1f5', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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
