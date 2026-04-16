import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '43894904bf16a7f46509729447128c50aaa11b4b', style: { background: 'white' } }, h("ir-custom-button", { key: '6dc21a7af32956c054792756dc43f04278b16dca', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '96486c494edfc77c83eabfee0b6a72d49f09de1a', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '3f88874c1fdfd65ad76959fcc44de8125f9b953c', style: { background: 'white' } }, h("table", { key: '4d0666583ce5aa2c72c73e95261dcbcbfdbd7eb7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '2df7e9a92bb37a29c526ed5779c99e5519ff61d4' }, "This", h("code", { key: '70c1dd38c3dd3be87697630bdfd2fc2b21d9a3d7' }, "<caption>"), "describes the table"), h("thead", { key: '9fa778bb5f644f103a540978e7ed2a2883f7c7fe' }, h("tr", { key: '988dd1a44dc78cc9f57c88e7f5132eddee81fee8' }, h("th", { key: '9ba9a72139ace94935f3b739a528839001456e7c' }, "First column"), h("th", { key: '8eef41fba92dd9c3a5d89cd0b086840a71493b78' }, "Second column"), h("th", { key: '311980a581b2939c0acb9aa64d6dadab20d96a5e' }, "Third column"), h("th", { key: '841e9999d3ba940e776eea251c360664f04bef5b' }, "Final column"))), h("tbody", { key: '4b20bd1e4f04473c6ff058077320c4ad0396b5ca' }, h("tr", { key: '2727ca760dbebd46b9ffa2ad10d431a1f9377e92' }, h("td", { key: '92bedcd70a36d9fba831d691d61ebfdda57386e4' }, "Data"), h("td", { key: '25cd8a181d757fe375bf28eed7c4d200ebd16312' }, "Data"), h("td", { key: '3f242ccf0cb695c5f57129a078ed98af33cbf13a' }, "Data"), h("td", { key: 'a22a5d1fde0be47e2477a465a1124b90714f94dc' }, "Data")), h("tr", { key: '2e63ee79e9d9287c5a15249655763adf0d785143' }, h("td", { key: 'b1c463ea3be4e776eedba26cabbd682f4c088214' }, "Data"), h("td", { key: '5d8aabcfaa3ca5657eb1644623760c03d8fda1fe' }, "Data"), h("td", { key: '4fdbd9a5171739bdee0720142bab9db2522f3898' }, "Data"), h("td", { key: '12afb7e4b7f273695789cb153e731a9fc01e543b' }, "Data")), h("tr", { key: 'df9af7478869f88fa0435ff94d29d17ac89fc32d' }, h("td", { key: '4d77cd6dff300860841f3708856131c32ecfabd3' }, "Data"), h("td", { key: 'dc7da84c0fa281d92a78c27f1f83e4893e38b3b8' }, "Data"), h("td", { key: '6b71482f295524937ff459308fbcf57e221351a6' }, "Data"), h("td", { key: '57ed097329d9ae9c95f59bd152c6c09cae05780f' }, "Data")), h("tr", { key: 'ba4cac5c10e2de43133b7beea983768e07e1379c' }, h("td", { key: '71995e5068ddddbcf3ed4044ffbdca8023bacd33' }, "Data"), h("td", { key: '3775c080e609363065f598b2dd991e89eb3edee9' }, "Data"), h("td", { key: 'bd8484e70856eb98cefdf9814287870f0262ae19' }, "Data"), h("td", { key: 'c5468f1718a0cde39ca876a53b36819ced537513' }, "Data")))))));
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
