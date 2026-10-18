'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./ir-date-CbkOKs2C.js');
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
        return (index.h("div", { key: '8cde16e662f55da899173aa06ea07fb1ba5361d5', class: "p-1" }, index.h("div", { key: '54224d7caed4819493bf8489b9b1e3753e350c23', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '2da140a44bf41cef5c8add616b73457d6fa67362', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '458756e843d2c0927a4a33e18d95dbbfc0c88b46' }, this.service.name), index.h("span", { key: '881d9deffa0146448359064d71769eed5b01da1e', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '7b87221be012a35244f2dfa0292b771dcd6ef352', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: 'e63638d87858f94ab088c096e9ba76628915fe7b' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '4aed92d389e8ab5d4527ed5c9fc3ac8c856d5346' }, index.h("ir-label", { key: '7e603ec746aaf22dc3689c1ce675eee2e921d0dc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: '93173608bcb126caaf0615897d55bf420c0a3be4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
