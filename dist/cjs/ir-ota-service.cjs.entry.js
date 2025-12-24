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
        return (index.h("div", { key: 'e86ae3f113f31b374c26c7857d4aa240d299bf68', class: "p-1" }, index.h("div", { key: '738ba91431f703c87c568f1f472d59c5b95b9193', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '4e5556935c6bbf56cd9f44750400332a7c93b83e', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '30b3aeb93c43095f341143347d45c0663404003f' }, this.service.name), index.h("span", { key: 'e1834844c17ff3b69cb1d09efbdc58b866d1ba42', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '00a4fba66bac44ed5f770f9675262bc0380a079f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'e9d150a7a3be0625451512725a727585300c8064' }, this.service.total_price)), index.h("div", { key: '2241a5753c62282a4012320acf3f2e4e436b8648' }, index.h("ir-label", { key: '92602451e2d07045205265c4ec17346852eb89eb', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'ad852db6bddb88c617ac633c4a5c80c988ab5f17', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map