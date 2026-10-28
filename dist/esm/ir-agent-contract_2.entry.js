import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { A as AgentBaseSchema, b as AgentsTypes } from './type-B1KlYN_1.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { t } from './t-Bvz1wS_D.js';
import { s as stringType } from './types-DFSK8b1u.js';
import { d as getSetupEntryLabel } from './utils-CdZUSdfj.js';
import './locale-scope-Jre4lb6k.js';
import './IBooking-BagKIdFh.js';
import './commonSchemas-B3RVKogc.js';

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
        registerInstance(this, hostRef);
        this.agentFieldChanged = createEvent(this, "agentFieldChanged");
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
            } }, h("wa-radio", { key: '49686a49023b88b5cf7dce362df1b06aab6b8788', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '7a8c687bfadf2545ba3828dff34ffbfeefcbb42f', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: 'db98edeae7d47a43f1a4a66ab019752ac08c6dad', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: '77e97b6e56446b69c6ea9e1b5ec9d31f8f2bf6ea', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '8b3dc43d488cf7e1c3a89f46075ad06aee249c64', schema: stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'e2e93633e1d9395a4d47cc9f7febf3199686d7fa', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '728caa158b207716525fc4284f833d735be7f43e', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'd1d9052f1794e0d32246b5478ee4718a0ba9736b', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: 'd65e45e1f1764b7a85af1899d8ade56c67ae14c6', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: 'c266bede534b404535804234479ed17fc446b76e', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: '3d9b81aa640707c5de7913125fbb37d714bd3b69', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'db3f4ca55f8b2bc8441683fbfc730fa4e83c69ae', schema: stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '482ca0aa5dea80b79659aaa854586516011aa767', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '72838594cd692a6d3d88f3b3461416016f85dde6', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '7f67fc8162a1cdf8625131ea8de795d1783361b7', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '08db97641830e060b8985282b3cc193e47edf249', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '93d25986b326e5fb6e41f33b2fe22c947243580a', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '1b010fe3ffcfee116de1b1cf6924b03508e074f5', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '6229bc2d16ba8fae68578e965cbdef20ce674342' }, h("div", { key: 'f969adca14a36cf1d1b5b8ae59566d993aec69c6', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: '8e945e00438a8aff2723a7fd2747417a0f05de62' }, h("wa-radio", { key: 'e96e73f5755ea93951073b23f3cc3a270bea648c', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '9d1bb21707095b3ca0c1fed163f12a141499d11e' }, h("div", { key: '8d911db8fa5ebc11503f0efa96b77715831aeeed', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: 'bd98d4fd8b483f13ab64de92f4d52ba97bebe33d', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '18bc7c35545be6714b8dfba4ad7a14bfd7dbb552', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '9cf200d2282cecea9e5ed4149f77fa7123453f02', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '095a0b72da37c04c79d76136dc143887900db297', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: 'ded4a0ba004d97b71a3e4e7749fd2688e0a96d77' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '28eaeef79be1ee5ec4366f004671be315ee26244' }, this.agent?.provided_discount, "%"))), h("div", { key: 'cb81218424351a008eccfffe9b94b515cc4cf84c', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: 'c9747a57557ba7d3e6385fe1c92c24576f1c820b', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '1d4b3789e4d7f469bd5d2aa4aedef8ba1d398da3', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: '846cddf28e93794887feb5c35fbd1a6d08795d74', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: 'cfdbe97886e4020ec0acea5dd9e19486c8bd1525', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'a38df49d82d98366b21478dd1909a68d24e5409b' }, h("div", { key: '2f877b27d0c521c30c22dca0520bc85e3d9f45fb', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'fe47f4a8721afff20dcc4b208fb2a51022807fac', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'a6f6721978e6f22a785ff9355c91398f2bf0e6fb', schema: stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'a9f431ce3c68ad7f33a33df5aeff7c89d56ce7c3', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
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
        registerInstance(this, hostRef);
        this.agentFieldChanged = createEvent(this, "agentFieldChanged");
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
        return (h(Host, { key: '7690e595e5d3cb184eee60cd2c481c2be3899784', "data-testid": "agent-profile" }, h("wa-card", { key: '08214e850a6175d3ceb21b406cd1258ba06bbd19', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '09a8c4cb5603cb5b3e0f94da7872b86c014dcda2', slot: "header", "data-testid": "agent-profile-business-title" }, t('Lcz_BusinessInformation', { fallback: 'Business Information' })), h("div", { key: 'b5c9defa3d9df8a48be0665e5bc430a2f7a853f8', class: "agent-form-group" }, h("ir-validator", { key: '08dd4532a216195a426bd27bf2f2171894f9742c', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: '58c069b107a00b187c519876c9ff60acb91b3ca1', size: "s", placeholder: t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
                const code = e.target.value;
                let payload = { agent_type_code: { code, description: '' } };
                if (code === AgentsTypes.TOUR_OPERATOR) {
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
            ?.sort((a, b) => getSetupEntryLabel(a).toLowerCase().localeCompare(getSetupEntryLabel(b).toLowerCase()))
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, getSetupEntryLabel(agent)))))), h("ir-validator", { key: 'ca656c3d42964c6ee7335c4d315e761e0c208318', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: 'c1e6639d07dcdaebe91a352e6205ffa10de5feb1', autocomplete: "none", placeholder: t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: 'b83d69f0a349e500fc943aaf6c7bf9cc0037ada9', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: 'c10f4d265f10a3ff59aa8b844c257a38498c4870', placeholder: t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: 'f9f35b8ed0ea36a530f77df615e58df20fe247c0', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: 'ffc21f0a9fe3d00fa8aa19a11ad1f645513159fb', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), h("wa-card", { key: '0e8afeae3d31f6d9f9029b6c42daf8b4539ddf1c', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: 'b53fb939927c0ca02da144f7ada55b10246c7502', slot: "header", "data-testid": "agent-profile-billing-title" }, t('Lcz_BillingAddress', { fallback: 'Billing Address' })), h("div", { key: 'e9d72b3a1e28d77ce88cdcbe477fda09fa0ec08d', class: "agent-form-group" }, h("ir-validator", { key: '740287c72586bb1bde015fb3d7aa2d9f6b6132fa', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: '86bc0c1f3703d7e300a1abc71488fc19773fa63f', placeholder: t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: '10e64aa984c419b38eb429a4e727aac231dfe1a5', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: '954621139d8f5d6f013302a711c3932e1beb4db2', placeholder: t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: 'a6dcfe0c56b118e8e53e8673d25898e7382ea962', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: 'c473c2b648ae67a8b6028b47f1da0f539b3f1e8a', placeholder: t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: '843e22cee652e254d2cbaf39b1e1c840604b5900', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: 'b4eea1984ae3eaf73f007d43b50a899ad537858e', slot: "header", "data-testid": "agent-profile-contact-title" }, t('Lcz_ContactInformation', { fallback: 'Contact Information' })), h("div", { key: '6ddb338bb0ceb2767a3ee4e6b79491e2d470ce56', class: "agent-form-group" }, h("ir-validator", { key: '1c76f91186439fc0e4fdeb69d4f7182cbdc44302', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: 'ec36f28ba8824a6bf99f262dd8712d0d9b54bfa4', placeholder: t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: '480e98ab22c5e426d460ee88610ee61270218e5e', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: 'a3bc64456d7181c8a06a15584483cf37cddb224a', placeholder: t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: '8c7d51a0f44ecb83f4ad7f6527664b6d1e39fee6', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: '44298bba5cf86610042d4e20d07cdd8e253926fa', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: 'a5c157688b29ab3b8ae738a9ee8f10fff35b0ad4', placeholder: t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: '104acde4639f6ba28bffb00ff989379b6f04b082', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: '326be225fc99c2aec22bb2a10eaccee7a3fb7a71', placeholder: t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), h("ir-validator", { key: 'b09046d53ded51b9a63949854ab63c8caf47a265', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: 'adebff2eba47fec4b7ef30eac401fd291ae06988', placeholder: t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

export { IrAgentContract as ir_agent_contract, IrAgentProfile as ir_agent_profile };
