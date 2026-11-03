'use strict';

var index = require('./index-IDeZZwEK.js');
var type = require('./type-DxODN41W.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var t = require('./t-CqJPQrfm.js');
var types = require('./types-BVJQZ50e.js');
var utils = require('./utils-BwXEit5a.js');
require('./locale-scope-Cch-vf1R.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./language-observer-DKp37LIu.js');

/** Builds an O(1) lookup from the API array shape. */
function toRoomTypeCodeMap(list) {
    const map = {};
    for (const { id, room_type_id, name } of list ?? []) {
        map[room_type_id] = { id: id ?? -1, name };
    }
    return map;
}
/**
 * Converts the lookup back to the API array shape.
 * Blank names are dropped so clearing an input removes the mapping.
 */
function toRoomTypeCodeList(map) {
    const list = [];
    for (const [roomTypeId, { id, name }] of Object.entries(map)) {
        const trimmed = name?.trim();
        if (trimmed) {
            list.push({ id, room_type_id: Number(roomTypeId), name: trimmed });
        }
    }
    return list;
}

const irAgentContractCss = () => `.sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header),.contract-card.sc-ir-agent-contract [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header),.contract-card.sc-ir-agent-contract:first-of-type [part~="header"]{padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"],.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body),.contract-card--horizontal.sc-ir-agent-contract [part~="body"]{display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input),.rate-mode.sc-ir-agent-contract [part~="form-control-input"]{display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-inline-start:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}.room-code-list.sc-ir-agent-contract{list-style:none;margin:0;padding:0}.room-code-row.sc-ir-agent-contract{position:relative;display:grid;grid-template-columns:minmax(0, 1fr) auto minmax(8rem, 12rem);align-items:center;gap:0.75rem;padding-block:0.25rem}.room-code-row__name.sc-ir-agent-contract{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.875rem}.room-code-row__arrow.sc-ir-agent-contract{color:var(--wa-color-text-quiet);font-size:0.75rem}.room-code-row__arrow.sc-ir-agent-contract:dir(rtl){scale:-1 1}.room-code-row__sr-only.sc-ir-agent-contract{position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}@media (min-width: 1024px){.contract--room-codes.sc-ir-agent-contract-h{contain:size;display:flex;flex-direction:column}.contract-card--room-codes.sc-ir-agent-contract{flex:1 1 auto;min-block-size:0}.contract-card--room-codes.sc-ir-agent-contract::part(body){flex:1 1 auto;min-block-size:0}.room-code-list.sc-ir-agent-contract{flex:1 1 auto;min-block-size:12rem;overflow-y:auto;overscroll-behavior:contain;padding-inline-end:0.25rem}}`;

/** Show the room type search once the list no longer fits the scroll area. */
const ROOM_TYPE_SEARCH_THRESHOLD = 8;
const IrAgentContract = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged");
    }
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
        const roomTypes = (calendarData.calendar_data.property?.roomtypes ?? []).filter(rt => rt.is_active && !rt.is_virtual);
        const query = this.roomTypeQuery.trim().toLowerCase();
        const visibleRoomTypes = query ? roomTypes.filter(rt => rt.name.toLowerCase().includes(query)) : roomTypes;
        return (index.h("wa-card", { appearance: "plain", class: "contract-card contract-card--room-codes", "data-testid": "agent-contract-room-type-codes-card" }, index.h("p", { slot: "header", class: "contract-card__title", "data-testid": "agent-contract-room-type-codes-title" }, t.t('Lcz_RoomTypesAgentCustomCode', { fallback: 'Room Types & Agent Custom Code' })), roomTypes.length > ROOM_TYPE_SEARCH_THRESHOLD && (index.h("ir-input", { placeholder: t.t('Lcz_SearchRoomTypesPlaceholder', { fallback: 'Search room types' }), withClear: true, value: this.roomTypeQuery, "data-testid": "agent-contract-room-type-codes-search", onKeyDown: e => e.stopPropagation(), "onText-change": (e) => (this.roomTypeQuery = e.detail ?? '') }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }))), visibleRoomTypes.length === 0 ? (index.h("ir-empty-state", { message: roomTypes.length ? t.t('Lcz_NoRoomTypesMatchSearch', { fallback: 'No room types match your search' }) : t.t('Lcz_NoActiveRoomTypes', { fallback: 'No active room types' }) })) : (index.h("ul", { class: "room-code-list", "data-testid": "agent-contract-room-type-codes-list" }, visibleRoomTypes.map(rt => (index.h("li", { key: rt.id, class: "room-code-row", "data-testid": `agent-contract-room-type-code-row-${rt.id}` }, index.h("span", { class: "room-code-row__name", id: `room-code-name-${rt.id}` }, rt.name), index.h("wa-tooltip", { for: `room-code-name-${rt.id}` }, rt.name), index.h("wa-icon", { class: "room-code-row__arrow", name: "arrow-right", "aria-hidden": "true" }), index.h("ir-input", { class: "room-code-row__input", placeholder: t.t('Lcz_AgentCodePlaceholder', { fallback: 'Agent code' }), value: this.roomTypeCodes[rt.id]?.name ?? '', "data-testid": `agent-contract-room-type-code-input-${rt.id}`, onKeyDown: e => e.stopPropagation(), "onText-change": (e) => this.handleRoomTypeCodeChange(rt.id, e.detail) }, index.h("span", { slot: "label", class: "room-code-row__sr-only" }, rt.name)))))))));
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
        const isTourOperator = this.agent?.agent_type_code?.code === type.AgentsTypes.TOUR_OPERATOR;
        return (index.h(index.Host, { key: '4f49f057bb1f17e986ca5ed91ea1c5e6c790e703', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (index.h("wa-card", { key: 'a6acd6ca1e42d401b550047db36b3597ad4557be', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: '12d18801e851500e355d88533c29ab99d0939fd6', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t.t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), index.h("wa-radio-group", { key: 'fedf8e47eaf57df1fa297f6732db482169588dc5', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '5fe4be7ce0a7c55fa64108fa7855c161bb8ecbd8', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: 'a1a507608ca67cfc04946fdddbdcdcd68e9194d4', class: "radio-title" }, t.t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), index.h("div", { key: 'aab9c29af3ec1a7bd24e9fd9342603f80883101e', class: "radio-hint" }, t.t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (index.h("div", { key: '8fde5e378e53997c8ba4b05ad436fcaa65f0a518', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '0a09040939802aaef11be9f0a6063bc9b09e8af8', schema: types.stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: '0b2730407c467567a600012a94e6a106413d302d', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '65ec0c50c5719caf62b54bec0273d3be0b4b17fa', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: 'c7a6cdc76669dad5b05b30aebfcde190e79b37f2', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '397e53ad3a8a709e0636e552668375c1d15a609f', class: "radio-title" }, t.t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), index.h("div", { key: '7833e6ef837f84cc9bfe6ac8766b2466f375b7d8', class: "radio-hint" }, t.t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (index.h("div", { key: '9ed00df8e22c2e3aa38ecaafc4d0e85d90c52971', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '84f1a310fd67d2f31b5b7e04cbeabd7f30612aff', schema: types.stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '629e5a976e63ecbfb8805b6b994011cc9ef66c39', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: 'c4aaacc2c8f6e4a333a5a430dc29c206fc35f8c3', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '67c312cde1a1632b981d1595b33fc808c9dc042b', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t.t('Lcz_Rates', { fallback: 'Rates' })), index.h("ir-validator", { key: '1ab36d9a2e44d88dfc15599dd109b4ba9b7796cf', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: '3a74628c2bc9f60f908cdabe9adce5675a80101b', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: '8e9a01b414845eaf559e5c81b807a63afd25c22f', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '717fb80df16ba09a17db40add84a2b8f3a1ed4d9' }, index.h("div", { key: 'f6c270371facb4b4fa5363b52cd1910c5bb264a6', class: "radio-title" }, t.t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (index.h(index.Fragment, { key: '12049b3a7e3dfc536c42561be8b5762a38912771' }, index.h("wa-radio", { key: '8212158da5acbbb0876520b96ed939d1b57b187a', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '4f24be34501db0a2f96e164376040c64d77d861a' }, index.h("div", { key: 'cd7ec3fe46dc707269d73b879713af4975e14ab0', class: "radio-title" }, t.t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), index.h("div", { key: '3e2078a3abbeb7720d90af3c2e800bddbd3a1dfe', class: "radio-hint" }, t.t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: 'f09dbc49bfb776066fbfe02132cba45599d5c42c', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '6c3dc67b72d44d020ccbe2c54586b7eb16343f60', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t.t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: 'e0781ae4818aba6976cddad574cc0614f58e0e92', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: 'd2f0e89edbfb531c63a0418ebad509e63846b9fd' }, t.t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && index.h("p", { key: '9092ec39c6ce64d7eef34736a75b3e2362926476' }, this.agent?.provided_discount, "%"))), index.h("div", { key: '4d5549b2667fbab1cbafc9dc92151abfd2686c17', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: 'de2aec70404c69817bb1c13dfea7b1ecc2eaea49', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '43dddc77221eead7af0fb728c9805ed038b34b83', class: "rates-extra__title" }, t.t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), index.h("wa-switch", { key: '426406049407e77bdf83c30a45b020507d792a1c', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '30b5534d41ff3ab9454cf9b67b901d95d9a66955', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '0fbe608b701884bcb98c13ad967f926e665a7505' }, index.h("div", { key: '085d723f0e63b08526e3e2252536a50dfa3b36ce', class: "radio-title" }, t.t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: 'e1664aff648236ac5b20ea212fd706aab67afa6f', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: '8778acd8925816dc483c02fecf901d88d0725565', schema: types.stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '74c7ba631ad9d165aa89f27cbad86f5bef213cf4', placeholder: t.t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: 'bcd73adf6f3837ee6d23db4ff8927d7628c71563', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: '18b12425440b8eeeb3e3af281319a469f7823ba7', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t.t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, index.h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))), index.h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, t.t('Lcz_FromGuest', { fallback: 'From guest' })), index.h("div", { class: "radio-hint" }, t.t('Lcz_PaymentCollectedDirectlyFromGuest', { fallback: 'Payment collected directly from the guest' }))))))), isTourOperator && this.renderRoomTypeCodes()));
    }
    static get watchers() { return {
        "agent": [{
                "handleAgentChange": 0
            }]
    }; }
};
IrAgentContract.style = irAgentContractCss();

const irAgentProfileCss = () => `.agent-profile.sc-ir-agent-profile,.agent-form-group.sc-ir-agent-profile{display:flex;flex-direction:column;gap:1rem}.agent-card.--status-card.sc-ir-agent-profile::part(body),.agent-card.--status-card.sc-ir-agent-profile [part~="body"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(body),.agent-card.sc-ir-agent-profile [part~="body"]{padding-inline:0;padding-bottom:0;padding-top:1rem}.agent-card.--business-info.sc-ir-agent-profile::part(header),.agent-card.--business-info.sc-ir-agent-profile [part~="header"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(header),.agent-card.sc-ir-agent-profile [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.agent-card.sc-ir-agent-profile p.sc-ir-agent-profile{padding:0;margin:0}.agent-card--horizontal.sc-ir-agent-profile::part(body),.agent-card--horizontal.sc-ir-agent-profile [part~="body"]{display:flex;align-items:center;gap:1rem}.agent-card__header.sc-ir-agent-profile{flex:1 1 0%}.agent-card__description.sc-ir-agent-profile{font-size:0.75rem;color:var(--wa-color-text-quiet)}.agent-form-row.sc-ir-agent-profile{display:flex;align-items:center;justify-content:space-between;gap:1rem}@media (min-width: 768px){.agent-card.sc-ir-agent-profile::part(body){padding-inline-start:0.5rem}}`;

const IrAgentProfile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged");
    }
    agent;
    countries;
    setupEntries;
    agentFieldChanged;
    updateField(value) {
        const agent = this.agent ?? {};
        this.agentFieldChanged.emit({ ...agent, ...value });
    }
    getCountryPhonePrefix() {
        if (!this.agent?.country_id) {
            return;
        }
        const country = this.countries.find(c => c.id.toString() === this.agent.country_id.toString());
        if (!country) {
            return;
        }
        return country.phone_prefix;
    }
    render() {
        const agent = this.agent;
        const phone_prefix = this.getCountryPhonePrefix();
        return (index.h(index.Host, { key: '79304415a36c6354104978c97fb6f2d63602a601', "data-testid": "agent-profile" }, index.h("wa-card", { key: '68e2dae94d74e20055eed035ad28da26eb92377f', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: 'c837b943e0ffa58ddf495a2d4cd315657ade64c3', slot: "header", "data-testid": "agent-profile-business-title" }, t.t('Lcz_BusinessInformation', { fallback: 'Business Information' })), index.h("div", { key: 'e1b4cb2a6098d8208b00c7fee489c6660efa2a61', class: "agent-form-group" }, index.h("ir-validator", { key: '90191c39199c5074cdd90d3ca6e8a3145c19736b', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: '783959c19e1147a5b3140c1c4e27d73055148285', size: "s", placeholder: t.t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
                const code = e.target.value;
                let payload = { agent_type_code: { code, description: '' } };
                if (code === type.AgentsTypes.TOUR_OPERATOR) {
                    payload = {
                        ...payload,
                        payment_mode: {
                            code: '001',
                        },
                        verification_mode: null,
                        provided_discount: null,
                        code: null,
                        question: null,
                        agent_rate_type_code: {
                            code: '001',
                        },
                    };
                }
                this.updateField(payload);
            } }, this.setupEntries.agent_type
            ?.filter(t => t.CODE_NAME !== '004')
            ?.sort((a, b) => utils.getSetupEntryLabel(a).toLowerCase().localeCompare(utils.getSetupEntryLabel(b).toLowerCase()))
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, utils.getSetupEntryLabel(agent)))))), index.h("ir-validator", { key: 'ec025ea28a5cd70c184ef9afe51be1c2adc6101c', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '1f7055d5a890ceb625c6b63229d7365b9c40d04b', autocomplete: "none", placeholder: t.t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '82ed10da336df32864e640e42e8511b2f8e3e304', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '1df3985e34d6101690d06cd00a99a256d3771b46', placeholder: t.t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: '5b0fa553c0aa6a14edabdbd4175435ee192c325c', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '2d471e8b1a9a6d575fa911124580971b82508f71', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t.t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: '9f768ed1040704694543217e8111b2c2f95ff607', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: '978c22bda1b33545e33d63784f6bb3e287ab985e', slot: "header", "data-testid": "agent-profile-billing-title" }, t.t('Lcz_BillingAddress', { fallback: 'Billing Address' })), index.h("div", { key: '89cb202fe24eabc5d8367e77c185c230a64be929', class: "agent-form-group" }, index.h("ir-validator", { key: 'c138643e5c5ed5ca24ea7964a7643434e84a1cd5', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: 'f70b2bea214ec74cd1701571a07ee55039fe4814', placeholder: t.t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: 'd85fcfde2033c5dc2e79e0c93c222be3408f9138', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '9653eb2006003cc68bc943fe437de00ff4909f75', placeholder: t.t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '34d3ad3a4514387e67c0375a433965f37bac167e', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: 'd019feb549261dbaf3d1f99049d024e3e1b901af', placeholder: t.t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: 'fd7169f1aa7bb56791ff2e26fc2f4a621e5a4391', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '99ac60b1476dfee0e18cfaf43b2b7b6f6eda2125', slot: "header", "data-testid": "agent-profile-contact-title" }, t.t('Lcz_ContactInformation', { fallback: 'Contact Information' })), index.h("div", { key: '881ae0a84b314807c0972ebfd085e7fbefdb7954', class: "agent-form-group" }, index.h("ir-validator", { key: '9458bf8278ab39b6f969ac87aaef4b4c00747a0e', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '023fa8e590141d9e1e02b43e28fa8a9d17a76823', placeholder: t.t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '3756f92927f226c2a76ecd9da77e4de14fb8c792', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '35ce208b3227c0987f208a92728682fa2ba33e49', placeholder: t.t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: '669269e066f4f922db335cb964084f9dcc31ffaa', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: 'e467869528a9ee8e6585caaaed8f9660ab2f8f7b', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: '380b56d3fae7ebfc367c3611cc2853071e50a69f', placeholder: t.t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: '3c70c0e4dc8b151ebfadd1a416f0c7e2392351ab', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'd03173d1598ba1560c1512e07e1c10139f8b94b2', placeholder: t.t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: 'f8135f18cc6a10e7d974571892aaa80f8f423932', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: 'fc3d1e38a42d096197895ce4ca09a2dcd0485036', placeholder: t.t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
