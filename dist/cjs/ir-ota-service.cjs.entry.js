'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-BAlv3tpP.js');
require('./locale-scope-C7rmpwuA.js');
require('./ir-date-wIaf9EWb.js');
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
        return (index.h("div", { key: '43ad6375fefff20a73d6eca9a7d9a641ce427392', class: "p-1" }, index.h("div", { key: '6f370406f44adb8d6d9f7fd21e96f16d9f4bc623', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'a7d2f84391580e475a209e07b28db80b66cee67c', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'ca7830e36b48156c84779c49c12339d3f44dc4b3' }, this.service.name), index.h("span", { key: '1e297f15466adec0b27e71ae3ccdf76958e670bd', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '3cd5042697c30ac64e5ad64271e0c934f6927a56', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '9bb1358dd897580622655fa7866cda4fa2053214' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: 'ca78c77bf53ac66cc155540146d7d781d2ae1276' }, index.h("ir-label", { key: 'd215f4ae5676418789f49e06d9f1b80f647210f7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: 'd86583365305a7d6b0c877d6f2d7c367cfb140c9', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
