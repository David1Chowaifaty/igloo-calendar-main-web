'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-sd8HJHNy.js');
var number = require('./number-D6oFwIUn.js');
require('./locales.store-D6DJIhoZ.js');
require('./ir-date-Bjy8vNGm.js');
require('./language-observer-DKp37LIu.js');
require('./moment-CdViwxPQ.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: '920b8df5d11d76f42e6cb28d97a27c9ab944fab5', class: "p-1" }, index.h("div", { key: 'fba44c7a58a7fe4eaefd9370918c6bc0e82a490a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '843544b3d7298f393a7bf44d6e4dd83fd2714cfa', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'c984abeb630f127cf915a96e4d27ae7f34fc1963' }, this.service.name), index.h("span", { key: '1423cd71a174cd67c276495b467dd49cfa2c5fe2', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '233d2de96c703ea5ba00cdecb403e3587f20a411', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '348a581050e69feaf636dfd022f4ce44fc0309da' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '59e0125bae3a0b362907be1b308190bb4fa74979' }, index.h("ir-label", { key: 'c24cebb16f4f34de63e6491e62ba1241a6f37a50', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: 'f644bff4a283304ff1e7c9343a04f9c2f95d264b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
