import { h } from "@stencil/core";
import { BookingService } from "../../services/booking.service";
export class GuestInfo {
    constructor() {
        this.bookingService = new BookingService();
        this.setupDataCountries = null;
        this.setupDataCountriesCode = null;
        this.defaultTexts = undefined;
        this.language = undefined;
        this.email = undefined;
        this.booking_nbr = undefined;
        this.countries = undefined;
        this.submit = false;
        this.guest = null;
        this.isLoading = false;
    }
    async componentWillLoad() {
        await this.init();
    }
    async init() {
        try {
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(this.language)]);
            this.countries = countries;
            this.guest = guest;
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInputChange(key, value) {
        this.guest = Object.assign(Object.assign({}, this.guest), { [key]: value });
    }
    async editGuest() {
        try {
            this.isLoading = true;
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr);
            this.closeSideBar.emit(null);
            this.resetBookingData.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            console.log('done');
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.guest) {
            return null;
        }
        return [
            h("div", { class: "p-0" }, h("div", { class: "position-sticky mb-1 shadow-none p-0" }, h("div", { class: "d-flex align-items-center justify-content-between ir-card-header py-1 p-0" }, h("h3", { class: "card-title text-left font-medium-2 px-1 my-0" }, this.defaultTexts.entries.Lcz_GuestDetails), h("ir-icon", { class: "close close-icon px-1", onIconClickHandler: () => {
                    this.closeSideBar.emit(null);
                } }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("div", { class: "card-content collapse show" }, h("div", { class: "card-body pt-0 px-1" }, h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_FirstName, name: "firstName", submited: this.submit, value: (_a = this.guest) === null || _a === void 0 ? void 0 : _a.first_name, required: true, onTextChange: e => this.handleInputChange('first_name', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_LastName, name: "lastName", submited: this.submit, value: (_b = this.guest) === null || _b === void 0 ? void 0 : _b.last_name, required: true, onTextChange: e => this.handleInputChange('last_name', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_Email, name: "email", submited: this.submit, value: (_c = this.guest) === null || _c === void 0 ? void 0 : _c.email, required: true, onTextChange: e => this.handleInputChange('email', e.detail) }), h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_AlternativeEmail, name: "altEmail", value: (_d = this.guest) === null || _d === void 0 ? void 0 : _d.alternative_email, onTextChange: e => this.handleInputChange('alternative_email', e.detail) }), h("ir-select", { selectContainerStyle: "mb-1", required: true, name: "country", submited: this.submit, label: this.defaultTexts.entries.Lcz_Country, selectedValue: (_f = (_e = this.guest.country_id) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '', data: this.countries.map(item => {
                    return {
                        value: item.id.toString(),
                        text: item.name,
                    };
                }), firstOption: '...', onSelectChange: e => this.handleInputChange('country_id', e.detail) }), h("div", { class: "form-group mr-0" }, h("div", { class: "input-group row m-0 p-0" }, h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.defaultTexts.entries.Lcz_MobilePhone, '*')), h("select", { class: ` form-control text-md  col-2 py-0 mobilePrefixSelect`, onInput: e => this.handleInputChange('country_phone_prefix', e.target.value), required: true }, h("option", { value: null }, "..."), this.countries.map(item => {
                var _a;
                return (h("option", { selected: ((_a = this.guest.country_phone_prefix) === null || _a === void 0 ? void 0 : _a.toString()) === item.phone_prefix.toString(), value: item.phone_prefix }, item.phone_prefix));
            })), h("input", { type: "text", required: true, value: this.guest.mobile, class: 'form-control flex-fill mobilePrefixInput', onInput: e => this.handleInputChange('mobile', e.target.value) }))), h("div", { class: 'p-0 m-0' }, h("label", { class: `check-container m-0 p-0` }, h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange('subscribe_to_news_letter', e.target.checked) }), h("span", { class: "checkmark m-0 p-0" }), h("span", { class: 'm-0 p-0  check-label' }, this.defaultTexts.entries.Lcz_Newsletter))), h("hr", null), h("ir-button", { isLoading: this.isLoading, btn_disabled: this.isLoading, btn_styles: "d-flex align-items-center justify-content-center", text: this.defaultTexts.entries.Lcz_Save, onClickHanlder: this.editGuest.bind(this), color: "btn-primary" })))),
        ];
    }
    static get is() { return "ir-guest-info"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-info.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-info.css"]
        };
    }
    static get properties() {
        return {
            "setupDataCountries": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "@/common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            },
            "setupDataCountriesCode": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "@/common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            },
            "defaultTexts": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ILocale",
                    "resolved": "ILocale",
                    "references": {
                        "ILocale": {
                            "location": "import",
                            "path": "@/stores/locales.store",
                            "id": "src/stores/locales.store.ts::ILocale"
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
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "language",
                "reflect": false
            },
            "email": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "email",
                "reflect": false
            },
            "booking_nbr": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking_nbr",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "countries": {},
            "submit": {},
            "guest": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "closeSideBar",
                "name": "closeSideBar",
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
//# sourceMappingURL=ir-guest-info.js.map
