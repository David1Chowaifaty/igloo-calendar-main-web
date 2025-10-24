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
        return (index.h("div", { key: 'cc8f39184ee4b5045441285bce59da6df3970adb', class: "p-1" }, index.h("div", { key: 'aeb296aba503e589f588f3a0660423be8939be29', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '616ec92cd4f2fb334030181ce734e624bb7662c7', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '6d6269e2e55ddc72bef40ea1356b1b0ac5d33b31' }, this.service.name), index.h("span", { key: '170bc76f039619cf2d90932c2e9de4913b72f275', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '4cb87d2d1dd47cae5f28871297f06d5e4a8c24b5', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: 'f874929372716b3d225f1be66567442f19b5a08a' }, this.service.total_price)), index.h("div", { key: '652da4819a4ca236c32fff288f297db8656e9371' }, index.h("ir-label", { key: '39964867147fc426cc2a2c898f89fab1e47f88c8', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'cced503834ea35d3c0f687185c899b1402b8b7e8', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = IrOtaServiceStyle0;

exports.ir_ota_service = IrOtaService;

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map