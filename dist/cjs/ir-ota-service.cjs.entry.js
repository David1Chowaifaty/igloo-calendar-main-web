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
        return (index.h("div", { key: '63638540fa356dbb39c82b7ef9b94177b416da42', class: "p-1" }, index.h("div", { key: '8fc5718f0ca20862ecb3376ad84403afa4800622', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'ff9f0765bf71b7b9dca594cc44ebf66413f8ae87', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '6d45c28ba49627d1ebaa1b23105f3dcffd56f1ec' }, this.service.name), index.h("span", { key: '152aeb3ba67db20b70e4594188b45661227e9f53', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: 'd19eb7531d862b6104b57e894976c3668c79628b', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: 'b462a5d56cc74e404f8f1a1869e836688a09c738' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: '26aaa61f2fb18665ab41a55feb03bfd1dfb58276' }, index.h("ir-label", { key: 'ed31513648a69a98f094a3c0b60969e9b43377be', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: '85efe4b95396eb6346618162ffcdf5535ab667a4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
