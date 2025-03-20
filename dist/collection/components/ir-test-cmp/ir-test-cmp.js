import { Host, h } from "@stencil/core";
import { z, ZodError } from "zod";
const userSchema = z.object({ password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
export class IrTestCmp {
    constructor() {
        this.user = {
            password: '',
        };
        this.autoValidate = false;
    }
    render() {
        var _a;
        return (h(Host, { key: '2c30a32a61ef3c4b31e8f4db7ecd8108a14b3dbf', class: "card p-4" }, h("form", { key: '0952dcdeb1c98f07bade20a499eacf7d11bef406', onSubmit: e => {
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
                    if (error instanceof ZodError) {
                        error.issues.forEach(e => {
                            er[e.path[0]] = true;
                        });
                        this.error = er;
                    }
                    console.log(error);
                }
            } }, h("ir-input-text", { key: '378e186051b94b6bdacfbe03000902419580b495', value: this.user.password, autoValidate: this.autoValidate, zod: userSchema.pick({ password: true }), wrapKey: "password", error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, type: "password", label: "Password", onTextChange: e => (this.user = Object.assign(Object.assign({}, this.user), { password: e.detail })), maxLength: 14 }), h("p", { key: '343306be772197bb6dc07a67fe6dd4f4a8bb6b6a' }, " ", this.user.password), " ", h("button", { key: '15a935e160a32597febdcfaf3fa113179318c57b', class: 'btn btn-primary' }, "Submit"))));
    }
    static get is() { return "ir-test-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get states() {
        return {
            "user": {},
            "error": {},
            "autoValidate": {}
        };
    }
}
//# sourceMappingURL=ir-test-cmp.js.map
