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
        return (index.h("div", { key: '6fc4683c184234d420bd08b057f4f8bccdcc2c76', class: "p-1" }, index.h("div", { key: '008ae14926ab9090eff1b07604ef7510619c9c0c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: 'e2120921dd1c7e9e2cfc6d44daf726cf2f7d6a35', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '866d7e8239964239337e48cb0edfd8cbb533b3e4' }, this.service.name), index.h("span", { key: 'a63e76455bbfbdec1629df881f62d40110e95649', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '94ca3246fdd4bdf4d3f401a2814298f4a80bbbce', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'cd33202bac127d54a37ffe6845abab486ab0e8bb' }, this.service.total_price)), index.h("div", { key: '6555440c6f419657946b94e61b404867e9e95c24' }, index.h("ir-label", { key: '7d04f55d4a8256e6698b8a8e72deba53d6ff04fa', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: '491e0118640c56e638beb51403f8e10c0b310973', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map