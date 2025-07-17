import { r as registerInstance, h } from './index-0a4a209a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '9a0bdbdc47cec66497d8cb66d77d694db62a7f70', class: "p-1" }, h("div", { key: '5e6e7d7dc91234e202cfa8a96e5777660cc24f9a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '029fd9756525239a7cd8135f9167e930b5894b33', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '0436fca301108e9caf5075d5d64a86d6a4553c1b' }, this.service.name), h("span", { key: 'ea332ac64e8d52a8b5b99b6ade690b9c236b8d98', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '9250bf0e81c86fe5d7e2b7797a9300ecd5d55a1c', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'f24e82026dfbdb23fa53682c89c316a8dc89a4bb' }, this.service.total_price)), h("div", { key: 'e66b97b62f696fe8d959da3b9c4d6e11d44fe389' }, h("ir-label", { key: '42342f81852abb1fe4b0a0d560192f557916a137', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '358329e9c2a12ba69ccad2d4bf0bdf78ac2adc98', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map