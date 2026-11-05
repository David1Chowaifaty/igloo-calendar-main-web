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
        return (index.h("div", { key: '5dbd6f9649384aaaad864c00ff042f6799d5577c', class: "p-1" }, index.h("div", { key: '8771116f4f70481be5c1f249c8cb4bb24dc6c1b1', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'f04dbb48dbaab935163814f08bc505837f47cc47', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '960f8d617a91052fc7aedf0192d500da73047a71' }, this.service.name), index.h("span", { key: 'fb3d9d7081db77ac97e61191d9aa9a06a5c25a45', class: "p-0 m-0" }, number.formatCount(this.service?.persons), " ", this.service.persons > 1 ? t.t('Lcz_PersonPlural', { fallback: 'persons' }) : t.t('Lcz_PersonSingular', { fallback: 'person' })), index.h("span", { key: '6cb111f1f9b80d43fe3b21d07a577fa55b4fb66f', class: "p-0 m-0" }, number.formatCount(this.service?.nights), " ", this.service.nights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' }))), index.h("b", { key: '190d0f6bdc278518e4ea3d00a177709aff71832f' }, number.formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), index.h("div", { key: 'd3a7d0551cad3fddadeac1743adddadd42266ae6' }, index.h("ir-label", { key: 'e7f8cc369244efe9e1fdcb587d48c8e6246939b1', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t.t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), index.h("ir-label", { key: '2494a818c33c32f2302e793e4ea6665af12fd71a', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t.t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
