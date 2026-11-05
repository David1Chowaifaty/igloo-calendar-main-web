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
        return (index.h(index.Host, { key: '9b25d0b54a5c0e44723b9010e96e28374ac4ba75', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (index.h("wa-card", { key: '3ad52d900a9e3b441a3f6b92f1679fa3aaa8f23d', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: 'b459940226e35e276651948097b925fbbaebb1f8', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t.t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), index.h("wa-radio-group", { key: '2161e467565cc6df3892da3d469567d0b2f38e43', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: 'e37dd66a2f761f62202a89a7bf3e148725747afb', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: 'a497bf3605692b563caa4ae12dc3a63a859d92d3', class: "radio-title" }, t.t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), index.h("div", { key: 'f240aaeebb9f498bd14eefbe23e8f2717ac2bea1', class: "radio-hint" }, t.t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (index.h("div", { key: '133e5b675788374f7992da43a3c1a65815723411', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '3ee62865e291b78126e0ff31579bb8318cfd483e', schema: types.stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: 'f63c00ad48a106990d4db1ed5d9d691c4611ca91', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: 'bcb392ff07e90c1865c1b52cb2a7a0a13204af4e', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '14ef34fda7e9d90775aaf6fc84342120b7f04909', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '54c54231e7df95eb9131a36a092b90e42b3f5ff0', class: "radio-title" }, t.t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), index.h("div", { key: '0c2e7c3991abf24246ea3e56bfbd2e604cb0b209', class: "radio-hint" }, t.t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (index.h("div", { key: '5150d0f90da3e97a02184beb8f50499c1346cf56', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '19c88741061319be80e6a503aa75c0c1bad46942', schema: types.stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: 'a4f82ec45783ced445d466195273b965a9760ffe', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '9bf50777e01976eae3b8eafcfc45abaa0dd5176a', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '98bcb9ed8bda0b8ed6768d280de453f6824dac23', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t.t('Lcz_Rates', { fallback: 'Rates' })), index.h("ir-validator", { key: '16972d7f4b41e826a21849508b92810ee37570d3', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: '6b30ec279457a094d55d2a7b0e6e6dd33699ef8c', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: 'b54a94c869aaa47c14c9e228dbbcc057667f479c', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '98558b6c23be0123b74037cc4dfea6755f467f86' }, index.h("div", { key: 'ca7fd03520523ae1cf8cd8d9803b334f81fe83f0', class: "radio-title" }, t.t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (index.h(index.Fragment, { key: '5e90d06cb43e391130b11c915295abcf482f64ae' }, index.h("wa-radio", { key: 'fe7969f9638059fc382347bc26d849bb613c21c0', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '5a359de3a60d8144b95b94b889e5b27f5d03d439' }, index.h("div", { key: '6b5a9bfab49266e395764d3d03bba9229e832ac2', class: "radio-title" }, t.t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), index.h("div", { key: 'c3935096bc17bd0f6ee041fb2c4eea771905b198', class: "radio-hint" }, t.t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: 'd143a58d66c071c552aabdbd8d45c4e40078203e', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '0aea42d19849fd1edee856139922091406e0beef', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t.t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: '5c5965ee1c7ac61a0b70ce2d3f850a865467769d', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '00e3baa966646c9c562c0f47644c001d4bbc374e' }, t.t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && index.h("p", { key: '2bc33e553ed60ab1aa926d119117302e3a096062' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'd19f3dd8d75736172ad6c990ca00c07a46d2d81b', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: '64381b83ec9d374c833b19210a2114cb0306a962', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '2bf4eee5903a6116f65cd6906de2d56020bce65f', class: "rates-extra__title" }, t.t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), index.h("wa-switch", { key: 'd02bcec2a1434b78beade69f9e9a96539f723787', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '152e6f07a8408c0ae95965d1bca736c78c287765', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '57d2a54c2b08f2205775cb8e1119d454d1ee4860' }, index.h("div", { key: 'e7b62ad6e4c95c68ca350cf76653b7b59fd5991b', class: "radio-title" }, t.t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: '9baf2156047a0647dd0ba0061fdf0c4e532c5c68', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: 'a8ae39fcd352918cfad061f03fabacf49aabe32f', schema: types.stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '9f85e991f95cc2cff407b7fb7fe6d1ab85afe4c3', placeholder: t.t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: '8b0b18e337211065b74ceb634d0913524841059a', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: '042a4feec25f2e9d29248ebdcf374f358369d5f0', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t.t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
        return (index.h(index.Host, { key: '59c7457aaff579334371c72d3eb863d02cad1223', "data-testid": "agent-profile" }, index.h("wa-card", { key: 'b4ef0a06987a2d0582c76f382ed6ed0c56b1c89c', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '7db8f05e69dab9256ce93d6beb827936ac795f58', slot: "header", "data-testid": "agent-profile-business-title" }, t.t('Lcz_BusinessInformation', { fallback: 'Business Information' })), index.h("div", { key: 'ca736a8b51dde0c04a60ddda5649cc994f244327', class: "agent-form-group" }, index.h("ir-validator", { key: '7cf49143ced64efb0f5f9c18cd1690b94123591b', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: '0da5a965ed83db5679194f17004e98d745fe2cd1', size: "s", placeholder: t.t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, utils.getSetupEntryLabel(agent)))))), index.h("ir-validator", { key: 'd90fca60e4da17985c7044d4260a528408d1ff1d', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '37e3f557e0c8195706aa34f1fdcedd1507a8abe8', autocomplete: "none", placeholder: t.t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '6a578b09d910d3100a997fa6321a34a49bbdbaf4', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '069bb030bdaa06194ce27ada2d84a1d9823c3d10', placeholder: t.t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: 'abd4c88b381981bbc9c4eb7543e88cc88c4da165', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '18d29eafd55c3083520f8a47054a3a5495947c77', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t.t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: 'aef273acc0c5729bc8dc6ad8c4d95618833311e7', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: 'a943653b221d2c907785229dc5f522251f9df88d', slot: "header", "data-testid": "agent-profile-billing-title" }, t.t('Lcz_BillingAddress', { fallback: 'Billing Address' })), index.h("div", { key: '3a790db807a30f0a2ff13be90174610284ad019d', class: "agent-form-group" }, index.h("ir-validator", { key: 'caa9984e0b081e492d0f362dbaa9b888a7637b66', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '1a1017a099cab84d5b1e47738af453030a29483d', placeholder: t.t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: '27e2472c16b8409e0b1bc5201c7bf55f28c9e603', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: 'd019adb16cf4eb2555e12a5c4394e618ceec689d', placeholder: t.t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '4f16828c47074c7ba2eb533b50ac883c652beec1', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: '90ec2df2d68f7ab8eb77e161c26593d6f9112dc0', placeholder: t.t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: 'a179fcc07f78796308c0d11b8f06bfddc6b62459', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '43e519db40f3796e4597d1335cf10f3ed60b15f0', slot: "header", "data-testid": "agent-profile-contact-title" }, t.t('Lcz_ContactInformation', { fallback: 'Contact Information' })), index.h("div", { key: '32a3f1dfab293db029318382dd130ca85a07a727', class: "agent-form-group" }, index.h("ir-validator", { key: 'c7e5acf3e1874e6633db1fa541939ae2057c23ea', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '198dcef381a4b924688ba4985269fdd7319d1397', placeholder: t.t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '34863b6d5f659232d54b7e1f19acc947e0ed3f85', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '451524e20c74cbbc5dc394848d524c31d8ddfe92', placeholder: t.t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: 'f71463842487b54d8081ac80a0ce295fa8e97365', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: 'fb83cecf33287987eb17d7be70461ae4a85d91b0', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: '5573d7b32f5b404a7d8ec46ec5ff729a2a9c4314', placeholder: t.t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: 'a8f6513d2cb42b0fe0419c369e8f73c12b38378d', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'dc38c70a9ed41a5409ee9db64af668d8a9468ec7', placeholder: t.t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: '85be6723cc8f2ad191fe7901d54818c69cbdeb4e', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: 'f8d53322ec79a7f3f9766e7d58e5e0ca56ddf7f4', placeholder: t.t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
