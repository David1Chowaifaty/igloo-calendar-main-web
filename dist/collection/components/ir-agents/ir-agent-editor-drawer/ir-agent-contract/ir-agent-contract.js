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
        return (h(Host, { key: '2933a5f016599f71a9d0b4378038ea11151fe95a', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (h("wa-card", { key: '23657c338f1c342bfa21af639ed4b4453698601c', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: 'd21b455bc1120fa7060d3773b31678ca80e4d1ee', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), h("wa-radio-group", { key: '01ca0b57488bcb93a71ab16b4385bf4d63c9bb51', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '70ec65b99c59d6c573117e7ab106b4a1cc4a8f20', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '1f0c6d48f5de85bcabaf12ac0cbd14561c531be8', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: '788e870e2795db4c47139f8758f35a5278043426', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: 'f2777a8a2926a41ef7c1eec1b9c9454ed2a47c0c', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '353051d2d3cbc62f3a0203785290bba919cfa4c4', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '4db9aaffd7b2ea5dc3dd1cb7e072cb446457024a', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '58e278291b5554d188806102b53f16e2d5f0e6e9', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '69368b34e23744997e23f3eab140a7a64c8f8dfc', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '5e6c7b3e672fde164357ab7f09fdfafd7f08a806', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: '6c4ef95bad6421a518c774187c927168f1fb262a', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: 'c87b1317a43eb8432d284316a081f566ead4e6e8', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '6bb65934ecdfd4f0f23c88f5661d0138442ebda4', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '8b1780b88a515426f2244a4e327afd608aafca9f', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '3de6f375c5425e35f4677f2d2dcbe1566aa4c639', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '7209ff5208ac4816836561e29945f95f0d1c309d', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '61caf95784348f334fdbd1340302bfc5d3f4f49f', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '6e4e82a9fae96bef35d7d74f9b7e5a7fb9da33b7', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: 'a31b44527dc42c2ebd3ccccefd22c90433163000', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '1bfb2ad348e03dadf22989d92ce9b0826aba8dcf' }, h("div", { key: '637110910235bcc5d122812ddbd2487f0bc11333', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: 'acfe4d480c6e3743a3fcbab3b6d9051bb12626e3' }, h("wa-radio", { key: 'dbeb9644036ef1ff167f4991444fc853bfdd70c7', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '3f5b2807edbbd154e2888cb199ac2926aab34ab5' }, h("div", { key: 'd3c16dbf8c769af72c998803b2b26188ab29b7ce', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: 'c918d1f845a6996fdf38b2d0fd6802bea1ce5493', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '9f34ea0a31458c035747fafc5e2916303cd260a5', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '0e2a2938fa31d6d91a2e83c73ff1717bc59eb3cb', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'a7b32f69dc00868d2759b364294405727ef773c7', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '25a1b37bcebccdfedaa2b0cb9d2ef14fbb6b7391' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '4376d3721595b5de4431eaeeb0cbff59c5fe3924' }, this.agent?.provided_discount, "%"))), h("div", { key: 'ca5d3480873e7c2fef4adac511500b22637128df', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '95c9cda2a8f5c4e05d79d5e8c571fb0905ba8416', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '3891c52ee339221a98aa3d394fd8165e204a1355', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: 'b1dcd616b00001d8fc0b21fa10d6798bd355310e', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: 'b2672650f3e02cb0ec5f1f471487bdff6f74dd35', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'f289fedbf38a2c9b0dc79b1d5f320095d2ff37a9' }, h("div", { key: '89a3a7b52d7d5fc7be428805e1e95ac2d1f4bdaf', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'f69101b80d8e048823e3c97dccd03d7b31691cea', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: '2e13aa8568b1808478c0ebfa5018913f50d0ca30', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'c58f5c2e44be4be8d8ca5aa6fdff77288e064755', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: 'eb2b2f92a3583f77974c9947988fc91ae62fa7a8', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'fb4dfeb218500327102962f9c8414232ec1f40d4', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
