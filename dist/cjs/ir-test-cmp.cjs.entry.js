'use strict';

var index$1 = require('./index-Dt9a74kn.js');
var index = require('./index-CLqkDPTC.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const userSchema = index.libExports.z.object({ password: index.libExports.z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
const IrTestCmp = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.user = {
            password: '',
        };
        this.autoValidate = false;
    }
    render() {
        var _a;
        return (index$1.h(index$1.Host, { key: '684d27401fc5a2dcbab5a9bad4283ee74204bc5d', class: "card p-4" }, index$1.h("form", { key: 'e75911d508a5f6b6c06fd37fec5a4c478f8cebb0', onSubmit: e => {
                e.preventDefault();
                try {
                    this.error = null;
                    this.autoValidate = true;
                    console.log('here');
                    userSchema.parse(this.user);
                    alert('passed');
                }
                catch (error) {
                    const er = {};
                    if (error instanceof index.libExports.ZodError) {
                        error.issues.forEach(e => {
                            er[e.path[0]] = true;
                        });
                        this.error = er;
                    }
                    console.log(error);
                }
            } }, index$1.h("ir-input-text", { key: '220d102a3b5aace6a5e5d9ce0ff27ef1a0b15dd0', value: this.user.password, autoValidate: this.autoValidate, zod: userSchema.pick({ password: true }), wrapKey: "password", error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, type: "password", label: "Password", onTextChange: e => (this.user = Object.assign(Object.assign({}, this.user), { password: e.detail })), maxLength: 14 }), index$1.h("p", { key: '37a60a9f1f16905db4c642969e9e93ad75166f87' }, " ", this.user.password), " ", index$1.h("button", { key: 'd45bbf7ded5acf6c4be93bf5bebac45ae72cccc2', class: 'btn btn-primary' }, "Submit"))));
    }
};
IrTestCmp.style = irTestCmpCss;

exports.ir_test_cmp = IrTestCmp;
//# sourceMappingURL=ir-test-cmp.entry.cjs.js.map

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map