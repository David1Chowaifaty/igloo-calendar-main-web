import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '12b817797373294805758109ffa96ee5a3e84f38' }, h("span", { key: 'd1ec8244ebb19dfe6afaac42bdf2b61dd50b65c6', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
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
