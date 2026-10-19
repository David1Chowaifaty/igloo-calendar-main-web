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
        return (index.h("div", { key: '95d7ecfc31e2e6011fb0809947b6b9f915ffb849', class: "p-1" }, index.h("div", { key: '518a1d783309bcc8b54925ea285b565931d97163', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '44e48024d104833a53bd083de1a57b44aecd5cdb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '5b4760a1c8765899f00bdfbe7a429c05b6b550b1' }, this.service.name), index.h("span", { key: 'f49d82e8cc2244bab42f7e74662de1b83ed3227f', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '2ed156ee36a26f4850176840468b12acaab02359', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '12d6531dcbb95ba7b7c28db7f7aa69e8ca203893' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '080a7b3b9e41bda8cfceb2e5a4552bcb4d68f7db' }, index.h("ir-label", { key: '8709ffd3d96fc49d97d2ae2781672a57f5a98fbf', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: 'f14d5f7be41693f6c3a2fe23c155a5a879034b73', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
