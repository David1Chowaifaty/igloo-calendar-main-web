import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { b as formatCount, c as formatNumber } from './number-0UrU_yO2.js';
import './locale-scope-Jre4lb6k.js';
import './ir-date-CY_qGQ63.js';
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
        return (h("div", { key: '8cde16e662f55da899173aa06ea07fb1ba5361d5', class: "p-1" }, h("div", { key: '54224d7caed4819493bf8489b9b1e3753e350c23', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '2da140a44bf41cef5c8add616b73457d6fa67362', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '458756e843d2c0927a4a33e18d95dbbfc0c88b46' }, this.service.name), h("span", { key: '881d9deffa0146448359064d71769eed5b01da1e', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '7b87221be012a35244f2dfa0292b771dcd6ef352', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'e63638d87858f94ab088c096e9ba76628915fe7b' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '4aed92d389e8ab5d4527ed5c9fc3ac8c856d5346' }, h("ir-label", { key: '7e603ec746aaf22dc3689c1ce675eee2e921d0dc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '93173608bcb126caaf0615897d55bf420c0a3be4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
