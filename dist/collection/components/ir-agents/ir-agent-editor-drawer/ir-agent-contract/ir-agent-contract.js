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
        return (h(Host, { key: '9b25d0b54a5c0e44723b9010e96e28374ac4ba75', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (h("wa-card", { key: '3ad52d900a9e3b441a3f6b92f1679fa3aaa8f23d', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: 'b459940226e35e276651948097b925fbbaebb1f8', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), h("wa-radio-group", { key: '2161e467565cc6df3892da3d469567d0b2f38e43', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: 'e37dd66a2f761f62202a89a7bf3e148725747afb', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: 'a497bf3605692b563caa4ae12dc3a63a859d92d3', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: 'f240aaeebb9f498bd14eefbe23e8f2717ac2bea1', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: '133e5b675788374f7992da43a3c1a65815723411', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '3ee62865e291b78126e0ff31579bb8318cfd483e', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'f63c00ad48a106990d4db1ed5d9d691c4611ca91', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'bcb392ff07e90c1865c1b52cb2a7a0a13204af4e', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '14ef34fda7e9d90775aaf6fc84342120b7f04909', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '54c54231e7df95eb9131a36a092b90e42b3f5ff0', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: '0c2e7c3991abf24246ea3e56bfbd2e604cb0b209', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: '5150d0f90da3e97a02184beb8f50499c1346cf56', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '19c88741061319be80e6a503aa75c0c1bad46942', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: 'a4f82ec45783ced445d466195273b965a9760ffe', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '9bf50777e01976eae3b8eafcfc45abaa0dd5176a', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '98bcb9ed8bda0b8ed6768d280de453f6824dac23', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '16972d7f4b41e826a21849508b92810ee37570d3', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '6b30ec279457a094d55d2a7b0e6e6dd33699ef8c', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: 'b54a94c869aaa47c14c9e228dbbcc057667f479c', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '98558b6c23be0123b74037cc4dfea6755f467f86' }, h("div", { key: 'ca7fd03520523ae1cf8cd8d9803b334f81fe83f0', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: '5e90d06cb43e391130b11c915295abcf482f64ae' }, h("wa-radio", { key: 'fe7969f9638059fc382347bc26d849bb613c21c0', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '5a359de3a60d8144b95b94b889e5b27f5d03d439' }, h("div", { key: '6b5a9bfab49266e395764d3d03bba9229e832ac2', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: 'c3935096bc17bd0f6ee041fb2c4eea771905b198', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'd143a58d66c071c552aabdbd8d45c4e40078203e', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '0aea42d19849fd1edee856139922091406e0beef', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '5c5965ee1c7ac61a0b70ce2d3f850a865467769d', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '00e3baa966646c9c562c0f47644c001d4bbc374e' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '2bc33e553ed60ab1aa926d119117302e3a096062' }, this.agent?.provided_discount, "%"))), h("div", { key: 'd19f3dd8d75736172ad6c990ca00c07a46d2d81b', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '64381b83ec9d374c833b19210a2114cb0306a962', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '2bf4eee5903a6116f65cd6906de2d56020bce65f', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: 'd02bcec2a1434b78beade69f9e9a96539f723787', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '152e6f07a8408c0ae95965d1bca736c78c287765', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '57d2a54c2b08f2205775cb8e1119d454d1ee4860' }, h("div", { key: 'e7b62ad6e4c95c68ca350cf76653b7b59fd5991b', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '9baf2156047a0647dd0ba0061fdf0c4e532c5c68', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'a8ae39fcd352918cfad061f03fabacf49aabe32f', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: '9f85e991f95cc2cff407b7fb7fe6d1ab85afe4c3', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: '8b0b18e337211065b74ceb634d0913524841059a', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: '042a4feec25f2e9d29248ebdcf374f358369d5f0', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
