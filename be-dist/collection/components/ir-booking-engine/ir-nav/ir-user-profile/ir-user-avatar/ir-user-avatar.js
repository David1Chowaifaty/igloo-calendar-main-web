import app_store from "../../../../../stores/app.store";
import { checkout_store } from "../../../../../stores/checkout.store";
import { Host, h } from "@stencil/core";
export class IrUserAvatar {
    renderAvatar() {
        const { firstName, lastName } = checkout_store.userFormData;
        if (lastName && firstName) {
            return h("p", null, firstName[0].toUpperCase() + lastName[0].toUpperCase());
        }
        else if (firstName) {
            return h("p", null, firstName[0].toUpperCase() + firstName[1].toUpperCase());
        }
        else {
            return h("ir-icons", { name: "user", svgClassName: "size-4" });
        }
    }
    render() {
        if (!app_store.is_signed_in) {
            return null;
        }
        return (h(Host, null, h("div", { class: "avatar" }, this.renderAvatar())));
    }
    static get is() { return "ir-user-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-user-avatar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-user-avatar.css"]
        };
    }
}
//# sourceMappingURL=ir-user-avatar.js.map
