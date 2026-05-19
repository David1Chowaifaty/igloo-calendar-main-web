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
        return (index.h("div", { key: 'f8cd268332a8d467209cbc7b68ecdebd10eea83a', class: "p-1" }, index.h("div", { key: '28a07b7abfb5f68efc1d6a52182b762963bce363', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'e3d31bfc95889d2941b5b6046a867547a03c9b93', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: 'bea65152e433da2abf9f08730cf35249d1b120e9' }, this.service.name), index.h("span", { key: '952b75ed29bff3e6a512a770ac2f353e5ca5fb7f', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '186b2f589e857d46993bb7dac4a609dc25c749ca', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '2ed5e9658efb6d1da7804e8deda1be22303258a7' }, this.service.total_price)), index.h("div", { key: '48b88bde8e1b27f6685a046cafb4ed9e884d6091' }, index.h("ir-label", { key: '9bf1c1ffabf107e6fb4212430796f9b48c45e226', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '6a61b060c8b3122608c408b4849593e0dbdabbca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map