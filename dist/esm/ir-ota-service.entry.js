import { r as registerInstance, h } from './index-60982d00.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'a3874107d705611b68f6abbe95d5a62458050e26', class: "p-1" }, h("div", { key: '7b71a5a1b55a29512bb3661bb475039e76a8a49c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b391905a749766609ca4d3e193c548e2d49bf156', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '0e1383423a0396ba609762a72645d51bed16ff2f' }, this.service.name), h("span", { key: '46443cff19069071b68579ddd5f76bf8b32a9cec', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '180432631384967d5d668d5563a5d863320dc880', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '875b75b2b6b631988f3d49bf695af2ab9d1993f2' }, this.service.total_price)), h("div", { key: 'ec242ddf415fe31187468f8db54be610a068601c' }, h("ir-label", { key: '699e5a110ebf41ccbaedb8825b7574bc0663ae18', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '01a737169f0080fd9115d41521f3f4129a0bf20b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

export { IrOtaService as ir_ota_service };

//# sourceMappingURL=ir-ota-service.entry.js.map