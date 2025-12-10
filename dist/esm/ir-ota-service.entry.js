import { r as registerInstance, h } from './index-b3dce66a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    service;
    render() {
        return (h("div", { key: '1b42a0f527f6207ab79cac8d91b04e0d368a7e3e', class: "p-1" }, h("div", { key: 'dd2dac7518456600c17fb25e122a0357f6e4f086', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '9953cc4c37d08091586c170c11f10e00ca4c13a8', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c793967e683f5c79f3a29576ce695ec8589d306e' }, this.service.name), h("span", { key: 'fb63b1217c37f1e807367c47c500025712938fd6', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '7966b657e3d6a80cd1c1ce5df42da2e462b2e461', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '1f33b56228d13950728989dde0e75dcbf7a1b02a' }, this.service.total_price)), h("div", { key: 'e42d4f7c3df5de9e9d824dff1dc0d1186ebe66c7' }, h("ir-label", { key: 'fc26087b9aa9086773946aa1233dcb5fbfbc3281', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'c8847df5a5f0cc843a8eb9a292a532edcd20e48d', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map