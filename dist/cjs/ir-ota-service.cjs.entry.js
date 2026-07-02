'use strict';

var index = require('./index-DYQrLNin.js');

const irOtaServiceCss = () => `.sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}`;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    service;
    render() {
        return (index.h("div", { key: '18f510f7b3fad9e7f6aecd7d14fcb6a6b0b80e07', class: "p-1" }, index.h("div", { key: '64490cfcc5dc07753330339e90ecf298f2b053cc', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '50d01f8dda0110a998645ebd502ec3689cfe7926', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '2a7693edfa8d42b1a9441bb4cda265ea87e11f65' }, this.service.name), index.h("span", { key: 'dc1217628415422e311ed3ae56ff1aa3c8464f53', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '05d3e45bb098b531681d99c7589f2f82c14b67ab', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '8340166f97e271e5e38b59d9ce533ce8f306aee1' }, this.service.total_price)), index.h("div", { key: 'c888e78117ef0c35853a0142bcf91c143515995e' }, index.h("ir-label", { key: 'c2fe021c48fbe6a1ecae72534b81d6ed545c7185', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '2e6b4e5868766382daab1fb84bc159000d578ede', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss();

exports.ir_ota_service = IrOtaService;
