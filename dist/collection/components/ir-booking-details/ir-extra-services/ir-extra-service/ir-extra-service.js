import { Host, h } from "@stencil/core";
import { formatAmount, getEntryValue } from "../../../../utils/utils";
import locales from "../../../../stores/locales.store";
import moment from "moment";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { isAgentMode } from "../../functions";
export class IrExtraService {
    service;
    booking;
    agent;
    bookingNumber;
    currencySymbol;
    language = 'en';
    svcCategories;
    editExtraService;
    resetBookingEvt;
    isToggling = false;
    irModalRef;
    toggleDialogRef;
    bookingService = new BookingService();
    async deleteService() {
        try {
            await this.bookingService.doBookingExtraService({
                service: this.service,
                is_remove: true,
                booking_nbr: this.bookingNumber,
            });
            this.irModalRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleServiceAgent() {
        try {
            this.isToggling = true;
            await this.bookingService.doBookingExtraService({
                service: { ...this.service, agent: this.service.agent ? null : this.booking?.agent },
                is_remove: false,
                booking_nbr: this.bookingNumber,
            });
            this.toggleDialogRef.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isToggling = false;
        }
    }
    get description() {
        let category = this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
        if (category) {
            return (h("span", null, h("b", null, getEntryValue({ entry: category, language: this.language })), ": ", this.service.description));
        }
        return this.service.description;
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        return (h(Host, { key: '99ef4dabf5872a7eb98a79138b377b6e7b545341' }, h("div", { key: 'f1411423b55a9d597f65471122a8c61608ba1eff' }, h("div", { key: '4e9f7fb7ea292e5cfa3abfd8038ba0b850e53077', class: 'extra-service-container' }, h("p", { key: '765a7947098ace94db71c8a973b9d66972ead4df', class: "extra-service-description" }, this.description), h("div", { key: 'f3f0352615aa4387fe89678ad645fe98608ff45f', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: '0fe44bb536dadb9deaeb23e72e1e7dbdab9bebec', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("wa-dropdown", { key: 'f0402a4c3a0c289311a4357e3d007d201679407b', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editExtraService.emit(this.service);
                        break;
                    case 'delete':
                        this.irModalRef.openModal();
                        break;
                    case 'toggle':
                        this.toggleDialogRef.openModal();
                        break;
                }
            } }, h("ir-custom-button", { key: 'c57954bce5a6053399f128fea52e8c54bd92e743', slot: "trigger", size: "small", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.service.system_id}`, iconBtn: true, style: { marginBottom: '4px' }, variant: "neutral" }, h("wa-icon", { key: '24a9d4a4b2319c83e29aa7c1d254950c9b49bada', style: { fontSize: '1rem' }, label: "Actions", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '36bbfaf1b9bb4b872d5fc9e7325f345498dd3a36', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: '1945f0e3ef287587f2be0965e7bba19a2d16be6e', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '408728098f25e3ee3b0e14375ec8b01e3569185d', value: "delete", variant: "danger" }, "Delete")))), h("div", { key: '14d9973d7932da6da2a52d25fac6fbd53a6b2c6b', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, moment(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-assignment-toggle-dialog", { key: '8445d855822b2458728c449580802c3b80eec731', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '5581c3c79bade6004339c018176863a0c8d98d9e', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '6d7d56d1a78a4e6314b25f5aa10455dadc48e943' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '737c1b0d72e62d28263e64e8136a93cd81c68348' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: '332ce339f0ea032ed7ae83aaaf22a8d45b441704', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '790154a9a1fb5f19b72e1fe0b7bbda2581c0e209', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'aee44647f4b260f010ca1ab70bb9351b5b242c89', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '34e4505acd566047c16834775645f2c39d3d6bf3', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
    }
    static get is() { return "ir-extra-service"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service.css"]
        };
    }
    static get properties() {
        return {
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }; system_id?: number; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; cost?: number; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; }",
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
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
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
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
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
            "bookingNumber": {
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
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            },
            "currencySymbol": {
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
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false
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
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "svcCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IEntries"
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
            "isToggling": {}
        };
    }
    static get events() {
        return [{
                "method": "editExtraService",
                "name": "editExtraService",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }; system_id?: number; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; cost?: number; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService"
                        }
                    }
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
//# sourceMappingURL=ir-extra-service.js.map
