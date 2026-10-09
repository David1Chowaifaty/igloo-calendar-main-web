'use strict';

var index = require('./index-CQkpA5n3.js');
var types = require('./types-BBSAAuSp.js');
var enums = require('./enums-BSCnMYlE.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-BAlv3tpP.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-C7rmpwuA.js');
require('./ir-date-wIaf9EWb.js');
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
        return (index.h(index.Host, { key: '7544c4df851adacc54a328b22aec7a0d4cfcf5c2' }, index.h("div", { key: 'b7a4bb78b7423e8a2c353e3080d83c64645086b2', class: "table--container" }, index.h("table", { key: 'e5cd4b95715ad5bc88dea13742eef51270746a2a', class: "table" }, index.h("thead", { key: '2d162a790bd2aba0258959ba68bd9e0132adef4b' }, index.h("tr", { key: 'f99e009dee8ff1258bb835f0314b143f64b54cfb' }, index.h("th", { key: 'c7e8e71a2768347ec6c16ea1cb945d29acc4c8f1', class: "extra-services-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '44750f11f96d923338b7ab5e87448803ae70817e', class: "extra-services-table__header" }, t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), index.h("th", { key: 'b7403197eeb99295fb0b9f3352a3bd3a4bf0c3e0', class: "extra-services-table__header" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("th", { key: 'e572fc47e9407e548680aa6f3bcaf029f54071cf', class: "extra-services-table__header" }, t.t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), index.h("th", { key: 'd2eb2afa9e5d24c8412e2ac98153f9f98d53eabf', class: "extra-services-table__header" }, t.t('Lcz_DetailsHeader', { fallback: 'Details' })), index.h("th", { key: '68887c827d7cb66e30b2e8320782eef3ba28fbbe', class: "extra-services-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: '06a7787e5224a53bdf7ed6ea54041f682cceffc5', class: "extra-services-table__header" }, this.isAddonSection() && (index.h("div", { key: 'e24563d86ed988038d04e85176632e4d68bf2b91', class: "extra-services-table__action" }, index.h("wa-tooltip", { key: 'aa6059d42333db3d1e34cbf6a92a630fa1c7304d', for: "create-addon-button" }, t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })), index.h("ir-custom-button", { key: '335749aa72cbc8343a3a949fca6ddbf284791482', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, index.h("wa-icon", { key: 'af198f8349285cbf83370866e69a1ad2d188a5f7', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), index.h("tbody", { key: 'ab41912084f21067f8d2e2965fc18530219a69ce' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (index.h("tr", { class: "ir-table-row", key: service.code ?? service.id }, index.h("td", null, service.name), index.h("td", null, number.formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), index.h("td", null, this.getVatLabel(service)), index.h("td", null, service.allow_price_override ? t.t('Lcz_YES', { fallback: 'Yes' }) : t.t('Lcz_NO', { fallback: 'No' })), index.h("td", { class: "extra-services-table__muted" }, details ?? '—'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), index.h("td", null, index.h("div", { class: "extra-services-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (index.h("tr", { key: '9ed0aec106a1274ae4b14524594fe84c933ea7ee', class: "empty-row" }, index.h("td", { key: '31b1ec81886a263381f03d6f7a6c69718cac40ae', colSpan: 7 }, index.h("ir-empty-state", { key: '21fc94f54537b52dfd4baaac97b29bebacfdf56d', message: t.t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

exports.ir_extra_services_table = IrExtraServicesTable;
