import { r as registerInstance, h } from './index-60982d00.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'abe0b81f6eeb036cb41c5bd9a2dcfbe88994af2d', class: "p-1" }, h("div", { key: 'f7b10290686022f612bdb22642e6881677ef3141', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'ee5249f76b74740463812bf98a4a14f5f8a2d74f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '8361ce9a4bc8f7ca7963b8ed2250a10438356341' }, this.service.name), h("span", { key: '5331afebee577997823cd939b0d6026b0f1b22db', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd544880b75375826611c56d68b61dac1f0a6c7ef', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '9dd4e56369202369c4dc45930e16ba6cceb58ffd' }, this.service.total_price)), h("div", { key: '5db1202d0f0684d46d959e050161cb407d3efb4f' }, h("ir-label", { key: 'bf2e722c2330aa85977b4d8036504bcc3c936cbb', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '131dad9c8dfdf2ca770a5eb5140acee6f7374607', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map