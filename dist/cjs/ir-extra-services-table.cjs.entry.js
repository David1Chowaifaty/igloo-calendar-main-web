'use strict';

var index = require('./index-CQkpA5n3.js');
var types = require('./types-BBSAAuSp.js');
var enums = require('./enums-BSCnMYlE.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-C1isaNqY.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-C7rmpwuA.js');
require('./ir-date-CUtS9vzZ.js');
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
        return (index.h(index.Host, { key: '522e66bf5c95deac30a1cda5104248636fea1401' }, index.h("div", { key: '84e70d5f531f9b49f4bc68909055e9c626c85696', class: "table--container" }, index.h("table", { key: '51858b2290ed823e525145b845021fff38b099a6', class: "table" }, index.h("thead", { key: '49985d7e85aba35e7096b57bbb25103469398af6' }, index.h("tr", { key: '3c369131c3a9bab26a96e1e8a03469151b8b3a77' }, index.h("th", { key: 'eb170ef56deda06031a6250fc0e91264472e1225', class: "extra-services-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '271d075c6bd8a7a74118c4dd720679068c488620', class: "extra-services-table__header" }, t.t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), index.h("th", { key: '3873290f1466f046d6c3d4fd50fcd8541ff6f4ea', class: "extra-services-table__header" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("th", { key: 'e8be12576a83db85cf2c3fa591fd8558187fae00', class: "extra-services-table__header" }, t.t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), index.h("th", { key: 'a3926cb03724238ebb49bdb6f238ceec19ea5393', class: "extra-services-table__header" }, t.t('Lcz_DetailsHeader', { fallback: 'Details' })), index.h("th", { key: '3f0972f71d31b360a41045c5f13e48be847bdd87', class: "extra-services-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: 'fc623c74523b9a5b30b3bfa7ca3b93a350b456f6', class: "extra-services-table__header" }, this.isAddonSection() && (index.h("div", { key: '5ffa14f80718b4889553a2bde3f3e6757982e879', class: "extra-services-table__action" }, index.h("wa-tooltip", { key: '6fedd9bc816bc4fe2ab67b417d4e4efdbfcafd75', for: "create-addon-button" }, t.t('Lcz_NewAddOn', { fallback: 'New Add-On' })), index.h("ir-custom-button", { key: 'b5183942fe8ba675a8af3663ecbb9c35f2b38fd8', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, index.h("wa-icon", { key: 'f382c11ba8aa719f3d36f6284d1d09ab62cb8463', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), index.h("tbody", { key: '04fb31edf312ef46e54b56bb8192f959da5cacbe' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (index.h("tr", { class: "ir-table-row", key: service.code ?? service.id }, index.h("td", null, service.name), index.h("td", null, number.formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), index.h("td", null, this.getVatLabel(service)), index.h("td", null, service.allow_price_override ? t.t('Lcz_YES', { fallback: 'Yes' }) : t.t('Lcz_NO', { fallback: 'No' })), index.h("td", { class: "extra-services-table__muted" }, details ?? '—'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), index.h("td", null, index.h("div", { class: "extra-services-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (index.h("tr", { key: '9be381ae29b25db9196474f96d3e44f1e969805f', class: "empty-row" }, index.h("td", { key: '59e96cc37e8184ed9a70ba880174db7a61d8ccb0', colSpan: 7 }, index.h("ir-empty-state", { key: '3fd4b117cf6907284e934a06caf340a9b32e1344', message: t.t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

exports.ir_extra_services_table = IrExtraServicesTable;
