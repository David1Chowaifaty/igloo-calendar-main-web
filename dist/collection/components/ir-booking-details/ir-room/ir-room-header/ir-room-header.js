import { h } from "@stencil/core";
import { isAgentMode } from "../../functions";
import calendar_data from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { HbPreference } from "../../../../types/enums";
import { t } from "../../../../services/locale/t";
export class IrRoomHeader {
    room;
    myRoomTypeFoodCat;
    mealCodeName;
    currency = 'USD';
    isEditable;
    hasRoomEdit = false;
    hasRoomDelete = false;
    agent;
    action;
    openHbDialog;
    get isHalfBoard() {
        return this.room?.rateplan?.meal_plan?.code === '003' && calendar_data.property.is_frontdesk_enabled;
    }
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    render() {
        return (h("div", { key: 'c13fbbca720a13e1dd9aaceb1ef8f54d5064c1a5', class: "booking-room__summary-row" }, h("p", { key: '56c9f973e6128c276bf7cfaf6963e1f4aba4c4ce', class: "booking-room__summary-text" }, h("span", { key: '42b72a490cee24961a074d230130feb069cde421', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`, ' ', this.isHalfBoard && (h("wa-button", { key: 'bbee92339c83796fa90dcd7ebf15eab7ce17b8b4', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === HbPreference.Lunch
            ? t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === HbPreference.Dinner
                ? t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' })))), h("div", { key: '8bb43d3c9c207ebcf2f856edced041883b0667c2', class: "booking-room__price-row" }, h("span", { key: 'b3ffa0034186c6ae3460565d04895b2961e3d50f', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (h("div", { key: '61de928a3d06cd27a202fbc43f375ad77ae695d3', class: "booking-room__actions" }, h("wa-dropdown", { key: '731bc9ced9d0a70cdfc160d0742943f7ad8c6bd2', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, h("ir-custom-button", { key: '179df1839e4a7a1bcd5a1c089b6a75f6c6792d4d', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '576e8678adee464e5b95c078e78163441893d4c0', style: { fontSize: '1rem' }, label: t('Lcz_Actions', { fallback: 'Actions' }), name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '2d14386d15459c6abc325637219c953e702eca9c', value: "edit" }, t('Lcz_EditUnit', { fallback: 'Edit unit' })), this.hasRoomEdit && h("wa-dropdown-item", { key: '8a478c15e5b7e6a807d45494506f43611dd262b4', value: "edit-rates" }, t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' })), isAgentMode(this.agent) && this.hasRoomEdit && (h("wa-dropdown-item", { key: '73603c9e8faa7e793bb7cb728ab0926bbc7102bc', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.room.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), !!this.unitId && h("wa-dropdown-item", { key: '64c982f525b3e4d05e4b006aeb8b0bcd13ce5caf', value: "add-extra-service" }, t('Lcz_AddExtraServiceToUnit', { fallback: 'Add extra service to this unit' })), this.hasRoomDelete && (h("wa-dropdown-item", { key: 'aa9a04acccda700bc47945fb35bab1d876582647', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })))))))));
    }
    static get is() { return "ir-room-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-header.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
            "myRoomTypeFoodCat": {
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
                "attribute": "my-room-type-food-cat"
            },
            "mealCodeName": {
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
                "attribute": "meal-code-name"
            },
            "currency": {
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
                "attribute": "currency",
                "defaultValue": "'USD'"
            },
            "isEditable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is-editable"
            },
            "hasRoomEdit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "has-room-edit",
                "defaultValue": "false"
            },
            "hasRoomDelete": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "has-room-delete",
                "defaultValue": "false"
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
            }
        };
    }
    static get events() {
        return [{
                "method": "action",
                "name": "action",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IrRoomHeaderAction",
                    "resolved": "\"add-extra-service\" | \"delete\" | \"edit\" | \"edit-rates\" | \"toggle\"",
                    "references": {
                        "IrRoomHeaderAction": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-booking-details/ir-room/ir-room-header/ir-room-header.tsx",
                            "id": "src/components/ir-booking-details/ir-room/ir-room-header/ir-room-header.tsx::IrRoomHeaderAction"
                        }
                    }
                }
            }, {
                "method": "openHbDialog",
                "name": "openHbDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
