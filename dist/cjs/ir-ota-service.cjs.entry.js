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
        return (index.h("div", { key: 'f88f935775506c609ce26971220180e442ce0501', class: "p-1" }, index.h("div", { key: 'bd1dd733dc675c3d78f8d7314a8d7d690ee982d5', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '8989a953c4ad139b5584db927b9b742e8ae90239', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '23ff99c49452ee55b54496df41012c0d9a079f8e' }, this.service.name), index.h("span", { key: '6cab4ce3f8100798e9302de4480de46f6bf3f4d3', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'bc79905c5e2ab99e0b5ec94c14818ebd4d44248e', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'a749e6d551c2a41d047ca6adc1ded5bf6b680164' }, this.service.total_price)), index.h("div", { key: 'f6e85c2abe26c69dcdbfa427618732491404c328' }, index.h("ir-label", { key: 'c768818c5aafca39aaf5fcdccc30715eda6f4da7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '98430c9d80acb020181f438786fd1474976031a3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map