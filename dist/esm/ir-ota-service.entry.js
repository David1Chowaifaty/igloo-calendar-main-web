import { r as registerInstance, h } from './index-0a4a209a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '0e5dec851aba93e0cd333b98c615cca2e4a5f3bf', class: "p-1" }, h("div", { key: 'ea21c41f1a126c754d5ffb9d25be45279048cf62', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '69a1fc6ca5bde2a0d270790600b8f385f2e21027', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'ae886b955f6a82ce09d0fa86b1d6e6d19e075595' }, this.service.name), h("span", { key: 'd0a078765d32763ddcc4e0b50aad8565322ccc6c', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd0c585e2aca5c585e74f52e205ba48dbd77950e3', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '16cb6c8bc3af7bfffaf2866e55af8e766f4ac2c5' }, this.service.total_price)), h("div", { key: '0b9bd3869633ecc285ffc16163e51210770f88f8' }, h("ir-label", { key: 'e5df341911622b23d433f803b659182527c59b18', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '903677388c659c659e88611b155e6ba6a436f40f', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map