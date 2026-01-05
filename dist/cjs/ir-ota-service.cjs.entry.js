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
        return (index.h("div", { key: '66f0911342eca8895ca3d0661b21edc60bc4f9e2', class: "p-1" }, index.h("div", { key: '265a0aa403f66e17efa759b2d1ba020305b38f33', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'e5de54642d9b0bebfc984646361e4cf3107a22c2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'eacc0be438fda7475355d285c2bbad6eae5397f1' }, this.service.name), index.h("span", { key: '462147816b6cece35e9e9e616d9c4ee723ce9863', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'ae36faa11ceff713653449162f3345663776ec38', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '9dcb04f0e66bba3d9c3985d3a87449ca53682a79' }, this.service.total_price)), index.h("div", { key: '5ceb5019934943eb64049ece812db0ce2898d331' }, index.h("ir-label", { key: '2e5945c5a0b4c0e7e82f9705e2543eb0235d2edf', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '72e0257a50ff53d04901d9151693c10acef7f738', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map