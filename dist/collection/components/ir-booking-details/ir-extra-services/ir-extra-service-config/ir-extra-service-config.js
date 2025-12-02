import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { h } from "@stencil/core";
import { ZodError } from "zod";
import { _formatDate } from "../../functions";
export class IrExtraServiceConfig {
    booking;
    service;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    // private d1: HTMLDivElement;
    // private d1_0: HTMLDivElement;
    // private d2_0: HTMLDivElement;
    // private d2: HTMLInputElement;
    componentWillLoad() {
        if (this.service) {
            this.s_service = { ...this.service };
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
        this.s_service = { ...prevService, ...params };
    }
    validatePrice() {
        if (this.s_service?.price === undefined || this.s_service?.price?.toString() === '') {
            return false;
        }
        const priceSchema = ExtraServiceSchema.pick({ price: true });
        const result = priceSchema.safeParse({ price: this.s_service?.price });
        return result.success;
    }
    render() {
        return (h("form", { key: 'a9f2457343028b4534f128ff1c1849987bc76d67', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.saveAmenity();
            } }, h("ir-title", { key: '4f9c72da0800f7f5a301c09c0a5fa6d63f49e3a4', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), h("section", { key: 'd47447f62b909a15476cabcab9549549be3eb652', class: 'px-1 sheet-body' }, h("fieldset", { key: '01f3a9bbdef7e869e24da6214dcc0de17a9c8de1', class: "input-group mb-1 service-description" }, h("div", { key: 'c765c79af200a38b0733a7ca35872e6146e20859', class: "input-group-prepend" }, h("span", { key: '2891ed710b3e10b911419c14447550bacf7b0ddb', class: "input-group-text" }, locales.entries.Lcz_Description)), h("textarea", { key: '8b23ac5ac06a363be1b4f0b790b9799812df5e23', value: this.s_service?.description, class: `form-control service-description-input ${this.error && !this.s_service?.description ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), h("div", { key: 'c0c777cb8d7fc3b2e376037c8e2a5d050223b3a7', class: 'row-group mb-1' }, h("div", { key: '0ee671e7cca2b679ad7a2f2cdc084242e27c7374', class: "input-group" }, h("div", { key: '51ffad1365f75ff41373f993c05300017eb32d5c', class: "input-group-prepend" }, h("span", { key: '951a2d81689665c8533a5766fca3cd84af208bc3', class: "input-group-text", id: "basic-addon1" }, locales.entries.Lcz_DatesOn)), h("div", { key: '341ff98c8fe05b127797d8473ede15e3f7bd23b2',
            // ref={el => (this.d1_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, h("div", { key: 'a962664dbc4d9f25486e618ee83f8b25b6e4a46b', class: "service-date-container" }, h("ir-date-picker", { key: 'f58a9ef303d53fb490fd37455f10d0c93854608e',
            // onDatePickerFocus={() => {
            //   this.d1?.classList.add('date-focused');
            //   this.d1_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d1?.classList.remove('date-focused');
            //   this.d1_0?.classList.remove('date-focused');
            // }}
            // customPicker
            emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) }, h("input", { key: '96bd63835abf41f306ad2e34a4af129f02e6d646',
            // ref={el => (this.d1 = el)}
            type: "text", slot: "trigger", value: this.s_service?.start_date ? _formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%', borderRadius: '0' }, class: "text-center w-100 form-control input-sm" })), this.s_service?.start_date && (h("div", { key: '069f562aac2bb480a5c6411f79d45f980625c7cf', class: "btn-container" }, h("ir-button", { key: '2ac0dcd1b21f387d70931ab2d9bb898d8f88db61', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), h("div", { key: '2e0e43ad2e3ea0cb792ab45ef82c79cc72fbd4ed', class: "input-group" }, h("div", { key: '1369d25f46d08c1c06b4eb322dd9d7f6f0738e19', class: "input-group-prepend " }, h("span", { key: 'fd13bba687811de0f4022754c7ec78a4ae527dd1', class: "input-group-text until-prepend", id: "basic-addon1" }, locales.entries.Lcz_TillAndIncluding)), h("div", { key: '6e28f1a1bc6bd7fb02d447ca1ffb7c15a1e58add',
            // ref={el => (this.d2_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, h("div", { key: '44571c2d41f2e22026ba09324f8b88ed334a7a53', class: "service-date-container" }, h("ir-date-picker", { key: '9be8282c826a0517bf739be8297743812ed7c7cc',
            // onDatePickerFocus={() => {
            //   this.d2?.classList.add('date-focused');
            //   this.d2_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d2?.classList.remove('date-focused');
            //   this.d2_0?.classList.remove('date-focused');
            // }}
            emitEmptyDate: true, date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '5a3f0a59cd5bbaed443ffbc40c9f677338aaf50c',
            // ref={el => (this.d2 = el)}
            slot: "trigger", value: this.s_service?.end_date ? _formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), this.s_service?.end_date && (h("div", { key: '8986b4f88423b3bd0379b1c9175119a73e909e60', class: "btn-container" }, h("ir-button", { key: '7fa2f61b8a6d227b5385f3ec82e7fdbc8afd0829', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), h("div", { key: '67282a6183adf56e0d414df1c2d7ac407eb6e2a1', class: 'row-group' }, h("ir-price-input", { key: '46979233cb7a8da159d7777f364d653a2321e1ca', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: this.s_service?.price?.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), h("ir-price-input", { key: '4aff7f5fb47b6fa2bc900a0f711c4b276f87b809', autoValidate: false, label: locales.entries.Lcz_Cost, labelStyle: "rounded-0 border-left-0", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: this.s_service?.cost?.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" }))), h("div", { key: '4a5e6cf1e967941b94b89e68b78d66f1ed562524', class: 'sheet-footer' }, h("ir-button", { key: 'd9fc3bad508998a4d3654c173c808188e0612191', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { key: 'bab500b8a51abf93e4fe828b4f565bac534ffa0f', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', btn_type: "submit", isLoading: isRequestPending('/Do_Booking_Extra_Service'), text: locales.entries.Lcz_Save, btn_color: "primary" }))));
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
                    "resolved": "{ currency: Currency; from_date: string; to_date: string; booking_nbr: string; }",
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
                    "resolved": "{ cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; price?: number; start_date?: string; system_id?: number; }",
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
