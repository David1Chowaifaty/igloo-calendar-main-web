'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: '321e702fb6ad43eea7206451c85c1cee6a719ff4', class: "p-1" }, index.h("div", { key: 'd42f7c47a085b76e412a7e2709f3a5a077842cb6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '18470e015a4cfc3e9de6fef923e7e3279e77fd5d', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '3cfc81d8816cd6d0f24d6bc6c95b806c84ebd4a7' }, this.service.name), index.h("span", { key: '74290f9f6da493ec597276c6b348c851b9722f82', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '0a001ed37e3dea0566c1839842ae6570a570a82e', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '29c3f0e7d640ff20ea7d8586323c1a0219f333bd' }, this.service.total_price)), index.h("div", { key: '65f09d23103f0f7102ecf754d404dac905a19e60' }, index.h("ir-label", { key: '614d98c1fbd8ae484f41a2b90dbd1d686b754ebd', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '3bcd3248621b6a99eda575e6c017db41672b6d50', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map