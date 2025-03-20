'use strict';

var index = require('./index-Dt9a74kn.js');

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";

const IrOtaService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h("div", { key: '1741f2dfb779c09c9936676b44ac3976dc29e578', class: "p-1" }, index.h("div", { key: '3dc758711e779642be432bef70d49027d8acc419', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, index.h("p", { key: '15423dcc139dbbe025fa1799e4caff12d8d3043b', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("b", { key: '6d0733e8d76b94c96ef1c13efe46a4b7dc23fa96' }, this.service.name), index.h("span", { key: 'b92a12ca5ed7e305e4db7ee91da6219048d8673a', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), index.h("span", { key: '9eb1c13c07c40ecf67007cbcc3dd29e50b0c62f6', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), index.h("b", { key: '9fc070e5fb808171bb9fc1e86016eaf18b14bca0' }, this.service.total_price)), index.h("div", { key: '94569b9633814da458c5b88a53d1c83cec3f640c' }, index.h("ir-label", { key: '3f4f0c26016b23a517d69f62cd9e5d556d77686b', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), index.h("ir-label", { key: 'ed096e7c31c3cff96dbf0613f5f48beba534e8aa', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
    }
};
IrOtaService.style = irOtaServiceCss;

exports.ir_ota_service = IrOtaService;
//# sourceMappingURL=ir-ota-service.entry.cjs.js.map

//# sourceMappingURL=ir-ota-service.cjs.entry.js.map