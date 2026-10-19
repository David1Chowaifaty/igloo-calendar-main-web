import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '06947ebc7a1b342f8c103740bfa4ba94c87eb431' }, h("span", { key: 'ce69035f09a0240c5dfe3c6ce718069a5a8948a8', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
    }
    static get is() { return "ir-new-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-new-badge.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-new-badge.css"]
        };
    }
}
