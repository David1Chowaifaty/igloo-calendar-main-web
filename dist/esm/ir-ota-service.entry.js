import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { b as formatCount, c as formatNumber } from './number-BTwSXP0A.js';
import './locale-scope-Jre4lb6k.js';
import './ir-date-B3ui37NM.js';
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
        return (h("div", { key: '920b8df5d11d76f42e6cb28d97a27c9ab944fab5', class: "p-1" }, h("div", { key: 'fba44c7a58a7fe4eaefd9370918c6bc0e82a490a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '843544b3d7298f393a7bf44d6e4dd83fd2714cfa', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c984abeb630f127cf915a96e4d27ae7f34fc1963' }, this.service.name), h("span", { key: '1423cd71a174cd67c276495b467dd49cfa2c5fe2', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '233d2de96c703ea5ba00cdecb403e3587f20a411', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '348a581050e69feaf636dfd022f4ce44fc0309da' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '59e0125bae3a0b362907be1b308190bb4fa74979' }, h("ir-label", { key: 'c24cebb16f4f34de63e6491e62ba1241a6f37a50', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'f644bff4a283304ff1e7c9343a04f9c2f95d264b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

export { IrOtaService as ir_ota_service };
