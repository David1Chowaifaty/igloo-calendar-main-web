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
        return (index.h(index.Host, { key: '100da70eada20d04cd36828dfbc5930d3c533aa2' }, index.h("div", { key: 'efe8cf4bc15bcdc921b2fd6801ce566446b9639d', class: "table--container" }, index.h("table", { key: '73fa1c4a8426763471d6b7664d407abcbcfa3a13', class: "table" }, index.h("thead", { key: 'f9af2fdfd162c025c930be6912267154eb155adf' }, index.h("tr", { key: '8a678b6ef99ccf715f4f74e294ff037998bb5202' }, index.h("th", { key: '145487a5364d063626161d4e24198a1dd8134ab9', class: "extra-services-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '3823ac363bdf462edc52a08433a012ffca0a1bcf', class: "extra-services-table__header" }, t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), index.h("th", { key: '733a4f787dfdf0be52917a350722f18ee4eed0d5', class: "extra-services-table__header" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("th", { key: 'fd24838fa60d0be7a5e60eaa55e40f76d06e83eb', class: "extra-services-table__header" }, t.t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), index.h("th", { key: '932af514d3349f3a49f417dde12c5e0794c82b23', class: "extra-services-table__header" }, t.t('Lcz_DetailsHeader', { fallback: 'Details' })), index.h("th", { key: '112bf4b5760ee529cae7ef88af02f2f8cbe05a29', class: "extra-services-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: '57903500bac9478de6c2fbae4400ed3c94620350', class: "extra-services-table__header" }, this.isAddonSection() && (index.h("div", { key: 'f38f70a00e855cd564b68c78c4fe94c0ea52cf7b', class: "extra-services-table__action" }, index.h("wa-tooltip", { key: 'f53f8c03e3289d7d69c0a5c3d176c296b80c90d1', for: "create-addon-button" }, t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })), index.h("ir-custom-button", { key: 'd85cff26373c5e59b214b801ce66fc22406ea1b0', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, index.h("wa-icon", { key: '69413e0436f801f0666064878288e1232833402d', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), index.h("tbody", { key: 'f02e8967b68c051364e7e80a2681a3e1eb040255' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (index.h("tr", { class: "ir-table-row", key: service.code ?? service.id }, index.h("td", null, service.name), index.h("td", null, number.formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), index.h("td", null, this.getVatLabel(service)), index.h("td", null, service.allow_price_override ? t.t('Lcz_YES', { fallback: 'Yes' }) : t.t('Lcz_NO', { fallback: 'No' })), index.h("td", { class: "extra-services-table__muted" }, details ?? '—'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), index.h("td", null, index.h("div", { class: "extra-services-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (index.h("tr", { key: 'af7e37fab3c8ec5411e5158d67400e2fbbcf5675', class: "empty-row" }, index.h("td", { key: '0206ce2bd01cdf84419aa4088058c58ceac70dac', colSpan: 7 }, index.h("ir-empty-state", { key: '0e33f945261e239ce42e30d1e39776e21e6c3bc8', message: t.t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

exports.ir_extra_services_table = IrExtraServicesTable;
