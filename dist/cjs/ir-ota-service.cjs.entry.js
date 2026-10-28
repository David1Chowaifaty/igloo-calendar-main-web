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
        return (index.h("div", { key: 'a847833911e6896d8f78daa4b2f1f669621733ae', class: "p-1" }, index.h("div", { key: '39f49764aa6a1c970eed412a93cd78743d2d8369', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '3c5e824cadaebc7f5a9caf01ac6047032b8f6d72', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '4a9d1fe4cd724d22c5081699c4e682de49038116' }, this.service.name), index.h("span", { key: 'e5bc17409e4736620d6aa6c1c0cb7997c547195c', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '54efbac9ce693f216e095ff0e8b166695cf53fc3', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: 'eea00012e113bc8faac557c55efc0bd45dc066c7' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '33f1c6163966746d9d5b8939123524454781c505' }, index.h("ir-label", { key: '3e7553b02eba2605660210c625e24eb2e0a8c4b4', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: 'dcb2852317c447272a1c965141f113886ad2acb7', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
