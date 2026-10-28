import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '68e06eb8659743e47e0ed5431acaf49054c53bd4' }, h("span", { key: '04135ccc15531d53e62f3863a17913fbd38bfeb0', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
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
