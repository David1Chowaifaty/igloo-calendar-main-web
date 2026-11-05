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
        return (h("div", { key: '0e6587539c683183b1844619c2028a13ceebf8ba', class: "p-1" }, h("div", { key: '2e0acc1ca9ad2cd637bab5bc00367fdbcdca558b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '6c045121f31c8ddcb2024c90401fd604831a810c', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '90585900a17a71ce174e6e5a383da41ccda28126' }, this.service.name), h("span", { key: '53e445cb343c83e944107b49aecd3dc5e4615898', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '3ed40214f69e11a70fe51d743bc30d91f9e66253', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '1dc63522681437c6ec369362781c30c00d6bf06b' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'ef5bc7a0486b8c072f9872484492fad375c872ce' }, h("ir-label", { key: 'de062e02ca7c59d64b91161e1b31ecf90d76a1d1', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'e01a636a13856e68872ef809b63ba89df12449ac', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
