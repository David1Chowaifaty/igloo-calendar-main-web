import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'f5dd0e2c13c8621276e26b599997f36e6a80c16a', style: { background: 'white' } }, h("ir-custom-button", { key: '0625808cc3195e0b8958631835f79ba9059c062f', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '8a9a458dadfb66212381780f2f59a4cf2f0639cf', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '8e7924e7ab2721ca59331cd8c84c1ba18fb1ad2c', style: { background: 'white' } }, h("table", { key: '714d5adc5636f1adaae73e03e8be5baf153bc33d', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '9d797220e752f6e27611b5735a9d2e90946a9729' }, "This", h("code", { key: '6ad909c572e7b57bbd0a2c8587ae458a4ba6fbcd' }, "<caption>"), "describes the table"), h("thead", { key: '3f70afb0681ae27eddb6efa7bedeb15960374d0a' }, h("tr", { key: '04a67e398e3df3d527d76f89dbbb5c272d767c8a' }, h("th", { key: '6c26f1d1882f52abbfd3a902c4eaa5bc799b21d7' }, "First column"), h("th", { key: '577feac06c8c15665bbbeed05447db79c5cff2a4' }, "Second column"), h("th", { key: '68a591c755988e205eb650bd701c757ade187998' }, "Third column"), h("th", { key: 'ca379992a06d2e5195caa7bcb5f23b1451ce6786' }, "Final column"))), h("tbody", { key: 'af954b62a3e4a67dff1f2a1552a5a52b947f87ad' }, h("tr", { key: '8d9d27812b80a4abe99c7760f51ef08ead183497' }, h("td", { key: '411b9b0670b7b69af43a8febe2c59dd72f1187cd' }, "Data"), h("td", { key: '1520258bbab28362c83a8e87b739d42be67f581b' }, "Data"), h("td", { key: '125df2e55fd0a9cf855d5d20c6568ea5f9e69757' }, "Data"), h("td", { key: 'f51900adc20adff182858a7382ec74693e3f7d79' }, "Data")), h("tr", { key: '65b8413b183fcde0adb32e2b54c5c9921f42c1bd' }, h("td", { key: 'cd9d46e1ee5d8ed7809aa2402e399dab1e0a015e' }, "Data"), h("td", { key: 'db02b7ad76946e66d428df21f1515e16b3845e6f' }, "Data"), h("td", { key: '0f818b4112fcae7c6c28058d636e97a61ece29c8' }, "Data"), h("td", { key: 'f2842fd23eaa0f803a3cc5633b724e54f432949e' }, "Data")), h("tr", { key: 'e7722a350be9c313db4e469639be16fe2dcc0f39' }, h("td", { key: 'f9909fbfe12ab7ac2416769df520c490e88f31ae' }, "Data"), h("td", { key: 'ed42bd6473457d8d2dbc447377d899a5c6c3f4d2' }, "Data"), h("td", { key: '40210f7b6b807d86e2ba94f4b5e03d1e35e36921' }, "Data"), h("td", { key: 'ee8df869526db5f0138dcfac27cbf3e02b0ba524' }, "Data")), h("tr", { key: '95ae4483bcb5cd7adf2662060656957de5d2dcf4' }, h("td", { key: '075daaf91e0f80395d2039506d3276d95c5f783e' }, "Data"), h("td", { key: '6674cf16b32f00d15569dbe04497deee6fe3d177' }, "Data"), h("td", { key: '029e306239f22a14301910e8d7936ac28018743d' }, "Data"), h("td", { key: '3f57833f71db43675564d9a0b8cecc5cd5bd4942' }, "Data")))))));
    }
    static get is() { return "ir-test2-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
}
//# sourceMappingURL=ir-test2-cmp.js.map
