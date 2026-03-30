'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: 'bf79c3f6292ac50da4ce32f39d389bf428261871', class: "p-1" }, index.h("div", { key: '0429e56fff27f4a6772c7d13be1436dc9c15ba67', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'ad8b7de7ab8a9573929eefccc5d25ae9a4f468ab', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'e233badcd2e34ca80a31b09c99feebcdb09317e2' }, this.service.name), index.h("span", { key: '7b07525c485c0fb7735c024370ee8e58487ebcd9', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '88d2aa58cd8f4161ef24698caa076546c517c5d9', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '45c0de7dfde53b806ee4273e1173ed9d7e356cb5' }, this.service.total_price)), index.h("div", { key: 'b9b650b17b501f8ee88f7ac1e51c06a1e57784ae' }, index.h("ir-label", { key: 'ecb0696822bd5d1d8bc008a9bd2a634e2f6e2f2f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'a55875b2547f15324cdd6095851ee4edea812b4c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map