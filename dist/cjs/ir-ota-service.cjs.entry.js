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
        return (index.h("div", { key: 'd9f6a532dfb8ac3cb2bd0ccab801504f1f4e2b6e', class: "p-1" }, index.h("div", { key: '00b07e9abba1a5a94a82c610fa45df2517aa08bd', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '63101fb00e348a0032ef84823518785a1a059976', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '87adc62de581228c600625eea61ff8f885a741a3' }, this.service.name), index.h("span", { key: 'a83976c42f7861b849b6b808c42e3e537dc565f5', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'b0333c8d82daaaf0878e5a60e5eaf06cdbd1145f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '5e34e248d7c9d95137c6528b23cf130cb07d633c' }, this.service.total_price)), index.h("div", { key: '1a123d95d862b58cf79d641344e20d978babbc08' }, index.h("ir-label", { key: '2c018055a41b24108d6e3b09b13a623c443a41dc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '8ab555c2089cdfc02e2eb3d8f34e262b432ec46e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map