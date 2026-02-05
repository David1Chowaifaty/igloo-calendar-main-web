import { r as registerInstance, h } from './index-7e96440e.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '98bb39ac812642b88a4b81f485c53345fae1e61d', class: "p-1" }, h("div", { key: '459ae0cf57e6873c6691fc3047368b83d8e289ea', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'f23214c4eec6fdc39018c70fd9788d23f7450e79', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'cf0c774eff176295fb39356f8f4cc73ad661bd29' }, this.service.name), h("span", { key: '76f5064a58db49ea27846b5f1906888448da135e', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '773d1d4c2c93c227e422af154d1ac634231c6190', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e6d8bc6dc61b2711bba96844f58679b7b5ad887a' }, this.service.total_price)), h("div", { key: 'd219ae5a8c9350f4a0d50eba0bb3904b20677da0' }, h("ir-label", { key: 'a46ce3dfc80a20590a47dc143dd1bdf070a2afe4', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a99f56ff60dddeb709b1e1e48170f1c81b1ada41', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map