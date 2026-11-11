import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { b as formatCount, c as formatNumber } from './number-B8waOzTO.js';
import './locale-scope-Jre4lb6k.js';
import './ir-date-XXNYhmSL.js';
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
        return (h("div", { key: '3d4dfb89dee25f351bc0d39f1b9c0ce36566bbbf', class: "p-1" }, h("div", { key: 'ecbafca7ba9fbc41b7e2be68c2722859f6cb3005', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '8a85e4a22e2d8517c0c473eabf2c293867a95036', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'fa964c22d8d251ab4420abd9b3758531787a78c1' }, this.service.name), h("span", { key: '0892670a7f0b602c383e88ccaeed8dc70f6ab7a7', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '6bcfaed1cd39094facd1e99e4b77bdbd2792c59d', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '4a7a4132fc95131ff1c5cf7b6aab3cbc49606581' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'b4608c4400f2328bd6dd7f6ee3fcd601334c09d0' }, h("ir-label", { key: '5f4f170c6ff7590d838507922938f3528a92a84f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '77de5edb6b8f998d014e6dd201d111a8100fbe3c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
