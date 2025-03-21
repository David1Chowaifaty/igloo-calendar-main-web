import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { z, Z as ZodError } from './index3.js';
import { d as defineCustomElement$2 } from './ir-input-text2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const userSchema = z.object({ password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "user": [32],
        "error": [32],
        "autoValidate": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ir-input-text"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map