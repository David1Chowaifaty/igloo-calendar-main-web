'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-aeea0adf.js');
const index = require('./index-db8b30d9.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const userSchema = index.z.object({ password: index.z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
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
        return (index$1.h(index$1.Host, { key: '67e322e1220e07bec65be691cb22f31c2e8743bb', class: "card p-4" }, index$1.h("form", { key: '2a2df17c8efb685d6f75f4eb5bdc1a91a5efcbad', onSubmit: e => {
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
                    if (error instanceof index.ZodError) {
                        error.issues.forEach(e => {
                            er[e.path[0]] = true;
                        });
                        this.error = er;
                    }
                    console.log(error);
                }
            } }, index$1.h("ir-input-text", { key: 'c647d8c59338ae9ede1455e6ae2826a91087325d', value: this.user.password, autoValidate: this.autoValidate, zod: userSchema.pick({ password: true }), wrapKey: "password", error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, type: "password", label: "Password", onTextChange: e => (this.user = Object.assign(Object.assign({}, this.user), { password: e.detail })), maxLength: 14 }), index$1.h("p", { key: '987f7e8bdc78ea63e5a1aa205f457a6f28d8e88e' }, " ", this.user.password), " ", index$1.h("button", { key: '0ba45bda8efd56b312cf72d7d16566066a399ba0', class: 'btn btn-primary' }, "Submit"))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map