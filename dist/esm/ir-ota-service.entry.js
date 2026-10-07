import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { t } from './t-BVYK64UG.js';
import { b as formatCount, c as formatNumber } from './number-D2n6n8dr.js';
import './locale-scope-CapRuPkM.js';
import './ir-date-NNCOayR_.js';
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
        return (h("div", { key: '729fd42ea5447828b51975eac995c7549591d941', class: "p-1" }, h("div", { key: 'b2e1d5f9ed4c1a40e1f5196b5f1b3252de3489f7', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '832635d1a9d0bd145129876071371b41305be786', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'f8594405dde513b28977dda8e86382facc8af502' }, this.service.name), h("span", { key: '76d4af43eb78623ed2a508810ec6e59477fb78ff', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '8f76306cf1ea2dfb6c49e3bb065600afd3daea63', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'ba507dab1a29e50e524ea29f19fdb9a5b7085e37' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '35e17487698d7673b23020f4a0a1f90d9abac308' }, h("ir-label", { key: 'dca5425c6ec6c0dbd4a821fbf1dce1b1d9760ad6', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'b6b2c71f7c378b3a535d9f75b1308ee12bb1524e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
