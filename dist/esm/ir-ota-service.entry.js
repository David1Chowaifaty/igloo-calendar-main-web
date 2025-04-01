import { r as registerInstance, h } from './index-ChgcZQN7.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'eb6515ba850a0c9d9e425293d16c9747aa0298b6', class: "p-1" }, h("div", { key: '0c0db31783028a7a5dbc96b52bdff7334acc8843', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '50582f645763d9b996aa570d248f0834412f82c6', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '203aa024f440f6e5bf3613ced32adf27d6714a4d' }, this.service.name), h("span", { key: 'd84d9405cf4453de3007ea6db84a4a0a7804611e', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'e323248d21a739d4ae9c777396f7cd9cecf1ea30', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '0a21d6684db6fa501ac85d498baa47c76cd9d5f7' }, this.service.total_price)), h("div", { key: '8f7404a3d8bb9581f7577082570df78e1389b9fe' }, h("ir-label", { key: '2b8cfcaf210a5afa7ba505e8f99ecbfe615f30b4', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '8c3cad3215dc0744c50a88a9c30d4e1de0a8a1db', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss;

export { IrOtaService as ir_ota_service };
//# sourceMappingURL=ir-ota-service.entry.js.map

//# sourceMappingURL=ir-ota-service.entry.js.map