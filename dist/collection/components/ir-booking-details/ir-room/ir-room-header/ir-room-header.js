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
        return (h("div", { key: 'f560bb15dd4ea44a17d52b2887c2adcf318c961a', class: "booking-room__summary-row" }, h("p", { key: '412bc42de331a286383f8f28cb3f6f435dedf1a3', class: "booking-room__summary-text" }, h("span", { key: 'c7a9e1b634a977312d018c5d077132165e0e1567', class: "booking-room__summary-highlight" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.room.rateplan.is_non_refundable && ` - ${t('Lcz_NonRefundable', { fallback: 'Non-refundable' })}`, ' ', this.isHalfBoard && (h("wa-button", { key: 'fb34f7c84c7515ba2f73ddb359375ace07917985', size: "xs", class: "booking-room__meal-report-button", appearance: "filled", variant: this.room?.hb_preference ? 'brand' : 'warning', onClick: () => this.openHbDialog.emit() }, this.room?.hb_preference === HbPreference.Lunch
            ? t('Lcz_WithLunch', { fallback: 'With lunch' })
            : this.room?.hb_preference === HbPreference.Dinner
                ? t('Lcz_WithDinner', { fallback: 'With dinner' })
                : t('Lcz_ChooseLunchOrDinner', { fallback: 'Choose lunch or dinner' })))), h("div", { key: '99b56f59c219d23ed5aef8433918f6735cdfc6ac', class: "booking-room__price-row" }, h("span", { key: '888e85a73769f6e13f9320b26b431cf79cfdf549', class: "booking-room__price" }, formatAmount(this.currency, this.room['gross_total'])), this.isEditable && (this.hasRoomEdit || this.hasRoomDelete || !!this.unitId) && (h("div", { key: '781e09d441fbdb4833bc77a47349436d42ebd02f', class: "booking-room__actions" }, h("wa-dropdown", { key: 'acdd0ec30dfa986758e1eb3902193dabd3a5ddaf', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": async (e) => {
                this.action.emit(e.detail.item.value);
            } }, h("ir-custom-button", { key: 'c26ff971672e096f750d8df285f62781cf44831a', slot: "trigger", size: "s", class: "booking-room__edit-button", appearance: "plain", id: `actions-room-${this.room.identifier}`, iconBtn: true, variant: "neutral", style: { marginBottom: '4px' } }, h("wa-icon", { key: '930f33f48cad803dceddbf41875cef544bea4bf1', style: { fontSize: '1rem' }, label: t('Lcz_Actions', { fallback: 'Actions' }), name: "ellipsis-vertical" })), this.hasRoomEdit && h("wa-dropdown-item", { key: '406f72463b298c4199640658326533a2144866c4', value: "edit" }, t('Lcz_EditUnit', { fallback: 'Edit unit' })), this.hasRoomEdit && h("wa-dropdown-item", { key: '0e57ae63304d7320d5f2a7c22c7a0c30f693a584', value: "edit-rates" }, t('Lcz_EditNightlyRates', { fallback: 'Edit Nightly Rates' })), isAgentMode(this.agent) && this.hasRoomEdit && (h("wa-dropdown-item", { key: 'a856c82fe5fb3b51d89d1a5291a1d9a5dfa6a0d8', value: "toggle" }, t('Lcz_ReassignFolioDropdown', {
            params: [this.room.agent ? 'guest' : 'agent'],
        }))), !!this.unitId && h("wa-dropdown-item", { key: '0c2a4d0acef52e35ef05c4607a867d1819007cc1', value: "add-extra-service" }, t('Lcz_AddExtraServiceToUnit', { fallback: 'Add extra service to this unit' })), this.hasRoomDelete && (h("wa-dropdown-item", { key: '284ac969217fdd4d28c3fe5c2afaed3701876e2d', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })))))))));
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
