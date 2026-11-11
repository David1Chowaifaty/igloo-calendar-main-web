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
        return (h(Host, { key: '3d0eed6bf74a6bcd2ba52ac23d876ab75271da0a' }, h("div", { key: 'f4fedd206caa746145fcd57221bd5c0d431313de', class: "es-row" }, h("div", { key: '57e550f7ff3d1a0bbfa35cae827bbe62601d9386', class: "es-content" }, h("p", { key: 'f131da367a03eb2cba1701e41a44c4100db4ddd4', class: "es-description" }, this.description, this.service.category.code === SvcCategory.DayUse && (h("span", { key: '7d9f73a2ea303bdae2e5436b0bd4dba11754c0cb' }, ": ", this.formatDayUseTime(this.service.from_time), " \u2013 ", this.formatDayUseTime(this.service.to_time)))), hasMeta && (h("div", { key: 'f0b2fd799d4b3d142019b48cb5bd5770bf91cc6e', class: "es-meta" }, this.service.start_date &&
            (this.service.end_date && this.service?.category?.code !== SvcCategory.DayUse ? (h("ir-date-view", { class: "es-meta-date", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (h("span", { class: "es-meta-date" }, formatDate(new Date(this.service.start_date), 'MMM DD, YYYY'), " "))), unitName && h("ir-unit-tag", { key: '9b12fd1b7e417ea9f7a8ca6da73a48c892393316', unit: unitName }), statusTag))), h("div", { key: 'f6767090aa1097b2a988bd76e9ea7e79e159ebee', class: "es-aside" }, !!this.service.price && this.service.price > 0 && (h("div", { key: 'e55efa1dc13d524987afb15f33ba84a37bde8217', class: "es-pricing" }, h("p", { key: '5903eb03bf0bb3e3054896434169bcb994ae5d78', class: "es-price" }, formatAmount(this.currencySymbol, this.service.price)), !!this.service.charges?.vat_percent && (h("p", { key: '7a5fbde8eb71d98d65fa957d5faa2b952f93602f', class: "es-vat" }, t('Lcz_InclVat', { fallback: 'incl. %1% VAT', params: [formatCount(this.service.charges.vat_percent)] }))))), h("wa-dropdown", { key: 'e55b4345a36891532c3e2bb64f6747d1313da8e0', "onwa-show": e => {
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
            } }, h("wa-button", { key: '43abccd9f767d7b5d90342eab8fbb4a3b52f89b9', class: "es-action-trigger", slot: "trigger", size: "s", appearance: "plain", id: `extra-service-actions-${this.service.system_id}`, variant: "neutral", "aria-label": t('Lcz_ServiceActions', { fallback: 'Service actions' }) }, h("wa-icon", { key: '649d0ad4cc9b1500f28edfb4dc16c903374fd67f', class: "es-action-trigger-icon", name: "ellipsis-vertical" })), h("wa-dropdown-item", { key: 'f5760c5223993ff04c825db1c708e589a3fadf0a', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' })), agentMode && (h("wa-dropdown-item", { key: 'a910dfd34208c1199872ac1f919437cfe234ae05', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), h("wa-dropdown-item", { key: 'c455c5a89f48c950fe31845ed8cf1bffd0497144', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))), h("ir-assignment-toggle-dialog", { key: 'c548baeaf5f25604c399f441219eaaa8023c5951', ref: el => (this.toggleDialogRef = el), loading: this.isToggling, message: t('Lcz_SwitchFolioConfirm', {
                fallback: 'Switch "%1" to %2?',
                params: [
                    this.service.description,
                    this.service.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : (this.booking?.agent?.name ?? t('Lcz_AgentLowercase', { fallback: 'agent' })),
                ],
            }), onConfirmToggle: () => this.toggleServiceAgent() }, h("span", { key: '5c3de7c91f50f90002667beda95feb8f038ce20d', slot: "message" }, t('Lcz_ReassignFolioMessage', {
            fallback: 'Re-assign %1 from %2 folio to %3 folio.',
            params: [
                this.service.description ?? '',
                this.service.agent ? t('Lcz_Agent', { fallback: 'Agent' }) : t('Lcz_Guest', { fallback: 'Guest' }),
                this.service.agent ? t('Lcz_Guest', { fallback: 'Guest' }) : t('Lcz_Agent', { fallback: 'Agent' }),
            ],
        }))), h("ir-dialog", { key: '963e9ef22d8853d8b1a30a9abb3e7c8a256e5f90', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.irModalRef = el), lightDismiss: false }, `${t('Lcz_AreYouSureDoYouWantToRemove ')} ${t('Lcz_ThisService')} ${t('Lcz_FromThisBooking')}`, h("div", { key: '618c26c298b749879b727178851a5ccb2f0d0688', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '63d4f782bffa3f516b3583ccef91729113d392aa', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'cffceb6bbd7707c304863600a4bfa8bd67011cea', onClickHandler: () => this.deleteService(), loading: isRequestPending('/Do_Booking_Extra_Service'), variant: "danger", size: "m" }, t('Lcz_Delete', { fallback: 'Delete' }))))));
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
