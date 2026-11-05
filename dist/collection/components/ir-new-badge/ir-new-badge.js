import { Host, h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '5ac2b5cc6a08c3d06dbe9ca07578a7417d479068' }, h("span", { key: '257a1a397bce7c439a25a4f3d893369506033702', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
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
