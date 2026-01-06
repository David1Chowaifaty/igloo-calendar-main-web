import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import locales from "../../../../stores/locales.store";
import moment from "moment";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
export class IrExtraService {
    service;
    bookingNumber;
    currencySymbol;
    editExtraService;
    resetBookingEvt;
    irModalRef;
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
    render() {
        return (h(Host, { key: '0211604b8d10290d453f4562bc37e3afce60cfe1' }, h("div", { key: 'cb7533808ad97ce5f28ef6b398e54053101227db' }, h("div", { key: '6ffaa50cd4bf0b1e4f48bae2fd013a4ee15ed52c', class: 'extra-service-container' }, h("p", { key: 'e22e86f95c25c9c6fd785ad4ed83f062921218d5', class: "extra-service-description" }, this.service.description), h("div", { key: '03ce24a2ebf32becd780b6026d87ddc6d57e6280', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (h("p", { key: 'eb58a0a9bb4d8c81496e19af1ca432afa3ed5618', class: "extra-service-price p-0 m-0 font-weight-bold" }, formatAmount(this.currencySymbol, this.service.price))), h("div", { key: '2a58f49df031151e6615f704958322bbd74088b9', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '1a89f1a2fb0f55e3747ed4cb08f227dc40b9db59', for: `edit-extra-service-${this.service.booking_system_id}` }, "Edit service"), h("ir-custom-button", { key: '466e70dcbe5674ab0377e009e42f6b034f047181', id: `edit-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editExtraService.emit(this.service);
            }, iconBtn: true, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '37fcc97371bc7b123b349922a84c6cdd3074b79a', name: "edit", label: "Edit", style: { fontSize: '1rem' } })), h("wa-tooltip", { key: 'f446547dd80b9a9f72fe9c9c02dd91fce43cc531', for: `delete-extra-service-${this.service.booking_system_id}` }, "Delete service"), h("ir-custom-button", { key: 'f073709fcb24c89bfb64a8674bcdb992c0c92827', iconBtn: true, id: `delete-extra-service-${this.service.booking_system_id}`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irModalRef.openModal();
            }, appearance: 'plain', variant: 'danger' }, h("wa-icon", { key: '320fb3c3d07eadb127c21489c24bc293c1805554', name: "trash-can", label: "Edit", style: { fontSize: '1rem' } }))))), h("div", { key: '20839898975a840f349452de440e505812613b91', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && h("p", { class: "extra-service-date-view" }, moment(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), h("ir-dialog", { key: '4bee790a083b3918594d66ef8f4073df82f012dc', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '811438614abda173c810842bc4e29eda878ba720', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '5d072d0db0d9e77f8076203fa455394861d0c451', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '97d6d0bbd9d88895b621802a9c831bd8e597d839', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "medium" }, locales.entries.Lcz_Delete)))));
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
                    "resolved": "{ system_id?: number; cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }",
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
            }
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
                    "resolved": "{ system_id?: number; cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }",
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
