'use strict';

var index = require('./index-IDeZZwEK.js');
var types = require('./types-CJnnlbYN.js');
var enums = require('./enums-BSCnMYlE.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./moment-CdViwxPQ.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irExtraServicesTableCss = () => `.sc-ir-extra-services-table-h{display:block}.extra-services-table__action.sc-ir-extra-services-table{display:flex;min-width:60px;justify-content:flex-end}.extra-services-table__muted.sc-ir-extra-services-table{font-size:0.8125rem;color:var(--wa-color-text-quiet, var(--wa-color-neutral-on-quiet));white-space:normal !important}`;

const tableCss = () => `.sc-ir-extra-services-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-extra-services-table{overflow-x:auto}.table--container.sc-ir-extra-services-table,.data-table.sc-ir-extra-services-table{height:100%}.ir-table-row.sc-ir-extra-services-table td.sc-ir-extra-services-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-extra-services-table td.sc-ir-extra-services-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-extra-services-table tbody.sc-ir-extra-services-table tr.sc-ir-extra-services-table:last-child>td.sc-ir-extra-services-table{border-bottom:0 !important}.cell--align-start.sc-ir-extra-services-table{text-align:start !important}.cell--align-center.sc-ir-extra-services-table{text-align:center !important}.cell--align-end.sc-ir-extra-services-table{text-align:end !important}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sc-ir-extra-services-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sc-ir-extra-services-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-extra-services-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-extra-services-table,.ir-table-row.sc-ir-extra-services-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-extra-services-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-extra-services-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-extra-services-table svg.sc-ir-extra-services-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-extra-services-table:active td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-extra-services-table td.sc-ir-extra-services-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-extra-services-table:active td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-extra-services-table .empty-row.sc-ir-extra-services-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-extra-services-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-extra-services-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrExtraServicesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertExtraService = index.createEvent(this, "upsertExtraService");
        this.toggleExtraServiceActive = index.createEvent(this, "toggleExtraServiceActive");
    }
    services = [];
    section;
    propertyId;
    upsertExtraService;
    toggleExtraServiceActive;
    isAddonSection() {
        return this.section === types.ExtraServiceSection.BookingEngineAddon;
    }
    getVatLabel(service) {
        return service.vat_mode === enums.VatIncludedCodes.Inclusive ? t.t('Lcz_Inclusive', { fallback: 'Inclusive' }) : t.t('Lcz_Exclusive', { fallback: 'Exclusive' });
    }
    getDetails(service) {
        if (service.code !== types.AccommodationExtraCode.DayUse || !service.day_use_config) {
            return null;
        }
        const { block_night, default_start_time, default_end_time } = service.day_use_config;
        return t.t('Lcz_BlockNightDetailFormat', {
            fallback: `Block Night: ${block_night ? 'Yes' : 'No'} (${default_start_time}–${default_end_time})`,
            params: [block_night ? t.t('Lcz_YES', { fallback: 'Yes' }) : t.t('Lcz_NO', { fallback: 'No' }), default_start_time, default_end_time],
        });
    }
    createAddon = () => {
        this.upsertExtraService.emit(types.createBlankAddon(this.propertyId));
    };
    render() {
        return (index.h(index.Host, { key: '3046c7fc42a1300db8c9e499e1993cdc0fd16c85' }, index.h("div", { key: '750beee8d2084f03791f08ddeb2fd45ded4fc0dd', class: "table--container" }, index.h("table", { key: '8b0acad612655a6e9249df107e351d2f2fd82de7', class: "table" }, index.h("thead", { key: 'a4b0b7a6bf4327778b28184f965b5733b9e96a05' }, index.h("tr", { key: '5f1f9726486db83ed08d31121ab70cb8198f8aff' }, index.h("th", { key: 'd55e717c6a3c53925e46435fe2de39930ed7452a', class: "extra-services-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '122c350bd4b64a246fb14a1d6d9b1eebbf6ecc47', class: "extra-services-table__header" }, t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), index.h("th", { key: '03b12b2771cc3180af62deefda630ab2e64187f7', class: "extra-services-table__header" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("th", { key: '22a4e228e535d1b65c730b1bbfe42066b44ee181', class: "extra-services-table__header" }, t.t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), index.h("th", { key: 'a409d184011118f0a0bc3e3a60a567b91551228c', class: "extra-services-table__header" }, t.t('Lcz_DetailsHeader', { fallback: 'Details' })), index.h("th", { key: '9f66fa2ede56a53a3ad9978823e60d2208c28441', class: "extra-services-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: '85ab552033b0a7ec6474766edad7dcea3d027af8', class: "extra-services-table__header" }, this.isAddonSection() && (index.h("div", { key: 'ff07205824cc7c3cb6f368f1db4ec1f2269c5ae6', class: "extra-services-table__action" }, index.h("wa-tooltip", { key: 'b327616e8eb3a73908f2daec08571da74a7c5507', for: "create-addon-button" }, t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })), index.h("ir-custom-button", { key: 'd67cc241218f371e26d1e2c21de17758bb5daf24', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, index.h("wa-icon", { key: '10c024a9c868731a7915368a9f51894a3e8665d8', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), index.h("tbody", { key: '33e71a6589bd695c7308909f2407f043c20f79b7' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (index.h("tr", { class: "ir-table-row", key: service.code ?? service.id }, index.h("td", null, service.name), index.h("td", null, number.formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), index.h("td", null, this.getVatLabel(service)), index.h("td", null, service.allow_price_override ? t.t('Lcz_YES', { fallback: 'Yes' }) : t.t('Lcz_NO', { fallback: 'No' })), index.h("td", { class: "extra-services-table__muted" }, details ?? '—'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), index.h("td", null, index.h("div", { class: "extra-services-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (index.h("tr", { key: '3c1ebbff5d7c6fcbcaf892569040d9d4445e8ea0', class: "empty-row" }, index.h("td", { key: '7684411b290e59168c795249e6cbea91829a9588', colSpan: 7 }, index.h("ir-empty-state", { key: '208c679b135fb38cb1a193597cb8f4e6c4be2cf5', message: t.t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

exports.ir_extra_services_table = IrExtraServicesTable;
