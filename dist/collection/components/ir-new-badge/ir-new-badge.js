import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrNewBadge {
    render() {
        return (h(Host, { key: 'b873cdfc1e64ebb067ecbbb5e6f372a515925cb9' }, h("span", { key: '1a463d5b8e55d70b558861ca9bfcfa187bf39a1f', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
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
