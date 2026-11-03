import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { getEntryValue } from "../../../../services/setup/index";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { _formatTime, isAgentMode } from "../../functions";
import calendar_data from "../../../../stores/calendar-data";
import { mapClTxToFolioRow } from "../../../ir-city-ledger/ir-city-ledger-folio/types";
import { SvcCategory } from "../../../../types/enums";
import { formatDate } from "../../../../utils/date/index";
import { formatCount } from "../../../../utils/number";
import { LocaleController } from "../../../../services/locale/locale.controller";
import { t } from "../../../../services/locale/t";
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
        return category ? getEntryValue({ entry: category, language: LocaleController.language }) : null;
    }
    get description() {
        const categoryLabel = this.categoryLabel;
        if (categoryLabel) {
            return (h("span", null, h("span", null, categoryLabel, this.service.description ? ':' : '', ' '), this.service.description));
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
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    formatDayUseTime(time) {
        const [hour, minute] = time.split(':');
        return _formatTime(hour, minute);
    }
    render() {
        const agentMode = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" }) : null;
        const unitName = this.linkedUnitName;
        const hasMeta = !!(this.service.start_date || unitName || statusTag);
        return (h(Host, { key: '2c814d5980227243968a1de18c027173547f72fb' }, h("div", { key: 'b29c4a9d6a8d08602b794d2a0f72e8a95167ca79', class: "es-row" }, h("div", { key: 'b15241bd58b15013b02db62479908ecee15d3ae6', class: "es-content" }, h("p", { key: 'df7d561d017887ace31bab581f277437887a4d69', class: "es-description" }, this.description, this.service.category.code === SvcCategory.DayUse && (h("span", { key: 'ea5e351d06c379750304f86f11d46e8f6ab0c6e3' }, ": ", this.formatDayUseTime(this.service.from_time), " \u2013 ", this.formatDayUseTime(this.service.to_time)))), hasMeta && (h("div", { key: 'dcafe47a076426c4460639bc190d7006010e45aa', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date && this.service?.category?.code !== SvcCategory.DayUse ? (h("ir-date-view", { class: "es-meta-date", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", { class: "es-meta-date" }, formatDate(new Date(this.service.start_date), 'MMM DD, YYYY'), " "))), unitName && h("ir-unit-tag", { key: '9c7e01135b39a67d1a2a4a14bf3cf3c4810745c5', unit: unitName }), statusTag))), h("div", { key: '1d4db8e1bc7a556a8592ad7c71821c8e204ed722', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'ea78fb212611addbdb515829c5026ee51af4c7da', class: "es-pricing" }, h("p", { key: 'a628f3da8485dd69bcf9c3b45837a8625aeafc1b', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && (h("p", { key: '4649f7885c5fa39973786ec9bf0df2a5b539af45', class: "es-vat" }, t('Lcz_InclVat', { fallback: 'incl. %1% VAT', params: [formatCount(this.service.charges.vat_percent)] }))))), h("wa-dropdown", { key: '40ed7f03f11a88232be19ed7089db75c7f0e158d', "onwa-show": e => {
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
            } }, h("wa-button", { key: '92ca1eda94f7235e52734b0b8f16507242a64889', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": t('Lcz_ServiceActions', { fallback: 'Service actions' }) }, h("wa-icon", { key: '091fe8b5004745e57b3995bdfae6cd814c962e15', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: '369d6f76714eea60bdfb048c9bdda2dee639a366', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' })), agentMode && (h("wa-dropdown-item", { key: '29fcc186616f87cd0d7c61d7c4f454a1b2ab2941', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), h("wa-dropdown-item", { key: '35f97b0f4ad221530798f29a4c3648d708eb0f3f', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))), h("ir-assignment-toggle-dialog", { key: '203b16f3eeed12a7df37709c70ccada4c79de129', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: t('Lcz_SwitchFolioConfirm', {
                fallback: 'Switch "%1" to %2?',
                params: [
                    this.service.description,
                    this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : (this.booking?.agent?.name ?? t('Lcz_AgentLowercase', { fallback: 'agent' })),
                ],
            }), onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '64d6f4a913dc794a3b2da68ccef1d4cad55d26a1', slot: "message" }, t('Lcz_ReassignFolioMessage', {
            fallback: 'Re-assign %1 from %2 folio to %3 folio.',
            params: [
                this.service.description ?? '',
                this.service.agent ? t('Lcz_Agent', { fallback: 'Agent' }) : t('Lcz_Guest', { fallback: 'Guest' }),
                this.service.agent ? t('Lcz_Guest', { fallback: 'Guest' }) : t('Lcz_Agent', { fallback: 'Agent' }),
            ],
        }))), h("ir-dialog", { key: '62c8e565d6ed08f15b3ba876d2d52d0c321fbb8d', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.irModalRef = el), lightDismiss: false }, `${t('Lcz_AreYouSureDoYouWantToRemove ')} ${t('Lcz_ThisService')} ${t('Lcz_FromThisBooking')}`, h("div", { key: '26149bec2de28dc25b14f151b10fac0ae103e343', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '98ee54bd52c823f02b050ec3907cc3e986ca7bba', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'fa318d9963bbb5b73015f75a5217cfcd1370a1a0', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, t('Lcz_Delete', { fallback: 'Delete' }))))));
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
                    "resolved": "{ description?: string; currency_id?: number; agent?: { code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; rt_namings?: { name?: string; id?: number; room_type_id?: number; }[]; pr_id?: number; }; system_id?: number; charges?: { total_amount?: number; city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; vat_amount?: number; vat_percent?: number; }; cost?: number; room_identifier?: string; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; pr_id?: number; from_time?: string; to_time?: string; }",
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; rt_namings?: { name?: string; id?: number; room_type_id?: number; }[]; }",
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
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
                    "resolved": "{ ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DESCRIPTION?: string; PR_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\" | \"TBL_BSE\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
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
                    "resolved": "{ description?: string; currency_id?: number; agent?: { code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; rt_namings?: { name?: string; id?: number; room_type_id?: number; }[]; pr_id?: number; }; system_id?: number; charges?: { total_amount?: number; city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; vat_amount?: number; vat_percent?: number; }; cost?: number; room_identifier?: string; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; pr_id?: number; from_time?: string; to_time?: string; }",
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
