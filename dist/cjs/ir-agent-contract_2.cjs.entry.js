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
        return (index.h(index.Host, { key: '2933a5f016599f71a9d0b4378038ea11151fe95a', "data-testid": "agent-contract", class: { 'contract--room-codes': isTourOperator } }, !isTourOperator && (index.h("wa-card", { key: '23657c338f1c342bfa21af639ed4b4453698601c', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: 'd21b455bc1120fa7060d3773b31678ca80e4d1ee', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t.t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), index.h("wa-radio-group", { key: '01ca0b57488bcb93a71ab16b4385bf4d63c9bb51', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '70ec65b99c59d6c573117e7ab106b4a1cc4a8f20', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: '1f0c6d48f5de85bcabaf12ac0cbd14561c531be8', class: "radio-title" }, t.t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), index.h("div", { key: '788e870e2795db4c47139f8758f35a5278043426', class: "radio-hint" }, t.t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (index.h("div", { key: 'f2777a8a2926a41ef7c1eec1b9c9454ed2a47c0c', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '353051d2d3cbc62f3a0203785290bba919cfa4c4', schema: types.stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: '4db9aaffd7b2ea5dc3dd1cb7e072cb446457024a', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '58e278291b5554d188806102b53f16e2d5f0e6e9', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '69368b34e23744997e23f3eab140a7a64c8f8dfc', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '5e6c7b3e672fde164357ab7f09fdfafd7f08a806', class: "radio-title" }, t.t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), index.h("div", { key: '6c4ef95bad6421a518c774187c927168f1fb262a', class: "radio-hint" }, t.t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (index.h("div", { key: 'c87b1317a43eb8432d284316a081f566ead4e6e8', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '6bb65934ecdfd4f0f23c88f5661d0138442ebda4', schema: types.stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '8b1780b88a515426f2244a4e327afd608aafca9f', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '3de6f375c5425e35f4677f2d2dcbe1566aa4c639', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '7209ff5208ac4816836561e29945f95f0d1c309d', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t.t('Lcz_Rates', { fallback: 'Rates' })), index.h("ir-validator", { key: '61caf95784348f334fdbd1340302bfc5d3f4f49f', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: '6e4e82a9fae96bef35d7d74f9b7e5a7fb9da33b7', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: 'a31b44527dc42c2ebd3ccccefd22c90433163000', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '1bfb2ad348e03dadf22989d92ce9b0826aba8dcf' }, index.h("div", { key: '637110910235bcc5d122812ddbd2487f0bc11333', class: "radio-title" }, t.t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (index.h(index.Fragment, { key: 'acfe4d480c6e3743a3fcbab3b6d9051bb12626e3' }, index.h("wa-radio", { key: 'dbeb9644036ef1ff167f4991444fc853bfdd70c7', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '3f5b2807edbbd154e2888cb199ac2926aab34ab5' }, index.h("div", { key: 'd3c16dbf8c769af72c998803b2b26188ab29b7ce', class: "radio-title" }, t.t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), index.h("div", { key: 'c918d1f845a6996fdf38b2d0fd6802bea1ce5493', class: "radio-hint" }, t.t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: '9f34ea0a31458c035747fafc5e2916303cd260a5', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '0e2a2938fa31d6d91a2e83c73ff1717bc59eb3cb', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t.t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: 'a7b32f69dc00868d2759b364294405727ef773c7', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '25a1b37bcebccdfedaa2b0cb9d2ef14fbb6b7391' }, t.t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && index.h("p", { key: '4376d3721595b5de4431eaeeb0cbff59c5fe3924' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'ca5d3480873e7c2fef4adac511500b22637128df', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: '95c9cda2a8f5c4e05d79d5e8c571fb0905ba8416', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '3891c52ee339221a98aa3d394fd8165e204a1355', class: "rates-extra__title" }, t.t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), index.h("wa-switch", { key: 'b1dcd616b00001d8fc0b21fa10d6798bd355310e', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: 'b2672650f3e02cb0ec5f1f471487bdff6f74dd35', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: 'f289fedbf38a2c9b0dc79b1d5f320095d2ff37a9' }, index.h("div", { key: '89a3a7b52d7d5fc7be428805e1e95ac2d1f4bdaf', class: "radio-title" }, t.t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: 'f69101b80d8e048823e3c97dccd03d7b31691cea', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: '2e13aa8568b1808478c0ebfa5018913f50d0ca30', schema: types.stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: 'c58f5c2e44be4be8d8ca5aa6fdff77288e064755', placeholder: t.t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: 'eb2b2f92a3583f77974c9947988fc91ae62fa7a8', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: 'fb4dfeb218500327102962f9c8414232ec1f40d4', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t.t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
        return (index.h(index.Host, { key: '1b3aa746d99abf0c5af73a746117e50b804f0d58', "data-testid": "agent-profile" }, index.h("wa-card", { key: '036f98e8a29b0ee9a9b50a28637c591176d3b0d9', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '0d2f188086661abfbf6a037f303804a7550f2461', slot: "header", "data-testid": "agent-profile-business-title" }, t.t('Lcz_BusinessInformation', { fallback: 'Business Information' })), index.h("div", { key: '5cec59f5c2b1935abe92c8d3c15ec67c8e649a9d', class: "agent-form-group" }, index.h("ir-validator", { key: 'f59a1ad4d21115aff90d07c6dfc56232b0c288cd', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: '8404a4e236b007d80f2ceab9fa467e5d361072d0', size: "s", placeholder: t.t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, utils.getSetupEntryLabel(agent)))))), index.h("ir-validator", { key: '76a6cfa9d750dc0b931daaaf4bde073c75402aca', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: 'fa3960f7027aacde49631f4214baa102c7f1391f', autocomplete: "none", placeholder: t.t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '4a2ca4fef8c4cef8bb8d0684a39a304be61842ab', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '82e143a8b9c8571570ab702f52d80aa82175042f', placeholder: t.t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: 'b88fd68149251530176b0b168d0ba943274ba752', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '340bf8d7bc1b53d24d2780145272fccc60a1baca', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t.t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: '015dc10124ca24af75c37e7c5c96ff602c0f033a', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: 'bb9248fc8d6335a754c729022f1ae239e0e9f79a', slot: "header", "data-testid": "agent-profile-billing-title" }, t.t('Lcz_BillingAddress', { fallback: 'Billing Address' })), index.h("div", { key: 'e722628a048f617cac3168a06e657d27ba6d8cd0', class: "agent-form-group" }, index.h("ir-validator", { key: 'd86d2671aa5044f7c01f1a4691f9d8968f8844db', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '1124568bedeeb9d538a9d8c4b5dd5723fe88d991', placeholder: t.t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: 'cda8054581090a5beedb1f3d0cd8e2b21f58d509', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '8fd900d79d189be879b90f6c0580fc12a3eb1742', placeholder: t.t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '09a445408bbfcde58c3081e1923b06ec04949b37', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: '660c07cce77184e46a40b2f1df87ef756383ceda', placeholder: t.t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: '4b8425bfdc5f758df16a0ff82f31d04df883e48f', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '4820c26a019ac0c8e6d1bc6beb758e75a6bec94e', slot: "header", "data-testid": "agent-profile-contact-title" }, t.t('Lcz_ContactInformation', { fallback: 'Contact Information' })), index.h("div", { key: 'b58ef32613d4af8083397b2a5222782dc0ed3607', class: "agent-form-group" }, index.h("ir-validator", { key: 'cb13dc3f10e9d71441c51535368cbc1d4d927ac1', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '38c228c1611290e3b6cb1a7fbcda485ead8a4f4f', placeholder: t.t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: 'c63a0a18dc8c162aa90fb4fe4527c46fb2445c83', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '88e43a83523b7e8754ab7f9acb3c00d3c7c64600', placeholder: t.t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: '1b4ed9d5319086d2b8fe95504c482a605168defb', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: 'bb3c0700b5c7f9f87a3a48bd703864bf0a89bc72', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: 'a67843e1b4ee576a408f91b3b801714e43f38e47', placeholder: t.t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: 'ec4f118ce058ac7b2288f4e14fb0de52baeb1034', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: '90e85edd2d9d0fead4cee3418b1e1bfd62f83eb3', placeholder: t.t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: '4f6d630cf367c6a75a855f56956660b3c8676cf4', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '348f33d6532437dbab0063ecda14032aef4dcbee', placeholder: t.t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
