import { Host, h, Fragment } from "@stencil/core";
import { AgentBaseSchema } from "../../../../services/agents/type";
import { AgentsTypes } from "../../types";
import calendar_data from "../../../../stores/calendar-data";
import { z } from "zod";
import { t } from "../../../../services/locale/t";
import { toRoomTypeCodeList, toRoomTypeCodeMap } from "./room-type-codes";
/** Show the room type search once the list no longer fits the scroll area. */
const ROOM_TYPE_SEARCH_THRESHOLD = 8;
export class IrAgentContract {
    agent;
    setupEntries;
    roomTypeCodes = {};
    roomTypeQuery = '';
    agentFieldChanged;
    /** Last array this component emitted, so its own echo doesn't rebuild the map mid-typing. */
    emittedRoomTypeCodes;
    componentWillLoad() {
        this.syncRoomTypeCodes();
    }
    handleAgentChange() {
        this.syncRoomTypeCodes();
    }
    syncRoomTypeCodes() {
        const list = this.agent?.rt_namings;
        if (list === this.emittedRoomTypeCodes)
            return;
        this.emittedRoomTypeCodes = list;
        this.roomTypeCodes = toRoomTypeCodeMap(list);
    }
    updateField(value) {
        const agent = this.agent ?? {};
        this.agentFieldChanged.emit({ ...agent, ...value });
    }
    handleRoomTypeCodeChange(roomTypeId, name) {
        this.roomTypeCodes = { ...this.roomTypeCodes, [roomTypeId]: { id: this.roomTypeCodes[roomTypeId]?.id ?? -1, name: name ?? '' } };
        this.emittedRoomTypeCodes = toRoomTypeCodeList(this.roomTypeCodes);
        this.updateField({ rt_namings: this.emittedRoomTypeCodes });
    }
    renderRoomTypeCodes() {
        const roomTypes = (calendar_data.property?.roomtypes ?? []).filter(rt => rt.is_active && !rt.is_virtual);
        const query = this.roomTypeQuery.trim().toLowerCase();
        const visibleRoomTypes = query ? roomTypes.filter(rt => rt.name.toLowerCase().includes(query)) : roomTypes;
        return (h("wa-card", { appearance: "plain", class: "contract-card contract-card--room-codes", "data-testid": "agent-contract-room-type-codes-card" }, h("p", { slot: "header", class: "contract-card__title", "data-testid": "agent-contract-room-type-codes-title" }, t('Lcz_RoomTypesAgentCustomCode', { fallback: 'Room Types & Agent Custom Code' })), roomTypes.length > ROOM_TYPE_SEARCH_THRESHOLD && (h("ir-input", { placeholder: t('Lcz_SearchRoomTypesPlaceholder', { fallback: 'Search room types' }), withClear: true, value: this.roomTypeQuery, "data-testid": "agent-contract-room-type-codes-search", onKeyDown: e => e.stopPropagation(), "onText-change": (e) => (this.roomTypeQuery = e.detail ?? '') }, h("wa-icon", { slot: "start", name: "magnifying-glass" }))), visibleRoomTypes.length === 0 ? (h("ir-empty-state", { message: roomTypes.length ? t('Lcz_NoRoomTypesMatchSearch', { fallback: 'No room types match your search' }) : t('Lcz_NoActiveRoomTypes', { fallback: 'No active room types' }) })) : (h("ul", { class: "room-code-list", "data-testid": "agent-contract-room-type-codes-list" }, visibleRoomTypes.map(rt => (h("li", { key: rt.id, class: "room-code-row", "data-testid": `agent-contract-room-type-code-row-${rt.id}` }, h("span", { class: "room-code-row__name", id: `room-code-name-${rt.id}` }, rt.name), h("wa-tooltip", { for: `room-code-name-${rt.id}` }, rt.name), h("wa-icon", { class: "room-code-row__arrow", name: "arrow-right", "aria-hidden": "true" }), h("ir-input", { class: "room-code-row__input", placeholder: t('Lcz_AgentCodePlaceholder', { fallback: 'Agent code' }), value: this.roomTypeCodes[rt.id]?.name ?? '', "data-testid": `agent-contract-room-type-code-input-${rt.id}`, onKeyDown: e => e.stopPropagation(), "onText-change": (e) => this.handleRoomTypeCodeChange(rt.id, e.detail) }, h("span", { slot: "label", class: "room-code-row__sr-only" }, rt.name)))))))));
    }
    handleRatesChange = (event) => {
        const value = event.currentTarget.value;
        let payload = {};
        // Reduce BAR → default to 003
        if (value === 'reduce_bar') {
            payload = { agent_rate_type_code: { code: '003' } };
            const discount = this.agent?.provided_discount;
            if (discount == null || Number.isNaN(discount)) {
                payload = { ...payload, provided_discount: 4 };
            }
        }
        // Other modes
        if (value === 'agent_rate_plans') {
            payload = { agent_rate_type_code: { code: '001' } };
        }
        if (value === 'contract_reference') {
            payload = { agent_rate_type_code: { code: '004' } };
        }
        this.updateField(payload);
    };
    get selectedRate() {
        const code = this.agent?.agent_rate_type_code?.code;
        if (code === '002' || code === '003')
            return 'reduce_bar';
        if (code === '001')
            return 'agent_rate_plans';
        if (code === '004')
            return 'contract_reference';
        return undefined;
    }
    render() {
        const isTourOperator = this.agent?.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR;
        return (h(Host, { key: 'b8f0c452aa8a89f9e328ea57a85a524888723c80', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (h("wa-card", { key: '35335a83c80950b9c22bd615d4c7e4fdec84f718', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '6d4899be70fe5dd1c32a827b1877c359ee5af8a5', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), h("wa-radio-group", { key: '48b6829580dd9b0153bf274d4afa575c4d85cbb6', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '49686a49023b88b5cf7dce362df1b06aab6b8788', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '7a8c687bfadf2545ba3828dff34ffbfeefcbb42f', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: 'db98edeae7d47a43f1a4a66ab019752ac08c6dad', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: '77e97b6e56446b69c6ea9e1b5ec9d31f8f2bf6ea', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '8b3dc43d488cf7e1c3a89f46075ad06aee249c64', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'e2e93633e1d9395a4d47cc9f7febf3199686d7fa', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '728caa158b207716525fc4284f833d735be7f43e', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'd1d9052f1794e0d32246b5478ee4718a0ba9736b', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: 'd65e45e1f1764b7a85af1899d8ade56c67ae14c6', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: 'c266bede534b404535804234479ed17fc446b76e', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: '3d9b81aa640707c5de7913125fbb37d714bd3b69', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'db3f4ca55f8b2bc8441683fbfc730fa4e83c69ae', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '482ca0aa5dea80b79659aaa854586516011aa767', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '72838594cd692a6d3d88f3b3461416016f85dde6', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '7f67fc8162a1cdf8625131ea8de795d1783361b7', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '08db97641830e060b8985282b3cc193e47edf249', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '93d25986b326e5fb6e41f33b2fe22c947243580a', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '1b010fe3ffcfee116de1b1cf6924b03508e074f5', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '6229bc2d16ba8fae68578e965cbdef20ce674342' }, h("div", { key: 'f969adca14a36cf1d1b5b8ae59566d993aec69c6', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: '8e945e00438a8aff2723a7fd2747417a0f05de62' }, h("wa-radio", { key: 'e96e73f5755ea93951073b23f3cc3a270bea648c', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '9d1bb21707095b3ca0c1fed163f12a141499d11e' }, h("div", { key: '8d911db8fa5ebc11503f0efa96b77715831aeeed', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: 'bd98d4fd8b483f13ab64de92f4d52ba97bebe33d', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '18bc7c35545be6714b8dfba4ad7a14bfd7dbb552', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '9cf200d2282cecea9e5ed4149f77fa7123453f02', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '095a0b72da37c04c79d76136dc143887900db297', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: 'ded4a0ba004d97b71a3e4e7749fd2688e0a96d77' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '28eaeef79be1ee5ec4366f004671be315ee26244' }, this.agent?.provided_discount, "%"))), h("div", { key: 'cb81218424351a008eccfffe9b94b515cc4cf84c', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: 'c9747a57557ba7d3e6385fe1c92c24576f1c820b', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '1d4b3789e4d7f469bd5d2aa4aedef8ba1d398da3', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: '846cddf28e93794887feb5c35fbd1a6d08795d74', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: 'cfdbe97886e4020ec0acea5dd9e19486c8bd1525', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'a38df49d82d98366b21478dd1909a68d24e5409b' }, h("div", { key: '2f877b27d0c521c30c22dca0520bc85e3d9f45fb', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'fe47f4a8721afff20dcc4b208fb2a51022807fac', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'a6f6721978e6f22a785ff9355c91398f2bf0e6fb', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'a9f431ce3c68ad7f33a33df5aeff7c89d56ce7c3', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: 'ca80a6995951c7bad6a19eb6522f1e58e2943ac0', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'ef479d588d9dd38d50612f71de71424509f855cd', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
                const code = e.currentTarget.value.toString();
                const paymentMethod = this.setupEntries.ta_payment_method.find(c => c.CODE_NAME === code);
                if (!paymentMethod) {
                    return;
                }
                this.updateField({
                    payment_mode: {
                        code: paymentMethod.CODE_NAME,
                        description: paymentMethod.CODE_VALUE_EN,
                    },
                });
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, t('Lcz_FromGuest', { fallback: 'From guest' })), h("div", { class: "radio-hint" }, t('Lcz_PaymentCollectedDirectlyFromGuest', { fallback: 'Payment collected directly from the guest' }))))))), isTourOperator && this.renderRoomTypeCodes()));
    }
    static get is() { return "ir-agent-contract"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-contract.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-contract.css"]
        };
    }
    static get properties() {
        return {
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AgentSetupEntries",
                    "resolved": "{ agent_rate_type: SetupEntries[]; agent_type: SetupEntries[]; ta_payment_method: SetupEntries[]; cl_post_timing: SetupEntries[]; }",
                    "references": {
                        "AgentSetupEntries": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-agents/types.ts::AgentSetupEntries",
                            "referenceLocation": "AgentSetupEntries"
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
            "roomTypeCodes": {},
            "roomTypeQuery": {}
        };
    }
    static get events() {
        return [{
                "method": "agentFieldChanged",
                "name": "agentFieldChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Partial<Agent>",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; rt_namings?: { name?: string; id?: number; room_type_id?: number; }[]; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "agent",
                "methodName": "handleAgentChange"
            }];
    }
}
