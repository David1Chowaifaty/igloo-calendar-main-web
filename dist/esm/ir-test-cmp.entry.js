import { r as registerInstance, h, H as Host } from './index-jhiFt_tX.js';
import { l as libExports } from './index-DeW5X45W.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const userSchema = libExports.z.object({ password: libExports.z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.user = {
            password: '',
        };
        this.autoValidate = false;
    }
    render() {
        var _a;
        return (h(Host, { key: '67e322e1220e07bec65be691cb22f31c2e8743bb', class: "card p-4" }, h("form", { key: '2a2df17c8efb685d6f75f4eb5bdc1a91a5efcbad', onSubmit: e => {
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
                    if (error instanceof libExports.ZodError) {
                        error.issues.forEach(e => {
                            er[e.path[0]] = true;
                        });
                        this.error = er;
                    }
                    console.log(error);
                }
            } }, h("ir-input-text", { key: 'c647d8c59338ae9ede1455e6ae2826a91087325d', value: this.user.password, autoValidate: this.autoValidate, zod: userSchema.pick({ password: true }), wrapKey: "password", error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, type: "password", label: "Password", onTextChange: e => (this.user = Object.assign(Object.assign({}, this.user), { password: e.detail })), maxLength: 14 }), h("p", { key: '987f7e8bdc78ea63e5a1aa205f457a6f28d8e88e' }, " ", this.user.password), " ", h("button", { key: '0ba45bda8efd56b312cf72d7d16566066a399ba0', class: 'btn btn-primary' }, "Submit"))));
    }
};
IrTestCmp.style = irTestCmpCss;

export { IrTestCmp as ir_test_cmp };
//# sourceMappingURL=ir-test-cmp.entry.js.map

//# sourceMappingURL=ir-test-cmp.entry.js.map