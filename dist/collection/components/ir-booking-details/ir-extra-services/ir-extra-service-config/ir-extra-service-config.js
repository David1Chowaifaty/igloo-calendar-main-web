import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { h } from "@stencil/core";
import { ZodError } from "zod";
import { _formatDate } from "../../functions";
export class IrExtraServiceConfig {
    constructor() {
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
        return (h("form", { key: '6d4a5d063bee402e6f2373f0c7977492bcaeb765', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.saveAmenity();
            } }, h("ir-title", { key: 'e10bc873ca0dab7432bc9b9eb5653585019d8457', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'be1d99b66f4d38dcb6da78c9c9dc80ae0a186747', class: 'px-1 sheet-body' }, h("fieldset", { key: 'cc533a6ee9b5719166c520374a24eb6c3dfdf890', class: "input-group mb-1 service-description" }, h("div", { key: '2502fdcd607c51b294916fc7d5f4da738b0febe5', class: "input-group-prepend" }, h("span", { key: 'c9d551ef5b67160166a49b76cb0d649829d45b72', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '5bcb59ea7d6696f0ba343584ac65fe74dd5c830e', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '488137e1eb767f9c35f138b1306229b4f8a1e4e4', class: 'row-group mb-1' }, h("div", { key: '8739d67f4735a83d73f4f181e7ecca70869d807c', class: "input-group" }, h("div", { key: 'a554963396615715ce2c9fd28e068a07d377b77b', class: "input-group-prepend" }, h("span", { key: 'fd33fb61a084c07f8151a1adb1dd4c4dda7cc512', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '6868c8cadd1a22f7f15c0fff1f3936d1b608f272',
            // ref={el => (this.d1_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'b8dc0388719ca9709ee0f30cabffb660ff47886e', class: "service-date-container" }, h("ir-date-picker", { key: '94964f045d5d447d39403c0a2f86368e6ed8610d',
            // onDatePickerFocus={() => {
            //   this.d1?.classList.add('date-focused');
            //   this.d1_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d1?.classList.remove('date-focused');
            //   this.d1_0?.classList.remove('date-focused');
            // }}
            // customPicker
            emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, h("input", { key: '9d01a712e6e619894701437ad7674f2b08a9c24d',
            // ref={el => (this.d1 = el)}
            type: "text", slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? _formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%', borderRadius: '0' }, class: "text-center w-100 form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: 'd8f5a40cad3557ea1687d496abba5cb37887dfb6', class: "btn-container" }, h("ir-button", { key: '34d05a6b5d15408368eda44c680be58c2e71931a', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: 'd0a0a021f35c2b15ba074ef057cf98fae22642d8', class: "input-group" }, h("div", { key: 'c3c3a9045ad0d803727f49db563e68fa3d74b86c', class: "input-group-prepend " }, h("span", { key: '60aaa92a9c8db0337409851b86ae6deb465f7c0a', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: '330e128cdf78ab0c21e06447f49a82098a123070',
            // ref={el => (this.d2_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '8a7722e93ffd601229421c278dc663aab87f244d', class: "service-date-container" }, h("ir-date-picker", { key: 'b12c3e505d9b884dbb7c4cf2ebf0c378956ab0f1',
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
            } }, h("input", { key: '5b66f8e512ccc36ab6ab15b6afbdad4a65d894f9',
            // ref={el => (this.d2 = el)}
            slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? _formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (h("div", { key: 'd7c42f03a63213f5def18a732e748758a1a8eab7', class: "btn-container" }, h("ir-button", { key: 'eca1f742fda421f220fdaa85f36b161ed02ce91d', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: 'f08d39e33fc60adeb34636b8065f7d9dd2305267', class: 'row-group' }, h("ir-price-input", { key: 'a80d53dba9f954ad02ac9a82d8e746c9aed91af2', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: 'bf6f7b0b96dc4ff89bdffdc0ea2c398e09a6f404', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "rounded-0 border-left-0", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" }))), h("div", { key: '4eb28f71511eeb6d27218677b857b9c77df5d0be', class: 'sheet-footer' }, h("ir-button", { key: '07b59f743dcfd38aa136ea7d0de5488b080be81b', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '391bcd70afa5ffe4ad4306c8fec8f90533a23920', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', btn_type: "submit", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary" }))));
    }
    static get is() { return "ir-extra-service-config"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-config.css", "../../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-config.css", "../../../../common/sheet.css"]
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
                    "resolved": "{ description?: string; cost?: number; booking_system_id?: number; currency_id?: number; end_date?: string; price?: number; start_date?: string; system_id?: number; }",
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
