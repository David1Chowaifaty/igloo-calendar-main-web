import { Host, h } from "@stencil/core";
import { formatAmount, getEntryValue } from "../../../../utils/utils";
import locales from "../../../../stores/locales.store";
import moment from "moment";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { isAgentMode } from "../../functions";
import calendar_data from "../../../../stores/calendar-data";
import { mapClTxToFolioRow } from "../../../ir-city-ledger/ir-city-ledger-folio/types";
export class IrExtraService {
    service;
    booking;
    agent;
    bookingNumber;
    currencySymbol;
    language = 'en';
    svcCategories;
    clTransactions = [];
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
    get category() {
        return this.svcCategories?.find(c => c.CODE_NAME === this.service?.category?.code);
    }
    get categoryLabel() {
        const category = this.category;
        return category ? getEntryValue({ entry: category, language: this.language }) : null;
    }
    get description() {
        const categoryLabel = this.categoryLabel;
        if (categoryLabel) {
            return (h("span", null, h("span", null, categoryLabel, ": "), this.service.description));
        }
        return this.service.description;
    }
    get matchedTx() {
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === this.service.system_id) ?? null;
    }
    get linkedUnitName() {
        if (this.service?.pr_id == null) {
            return null;
        }
        for (const roomtype of calendar_data.property?.roomtypes ?? []) {
            const physicalRoom = (roomtype.physicalrooms ?? []).find((pr) => pr.id === this.service.pr_id);
            if (physicalRoom) {
                return physicalRoom.name;
            }
        }
        return null;
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        const unitName = this.linkedUnitName;
        const hasMeta = !!(this.service.start_date || unitName || statusTag);
        return (h(Host, { key: '24232568b4b97a0087a07214b55f88a43599ebd3' }, h("div", { key: 'fa60ea642f612e334dbb2d943d0deea4646481d0', class: "es-row" }, h("div", { key: '89ef709d29ddfb48aea69e6646d0a432b2d1b52b', class: "es-content" }, h("p", { key: 'a22339726d8d10d81b63bcf0344967c0016088b2', class: "es-description" }, this.description), hasMeta && (h("div", { key: '6cb59fc7afa98559643b4118fda4f1b20971d90c', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date ? (h("ir-date-view", { from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", { class: "es-meta-date" }, moment(new Date(this.service.start_date)).format('MMM DD, YYYY')))), unitName && h("ir-unit-tag", { key: 'b650c45682ec1e5d7acf618e554f3380350092cc', unit: unitName }), statusTag))), h("div", { key: '2dc34f83a2a2c8c96bb18a6c79d1d182e4749a9b', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: '682321b33b760d89ab5608d8d28c87ef248a8146', class: "es-pricing" }, h("p", { key: '5ddebf42d072108b4067b923e963ec4ed302002e', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && h("p", { key: 'a156ed538852589d354f98f6fc26167f1b57ec38', class: "es-vat" }, "incl. ", this.service.charges.vat_percent, "% VAT"))), h("wa-dropdown", { key: '546b355c8f050956cfffa182a8efa11a04b49b53', "onwa-show": e => {
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
            } }, h("wa-button", { key: '80b1a64084094cbeeb0f2d101ebdb17c318853d9', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": "Service actions" }, h("wa-icon", { key: '64fccb3aecb97f7fed5f4b7836c00674eb9a3763', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '6a06a9e4bcf71bb524877674e7e6fa2bf192e69f', value: "edit" }, "Edit"), agentMode && h("wa-dropdown-item", { key: 'ee97abeaf28b20fb651dc14fd3c97571e4452507', value: "toggle" }, "Re-assign to ", this.service.agent ? 'guest' : 'agent', " folio"), h("wa-dropdown-item", { key: '075085b332c6a793d8e4d9b63dd6d8a3b1d824ce', value: "delete", variant: "danger" }, "Delete")))), h("ir-assignment-toggle-dialog", { key: 'd0eb4919f70f486d98b62a24a38f66053f188ce2', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: `Switch "${this.service.description}" to ${this.service.agent ? 'guest' : (this.booking?.agent?.name ?? 'agent')}?`, onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: 'c2faea494bc7016673fe9b530a20af2aa73f7005', slot: "message" }, "Re-assign ", this.description, " ", h("br", { key: '601319c588140540eaa107fd2f992d1836a141ed' }), " from ", this.service.agent ? 'Agent' : 'Guest', " folio to ", h("b", { key: '1da6e2a10e53e8dee80ef59e76c801ce5534e9b4' }, this.service.agent ? 'Guest' : 'Agent', " folio"), ".")), h("ir-dialog", { key: 'd9a30a4feb19c8bc3ec52de462a301e47ebf183f', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: "Alert", ref: el => (this.irModalRef = el), lightDismiss: false }, `${locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales.entries.Lcz_ThisService} ${locales.entries.Lcz_FromThisBooking}`, h("div", { key: '6efffdae7e58c539b0fcce59b9938b597dad4e84', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b5365b5c7fcd643de05f3f6b5594bab5e02f6784', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '1f648ccfcd414a619e0c11acbc6533c9287e5663', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, locales.entries.Lcz_Delete)))));
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
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; pr_id?: number; }; system_id?: number; room_identifier?: string; booking_system_id?: number; cost?: number; end_date?: string; start_date?: string; price?: number; category?: { code?: string; }; pr_id?: number; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService",
                            "referenceLocation": "ExtraService"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
                "reflect": false,
                "attribute": "booking-number"
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
                "reflect": false,
                "attribute": "currency-symbol"
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
                "reflect": false,
                "attribute": "language",
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
                            "id": "src/models/property.ts::IEntries",
                            "referenceLocation": "IEntries"
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
            "clTransactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::ClTx",
                            "referenceLocation": "ClTx"
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
                "setter": false,
                "defaultValue": "[]"
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
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; pr_id?: number; }; system_id?: number; room_identifier?: string; booking_system_id?: number; cost?: number; end_date?: string; start_date?: string; price?: number; category?: { code?: string; }; pr_id?: number; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService",
                            "referenceLocation": "ExtraService"
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
