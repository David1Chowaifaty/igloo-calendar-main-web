'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h("div", { key: 'e296b1bb726baf011f333c569084fc03fb96406a', class: "p-1" }, index.h("div", { key: '1a40e84431829d39cb5cab548ff24207a7118faa', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'd784e1216882196ceaa4d6289a759bce876d7467', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '267b1a6bc120db7a260657dc333d6d7c63dfd49c' }, this.service.name), index.h("span", { key: '9e5882e6ba37611e1cf06dca7e952daff4ed1d30', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: 'd96ca5193b5ce865acaafa720315afde8660c469', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '2e04ba1a7d0166df0e36928bd85f0c4984ab8144' }, this.service.total_price)), index.h("div", { key: '9c21e8fac4d7037e3746950a7f7cc4b45a60ac63' }, index.h("ir-label", { key: '5fc4e0b4f695acadb7d5db07408ce2b62d14867f', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '94d15f72d25e1d5409bc7110a58503acfe0f7539', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map