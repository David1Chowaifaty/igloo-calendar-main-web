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
            console.log('here');
            return false;
        }
        console.log('here', this.s_service.price);
        const priceSchema = ExtraServiceSchema.pick({ price: true });
        const result = priceSchema.safeParse({ price: (_d = this.s_service) === null || _d === void 0 ? void 0 : _d.price });
        return result.success;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (h(Host, { key: '7c6d804f15bc1aebc218ae9467fb7de9115c8fc9', class: 'p-0' }, h("ir-title", { key: '3f4f425eca7c14e099036218111836dcfcf92544', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: 'Extra Services', displayContext: "sidebar" }), h("section", { key: '2184cb59b22b41837946d38d9ad956663a7e239c', class: 'px-1' }, h("fieldset", { key: 'e217e556d242e366d843e5732afbd36bb2291567', class: "input-group mb-1 mt-3 service-description" }, h("div", { key: '3022e6f0396f8578df56c6b89b7031691a6da83b', class: "input-group-prepend" }, h("span", { key: 'deacb9065604bed5e44371a02525e2ef778454a9', class: "input-group-text" }, "Description")), h("textarea", { key: 'b38e6fbf5b15e201f7b80068c3942b8ff4847a8b', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: '29270fcb923a847f1dd0d2554428aa31465217f1', class: 'row-group mb-1' }, h("div", { key: '523b2fe8096892f5ba05660db6e65c8c2d2ede00', class: "input-group" }, h("div", { key: '78dd3e2a130b49bc282e4422f161d35d04affb4f', class: "input-group-prepend" }, h("span", { key: '5bb63f8bfc938fa021f9e2b78875c8f92effa551', class: "input-group-text", id: "basic-addon1" }, "Dates on")), h("div", { key: '70f3cac090079db378eb2ea32100bbfadeaa01e6', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: '218a523d0c42a51a57ad887ebd9d48620f14babf', class: "service-date-container" }, h("ir-date-picker", { key: '5e84bf7b3cd0de93dd13674476bdef14778fa60a', date: ((_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date) ? new Date((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) : new Date(this.booking.from_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start.format('YYYY-MM-DD') }) }), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (h("div", { key: '677c19501ac40c2769c7375fe4d3a06ba37efc2e', class: "btn-container" }, h("ir-button", { key: 'ae6713327242b413cc5545e0840e22febbf4bd75', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHanlder: () => this.updateService({ start_date: null }) })))))), h("div", { key: '00f1aba57e0b0f2627aff6c4ea9d932de0d3f75c', class: "input-group" }, h("div", { key: '64e1f457087cf3bf2a5793ad1be0533b3f743381', class: "input-group-prepend " }, h("span", { key: 'a21c75dd870f6251e7477645d67c5e1d5dd5923f', class: "input-group-text until-prepend", id: "basic-addon1" }, "till and including")), h("div", { key: '62372d877bdb4d993e7b592ff28fa7d4e16e5e09', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '6d683dc82c23b8243d003d3aab3083df060cd7e3', class: "service-date-container" }, h("ir-date-picker", { key: 'f66b264f99f2c2ef3582c2e15698ee6ae5428bdb', date: ((_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date) ? new Date((_g = this.s_service) === null || _g === void 0 ? void 0 : _g.end_date) : new Date(this.booking.to_date), class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ end_date: e.detail.start.format('YYYY-MM-DD') });
            } }), ((_h = this.s_service) === null || _h === void 0 ? void 0 : _h.end_date) && (h("div", { key: 'a6ed42c413a7137cc9453845849b16a21339f499', class: "btn-container" }, h("ir-button", { key: 'd60c63b96c2d851ce53055902c6952be209da600', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHanlder: () => this.updateService({ end_date: null }) }))))))), h("div", { key: 'c9b7cdbcb2b2ddec267fa4b26fc86495d3253308', class: 'row-group' }, h("ir-price-input", { key: '8eb958d889cf01a5ea16c6b57efe6b441405374e', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_k = (_j = this.s_service) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": "Price", wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '51153b1f6274484fcea1144aa7d696d3935bb5e6', autoValidate: false, label: "Cost", labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.cost) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), h("div", { key: '036315ad17cf7128d04c34779dbe4b38f1f8a74f', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '947e42cd0eb0c8b97901583d65f7b2b84ca5bf69', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: '55039080af046d744c1ab0d069ca5a1d4d53ad4e', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
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
