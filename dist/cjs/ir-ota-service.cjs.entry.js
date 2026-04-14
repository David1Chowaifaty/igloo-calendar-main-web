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
        return (index.h("div", { key: 'f0a5c402e07f377ce47ab0219620e5913575cc55', class: "p-1" }, index.h("div", { key: '4548293e57702ec7eea49a694b4e9474021796f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '12f4039081c9c523efacf243d19ea5d6a56bb643', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '085843020482bbbcbe787dd42bf72c7325c2ac22' }, this.service.name), index.h("span", { key: 'b92b8a7b34b7adab6e18780f5b703df773421665', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'f9b63bd5b932a342df45de3bd47cc9bd28540fd5', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '87a1b2d64f2f871973b9861b69139e3a1b7d930d' }, this.service.total_price)), index.h("div", { key: '36a6f701cdbf3300aec3b027e8d674b078d0aa27' }, index.h("ir-label", { key: 'f1024a19a797aa964c5c78ad3ba5556d1bd00c43', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '7b2d66ad11d83389a53220243c7aed39c5f8b3a6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map