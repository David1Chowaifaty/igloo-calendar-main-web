'use strict';

var index = require('./index-DYQrLNin.js');

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: 'f28113daea0c9f8e532c696397eddf28dcc4a473', class: "p-1" }, index.h("div", { key: 'f8c795b680be1237736fb80e27986b8bcd579af6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '2a5a228a80e45416a1693d6db284eb69b937498c', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '683f0ba063f0d7bacf71a9efd2a2e09a3c3c2491' }, this.service.name), index.h("span", { key: 'cd60fef7ff74e922059736801a7d818a45366921', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '3c09c264979165be1ac86d2907b7f847d5312039', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '00ebfb246ae0477df6e2bcb1edb5c46af9ed65d9' }, this.service.total_price)), index.h("div", { key: '6580bfadfa66c05ea8c1d75b65e6babec9271a8b' }, index.h("ir-label", { key: '006ff4d75506c8c52dc6463ab5aae729782f9bf9', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'b27b46a2b09a4ed97bfce94a6594117589cceb50', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
