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
        return (index.h("div", { key: '65c44b94c77ea053acaffe5651392721a32307fd', class: "p-1" }, index.h("div", { key: '6a0b4b6e3a1c508d0824ef13e9ba22324c4a517f', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '8d66ba1d0025256090a1b145a2efddda3a3ee964', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '56b91dbf719c95d846a87be682bb831d5ccf14e8' }, this.service.name), index.h("span", { key: '52cf14b18e73ce5c4808f38f9ff3a72906a7909c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '5814648539b0814305bfdbbda12af99493c6cca7', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'd9657a406947d84f0f68b7243dbe7e8ab3d98b7f' }, this.service.total_price)), index.h("div", { key: 'c218ffc4ebe28073bb1c778d2534c5d90823794e' }, index.h("ir-label", { key: 'fb6c7ab9b98af179d0cec1713a851f3510769aa9', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '80057a29ed438945e061352c888889a5919618fd', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map