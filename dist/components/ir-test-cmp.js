import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as libExports } from './index3.js';
import { d as defineCustomElement$2 } from './ir-input-text2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const userSchema = libExports.z.object({ password: libExports.z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/) });
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
        return (h(Host, { key: '684d27401fc5a2dcbab5a9bad4283ee74204bc5d', class: "card p-4" }, h("form", { key: 'e75911d508a5f6b6c06fd37fec5a4c478f8cebb0', onSubmit: e => {
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
            } }, h("ir-input-text", { key: '220d102a3b5aace6a5e5d9ce0ff27ef1a0b15dd0', value: this.user.password, autoValidate: this.autoValidate, zod: userSchema.pick({ password: true }), wrapKey: "password", error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, type: "password", label: "Password", onTextChange: e => (this.user = Object.assign(Object.assign({}, this.user), { password: e.detail })), maxLength: 14 }), h("p", { key: '37a60a9f1f16905db4c642969e9e93ad75166f87' }, " ", this.user.password), " ", h("button", { key: 'd45bbf7ded5acf6c4be93bf5bebac45ae72cccc2', class: 'btn btn-primary' }, "Submit"))));
    }
    static get style() { return irTestCmpCss; }
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

//# sourceMappingURL=ir-test-cmp.js.map