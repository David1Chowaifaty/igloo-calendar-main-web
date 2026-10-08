import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { E as ExtraServiceSection, A as AccommodationExtraCode, c as createBlankAddon } from './types-D4odEmSw.js';
import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';
import { t } from './t-BVYK64UG.js';
import { c as formatNumber } from './number-1PczWhnt.js';
import './types-CB66a07H.js';
import './locale-scope-CapRuPkM.js';
import './ir-date-CASx9LWM.js';
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
        return (h(Host, { key: 'bcada1d6b701fe05cee9bd9a65582a19566b1f09' }, h("div", { key: '11acadfe552f175034b789c657da40f9ed5cf64a', class: "table--container" }, h("table", { key: '05e73efdaed5e9a3ed1fa3525fa5497edd089a4b', class: "table" }, h("thead", { key: '95d3ffbc9fd3b11cb62df81a105649e02dab5805' }, h("tr", { key: '15fe3cdea36deee39db0fc34343730739cbcd459' }, h("th", { key: '1a81a619049d2c4f72033b88e068a6fbd63b8133', class: "extra-services-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: 'f1344b43fe847b74a3b971b19dbfda9bc5357cc0', class: "extra-services-table__header" }, t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), h("th", { key: 'acbb3287588ab254969dd170a24e7057f4cb8f9e', class: "extra-services-table__header" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: '435137b35a8484367fa669ee0f482d78f033f63d', class: "extra-services-table__header" }, t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), h("th", { key: 'a5ab9fab3cc27976ec9398d58787d9b8c0aced92', class: "extra-services-table__header" }, t('Lcz_DetailsHeader', { fallback: 'Details' })), h("th", { key: '8d275a9231f2e1a1e80a31b1a31095096b8e7428', class: "extra-services-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '7f3c2bccf0b81f30046e887dcd1880f8969dfc57', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: '72395df9b700a444746069c872a127d6a6314f04', class: "extra-services-table__action" }, h("wa-tooltip", { key: 'eb3e49c2b8092acb6a1fecba76bfe2205513fb86', for: "create-addon-button" }, t('Lcz_NewAddOn', { fallback: 'New Add-On' })), h("ir-custom-button", { key: '86cd0218bd0434099ed35f037a9e2aaebdf17156', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: 'eefd9d25f3f3d4729fd5c8d0f03fd8f89be65c1f', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), h("tbody", { key: 'dc66327acbeb2d7bd7712398ea5764e80ab4cc72' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' })), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '31f8f99ff9f901543dddd871181a160fb1359355', class: "empty-row" }, h("td", { key: 'b1f9fdfbea494dd5198d01a40499185b559d6b84', colSpan: 7 }, h("ir-empty-state", { key: '807226c99063bbb525c5c0709f4971f6582a252f', message: t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
    }
};
IrExtraServicesTable.style = irExtraServicesTableCss() + tableCss();

export { IrExtraServicesTable as ir_extra_services_table };
