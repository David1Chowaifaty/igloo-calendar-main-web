import { r as registerInstance, h } from './index-0a4a209a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'dfd1c1816935c5be1bbfe0eec72bc732de1240b8', class: "p-1" }, h("div", { key: '50501db8785c68e18b723939ee24ab885dbcce58', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '816c13ecb77e0a1bda9eb4ab39b985950e52bcd6', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '68484c19a76237b42af2daf41f7b242a68e9e27c' }, this.service.name), h("span", { key: '18cbbe0af1c529c4ef6284bd2505d93b19a9be81', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'b7e4fe4ab48b5e9f174af07f3d9ef7722fa0a58a', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '63abc39b7a10b535448245fe8879bf18ce15cc12' }, this.service.total_price)), h("div", { key: '43df471746dfdeeeed29761115d3b05ebf80330c' }, h("ir-label", { key: '30646588b6d470e55a6c43cdbc6389a57ffad70f', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '203a0949bec972a22fcbedb47ff955d78fe25567', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map