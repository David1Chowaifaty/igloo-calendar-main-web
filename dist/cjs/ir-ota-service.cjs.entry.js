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
        return (index.h("div", { key: '4fecb34a60bbbff92ed6c50d2992843901d2fe3c', class: "p-1" }, index.h("div", { key: '45e5660d971941e79de651d0ac175f815d1b94f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'b6b1334cee69b160ec66c644c693aaa945e20c25', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '9410ff43f6b4f72c232588cd1a60e5397f5d292d' }, this.service.name), index.h("span", { key: '039da441143e53c5b7e57db7bb1372a877fa5b1c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'd0b443bf5032edb7e1a44c8f5cfcd5229892281c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '14e62a13be326c77b3d839736ba4b0e819c5b609' }, this.service.total_price)), index.h("div", { key: 'e6b35d31f31c238c320058876e5a0784efb87625' }, index.h("ir-label", { key: '59337a595df93c90a9585d1cec2a3a3bbdcbf90b', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '5da21e858d1aef4e5075d123048411eb2c18b0ea', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map