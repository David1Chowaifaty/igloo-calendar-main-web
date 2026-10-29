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
        return (h("div", { key: 'a847833911e6896d8f78daa4b2f1f669621733ae', class: "p-1" }, h("div", { key: '39f49764aa6a1c970eed412a93cd78743d2d8369', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '3c5e824cadaebc7f5a9caf01ac6047032b8f6d72', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '4a9d1fe4cd724d22c5081699c4e682de49038116' }, this.service.name), h("span", { key: 'e5bc17409e4736620d6aa6c1c0cb7997c547195c', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '54efbac9ce693f216e095ff0e8b166695cf53fc3', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'eea00012e113bc8faac557c55efc0bd45dc066c7' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '33f1c6163966746d9d5b8939123524454781c505' }, h("ir-label", { key: '3e7553b02eba2605660210c625e24eb2e0a8c4b4', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'dcb2852317c447272a1c965141f113886ad2acb7', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
