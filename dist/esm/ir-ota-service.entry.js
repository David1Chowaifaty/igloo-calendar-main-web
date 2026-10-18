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
        return (h("div", { key: 'a1e68fa3122eb3b3f39ae47b1a34667ceaad8b5b', class: "p-1" }, h("div", { key: '520ccb2dcf9f3d2db5e880beaf024b94951b115b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '1292f3d712dec14fb0d6e5a6523c38645b2b953f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '97c54dc6df31a427d298a484349760e0031942df' }, this.service.name), h("span", { key: 'f8b20990becde8e9c41b69baf03a79aca0e75448', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: 'c35ab7d57cee81475681ec131729cde604a89459', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '776c2f704299de69aa0eb59eb951e00fac8ac045' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '5769608622587719cbcbc327c311f15c6d86ca6d' }, h("ir-label", { key: '826fb5f4e8e7ee5fb5fb6f0a3d3b44f52266a6f7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '9c74c521d62bb8eb7d07ca2df06d0b28d4f304cb', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
