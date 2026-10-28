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
        return (h("div", { key: '8bbe0d9c6b1eb92337dea0cafec69ab36d53fefc', class: "booking-room__summary-row" }, h("p", { key: '8fede6286b7ab3370c2dda73cd6c8c6cb08f3d46', class: "booking-room__summary-text" }, h("span", { key: '4f259f096453ad17110d62cce50e0ef598a49fdd', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`, ' ', this.isHalfBoard && (h("wa-button", { key: 'd562efb165e68daf00cb31ba5200307b5c851b88', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === HbPreference.Lunch
            ? t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === HbPreference.Dinner
                ? t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' })))), h("div", { key: '3047422f971516224e9286ae99fdf2cb8e77c334', class: "booking-room__price-row" }, h("span", { key: 'c1118c027251f2f31f45c2af39591194f5080b92', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (h("div", { key: '6911bba2af759cdaed1d2c956e0aef4582ecc2ca', class: "booking-room__actions" }, h("wa-dropdown", { key: '4f2859f14810670aedf51d8c939ee6a2724f8c95', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, h("ir-custom-button", { key: 'fec90995f8fe06582c0de5185daabd9eda55f2ac', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '8e9a73c8e12bd398c5952346ee3fa8389dd060b8', style: { fontSize: '1rem' }, label: t('Lcz_Actions', { fallback: 'Actions' }), name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '588efd71a83c15de511e162986264569878fc93b', value: "edit" }, t('Lcz_EditUnit', { fallback: 'Edit unit' })), this.hasRoomEdit && h("wa-dropdown-item", { key: '50093c1f230900ff9284dfce5e91a2806b3d6f17', value: "edit-rates" }, t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' })), isAgentMode(this.agent) && this.hasRoomEdit && (h("wa-dropdown-item", { key: 'eb7ce8f547b19c3e213895ed85ce6706be0c8b27', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            fallback: 'Re-assign %1 folio',
            params: [this.room.agent ? t('Lcz_GuestLowercase', { fallback: 'guest' }) : t('Lcz_AgentLowercase', { fallback: 'agent' })],
        }))), !!this.unitId && h("wa-dropdown-item", { key: '945575f27258573fb68dd3fe23544878a4981b35', value: "add-extra-service" }, t('Lcz_AddExtraServiceToUnit', { fallback: 'Add extra service to this unit' })), this.hasRoomDelete && (h("wa-dropdown-item", { key: '2a92f5eacf94237ea6bf00a6c1cdb59486946e36', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })))))))));
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
