import { h, Fragment } from "@stencil/core";
import { isAgentMode } from "../../functions";
/** Extra-service category codes that are never tucked inside the collapsible list — always shown for the room, e.g. Early Check-In / Late Check-Out fees. */
const ALWAYS_VISIBLE_EXTRA_SERVICE_CODES = new Set(['ECI', 'LCO', 'BCT', 'EXB', 'HMP', 'ANP']);
export class IrRoomExtraServices {
    room;
    booking;
    isEditable;
    agent;
    currency = 'USD';
    language = 'en';
    svcCategories = [];
    clTransactions = [];
    /** Which collapsible groups ('all' | 'agent' | 'guest') are expanded — keyed so agent/guest folios can be toggled independently. */
    expandedGroups = new Set();
    requestAddExtraService;
    get unitId() {
        return this.room.unit?.id ?? null;
    }
    /** Extra services linked to this unit via `room_identifier`. */
    get roomExtraServices() {
        return (this.booking.extra_services ?? []).filter(service => service.room_identifier === this.room.identifier);
    }
    /** Services whose category is always surfaced (e.g. Early Check-In / Late Check-Out) — never tucked behind the collapse. */
    pinnedOf(services) {
        return services.filter(service => service.category?.code && ALWAYS_VISIBLE_EXTRA_SERVICE_CODES.has(service.category.code));
    }
    /** Everything else — hidden behind the "N more services" disclosure. */
    collapsibleOf(services) {
        return services.filter(service => !service.category?.code || !ALWAYS_VISIBLE_EXTRA_SERVICE_CODES.has(service.category.code));
    }
    setGroupExpanded(groupKey, expanded) {
        const next = new Set(this.expandedGroups);
        if (expanded) {
            next.add(groupKey);
        }
        else {
            next.delete(groupKey);
        }
        this.expandedGroups = next;
    }
    renderExtraServiceItem(service) {
        return (h("ir-extra-service", { key: service.booking_system_id ?? service.system_id ?? `${service.category?.code ?? 'service'}-${service.start_date}`, service: service, booking: this.booking, agent: this.agent, bookingNumber: this.booking.booking_nbr, currencySymbol: this.currency, language: this.language, svcCategories: this.svcCategories, clTransactions: this.clTransactions }));
    }
    /** Renders the pinned + collapsible services for one folio group (or the whole list when not in agent mode). */
    renderServiceGroup(groupKey, services) {
        const pinned = this.pinnedOf(services);
        const collapsible = this.collapsibleOf(services);
        return (h(Fragment, null, pinned.length > 0 && (h("div", { class: "booking-room__extra-services-pinned" }, pinned.map((service, idx) => (h(Fragment, null, this.renderExtraServiceItem(service), idx < pinned.length - 1 && h("wa-divider", null)))))), collapsible.length > 0 && (h("wa-details", { "icon-placement": "start", class: "booking-room__extra-services-details", appearance: "plain", open: this.expandedGroups.has(groupKey), "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, true);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.setGroupExpanded(groupKey, false);
            } }, h("span", { slot: "summary", class: "booking-room__extra-services-toggle-label" }, collapsible.length, " more service", collapsible.length > 1 ? 's' : ''), h("div", { class: "booking-room__extra-services-list" }, collapsible.map((service, idx) => (h(Fragment, null, this.renderExtraServiceItem(service), idx < collapsible.length - 1 && h("wa-divider", null)))))))));
    }
    render() {
        const services = this.roomExtraServices;
        const canAdd = this.isEditable && !!this.unitId;
        if (!canAdd && services.length === 0) {
            return null;
        }
        const total = services.length;
        const inAgentMode = isAgentMode(this.agent);
        const guestServices = inAgentMode ? services.filter(s => s.agent === null || s.agent === undefined) : [];
        const agentServices = inAgentMode ? services.filter(s => s.agent !== null && s.agent !== undefined) : [];
        const agentName = this.booking.agent?.name ?? 'Agent';
        return (h("wa-card", { appearance: "filled", class: "booking-room__extra-services" }, h("div", { slot: "header", class: "booking-room__extra-services-header" }, h("span", { class: "booking-room__extra-services-label" }, h("span", { class: "booking-room__extra-services-title" }, "Extras"), total > 0 && h("span", { class: "booking-room__extra-services-count" }, total)), canAdd && (h(Fragment, null, h("wa-tooltip", { for: `add-extra-service-${this.room.identifier}` }, "Add extra service"), h("ir-custom-button", { id: `add-extra-service-${this.room.identifier}`, class: "booking-room__extra-services-add", iconBtn: true, size: "s", appearance: "plain", variant: "brand", onClickHandler: () => this.requestAddExtraService.emit() }, h("wa-icon", { style: { fontSize: '0.9rem' }, label: "Add extra service", name: "plus" }))))), inAgentMode ? (h(Fragment, null, h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--agent" }, h("p", { class: "booking-room__extra-services-group-label booking-room__extra-services-group-label--agent" }, agentName, h("span", null, "Folio")), agentServices.length === 0 ? (h("p", { class: "booking-room__extra-services-empty" }, "No agent services added")) : (this.renderServiceGroup('agent', agentServices))), h("wa-divider", null), h("div", { class: "booking-room__extra-services-group booking-room__extra-services-group--guest" }, h("p", { class: "booking-room__extra-services-group-label" }, "Guest", h("span", null, "Folio")), guestServices.length === 0 ? (h("p", { class: "booking-room__extra-services-empty" }, "No guest services added")) : (this.renderServiceGroup('guest', guestServices))))) : (this.renderServiceGroup('all', services))));
    }
    static get is() { return "ir-room-extra-services"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-extra-services.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-extra-services.css"]
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
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
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
                "setter": false,
                "defaultValue": "[]"
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
            "expandedGroups": {}
        };
    }
    static get events() {
        return [{
                "method": "requestAddExtraService",
                "name": "requestAddExtraService",
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
