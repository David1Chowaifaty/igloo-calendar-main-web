'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-CyRK1btk.js');
var number = require('./number-D7i5wAQq.js');
require('./locales.store-BMTss6fG.js');
require('./ir-date-BZLsqCOc.js');
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
        return (index.h("div", { key: '17ea1577b3d6625c8d041c4f90ef2113d9bc5431', class: "p-1" }, index.h("div", { key: 'f0cb1979ffd4ade84a5ec949f8b264edc25424ad', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '4ad02795e1229450eee01ccf64d49f36b7135cb2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '16e3c856ac8b6daf1e7342b4175ad609d386102c' }, this.service.name), index.h("span", { key: '118a7d369e8340b98862702170ee00a358606665', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '472df6b97ef24d2648bcbc0d7e3e88e5d5a14f0d', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '0af10ef07e6f824d0b366b7c35925af62a17f973' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: 'a10a7326f265f1f2429c59f7c2cf6376b26ca019' }, index.h("ir-label", { key: 'aa9ffaf84367cf3cb5f944d44b5d293a5b4caf12', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: 'f1e089c2e606c9363a59f60c1741a960e4e03ec6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
