import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { E as ExtraServiceSection, A as AccommodationExtraCode, c as createBlankAddon } from './types-lai6srmI.js';
import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';
import { t } from './t-Bvz1wS_D.js';
import { c as formatNumber } from './number-B8waOzTO.js';
import './types-CB66a07H.js';
import './locale-scope-Jre4lb6k.js';
import './ir-date-XXNYhmSL.js';
import './language-observer-CHgzsZkY.js';
import './moment-Mki5YqAR.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irExtraServicesTableCss = () => `.sc-ir-extra-services-table-h{display:block}.extra-services-table__action.sc-ir-extra-services-table{display:flex;min-width:60px;justify-content:flex-end}.extra-services-table__muted.sc-ir-extra-services-table{font-size:0.8125rem;color:var(--wa-color-text-quiet, var(--wa-color-neutral-on-quiet));white-space:normal !important}`;

const tableCss = () => `.sc-ir-extra-services-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-extra-services-table{overflow-x:auto}.table--container.sc-ir-extra-services-table,.data-table.sc-ir-extra-services-table{height:100%}.ir-table-row.sc-ir-extra-services-table td.sc-ir-extra-services-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-extra-services-table td.sc-ir-extra-services-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-extra-services-table tbody.sc-ir-extra-services-table tr.sc-ir-extra-services-table:last-child>td.sc-ir-extra-services-table{border-bottom:0 !important}.cell--align-start.sc-ir-extra-services-table{text-align:start !important}.cell--align-center.sc-ir-extra-services-table{text-align:center !important}.cell--align-end.sc-ir-extra-services-table{text-align:end !important}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sc-ir-extra-services-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sc-ir-extra-services-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-extra-services-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-extra-services-table,.ir-table-row.sc-ir-extra-services-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-extra-services-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-extra-services-table thead.sc-ir-extra-services-table th.sortable.sc-ir-extra-services-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-extra-services-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-extra-services-table svg.sc-ir-extra-services-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-extra-services-table:active td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-extra-services-table td.sc-ir-extra-services-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-extra-services-table:hover td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-extra-services-table:active td.sc-ir-extra-services-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-extra-services-table .empty-row.sc-ir-extra-services-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-extra-services-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-extra-services-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrExtraServicesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.upsertExtraService = createEvent(this, "upsertExtraService");
        this.toggleExtraServiceActive = createEvent(this, "toggleExtraServiceActive");
    }
    services = [];
    section;
    propertyId;
    upsertExtraService;
    toggleExtraServiceActive;
    isAddonSection() {
        return this.section === ExtraServiceSection.BookingEngineAddon;
    }
    getVatLabel(service) {
        return service.vat_mode === VatIncludedCodes.Inclusive ? t('Lcz_Inclusive', { fallback: 'Inclusive' }) : t('Lcz_Exclusive', { fallback: 'Exclusive' });
    }
    getDetails(service) {
        if (service.code !== AccommodationExtraCode.DayUse || !service.day_use_config) {
            return null;
        }
        const { block_night, default_start_time, default_end_time } = service.day_use_config;
        return t('Lcz_BlockNightDetailFormat', {
            fallback: `Block Night: ${block_night ? 'Yes' : 'No'} (${default_start_time}–${default_end_time})`,
            params: [block_night ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' }), default_start_time, default_end_time],
        });
    }
    createAddon = () => {
        this.upsertExtraService.emit(createBlankAddon(this.propertyId));
    };
    render() {
        return (h(Host, { key: 'd2560f4059f5a52d8b1d4cfff8fd659902d76f94' }, h("div", { key: '11741c86e8e906a5f1bd12fd19e6ce9bfe5085ff', class: "table--container" }, h("table", { key: '417c57ecc9cd5dab37f32751b99670d6f3d900f0', class: "table" }, h("thead", { key: '4294ce94872315ee1465c764d594626d628042a6' }, h("tr", { key: 'f0b09fc4875b5d2e499f03ed46c40f288fc25af2' }, h("th", { key: '96cdc80cc8485eed4c48a2ee0a730a8a164a78f5', class: "extra-services-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: 'fdd4a73c0fcd1f4906ef9639bd6d24ac8b0a489f', class: "extra-services-table__header" }, t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), h("th", { key: 'fda0a894ac2fd23cbe73877e688c41611621507b', class: "extra-services-table__header" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: '920a555ca28a3860a027fe3d37f8bafdd9c868e6', class: "extra-services-table__header" }, t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), h("th", { key: 'b40880f9645720004daad58f21a3306f01121587', class: "extra-services-table__header" }, t('Lcz_DetailsHeader', { fallback: 'Details' })), h("th", { key: '527b7b8bea1e3873c562303af3ba23c09d39c522', class: "extra-services-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '14e26a84c1117bfae6f2cc2d3474a6c0b81fd73e', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: 'a1434573f3bf006148ba3e97780c26776e8599c9', class: "extra-services-table__action" }, h("wa-tooltip", { key: '4c2dfd8056b97dbdff3ec122a10816dd3b74095f', for: "create-addon-button" }, t('Lcz_NewAddOn', { fallback: 'New Add-On' })), h("ir-custom-button", { key: '80cb5337470bb53ed4e81410ffdaf05ac1322468', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: '195bd7a14d47a427c733eaecddd7fe939d29bd88', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), h("tbody", { key: '856d15154f61ece6afb73a37698723a4a891601a' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' })), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: 'a13c4b47c3eaa68f19a0b74dd38e5388bea4cdd6', class: "empty-row" }, h("td", { key: '1a0fd14d743f7b25f7880e28f6b1219cd0cbb05d', colSpan: 7 }, h("ir-empty-state", { key: '7f124048f56e572ca71e1e780366b86eb9a9d27b', message: t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

export { IrExtraServicesTable as ir_extra_services_table };
