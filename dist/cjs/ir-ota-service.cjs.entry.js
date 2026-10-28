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
        return (index.h("div", { key: 'a1e68fa3122eb3b3f39ae47b1a34667ceaad8b5b', class: "p-1" }, index.h("div", { key: '520ccb2dcf9f3d2db5e880beaf024b94951b115b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '1292f3d712dec14fb0d6e5a6523c38645b2b953f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '97c54dc6df31a427d298a484349760e0031942df' }, this.service.name), index.h("span", { key: 'f8b20990becde8e9c41b69baf03a79aca0e75448', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: 'c35ab7d57cee81475681ec131729cde604a89459', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '776c2f704299de69aa0eb59eb951e00fac8ac045' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '5769608622587719cbcbc327c311f15c6d86ca6d' }, index.h("ir-label", { key: '826fb5f4e8e7ee5fb5fb6f0a3d3b44f52266a6f7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: '9c74c521d62bb8eb7d07ca2df06d0b28d4f304cb', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
