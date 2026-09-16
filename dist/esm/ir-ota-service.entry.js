import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { t } from './t-Bk78Wumj.js';
import { b as formatCount, c as formatNumber } from './number-DegV2dS7.js';
import './locales.store-CXJn6ls-.js';
import './ir-date-DFR8GVLZ.js';
import './language-observer-CHgzsZkY.js';
import './moment-Mki5YqAR.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '17ea1577b3d6625c8d041c4f90ef2113d9bc5431', class: "p-1" }, h("div", { key: 'f0cb1979ffd4ade84a5ec949f8b264edc25424ad', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4ad02795e1229450eee01ccf64d49f36b7135cb2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '16e3c856ac8b6daf1e7342b4175ad609d386102c' }, this.service.name), h("span", { key: '118a7d369e8340b98862702170ee00a358606665', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '472df6b97ef24d2648bcbc0d7e3e88e5d5a14f0d', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '0af10ef07e6f824d0b366b7c35925af62a17f973' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'a10a7326f265f1f2429c59f7c2cf6376b26ca019' }, h("ir-label", { key: 'aa9ffaf84367cf3cb5f944d44b5d293a5b4caf12', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'f1e089c2e606c9363a59f60c1741a960e4e03ec6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
