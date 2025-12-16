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
        return (index.h("div", { key: '7d6526c3bb954e80efd3f006123983ac89f65b24', class: "p-1" }, index.h("div", { key: '9f2d72b2fd441dc3a32b3e2b03685202090753a1', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '7fd934bcf90ef36245ee7a0717e480d45457a8b5', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '2c43c380eecaad816a334e048e0def7841ac9c53' }, this.service.name), index.h("span", { key: 'd76073116e70567d57fda7af57fa444be101918a', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '1b1a70801aa8885f1f0beeec8ed15b5e3482fd7b', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '1073336be523611d332130eb8a948db3009cd693' }, this.service.total_price)), index.h("div", { key: '1cbc641719caf808b237c7f742009fa612e21db4' }, index.h("ir-label", { key: 'd4de46d9566a37b42526d8b00bd2f2ba49538b37', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'dd9af6c823f2331e565095aee051d58da6c91291', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map