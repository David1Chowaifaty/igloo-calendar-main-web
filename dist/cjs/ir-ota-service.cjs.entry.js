'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h("div", { key: '9812b9ccaec92ed3967acac6c78c75e51e48b1a7', class: "p-1" }, index.h("div", { key: 'a3b20739ee5388d9e70bd213fe6968768dcb2877', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '877828742566a96bccde15435bdf11b1908c90f8', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '391572356302b6bdeed31ff91900d0f4d5d691bd' }, this.service.name), index.h("span", { key: '9a45b2dcd09298eeeec1ed76ca70b234696e0f3e', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '81bc190d765c0e73fede4181756abb5eec265863', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'c67d2a0d1844d39f364e94a3b582c973b4d4c972' }, this.service.total_price)), index.h("div", { key: '5b8a09805a0efed78c1f1c2bfe17ed31782b4f74' }, index.h("ir-label", { key: '1691d68bb3829d606eb904eb8c8e012c7c98c481', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'e297ea9e9b3e6de5b59b1fb0beda71a0ab2f4ec4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map