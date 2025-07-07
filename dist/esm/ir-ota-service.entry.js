import { r as registerInstance, h } from './index-0a4a209a.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'c0438dc81960b302f166956ce4bb9a86494749aa', class: "p-1" }, h("div", { key: '9d12246c518e7bac530b3962cb5b6c4c1e6f34dc', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '201162e08c191f7cf54a9c3ce168fb7b8093f6bb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '484c01413e237fa819686fcc66c37faed36fa7bc' }, this.service.name), h("span", { key: 'fd2c4587894e5ac9adc28bd3b9863ca9c79a3336', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'ec29bc5b9b5fc87d49d14f6a6b0b3440fbaa1307', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2174a84c19a3d35058845510327861a336c0d4c5' }, this.service.total_price)), h("div", { key: '799166d64beee2321dbe79251f40c292c6a815e6' }, h("ir-label", { key: '91e169ca19224521608e855ede1987e3911429d4', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a277410c3e5aeb367eb6314aef3418ba9785e746', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map