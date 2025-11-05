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
        return (index.h("div", { key: '5e826acfd90fad664fc9a87d94799b5423a1f133', class: "p-1" }, index.h("div", { key: 'e0ebb7efe0d0645df7922500e84595cf90f6ab8e', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'b68d34b0eb87498711815d040c09015bfb563f12', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '5569460d702e1313f53c710b69daeb6c7413c763' }, this.service.name), index.h("span", { key: 'c0abdd5bad9b96f4e48ddc1292c39046d9856d55', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '27c66ca3915cc0ddec14e78cca3bd8156d804ac6', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '793b42b35d035c7828bd097794f6e0e58811e9c6' }, this.service.total_price)), index.h("div", { key: '4a8467731af34944d02b8ca09ede4772203b1326' }, index.h("ir-label", { key: '75354d673b4356c143aa2d951e5d24f004c132fd', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '6370a5701f85fbb6710c7aec2ac82f2016f568e5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map