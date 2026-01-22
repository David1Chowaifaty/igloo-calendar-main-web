import { r as registerInstance, h } from './index-7e96440e.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '2b07e4376cb33082a454dd76e83037c32cf5a298', class: "p-1" }, h("div", { key: '243190ebaf4edcd0f32bbd8e8b967373410f9b73', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '12aa655f5fc771eebb00842bcaee562c75cc0503', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '709f8a954dd858538959e0fd98612b6193a51137' }, this.service.name), h("span", { key: 'f77649c8c7d06f295d2f734b427ea2d511323638', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4380c712e1e411406ca21d869816d92a7ae66f24', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e8d790c86d321815da3089ac8a3fdeb8614267a6' }, this.service.total_price)), h("div", { key: '6a0fb25437c0eea3e7fcfc1e0f008a5452afbd6c' }, h("ir-label", { key: '8c51d080c7a6c025cf4b78a6e8f9c3eb5d870db9', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '97c090195bad4260069adf1cb3b0dea75a03d4ef', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map